function timeConversion(s) {
  let result = "";
  let time = checkAMPM(s);
  let arr = s.slice(0, s.indexOf(time)).split(":");
  if (time === "PM") {
    let hour = Number.parseInt(arr[0]);
    if (hour !== 12) {
      hour = hour + 12;
    }
    result = hour + ":" + arr[1] + ":" + arr[2];
  } else if (time === "AM") {
    let hour = Number.parseInt(arr[0]);
    if (hour === 12) {
      hour = "00";
      result = hour + ":" + arr[1] + ":" + arr[2];
    } else {
      result = s.slice(0, s.indexOf("AM"));
    }
  }
  return result;
}

function checkAMPM(time) {
  if (time.indexOf("PM") >= 0) {
    return "PM";
  } else {
    return "AM";
  }
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("07:05:45AM"));
