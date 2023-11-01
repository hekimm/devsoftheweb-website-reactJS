const initialState = {
  formData: {}
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_CONTACT_FORM_SUCCESS":
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

export default contactReducer;
