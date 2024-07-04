function updateTimeAndDay() {
  const currentTime = new Date().toUTCString();
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  document.getElementById("currentTime").textContent = currentTime;
  document.getElementById("currentDay").textContent = currentDay;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
