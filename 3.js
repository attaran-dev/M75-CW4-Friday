const names = [
  { name: "Majid", family: "Majidi" },
  { name: "Hassan", family: "Hassani" },
];
function con(names){
    let fullNames = [];
    names.forEach(item => {
        let fullName = item['name'] + ' ' + item['family'];
        fullNames.push(fullName)
    });
    return fullNames;
}