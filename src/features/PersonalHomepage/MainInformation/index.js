import { Wrapper, Image, ThisIs, FullName, Summary, EnvelopeIcon, StyledButtonLink } from "./styled";
import myPhoto from "./author.jpg";
import { email } from "../email";

const MainInformation = () => (
    <Wrapper>
        <Image src={myPhoto} alt="Marianna Weychan" />
        <div>
            <ThisIs>This is</ThisIs>
            <FullName>Marianna Weychan</FullName>
            <Summary>
                I am an enthusiastic Junior Frontend Developer who is looking for development opportunities.
                I am currently working with React but I want to learn other technologies to become a better programmer.
            </Summary>
            <StyledButtonLink
                href={`mailto:${email}`}
                title={email}
                rel="noopener noreferrer">
                <EnvelopeIcon />
                Hire Me
            </StyledButtonLink>
        </div>
    </Wrapper>
);
export default MainInformation