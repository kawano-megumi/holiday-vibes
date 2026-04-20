const fullname = sessionStorage.getItem('keyNameName');
const zip = sessionStorage.getItem('keyNameZip');
const pref = sessionStorage.getItem('keyNamePref');
const address1 = sessionStorage.getItem('keyNameAddress1');
const address2 = sessionStorage.getItem('keyNameAddress2');
const tel = sessionStorage.getItem('keyNameTel');
const fromto = sessionStorage.getItem('keyNameFromto');

document.getElementById('fullname').textContent = fullname;
document.getElementById('zip').textContent = zip;
document.getElementById('pref').textContent = pref;
document.getElementById('address1').textContent = address1;
document.getElementById('address2').textContent = address2;
document.getElementById('tel').textContent = tel;
document.getElementById('fromto').textContent = fromto;
