import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRocket, FaUsers, FaRegLightbulb } from "react-icons/fa";
import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "./background.png";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`;

const HomePageWrapper = styled.div`
  padding: 20px 0;
  font-style: italic;
  font-family: "Roboto", sans-serif;
  color: #176b87;
`;

const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 0.6); // Transparent background
  border-radius: 15px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Box shadow
  padding: 20px;
  margin: 20px 0;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const SecondTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <HomePageWrapper>
        <Container>
          <StyledCard>
            <Section>
              <Title>Hoş Geldiniz!</Title>
              <SecondTitle>
                Biz,CBU Web Geliştiricileri Topluluğuyuz.
              </SecondTitle>
              <Paragraph>
                Üyelerimize projelerini gerçekleştirebilecekleri ve fikirlerini
                paylaşabilecekleri bir platform sunuyoruz.
              </Paragraph>
              <Paragraph>
                Teknolojiye tutkulu ve bu alanda fark yaratmak isteyen herkesi
                aramıza katılmaya davet ediyoruz, birlikte geleceği
                şekillendirelim.
              </Paragraph>
            </Section>

            <Section>
              <Title>Biz Kimiz ?</Title>
              <Row>
                <Col>
                  <IconWrapper>
                    <FaRocket size={50} />
                  </IconWrapper>
                  <Paragraph>
                    Topluluk ile birlikte seminerler,konferanslar ve çok daha
                    fazlası topluluğumuzda!
                  </Paragraph>
                </Col>
                <Col>
                  <IconWrapper>
                    <FaUsers size={50} />
                  </IconWrapper>
                  <Paragraph>
                    Topluluk ile birlikte projeler geliştirme
                  </Paragraph>
                </Col>
                <Col>
                  <IconWrapper>
                    <FaRegLightbulb size={50} />
                  </IconWrapper>
                  <Paragraph>Yenilikçi Çözümler ve Projeler</Paragraph>
                </Col>
              </Row>
            </Section>

            <Section>
              <Title>Ekibimiz</Title>
              <Paragraph>
                Siz de topluluğumuzun bir parçası olmak için bizimle iletişime
                geçin, Biz bir aileyiz!
              </Paragraph>
            </Section>
          </StyledCard>
        </Container>
      </HomePageWrapper>
    </>
  );
};

export default HomePage;
