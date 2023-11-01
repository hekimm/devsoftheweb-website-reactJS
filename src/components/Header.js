import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "./logo-3.png";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: rgba(0, 0, 0, 0.8); // Arka planı biraz daha koyu yap
  position: sticky;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); // Hafif bir gölge ekle

  @media (max-width: 768px) {
    padding: 0.5rem 3%;
  }
  top: 0; // Sayfanın en üstüne yapış
`;

const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  transform: translateY(-5px);
  a {
    color: #61dafb; // Logo rengini altın sarısı yap
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;
    &:hover {
      color: #ffffff;
      transform: scale(1.05);
    }
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  display: flex; // Flexbox kullanarak içerikleri yan yana hizala
  align-items: center; // İçerikleri dikey olarak ortala

  img {
    width: 50px; // ya da istediğiniz bir değer
    height: auto; // Resmin oranını koru
    margin-right: 10px; // Logonun ve yazının arasında boşluk bırak
  }
`;

const Menu = styled(Nav)`
  margin-left: auto;
  display: flex;
  gap: 2rem; // Menü öğeleri arasına daha fazla boşluk ekle

  a {
    font-size: 1.3rem;
    color: #61dafb; // Menü öğelerini altın sarısı yap
    text-decoration: none;
    padding: 10px 18px;
    border: 2px solid #61dafb; // Kenarlık ekle
    border-radius: 25px;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
    &:hover {
      background-color: rgba(255,255,255,0.6); // Hover durumunda arka planı altın sarısı yap
      color: #000000;
      transform: scale(1.05);
    }
    &.active {
      background-color: #61dafb; // Aktif durumda arka planı altın sarısı yap
      color: #000000;
    }
  }
  @media (max-width: 768px) {
    gap: 1.5rem; // Menü öğeleri arasındaki boşluğu artırdım
    a {
      font-size: 1.2rem; // Font boyutunu biraz azalttım
      padding: 8px 16px; // Padding değerlerini optimize ettim
    }
  }

  @media (max-width: 576px) {
    flex-direction: column; // Menü öğelerini dikey hizaladım
    gap: 1rem; // Dikey hizalamada aradaki boşluğu artırdım
    a {
      font-size: 1rem; // Font boyutunu küçülttüm
      padding: 8px 16px; // Padding değerlerini optimize ettim
      text-align: center; // Metni ortaya hizaladım
    }
  }
  }

  @media (max-width: 576px) {
    flex-direction: column; // Küçük ekranlarda menü öğelerini dikey hizala
    gap: 10px; // Dikey hizalamada aradaki boşluğu azalt
    a {
      font-size: 1rem;
      padding: 8px 12px;
      text-align: center; // Metni ortala
    }
  }
`;

const MobileMenuButton = styled(Navbar.Toggle)`
  border: none;
  outline: none;
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
        <Navbar expand="lg">
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
                  Biz Kimiz ?
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/services"
                  className={location.pathname === "/services" ? "active" : ""}
                >
                  Neler Yapıyoruz ?
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
        </Navbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
