function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
const email1 = "anuska@example.com";
const email2 = "anuskaexample.com";
const email3 = "anuska@examplecom";
//Validate the email address and log the result
if (validateEmail(email1)) {
    console.log(`${email1} is a valid email address.`);
}else {
    console.log(`${email1} is not a valid email address.`);   
}
if (validateEmail(email2)) {
    console.log(`${email2} is a valid email address.`);
}else {
    console.log(`${email2} is not a valid email address.`);   
}
if (validateEmail(email3)) {
    console.log(`${email3} is a valid email address.`);
}else {
    console.log(`${email3} is not a valid email address.`);   
}