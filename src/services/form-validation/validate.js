import { 
    mailformat, 
    nameRegex, 
    pwdRegex 
} from "../../utils/data/_regex";

// VALIDATE METHOD WILL TAKE TWO PARAMS => TARGET NAME AND TARGET VALUE
// AND MATCH THEM AGAINST PREDEFINED REGEX

const validate = ({ name, value }) => {

  switch (name) {

    case "email":
      if (value && !value.match(mailformat))
        return "Please enter valid email address!";
      else if (!value) return "Email required!";
      return "";

    case "name":
      if (value && value.match(nameRegex)) return "Please enter valid name!";
      else if (!value) return "Name required!";
      return "";

    case "password":
      if (value && value.match(pwdRegex)) return "Password must be of length 6";
      else if (!value) return "Password required!";
      return "";

    default:
      return "";
      
  }
};

export default validate;
