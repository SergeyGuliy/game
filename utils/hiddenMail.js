const hiddenMail = (mail) => {
  const name = mail.split('@')[0];
  const first = name.slice(0, 1);
  const last = name.slice(-1);
  const fullname = first + '•••' + last;
  return fullname + '@' + mail.split('@')[1];
};

export default hiddenMail;
