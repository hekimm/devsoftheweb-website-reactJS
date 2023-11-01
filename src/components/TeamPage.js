import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import member1Image from "./selim.png";
import member2Image from "./hekim.jpeg";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import logoImage from "./logo-4.png"; // logo.png dosyasını projenize import edin.
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${logoImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
  }
`;

const TeamMemberContainer = styled.div`
  color: #f4f4f4;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  padding: 20px;
`;

const MemberImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 3px solid #61dafb;
  box-shadow: 3px 3px 15px rgba(97, 218, 251, 0.7);
  margin-bottom: 10px;
`;

const MemberName = styled.h3`
  margin-top: 10px;
  font-size: 1.2em;
`;

const MemberPosition = styled.p`
  margin-top: 5px;
`;

const Bio = styled.p`
  padding: 10px;
  font-size: 0.9em;
  line-height: 1.5;
  text-align: justify;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const SocialIcon = styled.a`
  color: #61dafb;
  font-size: 1.5em;
  margin: 0 5px;
`;

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hekimcan Aktaş",
      position: "Co-Founder",
      image: member2Image,
      side: "left",
      bio:
        "Ben Hekimcan, Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği bölümünde 2. sınıf öğrencisiyim. Bölümümde aldığım eğitimin yanı sıra, bireysel olarak da sürekli öğrenme ilkesiyle yeni teknolojileri, dilleri ve araçları öğrenmeye devam ediyorum.",
      linkedin: "https://www.linkedin.com/in/hekimcan-aktaş",
      instagram: "https://www.instagram.com/hekimcanaktaş",
      website: "https://hekimcanaktas.com"
    },
    {
      id: 2,
      name: "Selim Kaya",
      position: "Co-Founder",
      image: member1Image,
      side: "right",
      bio:
        "Ben Selim Kaya,Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği bölümünde 2. sınıf öğrencisiyim",
      linkedin: "https://www.linkedin.com/in/selim-kaya",
      instagram: "https://www.instagram.com/selimkaya",
      website: "https://selimkaya.com"
    }
    // Diğer ekip üyelerini buraya ekleyebilirsiniz.
  ];

  return (
    <>
      <GlobalStyle />
      <Container
        fluid
        style={{
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "10px"
        }}
      >
        <Row>
          {teamMembers.map((member, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              key={member.id}
              style={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end"
              }}
            >
              <TeamMemberContainer>
                <MemberImage src={member.image} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
                <Bio>{member.bio}</Bio>
                <SocialIcons>
                  <SocialIcon
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </SocialIcon>
                  <SocialIcon
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </SocialIcon>
                  <SocialIcon
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe />
                  </SocialIcon>
                </SocialIcons>
              </TeamMemberContainer>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TeamPage;
