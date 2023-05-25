import { ThemeSwitcher } from "../../common/ThemeSwitcher";
import MainInformation from "./MainInformation";
import { Skills } from "./Section/Skills";
import { currentSkills, skillsToLearn } from "./Section/Skills/skillsData"
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { Container } from "./styled";

const PersonalHomepage = () => {
    return (
        <Container>
            <ThemeSwitcher />
            <MainInformation />
            <Skills
                title="My skillset includes 🛠️💡"
                skills={currentSkills}
            />
            <Skills
                title="What I want to learn next 🚀🎓"
                skills={skillsToLearn} />
            <Portfolio />
            <Footer />
        </Container>
    );
}
export default PersonalHomepage;