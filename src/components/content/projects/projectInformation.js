export const pngUrls = [
  "url('/cover-images/TabTracker.png')",
  "url('/cover-images/TheoryScript.png')",
  "url('/cover-images/Crossover.png')",
  "url('/cover-images/DungeonMaster.png')"
];

const projectTemplate = {
  name: "",
  technologies: "",
  description: "",
  backgroundImageUrl: ""
};

export const projectList = [
  {
    name: "Tabtracker",
    technologies: "Vue.js, Vuex, Vuetify Express, Sequelize, SQLite, Webpack",
    description:
      "Comprehensive fullstack website clone for keeping track of guitar tabs and songs, created using Vue and SQLite",
    backgroundImageUrl: "url('/cover-images/TabTracker.png')"
  },
  {
    name: "TheoryScript",
    technologies: "React.js, React, SCSS, Jest, Heroku",
    description:
      "Web application for the realization of functional music theory, created with create-react-app and deployed through Heroku",
    backgroundImageUrl: "url('/cover-images/TheoryScript.png')"
  },
  {
    name: "Crossover",
    technologies: "React, Firebase, Cloudinary, Webpack, SCSS",
    description:
      "Collaborative comic generator for users to take turns creating an original comic, deployed and stored through Firebase",
    backgroundImageUrl: "url('/cover-images/Crossover.png')"
  },
  {
    name: "Dungeon Master",
    technologies: "Webpack, React, Redux, Express, PostgresSQL, dnd5eAPI",
    description:
      "A web application for DMs to use in maintaining Dungeons and Dragons campaign information",
    backgroundImageUrl: "url('/cover-images/DungeonMaster.png')"
  }
];
