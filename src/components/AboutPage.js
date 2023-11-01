import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import backgroundImage from "./background-2.png";
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
  
  }
`;

const StyledContainer = styled(Container)``;

const StyledCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #f4f4f4;
`;

const AboutPage = () => {
  return (
    <>
      <GlobalStyle />
      <StyledContainer fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8} lg={6}>
            <StyledCard>
              <Card.Body>
                <Title>Hakkımızda</Title>
                <Paragraph>
                  "Devs Of The WEB CBU", üniversite düzeyinde genç ve yetenekli
                  web geliştiricileri bir araya getiren bir gruptur. Amacımız,
                  üyelerimizin web teknolojileri, programlama dilleri ve en iyi
                  uygulamalar konusunda bilgi ve becerilerini artırmak ve
                  gelişimlerini desteklemektir. Eğitim seansları, atölye
                  çalışmaları ve seminerler düzenleyerek sürekli öğrenmeyi
                  teşvik ediyoruz.
                </Paragraph>
              </Card.Body>
            </StyledCard>
            <StyledCard>
              <Card.Body>
                <Paragraph>
                  Vizyonumuz, üyelerimizi teknik becerilerin ötesinde liderlik,
                  takım çalışması ve problem çözme konusunda da donanımlı hale
                  getirerek, geleceğin teknoloji liderlerini yetiştirmektir.
                </Paragraph>
              </Card.Body>
            </StyledCard>
            <StyledCard>
              <Card.Body>
                <Paragraph>
                  Misyonumuz, yenilikçi ve destekleyici bir topluluk
                  oluşturarak, üyelerimizin akademik hedeflerine ulaşmalarına
                  yardımcı olmaktır. Olanaklarımız arasında en güncel
                  teknolojilere erişim, sektör profesyonelleriyle network
                  oluşturma imkanı ve kişisel gelişim kaynakları bulunmaktadır.
                </Paragraph>
              </Card.Body>
            </StyledCard>
            <StyledCard>
              <Card.Body>
                <Paragraph>
                  Üyelerimize projelerini gerçekleştirebilecekleri ve
                  fikirlerini paylaşabilecekleri bir platform sunuyoruz.
                  Teknolojiye tutkulu ve bu alanda fark yaratmak isteyen herkesi
                  aramıza katılmaya davet ediyoruz, birlikte geleceği
                  şekillendirelim.
                </Paragraph>
              </Card.Body>
            </StyledCard>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};
export default AboutPage;
