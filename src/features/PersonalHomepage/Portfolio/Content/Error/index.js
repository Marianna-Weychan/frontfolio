import { githubUsername } from "../../githubUsername";
import { ReactComponent as WarningIcon } from "./warning.svg";
import { ButtonLink } from "../../../ButtonLink/styled";
import { Header, Paragraph, Wrapper } from "./styled";

export const Error = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.<br />
            You can check then directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <ButtonLink
            href={`https://github.com/${githubUsername}`}
            title="Github Marianna Weychan"
            target="_blank"
            rel="noreferrer noopener">
            Go to Github
        </ButtonLink>
    </Wrapper>
);