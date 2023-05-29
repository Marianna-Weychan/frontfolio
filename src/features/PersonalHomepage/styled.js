import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto 109px;
  padding: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0 auto 32px;
    padding: 8px;
  }
`;