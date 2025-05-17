import { Initializer } from '../model/mongodbModels/Initializer';
import fs from 'fs';
import path from 'path';

/**
 * Path to the migration folder.
 */
const directoryPath = path.join(__dirname, './migrations');

/**
 * Fetches the list of files from the migrations folder,
 * and sort them by the version number.
 */
const getListOfMigrationFiles = (): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        reject(err);
      }

      resolve(
        files
          .map((lib) => lib.split('__'))
          .map((lib) => [lib[0].split('V')[1], lib[1]])
          .sort((a, b) => Number(a[0]) - Number(b[0]))
          .map((file) => `V${file[0]}__${file[1]}`)
      );
    });
  });
};

export const loadFlywayMigrations = () => {
  getListOfMigrationFiles().then(async (sortedFileMigrations) => {
    console.log('loading migration files!');

    for await (const fileName of sortedFileMigrations) {
      try {
        const result = await Initializer.exists({ name: fileName });

        if (!result) {
          // the file has not migrated to the db, then run the migration file.

          const migrationFile = await import(`${directoryPath}/${fileName}`);
          await migrationFile.runMigration();
          console.log(`${fileName} is processed!`);

          const initializer = new Initializer({
            name: fileName,
            finishedAt: new Date().toISOString(),
            isFinishedSuccessfully: true,
          });

          Initializer.insertOne(initializer)
            .then((_) => console.log('1 document has been inserted:', fileName))
            .catch((error) => console.log(error));
        } else {
          console.log(`Migration of file ${fileName} is skipped!`);
        }
      } catch (error) {
        console.log('unexpected error while fetching a migration file:', error);
      }
    }

    console.log('migration is finished!');
  });
};
