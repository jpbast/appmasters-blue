import styled from "styled-components";

// Navbar

export const NavbarWrapper = styled.nav`
  height: 120px;
  width: 100%;
  background-color: #f9f9f9;
`;

export const NavbarContainer = styled.div`
  max-width: 1200px;
  justify-content: space-between;
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0 auto;
`;

export const NavbarLogo = styled.div`
  h2 {
    font-size: 20px;
  }
`;

export const NavbarUser = styled.div`
  display: flex;
  align-items: center;
  h2,
  p {
    margin: 0;
    font-size: 20px;
  }
  h2 {
    margin-right: ${(props) => props.theme.spacing.sm};
  }
  .divisor {
    height: 55px;
    width: 1px;
    background-color: #00000030;
    margin: 0 ${(props) => props.theme.spacing.sm};
  }
`;

// Footer

export const FooterWrapper = styled.footer<{ $warning: boolean }>`
  margin-top: 32px;
  background-color: ${(props) => (props.$warning ? props.theme.colors.alert : props.theme.colors.secondary)};
  height: 120px;
`;

export const FooterContainer = styled.div`
  height: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 16px;
`;

export const FooterInfo = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h2 {
    font-size: 32px;
    margin: 0;
  }
  h4 {
    font-size: 18px;
    margin: 0;
  }
`;

export const ButtonContact = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0px 64px;
  color: #ffffff;
  border: none;
  height: 48px;
  font-size: 18px;
  font-weight: 700;
`;
