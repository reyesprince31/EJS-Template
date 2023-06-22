export function today() {
  //   const daysOfWeek = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);
  return day;
  //   const dayOfWeek = today.getDay();

  //   console.log(dayOfWeek);
  //   console.log(daysOfWeek[dayOfWeek]);

  //   return daysOfWeek[dayOfWeek];
  //   //   const result =
  //   //     today.getDay() === 6 || today.getDay() === 0 ? "Weekend" : "Weekday";
}

let itemList = ["Buy Food", "Cook Food"];
export function addNewList(addNewItem) {
  if (addNewItem) {
    itemList.push(addNewItem);
  }
  return itemList;
}
