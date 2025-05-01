function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) !== true || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
    console.log(waitingTimes, serialNumber);

  let totalWaitingTimes = 0;
  for (let element of waitingTimes) {
    console.log(element);
    totalWaitingTimes = element + totalWaitingTimes;
  }
  console.log(totalWaitingTimes);

  let avgWaitingTime = totalWaitingTimes / waitingTimes.length;
  let avgWaitingTimeRounded = Math.round(avgWaitingTime);
  console.log(avgWaitingTimeRounded);

  let candidateRemainingBeforeIsrat = serialNumber - 1;
  console.log(candidateRemainingBeforeIsrat);

  let vivaRemainingBeforeIsrat =
    candidateRemainingBeforeIsrat - waitingTimes.length;
  console.log(vivaRemainingBeforeIsrat);

  let waitingTimeForIsratViva =
    vivaRemainingBeforeIsrat * avgWaitingTimeRounded;
  return waitingTimeForIsratViva;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([6],4));
console.log(waitingTime(7,10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
