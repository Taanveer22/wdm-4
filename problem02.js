function sendNotification(email) {
  console.log(email);
  if (email.includes("@") === false) {
    return "Invalid Email";
  }
  console.log(email.split("@"));
  let usernameDomainBoth = email.split("@");
  let onlyUsername = usernameDomainBoth[0];
  let onlyDomain = usernameDomainBoth[1];
  console.log(usernameDomainBoth[0]);
  console.log(usernameDomainBoth[1]);
  let notificationText = onlyUsername + " sent you an email from " + onlyDomain;
  return notificationText;
}
console.log(sendNotification("taanver469@gmail.com"));
console.log(sendNotification('ziahdph@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification("sadia8icloud.com"));
