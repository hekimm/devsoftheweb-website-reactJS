import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "./logo-3.png";

const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const StyledNavbar = styled(Navbar)`
  padding: 1rem 0;
`;

const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }
  a {
    color: #61dafb;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;
    &:hover {
      color: #ffffff;
      transform: scale(1.05);
    }
  }
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (max-width: 992px) {
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 994px) and (max-width: 1400px) {
    font-size: 1.9rem;
  }
`;

const Menu = styled(Nav)`
  display: flex;
  gap: 2rem;
  margin-left: auto;
  a {
    font-size: 1.3rem;
    color: #61dafb;
    text-decoration: none;
    padding: 10px 18px;
    border: 2px solid #61dafb;
    border-radius: 25px;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
    &:hover,
    &.active {
      background-color: rgba(255, 255, 255, 0.6);
      color: #000000;
      transform: scale(1.05);
    }
    &.active {
      background-color: #61dafb;
    }
  }
  @media (max-width: 1200px) {
    gap: 1.5rem;
    a {
      font-size: 1.2rem;
      padding: 8px 16px;
    }
  }
  @media (max-width: 992px) {
    gap: 1.2rem;
    a {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    a {
      font-size: 1rem;
      text-align: center;
    }
  }
  @media (min-width: 994px) and (max-width: 1400px) {
    gap: 1.3rem;
    a {
      font-size: 1.2rem;
      padding: 9px 17px;
    }
  }
`;

const MobileMenuButton = styled(Navbar.Toggle)`
  border: none;
  &:focus {
    box-shadow: none;
  }
  background-color: #f4f4f4;
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Container>
        <StyledNavbar expand="lg">
          <Logo>
            <img src={logo} alt="Logo" />
            <Link to="/">DevsOfTheWeb</Link>
          </Logo>
          <MobileMenuButton aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Menu>
              <Nav.Item>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  Hakkımızda
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/services"
                  className={location.pathname === "/services" ? "active" : ""}
                >
                  Etkinliklerimiz
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/team"
                  className={location.pathname === "/team" ? "active" : ""}
                >
                  Ekibimiz
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/portfolio"
                  className={location.pathname === "/portfolio" ? "active" : ""}
                >
                  Hedeflerimiz
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  İletişim
                </Link>
              </Nav.Item>
            </Menu>
          </Navbar.Collapse>
        </StyledNavbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
