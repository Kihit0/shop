export const validationEmail = (email) => {
  if (typeof email !== 'string') return false;

  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
    );
};
