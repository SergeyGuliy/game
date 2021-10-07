// /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

export default function validatePhone(tel) {
  const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  const res = tel.replace(/[^+\d]/g, "");
  return re.test(String(res).toLowerCase()) && res.length >= 4;
}
