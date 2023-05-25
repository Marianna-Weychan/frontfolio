import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../personalHomepageSlice";
import { githubUsername } from "./githubUsername";
import { Content } from "./Content";
import { Section, Header, StyledGithubIcon, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader/styled";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <MyRecentProjects>My recent projects</MyRecentProjects>
            </Header>
            <Content
                status={repositoriesStatus}
                repositories={repositories}
            />
        </Section>
    );
};