export interface ExperienceDescription {
  title: string,
  fullName: string,
  period: string,
  description: string[],
}

const experienceDescriptions:{ [index:string] : ExperienceDescription } = {
  'Mindfox': {
    title: 'Co-founder & Software Engineer',
    fullName: 'Mindfox Studios',
    period: 'Jun. 2018 - Present',
    description: [
      'Shipped two original mobile games, Space Loops and Sausage Throw.',
      'Worked with React Native to implement Odin ICE-Pro, from design to release in just three weeks.\n',
      'Mobile development consultancy for LEGO.',
      'Other clients include Kamstrup, AKQA, Novo Nordisk and Destination Aarhus.',
    ],
  },
  'LEGO': {
    title: 'Mobile developer consultant',
    fullName: 'LEGO Group',
    period: 'Sep. 2018 - Jan. 2019',
    description: [
      'Worked with two teams on the apps: LEGO® Movie Maker and LEGO® TV.',
      'Wrote Kotlin for Android, utilizing coroutines to create synchrounous code that’s easy to read.\n',
      'Wrote Swift for iOS, making good use of PromiseKit to implement an advanced share-video flow.',
      'Only engineer to work on both iOS and Android.',
    ],
  },
  'BitBreak': {
    title: 'Co-Founder & Software Engineer',
    fullName: 'BitBreak',
    period: 'Nov. 2016 - Jun. 2018',
    description: [
      'Released a VR game for HTC Vive (In Your Face TD) with 98% positive reviews on Steam (77 positive, 1 negative).',
      'Created an online cryptocurrency vendor with React and Redux.',
      'Did Unity consulting for the game Pool Legends and publisher Spil Games.',
      'All of this was while studying Computer Science at Aarhus University.',
    ],
  },
  'Kiloo': {
    title: 'Software Engineer',
    fullName: 'Kiloo',
    period: 'Apr. 2013 - Jun 2016',
    description: [
      'Worked on a large production (Stormblades) as one of only two programmers. Implemented the entire UI and all meta features, including leaderboards and cloud synchronization.',
      'Made tools in Unity which are now used in one of the most downloaded mobile games ever, Subway Surfers.',
    ],
  },
  'Campus Dj.': {
    title: 'Workshop Instructor',
    fullName: 'Campus Djursland',
    period: 'Aug. 2012 - Apr. 2013',
    description: [
      'Teached game development in C# and Unity, with classes of up to 60 students.',
    ],
  },
  'ClearCut': {
    title: 'Co-Founder & Programmer',
    fullName: 'ClearCut Games',
    period: 'Mar. 2011 - Apr. 2013',
    description: [
      'Released the mobile game Cado for iOS',
      'Wrote C# code day and night, while keeping up with school ;-)',
    ],
  },
};

export default experienceDescriptions;
