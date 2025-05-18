# mean-video-hosting
 
## How to run the application?

### 1. Clone the repository

Use the following command to clone this repository: 

```
git clone https://github.com/wee-zard/mean-video-hosting.git
```

### 2. Start the Backend

#### 2.1. Start the mongodb database in docker

Enter into the backend folder inside the project folder. Inside this folder you can find a **compose.yml** file. Use the following command to init the mongodb database in docker.

```
docker compose up -d
```

Once this command is finished, a mongodb container will be run on port 27017, and a mongo-express container on port 8084

#### 2.2. Install the dependencies

Run the following command to install the dependencies:

```
npm install
```

#### 2.3. Start the backend

Run the following command to start the backend (it is tested under windows 11):

```
npm start
```

The above command will execute the following script inside the package.json:
`rmdir /s /q build && tsc && node build/index.js`
It removes the build folder, creates the .js files from the .ts files and runs the index.js file.

If everything is done, then the backend will run on port 8081.

### 3. Start the Frontend

#### 3.1. Install the dependencies

Run the following command to install the dependencies:

```
npm install
```

#### 3.2. Start the fronend

Enter into the frontend folder and run the following command:

```
npm start
```

If everything is done, then the frontend will run on port 4200.
