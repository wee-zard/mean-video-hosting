import { Comment } from '../../model/mongodbModels/Comment';

export const runMigration = async () => {
  const listOfDocuments = [
    new Comment({
      id: '680bac214f156e8dd4051e15',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:43.223Z',
      message:
        'My fiancé died on July 29th 2024. He loved Bruno mars and I am a huge lady gaga fan. He would have absolutely loved this song and its exactly how I feel about him <3 thank you.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e16',
      replyId: '680bac214f156e8dd4051e15',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:15:43.324Z',
      message: 'Im so sorry x This song is for you and your fiancé from Bruno, Gaga, & all of us x',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e17',
      replyId: '680bac214f156e8dd4051e15',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:15:43.407Z',
      message: 'So sorry for your loss. Thats super hard',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e18',
      replyId: '680bac214f156e8dd4051e15',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:15:43.501Z',
      message: 'This breaks my heart, so sorry for your loss, hope this melody reaches the sky',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e19',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:43.589Z',
      message: 'Whos on March 17',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e1a',
      replyId: '680bac214f156e8dd4051e19',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:43.679Z',
      message: 'Me',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e1b',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:15:43.765Z',
      message:
        'I missed those random artist collaborations we used to get back in the 2010s. This has those vibes and Im all here for it.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e1c',
      replyId: '680bac214f156e8dd4051e1b',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:43.963Z',
      message: 'this is very much inspired by the 70s not 90s',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e1d',
      replyId: '680bac214f156e8dd4051e1b',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:15:44.049Z',
      message: 'For real, just like Post Malone & Blake Shelton',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e1e',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:44.137Z',
      message:
        'Everytime Bruno open his mouth its spilling honey and gold  how is every song he is in so good',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e1f',
      replyId: '680bac214f156e8dd4051e1e',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:44.220Z',
      message: 'Its called Blessed',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e20',
      replyId: '680bac214f156e8dd4051e1e',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:44.308Z',
      message: 'A quality over quantity type of fella',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e21',
      replyId: '680bac214f156e8dd4051e1e',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:44.396Z',
      message: 'Bruno + LG',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e22',
      replyId: '680bac214f156e8dd4051e21',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:44.482Z',
      message:
        'I will never understand this. Like son just drop banger after banger after banger after banger',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e23',
      replyId: '680bac214f156e8dd4051e21',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:44.568Z',
      message: 'It flows through his vains from his parents',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e24',
      replyId: '680bac214f156e8dd4051e23',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:44.655Z',
      message: 'Because hes just that good!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e25',
      replyId: '680bac214f156e8dd4051e1e',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:44.741Z',
      message: 'Gaga too... Shes a gift from above. Love you Gaga, you too Bruno…',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e26',
      replyId: '680bac214f156e8dd4051e23',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:44.942Z',
      message: 'FACTS',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e27',
      replyId: '680bac214f156e8dd4051e26',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:15:45.308Z',
      message: 'Cause he can actually sing and has good taste',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e28',
      replyId: '680bac214f156e8dd4051e26',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:45.398Z',
      message:
        'Bruno at one point was the only guy in pop having an actual backing band, not just a touring one.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e29',
      replyId: '680bac214f156e8dd4051e23',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:45.482Z',
      message:
        'haha, thats true, I am addicted on Bruno Mars song, I watched his YouTube music video all the time. then one time, I told my husband and ask him if he is ok if ever I accidentally meet Bruno Mars in person and I will kiss his lips. I continued, he can kiss Madonna lips his favorite singer. Then my husband said, are you sure you can do that in person. I already see yourself running away into the shy way. he said, haha I give you money if you can do that...',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e2a',
      replyId: '680bac214f156e8dd4051e1e',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:45.570Z',
      message: 'This man is golden I would fall so in love with him his voice is angelic',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e2b',
      replyId: '680bac214f156e8dd4051e1e',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:45.656Z',
      message: 'that debt about to be cleared in .2 flat',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e2c',
      replyId: '680bac214f156e8dd4051e2b',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:45.743Z',
      message: 'I was just thinking the same thing',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e2d',
      replyId: '680bac214f156e8dd4051e2b',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:45.948Z',
      message: 'He can literally NOT create a masterpiece! He is pure musical genius',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e2e',
      replyId: '680bac214f156e8dd4051e2d',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:46.031Z',
      message: 'Hes got amazing melodies...thats all you need, then add words',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e2f',
      replyId: '680bac214f156e8dd4051e1e',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:46.120Z',
      message: 'we feel blessed!!!!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e30',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:46.203Z',
      message: 'I didnt realize how much I have missed Brunos vocal until this banger dropped',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e31',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:46.288Z',
      message: 'Whoever decided to pair these two together for a song is a genius. Thank you.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e32',
      replyId: '680bac214f156e8dd4051e31',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:46.371Z',
      message: 'Probably Bobby Campbell',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e33',
      replyId: '680bac214f156e8dd4051e31',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:46.465Z',
      message: 'OK, Im hooked and obsessed',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e34',
      replyId: '680bac214f156e8dd4051e33',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:46.550Z',
      message: 'It was Bruno himself who called her and asked her if she wanted to join the song',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e35',
      replyId: '680bac214f156e8dd4051e34',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:46.638Z',
      message:
        'They has back to back residencys in Las Vegas and when they interviewed Bruno he said he would love to do a song with Gaga, so my guess is they started it in Vegas, probly why it has the 60s Americana vibe for the video.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e36',
      replyId: '680bac214f156e8dd4051e33',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:46.728Z',
      message: 'Bruno contacted Gaga per Gaga',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e37',
      replyId: '680bac214f156e8dd4051e31',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:46.816Z',
      message: 'what a  real gentleman he was',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e38',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:47.012Z',
      message:
        'I dont think its humanly possible for Bruno to NOT make an absolute banger every time he drops',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e39',
      replyId: '680bac214f156e8dd4051e38',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:47.100Z',
      message: 'LITERALLY!! He has no bad songs',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e3a',
      replyId: '680bac214f156e8dd4051e38',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:47.189Z',
      message: 'Exactly',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e3b',
      replyId: '680bac214f156e8dd4051e38',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:47.278Z',
      message: 'Literally!! And hes STILL underrated',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e3c',
      replyId: '680bac214f156e8dd4051e3b',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:47.363Z',
      message: 'Didnt Gaga farted one time though',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e3d',
      replyId: '680bac214f156e8dd4051e3b',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:47.452Z',
      message:
        'He is literally the most mid artist. Good voice, fine performance and showmanship. But no range, with little to no artistic merit to his work. Its cookie cutter, family-friendly pop music you play at a conservative wedding.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e3e',
      replyId: '680bac214f156e8dd4051e38',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:47.542Z',
      message: 'Not a single album sounds the same though',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e3f',
      replyId: '680bac214f156e8dd4051e3d',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:47.629Z',
      message: 'conservatives listening to finesse...? Nah',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e40',
      replyId: '680bac214f156e8dd4051e38',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:47.717Z',
      message:
        'cookie cutter pop when he makes an rnb/soul album that sounds like it should be 50 years old… yeah I dont think he knows what hes on about',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e41',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:15:47.803Z',
      message:
        'Drops a banger, disappears for two years, comes back, repeat. He cant keep getting away with this',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e42',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:48.001Z',
      message:
        'LADY Gaga and BRUNO Mars Just dropped A TIMELESS Classic. The duo we didnt know we needed. we love you both.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e43',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:48.085Z',
      message: 'Sometimes letting go someone for their own happiness is another kind of love.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e44',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:48.169Z',
      message: 'i love how gaga manages to look like a new person nearly everyday',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e45',
      replyId: '680bac214f156e8dd4051e44',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:48.254Z',
      message: 'True she is so refreshing',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e46',
      replyId: '680bac214f156e8dd4051e44',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:48.338Z',
      message: 'Correct ',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e47',
      replyId: '680bac214f156e8dd4051e44',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:48.425Z',
      message: 'She looks like my 78 yo grandma in this',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e48',
      replyId: '680bac214f156e8dd4051e44',
      videoId: '68068ac9a851f22ec3099fbf',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:48.513Z',
      message: 'Healing from trauma is the key',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e49',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:48.600Z',
      message:
        'They need to do a hot ones episode where all the staff that are always behind the scenes has to sit at a table and try all the wings sauces. I think that would be pretty interesting to watch.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e4a',
      replyId: '680bac214f156e8dd4051e49',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:48.687Z',
      message: 'Id watch that.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e4b',
      replyId: '680bac214f156e8dd4051e49',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:48.776Z',
      message:
        'Oh... they are going to hate you if the producers go for that... While we the viewers are gonna love it!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e4c',
      replyId: '680bac214f156e8dd4051e49',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:48.975Z',
      message: 'Great idea!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e4d',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:49.070Z',
      message:
        'Hes so real for saying that there should be stunt awards. We may see that in future, less gooo',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e4e',
      replyId: '680bac214f156e8dd4051e4d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:49.156Z',
      message: 'We would already have em if anyone had gone to see The Fall Guy',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e4f',
      replyId: '680bac214f156e8dd4051e4d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:49.241Z',
      message: 'people have been talking about it for years its annoying that its still not added',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e50',
      replyId: '680bac214f156e8dd4051e4f',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:49.327Z',
      message: 'Nobody would watch them because stuntmen arent known.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e51',
      replyId: '680bac214f156e8dd4051e4d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:49.412Z',
      message:
        'on one hand yes, stuntman should get awards too! but i feel like it could also lead to them trying to one up eachother & maybe get hurt, by just daring to do an even more crazy stunt....',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e52',
      replyId: '680bac214f156e8dd4051e4d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:49.497Z',
      message: 'Stuntmen use to get awards in the 1970s and 1980s. They need to bring it back .',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e53',
      replyId: '680bac214f156e8dd4051e4d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:49.585Z',
      message: 'yeah fr the stunt men should get more appreciation and recognition',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e54',
      replyId: '680bac214f156e8dd4051e4d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:49.672Z',
      message:
        'There are. Several actually. Biggest one being Taurus World Stunt Awards. Issue isnt that there isnt awards or events it that people dont really care. They just want to see the pretty celebrities vs the people that work hard.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e55',
      replyId: '680bac214f156e8dd4051e4d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:15:49.772Z',
      message:
        'There both should be and should not be stunt awards. Stunt actors deserve a lot of credit for what they do, but I feel like it might ruin a lot of movies highlighting their efforts (which the stunt actors would hate because that is the essence of what they do).  So I am conflicted.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e56',
      replyId: '680bac214f156e8dd4051e4d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:49.970Z',
      message:
        'if theres anyone blocking it, its probably the celebrities that dont do their own stunt work not wanting to be known for not doing their own stunt work',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e57',
      replyId: '680bac214f156e8dd4051e54',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:50.059Z',
      message: 'Definitly',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e58',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:15:50.144Z',
      message: 'You need to have a Keanu Reeves on your show but maybe some day.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e59',
      replyId: '680bac214f156e8dd4051e58',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:15:50.234Z',
      message: 'This needs waaaaaay more likes',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e5a',
      replyId: '680bac214f156e8dd4051e58',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:50.320Z',
      message:
        'A Keanu? Does it matter which one? Id prefer Neo, I guess, John would be pretty cool, too.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e5b',
      replyId: '680bac214f156e8dd4051e5a',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:50.407Z',
      message: 'John for sure',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e5c',
      replyId: '680bac214f156e8dd4051e58',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:50.495Z',
      message: 'No john wick',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e5d',
      replyId: '680bac214f156e8dd4051e58',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:50.581Z',
      message: 'We need a Keanu asap!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e5e',
      replyId: '680bac214f156e8dd4051e5d',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:50.675Z',
      message:
        'Hes not desperate enough to do this show. No offense to Sean. Eighty percent of the guests are people I dislike.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e5f',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:50.763Z',
      message:
        'Whos putting that on their food!? Not you is the biggest power move I think Ive ever heard from you, Sean. Usually you just prop up the person in front of you, but that was S tier sass, whether intentional or not, and I greatly appreciate it',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e60',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:50.849Z',
      message: 'Bring Jim Carrey please',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e61',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:15:51.045Z',
      message: 'this is us giving sean his flowers for 10 years',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e62',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:51.128Z',
      message:
        'Kevins right about one thing man. This is the unicorn that let other horses run. What a spectacular run, Sean. Never disappointed. And doing that for 10 long years is an incredible feat. You deserve all the love and success that has come your way. Keep em coming, pal.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e63',
      replyId: '680bac214f156e8dd4051e62',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:51.211Z',
      message: 'I agree, Neil! also, I wish you love and success brotha in your endeavors buddy :)',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e64',
      replyId: '680bac214f156e8dd4051e62',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:51.299Z',
      message: 'Kevin aint no party like a Diddy party Hart',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e65',
      replyId: '680bac214f156e8dd4051e62',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:51.387Z',
      message: 'Unicorns let horses run?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e66',
      replyId: '680bac214f156e8dd4051e62',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:51.476Z',
      message: 'what a compliment !!! from a great to boot !!!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e67',
      replyId: '680bac214f156e8dd4051e62',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:51.563Z',
      message: 'Ok relax. There were plenty of other turning point moments.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e68',
      replyId: '680bac214f156e8dd4051e62',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:51.647Z',
      message: 'And 14.5 million subs…incredible',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e69',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:51.732Z',
      message:
        'Kevins episode was the 1st Hot Ones I ever watched…had me cryin laughing and Ive been hooked ever since!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e6a',
      replyId: '680bac214f156e8dd4051e69',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:51.815Z',
      message: 'Where the snap at',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e6b',
      replyId: '680bac214f156e8dd4051e6a',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:52.002Z',
      message: 'Same',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e6c',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:52.085Z',
      message: 'The side shots of Kevin swinging his legs are hilarious.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e6d',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:15:52.170Z',
      message:
        'Shout out to Sean for always thanking the crew and people around when he ask for things on the show. It shows his character in general.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e6e',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:52.254Z',
      message: 'Not him saying Kais hair is connected to his hat Im weakkkk',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e6f',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:52.341Z',
      message:
        'Kevin is the guy to say well well well, look who it is when he sees family at supermarket',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e70',
      replyId: '680bac214f156e8dd4051e6f',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:52.427Z',
      message: 'Thats No Life Shaqs! XD',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e71',
      replyId: '680bac214f156e8dd4051e6f',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:52.511Z',
      message: 'Skermz, is that you?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e72',
      replyId: '680bac214f156e8dd4051e6f',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:52.600Z',
      message: 'Theyll let anyone in here.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e73',
      replyId: '680bac214f156e8dd4051e6f',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:15:52.688Z',
      message:
        'Kevin is the guy who would see an old friend from highschool at the grocery store, talk and catch up, offer to pay for the groceries and when his card gets declined hell say you see, the way my bank account is set up…',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e74',
      replyId: '680bac214f156e8dd4051e6f',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:52.781Z',
      message: 'Would you look at this',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e75',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:52.868Z',
      message:
        'This show has lasted because of the format no doubt.  However, whats propel people to watch for a decade is the conversation Sean has with his guest.  His meticulous and articulate way of conducting his interviews is 2nd to none.  Happy 10 years, and to another decade of awesome insight and entertainment!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e76',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:53.062Z',
      message:
        'Sean has this down. Never lets the guest feel less than the host.  Drink when they do, suffer when they do, eat the ice cream when they do... an amazing host and interview, never loses focus.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e77',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:53.148Z',
      message:
        'Im glad Kev gave a shoutout to stunts people. Its crazy they dont have nomimations in prestigious awards like the Oscars for stunts. They do ridiculous physical feats to make actors look amazing. Then theres actors like Jackie Chan and Tom Cruise who do all their stunts',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e78',
      replyId: '680bac214f156e8dd4051e77',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:53.237Z',
      message: 'Yes! Some of which passed on even on SET!!!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e79',
      replyId: '680bac214f156e8dd4051e77',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:53.328Z',
      message: 'stunt doubles dont get oscar??????',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e7a',
      replyId: '680bac214f156e8dd4051e79',
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:53.413Z',
      message:
        'Nope they dont. Closest thing they did was give Jackie Chan an honorary Oscar. That was an award for his entire career, not for individual stunts or movies he was in.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e7b',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:53.499Z',
      message: 'Sean might be one of the BEST interviewers ever. Love his energy',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e7c',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:53.585Z',
      message:
        'Sean you guys have worked your butts off the past decade whoever would have thought all that hard work would lead you to having celebrities like Kevin Hart Bill Murray and Matt Damon. Congratulations you deserve it all',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e7d',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:53.669Z',
      message: 'I smell toast.....  why i love dude forever',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e7e',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:53.756Z',
      message: 'When Kevin said ooh you betta wait, I cracked up',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e7f',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc0',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:15:53.842Z',
      message:
        'Sean shooting back not you after Kevin asked whos putting it on they food made me cackle for some reason. he was quick with that response',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e80',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:54.044Z',
      message: 'Patricia, send in the next candidate.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e81',
      replyId: '680bac214f156e8dd4051e80',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:54.134Z',
      message: 'No one will notice the bodies.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e82',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:54.221Z',
      message: 'The best thesis defense is, as always, a good thesis offense.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e83',
      replyId: '680bac214f156e8dd4051e82',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:54.310Z',
      message: ' lg its a quote from Napoleon of Solitude',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e84',
      replyId: '680bac214f156e8dd4051e82',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:54.394Z',
      message: 'Or maybe the best thesis defense are the friends we made along the waaaay',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e85',
      replyId: '680bac214f156e8dd4051e84',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:54.479Z',
      message: 'Thats why people get a sword with their PHD in Finland.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e86',
      replyId: '680bac214f156e8dd4051e82',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:54.567Z',
      message: 'The son of Sun Tzu said the best student could win without defending.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e87',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:54.657Z',
      message: 'I was looking for a how to defense thesis video for my own session tomorrow lol',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e88',
      replyId: '680bac214f156e8dd4051e87',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:54.745Z',
      message: 'did everything go fine with you?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e89',
      replyId: '680bac214f156e8dd4051e87',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:54.831Z',
      message: 'Huy Huynh It seems that Stanford claimed yet another candidate',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e8a',
      replyId: '680bac214f156e8dd4051e89',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:55.029Z',
      message: 'well youd need fencing lessons',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e8b',
      replyId: '680bac214f156e8dd4051e87',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:55.124Z',
      message: 'How did it go?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e8c',
      replyId: '680bac214f156e8dd4051e8b',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:55.212Z',
      message: 'Huy Huynh oof, good luck finding armor like that within the nexst 24 hours.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e8d',
      replyId: '680bac214f156e8dd4051e88',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:55.299Z',
      message: 'Dr Huynh I presume',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e8e',
      replyId: '680bac214f156e8dd4051e89',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:55.386Z',
      message: 'Well welcome to our awkward little million people fandom',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e8f',
      replyId: '680bac214f156e8dd4051e87',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:55.472Z',
      message: 'This must have helped you',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e90',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:15:55.560Z',
      message:
        'Dang it, Matt!  You fell for one of the oldest tricks in the book!  Never accept a drink after a duel!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e91',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:55.650Z',
      message: 'And the bibliography? Enough to make women swoon and grown men weep!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e92',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:55.743Z',
      message: 'Just defended, this is exactly how it played out.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e93',
      replyId: '680bac214f156e8dd4051e92',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:55.834Z',
      message:
        'You see it was really amateur of him to not expect the professor to poison him. The real threat is if he pays off one of the squires to attack you after you have fended them off.  Not to mention the pitfall trap that they usually have after you have successfully fended off the traitorous squire. Of course this not even the end there will be others who wish to take you down after the committee. You really have to keep defending your Thesis.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e94',
      replyId: '680bac214f156e8dd4051e92',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:56.026Z',
      message:
        'Typing to us from beyond the grave are you?  Well its not that surprising.  I am dead as well as replying from the beyond the grave.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e95',
      replyId: '680bac214f156e8dd4051e92',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:56.114Z',
      message: 'He typed on his phone in his last dying throes from the poison.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e96',
      replyId: '680bac214f156e8dd4051e92',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:56.204Z',
      message: 'Didnt realize that my nephews 4th birthday party was based on a thesis defense.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e97',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:56.293Z',
      message: 'I was so close to tenure... LOL the most accurate depiction of college professors',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e98',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:56.380Z',
      message: 'Watching this in order to prepare for my own upcoming defense!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e99',
      replyId: '680bac214f156e8dd4051e98',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:56.470Z',
      message: 'Good luck soldier! I pray that all goes well for thee!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e9a',
      replyId: '680bac214f156e8dd4051e98',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:56.555Z',
      message:
        'Good luck!  I have only done a Masters, but my defense was much easier than this one... Haha',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e9b',
      replyId: '680bac214f156e8dd4051e98',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:56.642Z',
      message: 'I wouldnt take advice from this',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e9c',
      replyId: '680bac214f156e8dd4051e9b',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:56.732Z',
      message: 'or are you procrastinating...?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e9d',
      replyId: '680bac214f156e8dd4051e9b',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:56.819Z',
      message: 'how did it go',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e9e',
      replyId: '680bac214f156e8dd4051e9b',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:15:56.905Z',
      message: 'hows thesis mine is tomorrow :D although 3 years ago',
    }),
    new Comment({
      id: '680bac214f156e8dd4051e9f',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:57.101Z',
      message: 'Oh crap. I defend in two weeks. Ive never fenced in my life.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea0',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:57.189Z',
      message:
        'I like how this video has him with about 4 squires and other assistants to help put on his armor, which is a more accurate depiction of medieval knights than most supposedly serious 2-hour fantasy movies',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea1',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:57.276Z',
      message: 'In Finland they give you a sword and a top hat when you successfully defend.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea2',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:57.371Z',
      message: 'did you really think Stanford would just hand out a doctorate so easily',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea3',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:57.460Z',
      message: 'Guess Matt wasnt finished building up his resistance to iocane power. Poor soul.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea4',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:57.548Z',
      message:
        'I feel bad for Whitney, Malory, James, Stephen, and  Stacy who had to sit there the whole time -without smiling-for almost the whole sketch! This was super funny and Matt and Jason are very good at sword fighting! I was impressed!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea5',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:57.640Z',
      message: 'Then you may inquire at the pearly gate!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea6',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:57.730Z',
      message:
        'I like how their skits go from the incredulous to the ridiculous before realizing it',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea7',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:57.821Z',
      message: 'my defense is in 1.5 hours! forgot my armor!!!! LOL',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea8',
      replyId: '680bac214f156e8dd4051ea7',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:15:57.907Z',
      message: 'Seeing as its been over a year, RIP.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ea9',
      replyId: '680bac214f156e8dd4051ea7',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:58.086Z',
      message:
        'Jeremy is almost like a mustached wesley from the princess bride, As you were As you wish',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eaa',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:58.176Z',
      message: 'I finally defended my thesis yesterday, the fencing part was difficult.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eab',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:58.264Z',
      message:
        'Well, I will be ready to defend my thesis, I have a few tricks up my sleeve. Because my thesis regards Kant and Marx, they will expect me to make use of the German forms, but they will be totally unprepared for my use of... THE EASTERN STYLES!!!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eac',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:58.352Z',
      message: 'Love the way he defended his thesis and the turn of events.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ead',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:58.438Z',
      message: 'Just successfully defended a few days ago. Thank you for the preparation tips!!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eae',
      replyId: '680bac214f156e8dd4051ead',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:15:58.522Z',
      message: 'that thesis almost defended itself from being torn apart by Jason!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eaf',
      replyId: '680bac214f156e8dd4051ead',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:15:58.610Z',
      message: 'Jasons struggle to tear the paper at the end is hilarious',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb0',
      replyId: '680bac214f156e8dd4051ead',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:58.698Z',
      message:
        'Sketches like this are exactly why Matt and Jason are my favorite Studio C cast members',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb1',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:58.786Z',
      message: 'Im very impressed with Mallorys catch of that spear',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb2',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:58.871Z',
      message: 'i love that this was recommended by the head of my senior thesis director',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb3',
      replyId: '680bac214f156e8dd4051eb2',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:59.068Z',
      message: 'Most epic comedic monologue/fencing duel since The Princess Bride',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb4',
      replyId: '680bac214f156e8dd4051eb2',
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:59.156Z',
      message:
        'Very informative documentary. Only a bachelor student myself. Time to go refresh my fencing technique.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb5',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:15:59.241Z',
      message: 'I used to defend my thesis until I got an arrow in the knee.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb6',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc7',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:59.325Z',
      message: 'there aint no good skit without matt , miss you',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb7',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:59.411Z',
      message:
        'He wasnt trying to fool them. Many of us know how its done. When its done as well as Paul does it, that doesnt matter. At some point you stop looking for the slight of hand you know is going on and just enjoy the performance.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb8',
      replyId: '680bac214f156e8dd4051eb7',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:59.498Z',
      message:
        'CrimFerret exactly, they were pretty obvious but by the time the big ones arrived I was like whoa ok who cares then the Coke whoa and the balls whoa',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eb9',
      replyId: '680bac214f156e8dd4051eb7',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:59.584Z',
      message:
        'So true Crim-Ferret, enjoy the first time, but then go back and replay with the pause.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eba',
      replyId: '680bac214f156e8dd4051eb7',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:15:59.670Z',
      message:
        'Even if you know the sleight of hand, he can go so quickly, you lose track of where everything is. Took me three times to follow it all from start to finish, but I still miss the pile of red balls being loaded and the can being loaded. So smoothly done.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ebb',
      replyId: '680bac214f156e8dd4051eb7',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:15:59.761Z',
      message:
        'I learned a lot of the sleights out of a kids magic. I can do a decent version of cup and balls, better then the standard one but nothing special any magician would see how its done even a fellow amateur, but seeing it done so well and with the addition of sound is what elevates a trick to an art. Its the difference between a kid whos had a couple years of piano lessons and a concert pianist whos preformed for years.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ebc',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:15:59.848Z',
      message:
        'My favorite park of the show is the sense of respect and admiration between professionals.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ebd',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:00.040Z',
      message:
        'This is very advanced sleight of hand and the way he performed it was just jaw dropping. And talking about his dad while doing it was just amazing',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ebe',
      replyId: '680bac214f156e8dd4051ebd',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:00.130Z',
      message: 'Leven us yes, magic is always better when a story is involved too',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ebf',
      replyId: '680bac214f156e8dd4051ebd',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:16:00.218Z',
      message: 'it was so peaceful and enjoyable!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec0',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:00.305Z',
      message: 'He was there to perform for them, not to fool them.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec1',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:00.392Z',
      message:
        'What strikes me as being so brilliant about his performance is the rhythm and cadences of the tricks. Its like watching a firework show.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec2',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:16:00.478Z',
      message:
        'I absolutely love it how he doesnt go onto the show to fool them he goes on there to show them such a simplistic trick that has been adored for centuries and add such a beautiful spin its really amazing to see, and its so beautiful.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec3',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:00.562Z',
      message:
        'Even as a non-magician I kind of know how he does it and I kind of can see him do it at times, but hes so smooth in doing it, that it doesnt matter! If you dont understand the trick, youre impressed because its a mystery. If you understand thetrick, youre impressed because you cant spot it. If you can spot the trick, youre still impressed because of the utter skill it takes to do it.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec4',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:00.647Z',
      message:
        'Congrats on being such a classy and entertaining guy, Paul. Your performances are wonderful.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec5',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:00.732Z',
      message:
        'As a reasonable normal person who understands magic is best left in films and fantasy. I understand this is a trick. I rationally know this man is not summoning things out of thin air. I am glad I know this. Because what I am seeing is giving me a hard time of holding true to what I know. It is a trick... but if this guy did this in medieval days I would worship him as the second coming of Christ.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec6',
      replyId: '680bac214f156e8dd4051ec5',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:00.818Z',
      message: 'Aaron Torres You also havent seen Christ do any of those things…',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec7',
      replyId: '680bac214f156e8dd4051ec5',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:00.904Z',
      message:
        'I saw a unicorn the other day. It was amazing. Ill write about it in a book some day for others to read, for posterity.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec8',
      replyId: '680bac214f156e8dd4051ec5',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:01.104Z',
      message:
        'People are always so hard on the poor old medieval folk. Im pretty sure magic tricks were a common form of entertainment back then same as today',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ec9',
      replyId: '680bac214f156e8dd4051ec8',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:01.190Z',
      message: 'Its no wonder he cant read its just a joke.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eca',
      replyId: '680bac214f156e8dd4051ec8',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:01.277Z',
      message:
        'Ralath Aka Defiant But in reality he wouldve been stoned to death in Medieval times. Thats how religion do.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ecb',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:01.373Z',
      message:
        'Recently watched a video that broke down a trick that was very similar to this; for a while I was with you and figured I knew how you did the trick. Then you started rapid firing on pulling balls out of the cups, each of various sizes and then a coke can. Just when I thought I had the trick figured out, you blow my mind again!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ecc',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:01.460Z',
      message:
        'You are probably one of the greatest minds in tricks, thank you for all of your magical performances.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ecd',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:01.546Z',
      message:
        'This is how spectacular magic is done. Perfectly elegant flow, while looking totally relaxed yet constantly ramping up the wow factor. Standing ovation Sir!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ece',
      replyId: '680bac214f156e8dd4051ecd',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:01.638Z',
      message:
        'You know a magician is good when you can see exactly how the trick is done, yet you still pay for them to perform it for you.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ecf',
      replyId: '680bac214f156e8dd4051ecd',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:01.723Z',
      message: 'Well that was amazing.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed0',
      replyId: '680bac214f156e8dd4051ecd',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:01.812Z',
      message:
        'I love Paul Gertner more and more every time I see him perform. What a class act he is. Hes a true showman.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed1',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:01.900Z',
      message:
        'Watching Paul Gertner performing a trick is like watching a solid movie for the 10th time; you know what happens but you watch it til the end due to respect.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed2',
      replyId: '680bac214f156e8dd4051ed1',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:02.088Z',
      message:
        'I love to see how creative minds like Paul Gertners can bring something new even to the oldest trick in magic.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed3',
      replyId: '680bac214f156e8dd4051ed1',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:02.174Z',
      message:
        'Love how purely excited he was to show Penn and Teller. Someone who really enjoys his trade',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed4',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:02.262Z',
      message: 'This is one of my absolute favorite acts. Paul delivers it spectacularly.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed5',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:02.346Z',
      message: 'Allisons expression when she was asked to guess... priceless!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed6',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:16:02.431Z',
      message:
        'I can see the palm up from the lap with the largest ball... but then I totally lose track of everything when it comes to the coke and the sponge balls. Very nice work Paul.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed7',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:02.519Z',
      message:
        'I need Paul to show me magic tricks and tell me stories while I sit by the fire and sip hot coco. I miss my Gramps.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed8',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:02.603Z',
      message:
        'Hello Paul. You probably already know it but your version of the cups and balls is the best ever. Greetings from Argentina',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ed9',
      replyId: '680bac214f156e8dd4051ed8',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:16:02.689Z',
      message:
        'I mean, when youve seen cups and balls for a few times, you know how its done, but you know what? I still love seeing it. It makes the charm and wit all the more important and he just does it so well.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eda',
      replyId: '680bac214f156e8dd4051ed8',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:02.776Z',
      message:
        'Just the epitome of great magic performed flawlessly with an excellent, classy, yet unpretentious patter. Pauls ability to infuse so much of his own personality and sentiment into such a ubiquitous routine cannot be understated!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051edb',
      replyId: '680bac214f156e8dd4051ed9',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:02.863Z',
      message:
        'i know how most of this is done, but i enjoy the presentation so much i still come back just to watch the awesome showmanship.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051edc',
      replyId: '680bac214f156e8dd4051edb',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:02.952Z',
      message:
        'There is something about these old classics that gets the best reactions from the audience. This partial familiarity of how the trick works creates ths uncanny valley where an avarage spectator can be fooled and actually feel fooled, not cheated.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051edd',
      replyId: '680bac214f156e8dd4051edb',
      videoId: '68068ac9a851f22ec3099fc5',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:03.149Z',
      message:
        'Cups and balls is so great because i feel like i should be able to rewind and catch you doing stuff, but every time i try, i come up short. I love watching you work!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ede',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:03.237Z',
      message:
        'This skit was always one of my favorites. I always wondered if they used some sort of external mechanism for the traps. I know there is no real threat because Penn has gone on record to say they feel it is morally wrong to do something truly dangerous on stage.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051edf',
      replyId: '680bac214f156e8dd4051ede',
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:16:03.322Z',
      message:
        'Of course, pretty sure Teller secures the bear trap when he lifts it towards the audience and then arms it when grabbing the fake hand.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee0',
      replyId: '680bac214f156e8dd4051ede',
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:03.408Z',
      message:
        'more importantly the traps will all be far lighter than they look and the springs will be far lighter than they seem hence any mistake wouldnt result in serious injury. Quite possibly the sounds of the traps snapping are enhanced one way or another to add to the illusion too.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee1',
      replyId: '680bac214f156e8dd4051ede',
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:03.496Z',
      message:
        'those are real traps and the springs havent been altered. The trick to triggering a trap is you have to put a certain amount of weight on bait arm to activate it. So a trap for a mouse is going to require less than an ounce because the average mouse weighs between 20 and 35 grams. Thats why we can set it off with the tap of a finger.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee2',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:03.583Z',
      message:
        'The first time I saw this, I genuinely thought it was weird that Penn was subjecting his partner to setting and triggering all of these assorted animal traps without so much as an extra hand.  But, when you listen closely to the actual narrative, Penn never expressly states that HE was the King of Animal Traps.  In this skit, hes acting as the Narrator of Tellers tale.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee3',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:03.670Z',
      message:
        'Penn once said the difference between magic and juggling is that in magic you say youre going to do something then dont, but in juggling you say youre going to do something and you do. I think this routine is mostly juggling, in that regard.  Its just Teller doing what it seems like hes doing.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee4',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:16:03.755Z',
      message: 'How do these guys always make the most beautiful magic ever?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee5',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:16:03.844Z',
      message: 'Amazing bit!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee6',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:03.932Z',
      message: 'God, that made me jump!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee7',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:04.130Z',
      message: 'What is the trick?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee8',
      replyId: '680bac214f156e8dd4051ee7',
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:04.218Z',
      message: 'well not getting fingers cut off by animal traps is definitely part of it',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ee9',
      replyId: '680bac214f156e8dd4051ee7',
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:04.306Z',
      message:
        'Look closely at through where is Teller putting his hands. he is never in actual danger. He always sets the trap off without any part of his arm inside it. He always sets it off by going behind the two jaws of the trap. That is the trick. Still very impressive performance.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eea',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:04.392Z',
      message: 'Not at all interesting',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eeb',
      replyId: '680bac214f156e8dd4051eea',
      videoId: '68068ac9a851f22ec3099fc6',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:04.478Z',
      message: 'Ok dont watch it then',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eec',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:04.565Z',
      message: 'Cop told him hes not going to arrest him and he throws a tantrum smh',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eed',
      replyId: '680bac214f156e8dd4051eec',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:04.655Z',
      message:
        'i have a feeling thats why the judge gave him 12 months, they could tell he has zero remorse',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eee',
      replyId: '680bac214f156e8dd4051eec',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:04.737Z',
      message:
        'Of course... he was told he couldnt have or do something for the first time in his life.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eef',
      replyId: '680bac214f156e8dd4051eec',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:04.828Z',
      message:
        'I bet he thought he could get the gun to hide it lol not the brightest guy, this one',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef0',
      replyId: '680bac214f156e8dd4051eef',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:04.916Z',
      message:
        'Bro they let me go once and I have never seen them again, I learned from my mistake',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef1',
      replyId: '680bac214f156e8dd4051eef',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:05.116Z',
      message: 'Right? Imagine if he was actually gonna be arrested from the jump',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef2',
      replyId: '680bac214f156e8dd4051eec',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:16:05.204Z',
      message:
        'He acts like such a spoiled, petulant toddler during this ENTIRE interaction. Im glad he got sentenced to twelve months. Hopefully hell do some VERY much-needed growing up while hes in jail.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef3',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:05.290Z',
      message: 'This might be the chillest cop alive',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef4',
      replyId: '680bac214f156e8dd4051ef3',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:05.378Z',
      message:
        'Kinda amazing to see a cop like that these days considering what they put up with everyday.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef5',
      replyId: '680bac214f156e8dd4051ef3',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:05.464Z',
      message:
        'Quit doing dumb crap to get on their radar.  Theyre doing a job. You should be smarter next time',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef6',
      replyId: '680bac214f156e8dd4051ef3',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:05.550Z',
      message:
        'Way to chill and coddling way too damn much!!! How the hell are they supposed to learn a lesson!?!?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef7',
      replyId: '680bac214f156e8dd4051ef3',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:05.636Z',
      message:
        'A lot of the older cops in Washington Ive ran into have been super nice n chill with me at least in king county',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef8',
      replyId: '680bac214f156e8dd4051ef3',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:05.724Z',
      message: 'bro what state is this in ahhaha.. i want to live in that town.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051ef9',
      replyId: '680bac214f156e8dd4051ef3',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:05.813Z',
      message: 'his comment wasnt literal.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051efa',
      replyId: '680bac214f156e8dd4051ef3',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:05.899Z',
      message:
        'Its in Washington, dude doesnt want to violate someones safe space and get sent to prison',
    }),
    new Comment({
      id: '680bac214f156e8dd4051efb',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:05.984Z',
      message: 'That cop sounds like he gets thank you cards from people he arrests.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051efc',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.182Z',
      message: 'Dude has a good brother and mom hes lucky that the  officer is a good guy.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051efd',
      replyId: '680bac214f156e8dd4051efc',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.267Z',
      message:
        'Mom is refusing to cooperate with police and protecting her delinquent son, but sure- mom of the year, I guess',
    }),
    new Comment({
      id: '680bac214f156e8dd4051efe',
      replyId: '680bac214f156e8dd4051efc',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.354Z',
      message:
        'At least his big brother has some common sense & dignity, even if he clearly doesnt.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051eff',
      replyId: '680bac214f156e8dd4051efc',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.446Z',
      message: 'boot licker attitude. She was  protecting her son with her rights',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f00',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.529Z',
      message: 'He doesnt even have a number.......He wont even answer my calls!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f01',
      replyId: '680bac214f156e8dd4051f00',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.616Z',
      message:
        'Funny, isnt it? I wonder if it didnt instantly occur to the Officer or there was some other reason he didnt say to the dude... How could he answer your calls if he doesnt have a phone number?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f02',
      replyId: '680bac214f156e8dd4051f00',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:06.714Z',
      message: 'Probably cop understood that crap but was playing nice to get more info.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f03',
      replyId: '680bac214f156e8dd4051f02',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.800Z',
      message: 'I noticed that as well.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f04',
      replyId: '680bac214f156e8dd4051f02',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.889Z',
      message: 'I caught that too',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f05',
      replyId: '680bac214f156e8dd4051f00',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:06.974Z',
      message:
        'Hes obviously lying. He almost slipped when he said, My dad and my… and stopped short.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f06',
      replyId: '680bac214f156e8dd4051f00',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:07.169Z',
      message:
        'Well he can get phone calls via Wifi he probably means he doesnt have actual phone service',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f07',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:07.255Z',
      message: 'Im sorry youre having a bad day. You can hear the sincerity.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f08',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:07.344Z',
      message: 'That older brother was so chilled, and spoke with him very respectful',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f09',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:07.432Z',
      message:
        'Give big props to the brother of telling him right and at the same time not trying to disrespect him',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f0a',
      replyId: '680bac214f156e8dd4051f09',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:07.518Z',
      message: 'He sounds like he knows all too well his bro is off the rails.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f0b',
      replyId: '680bac214f156e8dd4051f09',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:16:07.606Z',
      message:
        'It was really interesting to see that after the first encounter with the brother. When he said the guy didnt have a phone and that he didnt know this and that, I figured he was lying to cover for his roommate.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f0c',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:07.697Z',
      message: 'Its so weird that he looks exactly what Id expect a Socko to look like.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f0d',
      replyId: '680bac214f156e8dd4051f0c',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:07.784Z',
      message:
        'Theyre more than likely Pacific Islanders. Possibly Samoan. Samoans are very very family-oriented and very respectful of the elderly as well as their mothers and fathers.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f0e',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:07.888Z',
      message:
        'Based off how the brother acted and told him to respect the cop, hes probably lucky his dad wasnt home.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f0f',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:07.974Z',
      message: 'This cop was the nicest cop i have seen',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f10',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:08.165Z',
      message: '12 months in prison, hope thats enough time to fix that anger problem.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f11',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:08.254Z',
      message: 'He pulled a flint lock out of a ukulele bag. Sounds like a real gangster',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f12',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:08.344Z',
      message: 'Best Buy must have pushed too hard on selling him  the extended warranty',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f13',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:08.432Z',
      message: 'Bro look like one of those little homie characters that the $25 cent machines had',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f14',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:08.530Z',
      message:
        'As a citizen, just sayin we need more officers like this one. His frankness, his decorum with everyone involved exhibited an astute assessment and regard of the individuals as well as the general welfare of public safety. An asset to his badge and the community he serves.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f15',
      replyId: '680bac214f156e8dd4051f14',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:08.617Z',
      message: 'He was way too nice and apologized he felt that way',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f16',
      replyId: '680bac214f156e8dd4051f14',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:08.706Z',
      message: 'Amen',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f17',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:08.792Z',
      message:
        'I also  like how the older brother was speaking to the suspect. And no crazy family stuff. Real smooth.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f18',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:08.880Z',
      message: 'Dude is a giant 5 year old',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f19',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:08.967Z',
      message: 'Talk about ungrateful! Gave him a break & the punk kid runs his mouth. Wow!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f1a',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:09.153Z',
      message: 'Wow. That went more smoothly than I would have expected.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f1b',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:09.244Z',
      message:
        'Ive seen so many of these where they get off with a slap on the wrist. When I see one where they get actual consequences, it shocks me.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f1c',
      replyId: '680bac214f156e8dd4051f1b',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:09.330Z',
      message: 'It should be the norm, not shocking!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f1d',
      replyId: '680bac214f156e8dd4051f1b',
      videoId: '68068ac9a851f22ec3099fc4',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:09.414Z',
      message: 'The cop was chilled out...but not the judge',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f1e',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:09.501Z',
      message: 'the fact that he still called her babe is heartbreaking.. Shes a monster for this',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f1f',
      replyId: '680bac214f156e8dd4051f1e',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:09.587Z',
      message: 'Yep',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f20',
      replyId: '680bac214f156e8dd4051f1e',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:16:09.672Z',
      message:
        'Jalapeno whether he cheated or not, nobody deserves to get punished like that.. And she could just break up with him when he was violent but she stayed and violated him too so we cant argue she is a monster indeed..',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f21',
      replyId: '680bac214f156e8dd4051f1e',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891af',
        userName: 'oliviawood',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/06/25/09/27/blue-tit-7283187_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:09.757Z',
      message: 'literally dude',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f22',
      replyId: '680bac214f156e8dd4051f1e',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:09.844Z',
      message: 'whats wrong with you..',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f23',
      replyId: '680bac214f156e8dd4051f1e',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:09.930Z',
      message:
        'i dont think so. the first part, im not saying i dont think shes a monster. i dont think him callin her babe while hes asking for something is an adequate representation of anything. let me explain before you end my life electronically & believe im just as evil as her. ',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f24',
      replyId: '680bac214f156e8dd4051f1e',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:10.018Z',
      message: 'Thank you',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f25',
      replyId: '680bac214f156e8dd4051f24',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:10.204Z',
      message: 'What did they say I dont see it?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f26',
      replyId: '680bac214f156e8dd4051f24',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:10.290Z',
      message:
        'I think they said that George deserved it because Sarah said thats what you get for cheating on me or something',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f27',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:10.380Z',
      message:
        'The fact Sarah had no remorse, like not even an inkling of regret is honestly so scary.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f28',
      replyId: '680bac214f156e8dd4051f27',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:10.465Z',
      message: 'She is definitely a psychopath.... ',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f29',
      replyId: '680bac214f156e8dd4051f27',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:10.552Z',
      message:
        'agree... do we know if it was 1st degree or 2nd degree? Was it premeditated? Or  was she too drunk that she doesnt remember.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f2a',
      replyId: '680bac214f156e8dd4051f27',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:10.647Z',
      message: 'RR  or a sociopath for sure. And the alcohol..  holy sluuuurrrrr…',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f2b',
      replyId: '680bac214f156e8dd4051f27',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:10.736Z',
      message: 'Didnt even fake it!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f2c',
      replyId: '680bac214f156e8dd4051f29',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:10.822Z',
      message: 'Sarah was charged with 2nd degree murder.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f2d',
      replyId: '680bac214f156e8dd4051f27',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:10.913Z',
      message: 'Its scary what love can do too you if you start to hatte',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f2e',
      replyId: '680bac214f156e8dd4051f29',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:11.002Z',
      message: 'He used to abuse her',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f2f',
      replyId: '680bac214f156e8dd4051f27',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:11.199Z',
      message:
        'Exactly I dont think she intended or thought of the consequences of her actions but the fact she cared more about her innocence than his life... Shame',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f30',
      replyId: '680bac214f156e8dd4051f2d',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:11.288Z',
      message: 'doesnt justify anything',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f31',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:11.379Z',
      message:
        'People usually dont when its NOT an accident.... no one believes she actually fell asleep and if so she did it waiting for him to pass away.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f32',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:11.467Z',
      message:
        'the fact that she said that she couldnt sleep the night after he was found, but allegedly could sleep the day she left him to die 💀 crazy levels of audacity',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f33',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:11.552Z',
      message:
        'her changing the story of them calling her the blue eyed white devil to blue eyed white dragon is possibly one of the funniest things Ive heard in a while omg',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f34',
      replyId: '680bac214f156e8dd4051f33',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:11.640Z',
      message: 'A Yu-Gi-Oh reference was the last thing I was expecting',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f35',
      replyId: '680bac214f156e8dd4051f34',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:11.724Z',
      message:
        'BRO I WAS NOT EVEN PAYING ATTENTION, I HEAR BLU EEYES WHITE DRAGON FROM A TRUE CRIME IM DYING',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f36',
      replyId: '680bac214f156e8dd4051f33',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:11.809Z',
      message: 'Lmao frr aint nobody ever called her that',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f37',
      replyId: '680bac214f156e8dd4051f33',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:11.897Z',
      message: 'I noticed that too!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f38',
      replyId: '680bac214f156e8dd4051f33',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:11.984Z',
      message: 'omfg i just noticed this LMFAOO WHAT',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f39',
      replyId: '680bac214f156e8dd4051f33',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:12.171Z',
      message: 'She was not in the mood to duel with his family',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f3a',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:12.306Z',
      message:
        'I remember us as kids stuffing each other in suitcases but leaving a bit of a crack open, even as KIDS we knew better and we were paranoid of hurting each other, I always knew Id never be able to live with myself if I killed someone, it was the scariest feeling.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f3b',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:12.394Z',
      message:
        'The ex-husbands actions say a lot. Like, he just knows, Welp, shes finally gone too far. And he just knows that he doesnt even need to check, hes just going to save himself from as much trauma as possible and minimize his involvement.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f3c',
      replyId: '680bac214f156e8dd4051f3b',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:12.480Z',
      message:
        'and the fact that he waited. He was definitely gonna call the cops if she didnt, but was hoping he didnt have to be fully involved for the sake of his kid.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f3d',
      replyId: '680bac214f156e8dd4051f3b',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:12.565Z',
      message: 'Yes! That told us all we needed to know.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f3e',
      replyId: '680bac214f156e8dd4051f3b',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:12.652Z',
      message:
        'Im glad this kid had at least one responsible parent. Im glad the father got that kid away from his mom and kept a good head on his shoulders to be there to take care of him.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f3f',
      replyId: '680bac214f156e8dd4051f3b',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:12.738Z',
      message: 'Yeahhh a heavy burden released from his shoulders right',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f40',
      replyId: '680bac214f156e8dd4051f3e',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:12.825Z',
      message: 'completely agree so glad this kid didnt end up in the system',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f41',
      replyId: '680bac214f156e8dd4051f3b',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:12.914Z',
      message:
        'Also people usually turn to the ex or former spouse and get accusatory saying it was done out of retaliation or whatnot, people automatically assume money is involved or the ex did it, Thats another possible reason why he limited himself in it, He didnt want her to turn the blame on him.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f42',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:12.997Z',
      message:
        'Hes old enough to know whats going on but too young to know its not his fault broke my heart',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f43',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b2',
        userName: 'robertwilson',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:13.192Z',
      message: 'If Sarah had 50 things in her mind - theyd all just be about Sarah.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f44',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:16:13.285Z',
      message:
        'Youre even filming one during a wedding trip?? Youre unstoppable and we love that about you!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f45',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:13.371Z',
      message:
        'My heart started beating so fast while watching the video… Him helplessly repeating the words „Sarah and „I cant breath was so heartbreaking. The way Sarah kept laughing was so inhumane, this case is disgusting!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f46',
      replyId: '680bac214f156e8dd4051f45',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:13.456Z',
      message: 'its so sickening, it makes my stomach turn. shes truly a monster.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f47',
      replyId: '680bac214f156e8dd4051f45',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:13.544Z',
      message: 'Same. Its one of the most panic inducing things Ive ever seen/heard',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f48',
      replyId: '680bac214f156e8dd4051f45',
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ae',
        userName: 'davidmartin',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png',
      },
      lastModification: '2025-04-01T18:16:13.630Z',
      message: 'I couldnt hear it again and again so I fast forwarded',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f49',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:13.718Z',
      message:
        'Im honestly shocked that that lady actually thought she will get away with it!! With the recording and everything! Also my heart absolutely breaks for George! I cant imagine the panic, the fear, the helplessness',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f4a',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc3',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:13.805Z',
      message:
        'Thank you for calling out her narcissism. No one is saying all people with narcissism are evil. But its important to note the role hers played in this case',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f4b',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:16:13.891Z',
      message:
        'The podcast episodes in here are simply the best. We look forward to seeing more episodes like this.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f4c',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891ac',
        userName: 'michaelhall',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295399_1280.png',
      },
      lastModification: '2025-04-01T18:16:13.977Z',
      message:
        'That wasnt a dream. She was there and it sounds like she was a willing participant in the cover up.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f4d',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:14.062Z',
      message:
        'Podcasts are great for listening to but they dont allow the listener to see who the victims are or even the murderers.  It is always an honor to have a mental picture of the victim, its for public awareness to know what the dangerous criminals look like.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f4e',
      replyId: '680bac214f156e8dd4051f4d',
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:14.260Z',
      message:
        'I love podcasts, but I can understand what you mean (I usually look up the case online later). Its nice to have something to listen to during mundane tasks and commuting. If you follow the podcaster(s), theyll sometimes upload images and include further research links.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f4f',
      replyId: '680bac214f156e8dd4051f4d',
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:14.346Z',
      message:
        'Agreeing is great so thanks for that but the unsolicited advice just shows you think most people are ignorant.  Ive been on the Tubes for 16 years so I know how it works, one must research more deeply into everything were told on this platform if the truth is desired.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f50',
      replyId: '680bac214f156e8dd4051f4f',
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:14.430Z',
      message:
        'Wow, I meant no disrespect. Most people in my circle dont listen to podcasts so was just trying to be helpful. Seems that assumptions were made on your part about me as well. Good day to you.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f51',
      replyId: '680bac214f156e8dd4051f4f',
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:14.516Z',
      message:
        'Sometimes truth is hard to accept.  When you assume that others dont know how to find photos expect a least some resistance.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f52',
      replyId: '680bac214f156e8dd4051f4d',
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:14.604Z',
      message:
        'Thats pretty remarkable timing on your part in giving up once the other OP has finally muted your profile... thats just  truly amazing imo',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f53',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:14.691Z',
      message:
        'They should have checked for fingerprints or footprints around the bodies. All in all, these podcasts are decent enough to spend hours listening to.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f54',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:14.779Z',
      message: 'I liked the outcome and story. Ive heard of this story before it was solved',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f55',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:14.868Z',
      message: 'Ive heard this before. Very sad Rest In Peace. Blessings Be.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f56',
      replyId: '680bac214f156e8dd4051f55',
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:14.955Z',
      message: 'Podcasts are nice, but I dont connect the way I do with videos.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f57',
      replyId: '680bac214f156e8dd4051f55',
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b8',
        userName: 'danieljohnson',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
      },
      lastModification: '2025-04-01T18:16:15.040Z',
      message:
        'I just got a notification that one of the co founders of Ben and Jerrys ice cream has become a police officer.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f58',
      replyId: '680bac214f156e8dd4051f55',
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:15.234Z',
      message:
        'Theyve should have done another DNA test with her mother as well so just in case his out house lawyer could have contested the test.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f59',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:15.320Z',
      message: 'Danny Glover is no Morgan Freeman.  Nope.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f5a',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc2',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:15.408Z',
      message: 'Waste of time....',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f5b',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:15.499Z',
      message: 'bro switched seats',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f5c',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:15.585Z',
      message: '12 years for killing that little girl . . . unbelievable.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f5d',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:15.670Z',
      message: 'This guy is the antithesis of personal accountability and responsibility lol.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f5e',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b3',
        userName: 'emilydavis',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/07/29/00/57/photographer-2550378_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:15.761Z',
      message:
        'Other than the second story, what was tragic about any of the other ones? They just seemed to be a bunch of people that cant follow the rules.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f5f',
      replyId: '680bac214f156e8dd4051f5e',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:15.848Z',
      message: 'Maybe tragic ignorance of the law lol',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f60',
      replyId: '680bac214f156e8dd4051f5e',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:15.935Z',
      message: 'This particular channel is like that.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f61',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b0',
        userName: 'mark23',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2022/12/03/11/11/christmas-picture-7632475_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:16.019Z',
      message: 'Dont try digging yourself out of a hole',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f62',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891a7',
        userName: 'emily_smith',
        profilePicturePath:
          'https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:16.213Z',
      message:
        'I feel bad for Judge Middleton. He shows up regularly on this show, but only when hes dealing with Sov Cits. Dude needs a break from the crazies.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f63',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:16.300Z',
      message: 'Mr. Butler has NO respect for black women with authority..',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f64',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:16.385Z',
      message:
        '7 year old girl wiped from the planet and the most time under the law is 20 some years? Our justice system is cooked',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f65',
      replyId: '680bac214f156e8dd4051f64',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891a8',
        userName: 'tom_jones',
        profilePicturePath:
          'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      lastModification: '2025-04-01T18:16:16.471Z',
      message:
        'That fool got 12! With time served. And the other racer got 3 yrs!!!! System Fuqin cooked',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f66',
      replyId: '680bac214f156e8dd4051f64',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b6',
        userName: 'jamesbrown',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:16.554Z',
      message:
        'Other racer got 3 years of PROBATION!!!  That dude was just as guilty as the guy who killed that poor little 7 year-old!',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f67',
      replyId: '680bac214f156e8dd4051f64',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:16.645Z',
      message: 'You should take a look at the UK system. Even worse.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f68',
      replyId: '680bac214f156e8dd4051f64',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b7',
        userName: 'lucywhite',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2024/05/24/08/52/birds-8784588_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:16.731Z',
      message:
        'I was just trying to have fun with my friend and didnt mean to hurt nobody but you did hurt somebody, so you should face serious time',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f69',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:16.818Z',
      message: 'The right to travel was established when there was no such thing as an automobile.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f6a',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b9',
        userName: 'oliviaclark',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/23/06/54/chicks-8782391_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:16.904Z',
      message: 'I bet the judges must hate having a zoom courtroom hearings as much as I do',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f6b',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:16.991Z',
      message: 'No more plea deals, no more time served, guilty as charged',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f6c',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:17.081Z',
      message: 'Who did Shaggy assault? Scooby?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f6d',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b5',
        userName: 'annamartin',
        profilePicturePath: 'https://cdn.pixabay.com/photo/2021/09/02/20/18/boat-6594343_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:17.281Z',
      message: 'The first guy better be a good boy. That DA is going to get him for sure.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f6e',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891a6',
        userName: 'johndoe_92',
        profilePicturePath: 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg',
      },
      lastModification: '2025-04-01T18:16:17.368Z',
      message: 'I notice a trend',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f6f',
      replyId: '680bac214f156e8dd4051f6e',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b1',
        userName: 'sarahjane',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2018/03/13/16/17/camera-3222950_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:17.456Z',
      message: 'That guy is just going to do the time and be happy done lol',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f70',
      replyId: '680bac214f156e8dd4051f6e',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:17.544Z',
      message:
        'In Milwaukee, those young adult dont have much to do, especially in the North side. This is no excuse. Racing in Milw/414 is soooooo common. Either the police will have to hire more street cops, which the community dont want, or there will have to be a public extreme case to caught it to stop.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f71',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:17.631Z',
      message:
        'People keep talking about how the legal system is unfair against blacks, but what I saw here was a bunchnof coddling, disrespectful behavior and light sentencing.',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f72',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891b4',
        userName: 'tomsmith',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2017/12/05/09/09/venice-2998893_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:17.721Z',
      message: '12 years i feel thats not long enough. He took the life of a 7 year old',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f73',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891ab',
        userName: 'lisataylor',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2020/03/11/15/16/couple-4922442_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:17.804Z',
      message:
        'Love His Honor Judge Perkins!  We need more judges on the bench just like him.  His Honor shut that ridiculous Sov Cit argument down real quick by holding that defendant in direct criminal Contempt of Court.  Other judges, please take note…',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f74',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891a9',
        userName: 'sarahmiller',
        profilePicturePath:
          'https://media.istockphoto.com/id/2190583070/hu/fotó/a-female-groomer-trims-the-hair-on-the-paws-of-a-spitz.jpg?s=1024x1024&w=is&k=20&c=fTzcarQIztWbgUeF-GgEx3nq55RjW9CXmOSwCPO4EaU=',
      },
      lastModification: '2025-04-01T18:16:17.894Z',
      message:
        'That judge who presided over the case of the girl who got murdered should be ashamed of himself. ',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f75',
      replyId: '680bac214f156e8dd4051f74',
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891ad',
        userName: 'rachelle',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2024/05/09/11/37/abstract-8750691_1280.png',
      },
      lastModification: '2025-04-01T18:16:17.980Z',
      message: 'Is anyone else noticing a trend with these people?',
    }),
    new Comment({
      id: '680bac214f156e8dd4051f76',
      replyId: null,
      videoId: '68068ac9a851f22ec3099fc1',
      user: {
        userId: '6806233ad1fbc4a94e0891aa',
        userName: 'alexwilliams',
        profilePicturePath:
          'https://cdn.pixabay.com/photo/2021/04/27/15/04/wagtail-6211745_1280.jpg',
      },
      lastModification: '2025-04-01T18:16:18.074Z',
      message:
        'Great video, just get rid of the background music. Its really not necessary. Its also distracting.',
    }),
  ];

  await Comment.insertMany(listOfDocuments);
};
