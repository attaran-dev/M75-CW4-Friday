const date1 = new Date();
function weekend(date) {
  let arr = date.toString().split(' ');
  if (arr[0]==='Sun' || arr[0]==='Sat'){
      return("It's weekend.");
  } else {
      return("It's not weekend.");
  }
}
//-------------------------
const date2 = new Date();
