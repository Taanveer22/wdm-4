function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  // console.log(obj);
  let studentTestScore = obj.testScore;
  // console.log(studentTestScore);

  let studentSchoolGrade = obj.schoolGrade;
  //   console.log(studentSchoolGrade);

  let studentBonusPoint = obj.isFFamily;
  //   console.log(studentBonusPoint);

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

const person1 = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};

const person2 = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
};

const person3 = {
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
};

console.log(calculateFinalScore(person1));
console.log(calculateFinalScore(person2));
console.log(calculateFinalScore(person3));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore(true));
console.log(calculateFinalScore(44));
