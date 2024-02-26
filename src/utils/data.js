import {
  faNodeJs,
  faGit,
  faJs,
  faStripe,
  faHtml5,
  faCss3,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import SpotifyLogo from "../imgs/Screenshot 2024-02-21 141936.png";
import SpotifyAppScreenshot from "../imgs/SpotifyAppScreenshot.png";
import redditLogo from "../imgs/redditLogo.png";
import RedditScreenshot from "../imgs/RedditScreenshot.png";
import ecommerceScreenshot from "../imgs/ecommerceScreenshot.png";
import ecommerceThumbnail from "../imgs/ecommerceThumbnail.png";
import identityLogo from "../imgs/identityLogo.png";
import identityScreenshot from "../imgs/identityScreenshot.png";
export const projects = [
  {
    title: "Reddit Clone",
    ThumbnailImage: redditLogo,
    screenshot: RedditScreenshot,
    backgroundColour: "#FFFFFF",
    shortDescription:
      "An app for users to navigate and search through Reddit Posts and Subreddits.",

    description:
      "A clone of Reddit, a social media platform where users can post, comment, and upvote posts.",
    technologies: [
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "Git", icon: faGit },
    ],
  },
  {
    title: "Spotify Clone",
    ThumbnailImage: SpotifyLogo,
    screenshot: SpotifyAppScreenshot,

    shortDescription:
      "This is an app that allows users to search for songs and add them to custom playlists to save.",

    description:
      "A clone of Spotify, a music streaming platform where users can search for songs and add them to custom playlists to save.",
    technologies: [
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "Git", icon: faGit },
    ],
  },
  {
    title: "eCommerce Site",
    ThumbnailImage: ecommerceThumbnail,
    screenshot: ecommerceScreenshot,
    backgroundColour: "#FFFFFF",
    shortDescription:
      "A fully working ecommerce site with user registration, and Stripe checkout",

    description:
      "Final CodeCademy Project of an eCommerce site with Stripe integration, backend development, and frontend design.",
    technologies: [
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "Git", icon: faGit },
      { name: "Stripe", icon: faStripe },
      { name: "SQL", icon: faDatabase },
    ],
  },
  {
    title: "Identity-Plus/Medical-Plus",
    ThumbnailImage: identityLogo,
    screenshot: identityScreenshot,
    backgroundColour: "#FFFFFF",

    description:
      "Final CodeCademy Project of an eCommerce site with Stripe integration, backend development, and frontend design.",
    technologies: [
      { name: "Wordpress", icon: faJs },
      { name: "HTML", icon: faHtml5 },
    ],
  },
];
