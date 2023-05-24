import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 96px;
    display: grid;
    justify-items: center;
    text-align: center;
    grid-gap: 32px;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-gap: 24px;
    }
`;

export const Header = styled.header`
    font-weight: 700;
    font-size: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    font-size: 20px;
    line-height: 1.4;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;