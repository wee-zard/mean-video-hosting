import { Tag } from '../../model/mongodbModels/Tag';

export const runMigration = async () => {
  const listOfDocuments = [
    new Tag({
      id: '68062bcdd1fbc4a94e0891bd',
      name: 'Trending',
      color: {
        red: 255,
        green: 0,
        blue: 0,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891be',
      name: 'Viral',
      color: {
        red: 0,
        green: 255,
        blue: 0,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891bf',
      name: 'Tech',
      color: {
        red: 0,
        green: 0,
        blue: 255,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c0',
      name: 'News',
      color: {
        red: 255,
        green: 165,
        blue: 0,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c1',
      name: 'Music',
      color: {
        red: 128,
        green: 0,
        blue: 128,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c2',
      name: 'Beauty',
      color: {
        red: 255,
        green: 192,
        blue: 203,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c3',
      name: 'Travel',
      color: {
        red: 0,
        green: 128,
        blue: 128,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c4',
      name: 'Gaming',
      color: {
        red: 75,
        green: 0,
        blue: 130,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c5',
      name: 'Science',
      color: {
        red: 192,
        green: 192,
        blue: 192,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c6',
      name: 'Dark Mode',
      color: {
        red: 0,
        green: 0,
        blue: 0,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c7',
      name: 'Vlog',
      color: {
        red: 255,
        green: 223,
        blue: 0,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c8',
      name: 'Education',
      color: {
        red: 64,
        green: 224,
        blue: 208,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891c9',
      name: 'Breaking News',
      color: {
        red: 255,
        green: 69,
        blue: 0,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891ca',
      name: 'Food',
      color: {
        red: 210,
        green: 105,
        blue: 30,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891cb',
      name: 'Fitness',
      color: {
        red: 154,
        green: 205,
        blue: 50,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891cc',
      name: 'Fashion',
      color: {
        red: 0,
        green: 206,
        blue: 209,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891cd',
      name: 'Art',
      color: {
        red: 186,
        green: 85,
        blue: 211,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891ce',
      name: 'Comedy',
      color: {
        red: 205,
        green: 133,
        blue: 63,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891cf',
      name: 'Review',
      color: {
        red: 100,
        green: 149,
        blue: 238,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891d0',
      name: 'Podcast',
      color: {
        red: 123,
        green: 104,
        blue: 237,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891d1',
      name: 'Environment',
      color: {
        red: 34,
        green: 139,
        blue: 34,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891d2',
      name: 'Dance',
      color: {
        red: 255,
        green: 105,
        blue: 108,
      },
    }),
    new Tag({
      id: '68062bcdd1fbc4a94e0891d3',
      name: 'Motivation',
      color: {
        red: 72,
        green: 61,
        blue: 139,
      },
    }),
  ];

  await Tag.insertMany(listOfDocuments);
};
