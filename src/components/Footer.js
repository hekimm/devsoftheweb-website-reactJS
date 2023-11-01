import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter as faTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const StyledFooter = styled.footer`
  background-color: #1f2029;
  padding: 50px 20px;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;
const SocialMedia = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    &:hover {
      transform: translateY(-5px);
      color: #61dafb;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  font-weight: 300;
  p {
    margin: 10px 0;
  }
`;

const CopyRight = styled.div`
  font-size: 12px;
  color: #666;
  font-weight: 300;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin: 0 5px;
  transition: color 0.3s;
  &:hover {
    color: #61dafb;
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  const handleDirectClick = (path) => {
    navigate(path);
  };

  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <SocialMedia>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com/devsoftheweb_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </SocialMedia>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ContactInfo>
              <p>Email: info@devsoftheweb.com</p>
              <p>Manisa, TR</p>
            </ContactInfo>
          </Col>
          <Col xs={12} lg={4}>
            <CopyRight>
              <p>© 2023 Devs Of The Web</p>
            </CopyRight>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <FooterLink to="/about">Hakkımızda</FooterLink>
              <FooterLink to="/services">Neler Yapıyoruz ? </FooterLink>
              <FooterLink to="/team">Ekibimiz</FooterLink>
              <FooterLink to="/portfolio"> Hedeflerimiz</FooterLink>
              <FooterLink to="/contact">İletişim</FooterLink>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
