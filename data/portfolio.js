const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Ike Ofoegbu',
  role: 'Software Engineer',
  // company: 'Acme Labs',
  description: [
    "I studied Cognitive Science at UCLA with a Specialization in Computing. In school, I learned about the applications of Computer Science within the study of the mind and its processes. Since then, I've strived to use software as a medium for solving more general problems.",
    "I have over 2 years of experience, specializing in full-stack development with an emphasis on frontend engineering. I'm a self-motivated and lifelong learner always looking to create positive impact on a wide scale.",
  ],
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/ike-ofoegbu',
    github: 'https://github.com/magic-ike',
  },
  greetingEmoji: '👋🏽',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    name: 'Spotfolio',
    description: [
      'An open source portfolio template for developers that integrates with the Spotify Web API. Used to build this site',
    ],
    stack: ['React', 'Next.js', 'Spotify Web API'],
    sourceCode: 'https://github.com/magic-ike/spotfolio',
    livePreview: 'https://spotfolio.vercel.app',
  },
  {
    name: 'React Native Demo',
    description: [
      'An open source demo app meant to serve as a foundational codebase for any app startup to quickly build a functional, cross-platform MVP',
    ],
    stack: [
      'React Native',
      'Redux',
      'Firebase Auth',
      'Firebase Realtime DB',
      'Cloud Storage',
    ],
    sourceCode: 'https://github.com/magic-ike/react-native-demo',
  },
  {
    name: 'Atalog',
    description: [
      'A social networking and messaging application for iOS. Released under the (now defunct) Atalog Inc.',
    ],
    stack: [
      'Swift',
      'Firebase Auth',
      'Cloud Firestore',
      'Cloud Storage',
      'OneSignal',
    ],
    livePreview: 'https://atalog.co',
  },
  {
    name: 'Regression Neural Network',
    description: [
      "An open source script to visualize a feedforward neural network's understanding of a math function under different parameters",
    ],
    stack: ['MATLAB'],
    sourceCode: 'https://github.com/magic-ike/regression-neural-network',
  },
  {
    name: 'Laser Ship',
    description: [
      'A vertically scrolling shooter mobile game for iOS and Android',
    ],
    stack: ['C#', 'Unity'],
    livePreview: 'https://magic-ike.github.io/laser-ship-links/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'PHP',
  'HTML',
  'CSS',
  'jQuery',
  'React',
  'Next.js',
  'Angular',
  'Node.js',
  'Express',
  'Redis',
  'MongoDB',
  'MySQL',
  'Firebase',
  'Git',
  'Mercurial',
  'Jest',
  'Vercel',
  'Heroku',
]

const activity = {
  // all the properties are optional - can be set to false/0 or deleted
  // if neither of the first 2 properties are true, Activity section won't show up
  // the default top track count is 3, the minimum is 1, and the maximum is 50
  showNowPlaying: true,
  showTopTracks: true,
  hideExplicitTracks: true,
  topTrackCount: 3,
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ikeofoegbu99@gmail.com',
}

export { about, projects, skills, activity, contact }
