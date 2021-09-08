const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log("Utility executed");

const Utility = {
  val: 1,

  formatTime: function (date) {
    let hour = date.getHours();
    hour = hour < 10 ? "0" + hour.toString() : hour.toString();
    let minute = date.getMinutes();
    minute = minute < 10 ? "0" + minute.toString() : minute.toString();

    let month = date.getMonth();
    month = monthNames[month];

    return (
      hour +
      ":" +
      minute +
      " " +
      month +
      " " +
      date.getDate().toString() +
      " " +
      date.getFullYear().toString()
    );
  },
};

export default Utility;
