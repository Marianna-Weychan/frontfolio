import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};  
    }
        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
     }
`;