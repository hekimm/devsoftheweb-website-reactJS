import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import backgroundImage from "./background-3.png"; // Lütfen 'path_to_your_image' kısmını gerçek resim yolunuzla değiştirin

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const ServiceCard = styled.div`
  width: 300px;
  padding: 15px;
  margin: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #f4f4f4;
`;

const Description = styled.p`
  font-size: 1em;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  background-color: #1d5b79;
  color: #fff;

  &:hover {
    background-color: #218838;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const services = [
  {
    id: 1,
    title: "Temel Programlama",
    description:
      "Bizler topluluk üyelerimiz ile birlikte Temel Programlama kavramlarını öğreniyoruz ve Web Geliştirme için gerekli temelleri öğrenmeyi hedefliyoruz."
  },
  {
    id: 2,
    title: "Frontend  Web Geliştirme",
    description:
      "Bizler topluluk üyelerimiz ile beraber modern, hızlı ve güvenilir web sitelerinin frontend'ini oluşturmayı öğreniyoruz ve oluşturmayı hedefliyoruz."
  },
  {
    id: 3,
    title: "Backend Web Geliştirme",
    description:
      " Topluluk üyelerimiz ile beraber modern, hızlı ve güvenilir web sitelerinin backend'ini oluşturmayı öğreniyoruz ve oluşturmayı hedefliyoruz."
  },
  {
    id: 4,
    title: "Mobil Uygulama Geliştirme",
    description:
      "Topluluk üyelerimiz ile beraber kullanıcı dostu mobil uygulamalar tasarlamayı  öğreniyoruz ve oluşturmayı hedefliyoruz.."
  }
];

function ServicesPage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <Title>{service.title}</Title>
            <Description>{service.description}</Description>
            <ActionButton>Detaylar</ActionButton>
          </ServiceCard>
        ))}
      </Container>
    </>
  );
}

export default ServicesPage;
