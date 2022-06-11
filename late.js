// start coding your function here!
function running_late(date) {
  let hours = new Date(date).getHours();
  if (hours >= 22) {
    return "It is late!";
  } else {
    return "It is still early!";
  }
}

exports.running_late = running_late;