export const sendContactForm = (formData) => {
  return (dispatch) => {
    // API isteği yapılabilir veya doğrudan başarılı bir aksiyon gönderilebilir
    dispatch({ type: "SEND_CONTACT_FORM_SUCCESS", payload: formData });
  };
};
