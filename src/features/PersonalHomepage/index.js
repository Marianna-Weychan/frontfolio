import { ThemeSwitcher } from "../../common/ThemeSwitch";
import MainInformation from "./MainInformation";
import { Skills } from "./Section/Skills";
//import Frontfolio from "./Frontfolio";
//import Footer from "./Footer";
import { currentSkills, skillsToLearn } from "./Section/Skills/mySkills"
import { Container } from "./styled";


const PersonalHomepage = () => {
    return (
        <Container>
            <ThemeSwitcher />
            <MainInformation />
            <Skills
                title="My skillset includes 🛠️"
                skills={currentSkills}
            />
            <Skills
                title="What I want to learn next 🚀"
                skills={skillsToLearn} />
        </Container>
    );
}
export default PersonalHomepage;