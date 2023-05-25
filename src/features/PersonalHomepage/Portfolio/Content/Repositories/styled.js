import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    list-style: none;
    padding: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`;

export const Tile = styled.li`
    background-color: ${({ theme }) => theme.colors.boxBackground};
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
     margin: 0;
     padding: 56px;
    transition: border-color 0.3s;
    &:hover {
        border-color: ${({ theme }) => theme.colors.tile.borderHover};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 20px;
    }
`;

export const Name = styled.h3`
    color: ${({ theme }) => theme.colors.tile.header};
    font-size: 24px;
    margin: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    margin-top: 24px;
    line-height: 1.4;
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        font-size: 14px;
        margin-top: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`;

export const Links = styled.dl`
   margin-top: 24px;
    margin-bottom: 0;
     line-height: 1.6;
    display: grid;
    grid-gap: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin-top: 16px;
    }
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 1px;
    border-bottom: 1px solid ${({ theme }) => α(theme.colors.primary, 0.3)};
    &:hover {
        border-color: unset;
    }
`;