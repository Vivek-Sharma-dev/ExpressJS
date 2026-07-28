export const dataVarification = (data) => {
  console.log("Data verification function called");
  if(!data) {
    return {
      isValid: false,
      error: "Data cannot be empty"
    };
  }
  else if (!data.homeName) {
    return {
      isValid: false,
      error: "Home name cannot be empty"
    };
  } else if (!data.price) {
    return {
      isValid: false,
      error: "Price cannot be empty"
    };
  } else if (!data.location) {
    return {
      isValid: false,
      error: "Location cannot be empty"
    };
  } else if (!data.rating) {
    return {
      isValid: false,
      error: "Rating cannot be empty"
    };
  } else if (!data.image) {
    return {
      isValid: false,
      error: "Image URL cannot be empty"
    };
  }
  return { isValid: true }; 
};
