import { ContactLink, Wrapper, FooterContent, LetsTalk, Address, EmailWrapper } from "./styled";
import { SocialIcons } from "./SocialIcons";
import { email } from "../email";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <ContactLink href={`mailto:${email}`} title={email} rel="noopener noreferrer">{email}</ContactLink>
            </EmailWrapper>
            <FooterContent>
                I’m always open to new projects whenever I have the time. If you have a&nbsp;website, dashboard or mobile app in mind and need some help to&nbsp;make your ideas come to life, feel free to conatct me🤞
            </FooterContent>
            <SocialIcons />
        </Address>
    </Wrapper>
);