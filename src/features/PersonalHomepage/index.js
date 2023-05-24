import { ThemeSwitcher } from "../../common/ThemeSwitcher";
import MainInformation from "./MainInformation";
import { Skills } from "./Section/Skills";

import { Footer } from "./Footer";
import { currentSkills, skillsToLearn } from "./Section/Skills/skillsData"
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

            <Footer />
        </Container>
    );
}
export default PersonalHomepage;