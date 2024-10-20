/* ROUTING */
export const BASE_ROUTING = import.meta.env.VITE_ROUTING || '/shop/';

/* IMAGES */
export const BASE_URL_IMAGE = import.meta.env.VITE_URL_IMAGE || './';

export const MASK_PHONE = '+7(999)-999-99-99';

export const PLACEHOLDERS = {
  name: 'Samatha Clarken',
  email: 'example@youremail.com',
  phone: MASK_PHONE,
  company: 'Moon',
  message: 'Type your message here...',
};
