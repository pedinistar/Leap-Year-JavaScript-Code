function leapYearChecker(year) {
  if (year % 4 == 0) {
    console.log("Leap year.");
    if (year % 100 == 0) {
      console.log("Not leap year.");
      if (year % 400 == 0) {
        console.log("Leap year.");
      } else {
        console.log("Not leap year.");
      }
    } else {
      console.log("Leap year.");
    }
  } else {
    console.log("Not leap year.");
  }
}

leapYearChecker(2000);
