import { FaGithub, FaTwitter, FaGamepad, FaRegEnvelope } from "react-icons/fa";

export const Links = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Game Dev",
  },
  {
    id: 3,
    name: "Day Job",
  },
  {
    id: 4,
    name: "Contact",
  },
];

export const ExternalLinks = [
  {
    id: 0,
    name: "twitter",
    display: "@therstrum",
    link: "https://twitter.com/therstrum",
    icon: <FaTwitter />,
  },
  {
    id: 1,
    name: "github",
    display: "https://github.com/Therstrum",
    link: "https://github.com/Therstrum",
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: "itch",
    display: "https://torban.itch.io/",
    link: "https://torban.itch.io/",
    icon: <FaGamepad />,
  },
  {
    id: 3,
    name: "contact",
    display: "torbandev@gmail.com",
    link: "",
    icon: <FaRegEnvelope />,
  },
];
export const ToDoBoard = [
  {
    title: "Future projects",
    bucketId: 0,
    items: [
      {
        name: "GMTK Game Jam 7/15/22",
        id: 0,
      },
      {
        name: "Twitch Bot",
        id: 1,
      },
      {
        name: "Convert website to DB",
        id: 2,
      },
      {
        name: "AWS Developer Certification",
        id: 3,
      },
    ],
  },
  {
    title: "In progress",
    bucketId: 1,
    items: [
      {
        name: "Website 2.0 with React",
        id: 0,
      },
      {
        name: "AWS redeploy of Website 2.0",
        id: 1,
      },
      {
        name: "HTML/CSS/JS practice",
        id: 2,
      },
    ],
  },
  {
    title: "Completed",
    bucketId: 2,
    items: [
      {
        name: "Website 1.0",
        id: 0,
      },
      {
        name: "HTML/CSS Basics",
        id: 1,
      },
      {
        name: "AWS Deployment intro",
        id: 2,
      },
      {
        name: "Pomodoro Timer dotnet app",
        id: 3,
      },
      {
        name: "Spotify Library dotnet",
        id: 4,
      },
      {
        name: "Home Assistant Library dotnet",
        id: 5,
      },
      {
        name: "Discord Bot",
        id: 6,
      },
    ],
  },
];
export const GameJams = [
  {
    id: 0,
    date: "07/15/2022",
    title: "GMTK Game Jam",
    link: "https://itch.io/jam/gmtk-2021",
    description:
      "The GMTK Game Jam is an annual game making marathon, where individuals and teams try to make a game that fits a theme, in just 48 hours. Thousands of games are submitted as designers improve their skills, flex their creative muscles, and try to get their game featured on Game Maker’s Toolkit. ",
    img: require("./images/gmtk.jpg"),
  },
  {
    id: 1,
    date: "09/30/2022",
    title: "Ludum Dare 51",
    link: "https://ludumdare.com/#schedule",
    description: "",
    img: require("./images/ld51.jpg"),
  },
];

export const GameList = [
  {
    name: "If I had more time",
    id: 0,
    img: require("./images/ifihadmoretime.PNG"),
    description:
      "A game for the Ludum Dare 50 game jam, my first real game jam. Made in about 26 hours of work. I learned so much on this project and would love to expand on the concept with more platforming and time mechanics. I had blast working on this with my wife, who did some of the art for me. ",
    link: "https://torban.itch.io/if-i-had-more-time",
  },
  {
    name: "Torban Pong",
    id: 1,
    img: require("./images/pong.png"),
    description:
      "One of my first completed projects. I wanted to get an easy concept finished. While it's a simple game, I added my own spin on making the game harder as you progress. Also, check out the great theme song featuring my cat.",
    link: "https://torban.itch.io/torban-pong",
  },
];

export const PtpList = [
  {
    name: "Imprivata",
    id: 0,
    items: [
      "OneSign and Confirm ID certified administrator",
      "Technical lead over 35 OneSign and Confirm ID Implementations",
      "Epic integration with Warp Drive",
      "Citrix Netscaler and VDI integration",
    ],
    img: require("./images/imprivata2.png"),
  },
  {
    name: "OnBase",
    id: 1,
    items: [
      "OnBase Certified API Developer",
      "Developed custom ultrasound importer",
      "OnBase administration",
      "Epic Integration",
      "SmartFiler integration",
    ],
    img: require("./images/onbase.png"),
  },
  {
    name: "RightFax",
    id: 2,
    items: [
      "RightFax integration with Epic",
      "Custom cover sheet build in Epic",
      "Server administration and troubleshooting",
      "Implemented referral faxing in Hyperspace",
    ],
    img: require("./images/rightfax.png"),
  },
  {
    name: "Zoom",
    id: 3,
    items: [
      "Integration with Epic for virtual visits",
      "Haiku/Canto integration",
      "Custom build for dynamic provider names",
    ],
    img: require("./images/zoom.png"),
  },
  {
    name: "MS Teams",
    id: 4,
    items: [
      "Integration with EHR Teams Connector and Epic for virtual visits",
      "Haiku/Canto integration",
    ],
    img: require("./images/teams.png"),
  },
  {
    name: "Dragon",
    id: 5,
    items: [
      "Server maintenance for DMO integration with Epic",
      "Administration and support",
    ],
    img: require("./images/dragon.png"),
  },
  {
    name: "AristaMD",
    id: 6,
    items: [
      "Built integration with Epic",
      "Custom programming to pull in dynamic data through web request",
      "Smart on FHIR Oauth2",
    ],
    img: require("./images/arista.png"),
  },
  {
    name: "Rubicon",
    id: 7,
    items: [
      "SAML STS Integration with Epic",
      "BPA build and print group creation for web link embeded",
      "STS Cert renewal",
    ],
    img: require("./images/rubicon.png"),
  },
  {
    name: "Midmark",
    id: 8,
    items: [
      "IQPath integration with Epic",
      "Epic security build for menu visibility",
      "EKG, vitals, spirometry integration and workflows",
    ],
    img: require("./images/midmark.png"),
  },
];
