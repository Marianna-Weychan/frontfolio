import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg"

export const Section = styled.section`
    margin-top: 72px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 48px;
    }
`;

export const StyledGithubIcon = styled(GithubIcon)`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
`;

export const Header = styled.header`
    text-align: center;
`;

export const MyRecentProjects = styled.h3`
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 20px;
    margin-top: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`;