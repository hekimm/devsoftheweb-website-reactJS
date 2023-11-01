import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Container, Row, Col } from "reactstrap";
import backgroundImage from "./background-5.png";
const PortfolioContainer = styled(Container)`
  padding: 40px 20px;
  // Ekranın tamamını kaplamasını sağla
`;
const GlobalStyle = createGlobalStyle`
  body {
    background: url(${backgroundImage}) center/cover no-repeat;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

const ProjectCard = styled(Col)`
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  margin-bottom: 30px;
  margin-left: 15px; // Sol taraf için margin ekle
  margin-right: 15px; // Sağ taraf için margin ekle

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 576px) {
    // Ekstra küçük ekranlar için stil ayarları
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (min-width: 768px) {
    // Küçük ekranlar için stil ayarları
    margin-left: 15px;
    margin-right: 15px;
  }

  @media (min-width: 992px) {
    // Orta ekranlar için stil ayarları
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: 1200px) {
    // Büyük ekranlar için stil ayarları
    margin-left: 30px;
    margin-right: 30px;
  }
`;

const ProjectInfo = styled.div`
  padding: 15px;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.5em;
  font-weight: 600;
  color: #f4f2f4;
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-size: 0.9em;
  line-height: 1.5;
  color: #f4f4f4;
`;
const categories = [
  {
    id: 1,
    title: "Temel Programlama",
    description:
      "Programlamanın temel prensiplerini öğrenmek ve uygulamak üzere tasarlanmış projeler."
  },
  {
    id: 2,
    title: "Temel Web Frontend Geliştirme (HTML + CSS)",
    description:
      "Web tasarımının temel taşları olan HTML ve CSS ile başlamak isteyenler için projeler."
  },
  {
    id: 3,
    title:
      "Temel-Orta Düzey Frontend Web Geliştirme (HTML + CSS + Bootstrap + JavaScript)",
    description:
      "Responsive tasarım ve temel interaktiflik eklemek için HTML, CSS, Bootstrap ve JavaScript kullanımı."
  },
  {
    id: 4,
    title:
      "Orta Düzey Frontend Web Geliştirme (HTML + CSS + Sass/Less + Bootstrap + JavaScript + jQuery)",
    description:
      "Daha gelişmiş stil ve interaktiflik için Sass/Less, Bootstrap, JavaScript ve jQuery kullanımı."
  },
  {
    id: 5,
    title:
      "Orta-İleri Düzey Frontend Web Geliştirme (Angular + VueJS + ReactJS)",
    description:
      "Modern frontend çatıları kullanarak gelişmiş web uygulamaları geliştirme."
  },
  {
    id: 6,
    title:
      "Backend Web Geliştirme (NodeJS + ExpressJs + MongoDB + C# + .NET + SQL + PHP + MySql + Java + Spring Boot)",
    description:
      "Çeşitli backend teknolojileri ile server-side programlama ve veritabanı yönetimi."
  },
  {
    id: 7,
    title: "İleri Düzey Full Stack Web Geliştirme",
    description:
      "Frontend ve backend teknolojilerini kapsayan, gelişmiş ve kapsamlı web uygulamaları geliştirme."
  }
];

const PortfolioPage = () => {
  return (
    <>
      <GlobalStyle />

      <PortfolioContainer fluid>
        <Row>
          {categories.map((category) => (
            <ProjectCard key={category.id} xs={12} sm={6} md={4} lg={3}>
              <ProjectInfo>
                <ProjectTitle>{category.title}</ProjectTitle>
                <ProjectDescription>{category.description}</ProjectDescription>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </Row>
      </PortfolioContainer>
    </>
  );
};

export default PortfolioPage;
