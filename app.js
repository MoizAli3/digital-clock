let hours = document.getElementById("hours");
let minus = document.getElementById("minus");
let second = document.getElementById("second");

function updateTime() {
  let d = new Date();
  hours.innerText = String(d.getHours()).padStart(2, "0");
  minus.innerText = String(d.getMinutes()).padStart(2, "0");
  second.innerText = String(d.getSeconds()).padStart(2, "0");
}

updateTime();

setInterval(updateTime, 1000);
