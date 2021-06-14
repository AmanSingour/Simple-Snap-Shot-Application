// REGEX TO MATCH PATTERN FOR FORM VALIDATION

export const mailformat =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const pwdRegex = /^(?=\\S+$).{4, 20}$/;

export const nameRegex = /^[a-zA-Z]$/;
