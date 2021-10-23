function timeConversion(s) {
  let result = "";
  let time = checkAMPM(s);
  if (time === "PM") {
    let arr = s.slice(0, s.indexOf("PM")).split(":");
    let hour = Number.parseInt(arr[0]) + 12;
    if (hour === 24) {
      hour = "00";
    }
    result = hour + ":" + arr[1] + ":" + arr[2];
  } else {
    result = s.slice(0, s.indexOf("AM"));
  }
  return result;
}

function checkAMPM(time) {
  if (time.indexOf("PM")) {
    return "PM";
  } else {
    return "AM";
  }
}

console.log(timeConversion("07:05:45PM"));
