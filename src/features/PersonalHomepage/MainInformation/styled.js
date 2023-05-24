import styled from "styled-components";
import { ReactComponent as Envelope } from "./envelope.svg";
import { ButtonLink } from "../ButtonLink/styled";

export const Wrapper = styled.header`
    margin-top: -30px; 
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        grid-gap: 32px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
    }
`;

export const Image = styled.img`
    max-width: 384px;
    width: 30vw;
    border-radius: 50%;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        min-width: 132px;
    }
`;

export const ThisIs = styled.div`
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: initial;
`;

export const FullName = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 12px 0 0 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Summary = styled.p`
    max-width: 650px;
    font-size: 20px;
    line-height: 1.4;
    margin: 36px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        margin-top: 16px;

        &::before {
            content: "👩💻";
            font-size: 20px; 
            margin-right: 8px; 
        }
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop + 1}px) {
        &::before {
            content: "👩💻";
            font-size: 20px; 
            margin-right: 8px; 
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        &::before {
             content: "👩💻";
             font-size: 18px;
             margin-right: 8px;
  }
}
`;

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
       margin-top: 24px;
    }
`;

export const EnvelopeIcon = styled(Envelope)`
    margin-right: 16px;
`;