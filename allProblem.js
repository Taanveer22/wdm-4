function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0) {
    return "Invalid Input";
  } else if (expenses > income) {
    return "Invalid Input";
  }
  let savings = income - expenses;
  let tax = savings * 0.2;
  return tax;
}

function sendNotification(email) {
  if (email.includes("@") === false) {
    return "Invalid Email";
  }
  let usernameDomainBoth = email.split("@");
  let onlyUsername = usernameDomainBoth[0];
  let onlyDomain = usernameDomainBoth[1];
  let notificationText = onlyUsername + " sent you an email from " + onlyDomain;
  return notificationText;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  } else {
    if (name.includes(0)) {
      return true;
    } else if (name.includes(1)) {
      return true;
    } else if (name.includes(2)) {
      return true;
    } else if (name.includes(3)) {
      return true;
    } else if (name.includes(4)) {
      return true;
    } else if (name.includes(5)) {
      return true;
    } else if (name.includes(6)) {
      return true;
    } else if (name.includes(7)) {
      return true;
    } else if (name.includes(8)) {
      return true;
    } else if (name.includes(9)) {
      return true;
    } else {
      return false;
    }
  }
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  let studentTestScore = obj.testScore;
  let studentSchoolGrade = obj.schoolGrade;
  let studentBonusPoint = obj.isFFamily;
  if (obj.isFFamily === true) {
    studentBonusPoint = 20;
  } else {
    studentBonusPoint = 0;
  }
  let totalScore = studentTestScore + studentSchoolGrade + studentBonusPoint;
  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) !== true ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  }
  let totalWaitingTimes = 0;
  for (const element of waitingTimes) {
    totalWaitingTimes = element + totalWaitingTimes;
  }
  let avgWaitingTime = totalWaitingTimes / waitingTimes.length;
  let avgWaitingTimeRounded = Math.round(avgWaitingTime);
  let candidateRemainingBeforeIsrat = serialNumber - 1;
  let vivaRemainingBeforeIsrat =
    candidateRemainingBeforeIsrat - waitingTimes.length;
  let waitingTimeForIsratViva =
    vivaRemainingBeforeIsrat * avgWaitingTimeRounded;
  return waitingTimeForIsratViva;
}
