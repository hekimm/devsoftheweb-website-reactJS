import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendContactForm } from "../../src/redux/actions/contactActions";
import styled, { createGlobalStyle } from "styled-components";
import { FaUser, FaEnvelope, FaPen, FaPaperPlane } from "react-icons/fa";
import backgroundImage from "./background-6.png";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    color: #4A4A4A;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
    line-height: 1.6;
    margin: 0;
  }
`;

const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const ContactForm = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 2.2em;
  color: #333333;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  font-size: 1em;
  border-radius: 10px;
  background-color: #3498db;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(41, 128, 185, 0.3);
  }
`;

const StyledForm = styled.form`
  font-size: 1em;
`;

const StyledFormGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: #7f8c8d;
  font-size: 1.2em;
`;

const StyledFormControl = styled.input`
  background-color: #ecf0f1;
  border: none;
  border-radius: 10px;
  font-size: 1em;
  padding: 15px;
  padding-left: 45px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;

  &:focus {
    outline: none;
    border-color: #3498db;
    + ${IconWrapper} {
      color: #3498db;
    }
    box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
  }

  &::placeholder {
    color: #b2bec3;
  }
`;

const StyledFormLabel = styled.label`
  font-weight: bold;
  font-size: 1.1em;
  color: #2c3e50;
  display: block;
  margin-bottom: 10px;
`;

const StyledTextArea = styled(StyledFormControl).attrs({ as: "textarea" })`
  padding: 15px;
  line-height: 1.5;
  resize: none;
  border-radius: 10px;

  &::placeholder {
    font-style: italic;
    color: #b3b3b3;
  }

  &:hover {
    background-color: #fafafa;
  }
`;

const ContactPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactForm(formData));
  };

  return (
    <>
      <GlobalStyle />
      <ContactFormWrapper>
        <ContactForm>
          <Title>İletişim Formu</Title>
          <StyledForm onSubmit={handleSubmit}>
            <StyledFormGroup>
              <StyledFormLabel htmlFor="formName">Adınız</StyledFormLabel>
              <StyledFormControl
                type="text"
                id="formName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Adınızı giriniz"
              />
              <IconWrapper>
                <FaUser />
              </IconWrapper>
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledFormLabel htmlFor="formEmail">
                Email Adresiniz
              </StyledFormLabel>
              <StyledFormControl
                type="email"
                id="formEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email adresinizi giriniz"
              />
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledFormLabel
                htmlFor="formMessage"
                style={{ marginBottom: "20px" }}
              >
                Mesajınız
              </StyledFormLabel>
              <StyledTextArea
                rows={5}
                id="formMessage"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Mesajınızı buraya yazabilirsiniz"
              />
              <IconWrapper style={{ top: "30px" }}>
                <FaPen />
              </IconWrapper>
            </StyledFormGroup>
            <StyledButton type="submit">
              <FaPaperPlane style={{ marginRight: "10px" }} />
              Gönder
            </StyledButton>
          </StyledForm>
        </ContactForm>
      </ContactFormWrapper>
    </>
  );
};

export default ContactPage;
