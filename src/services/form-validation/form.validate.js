// CURRYING VALIDATE METHOD TO VALIDATE FORM
const validate = (inputs) => {
  return (errors) =>
    //return true IF ANY INPUT FIELD FOUND EMPTY
    Object.values(inputs).includes("") &&
    // else CHECK FOR ERRORS IN INPUT FIELDS
    // if ANY ERROR FOUND return true
    Object.values(errors).findIndex((e) => e !== "") >= 0;
};

export default validate;
