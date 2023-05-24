import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";


export const socialsData = [
    {
        name: "GitHub",
        url: "https://github.com/Marianna-Weychan",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/marianna.weychan/",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/mariannaweychan/",
        Icon: styleIcon(InstagramIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marianna-weychan/",
        Icon: styleIcon(LinkedInIcon),
    },
];