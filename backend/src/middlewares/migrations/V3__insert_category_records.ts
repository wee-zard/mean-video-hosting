import { Category } from '../../model/mongodbModels/Category';

export const runMigration = async () => {
  const listOfDocuments = [
    new Category({
      id: '6806350ed1fbc4a94e0891d2',
      name: 'Music',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891d3',
      name: 'Film',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891d4',
      name: 'Games',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891d5',
      name: 'Vlog',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891d6',
      name: 'Technology',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891d7',
      name: 'Science',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891d8',
      name: 'Sport',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891d9',
      name: 'Fun',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891da',
      name: 'Family',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891db',
      name: 'Art',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891dc',
      name: 'Education',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891dd',
      name: 'Fashion & Style',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891de',
      name: 'Recipes',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891df',
      name: 'Health',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891e0',
      name: 'Course',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891e1',
      name: 'Interview',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891e2',
      name: 'History',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891e3',
      name: 'Handcraft',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891e4',
      name: 'Beauty',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891e5',
      name: 'Comics',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891e6',
      name: 'Animation',
    }),
    new Category({
      id: '6806350ed1fbc4a94e0891e7',
      name: 'Challenges',
    }),
  ];

  await Category.insertMany(listOfDocuments);
};
