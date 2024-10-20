export const validationEmail = (email) => {
  if (typeof email !== 'string') return false;

  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
    );
};

export const validationPhone = (phone) => {
  return !/\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/.test(phone);
};
