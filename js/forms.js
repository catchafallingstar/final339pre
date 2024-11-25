function isEmailValid (value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isNumberValid(value){
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return phoneRegex.test(phoneNumber);
}

// phone number formatter functions 
function formatPhoneNumber(value){
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g,'');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength <4) return phoneNumber;
  if(phoneNumberLength <7) {
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}` ;
  }
  return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`;

}

function PNformatter(value){
 const inputField = document.getElementById('pnumber');
 const formattedInput = formatPhoneNumber(inputField.value) ;
 inputField.value = formattedInput;
}
//
const input = document.querySelector('#pnumber');

input.addEventListener('keyup', (e) => {
  console.log(e.target);
  const formatted = formatPhoneNumber(e.target.value);
  e.target.value = formatted;


});

