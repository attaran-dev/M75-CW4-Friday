// const date1 = new Date();
function weekend(date) {
  let arr = date.toString().split(" ");
  if (arr[0] === "Sun" || arr[0] === "Sat") {
    return "It's weekend.";
  } else {
    return "It's not weekend.";
  }
}
// console.log(weekend(date1));
//-------------------------
// let date1 = prompt('Type the first date: (year, month, day, hours, minutes, seconds, milliseconds)')
// let date2 = prompt('Type the second date: (year, month, day, hours, minutes, seconds, milliseconds)')
// const dateDifDay1 = new Date(date1);
// const dateDifDay2 = new Date(date2);
function DifDay(date1, date2) {
  return (
    "There is " +
    parseInt((date1.getTime() - date2.getTime()) / 86400000) +
    " days between " +
    date1 +
    " and " +
    date2
  );
}
// console.log(DifDay(dateDifDay1, dateDifDay2))
//-------------------------
// let date = prompt(
//   "Type a date: (year, month, day, hours, minutes, seconds, milliseconds)"
// );
// const yPNDate = new Date(date);
function yDayPMonthNMonth(date) {
  return {
    yesterday: date.getDate() === 1 ? "30 or 31" : date.getDate() - 1,
    previousMonth: date.getMonth() === 0 ? 12 : date.getMonth(),
    nextMonth: date.getMonth() === 11 ? 1 : date.getMonth() + 2,
  };
}
// console.log(yDayPMonthNMonth(yPNDate));
//-------------------------
// let date = prompt('Type a date: (year, month, day, hours, minutes, seconds, milliseconds)')
// const dateToMonthDate = new Date(date);
function dateOfMonth(date) {
  return date.getDate();
}
// console.log(dateOfMonth(dateToMonthDate));
//------------------------
// let date = prompt('Type a date: (year, month, day, hours, minutes, seconds, milliseconds)')
// const dateHourToAMPM = new Date(date);
function dateToAMPM(date) {
  let result;
  if (date.getHours() < 12) {
    result = "It's " + date.getHours() + ":" + date.getMinutes() + "AM";
  } else {
    result = "It's " + date.getHours() + ":" + date.getMinutes() + "PM";
  }
  return result;
}
// console.log(dateToAMPM(dateHourToAMPM))
//------------------------
// let date1 = prompt('Type the first date: (year, month, day, hours, minutes, seconds, milliseconds)')
// let date2 = prompt('Type the second date: (year, month, day, hours, minutes, seconds, milliseconds)')
// const dateDifMin1 = new Date(date1);
// const dateDifMin2 = new Date(date2);
function DifMin(date1, date2) {
  return (
    "There is " +
    parseInt((date1.getTime() - date2.getTime()) / 60000) +
    " Minutes between " +
    date1 +
    " and " +
    date2
  );
}
// console.log(DifMin(dateDifMin1, dateDifMin2))
