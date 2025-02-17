let selectedServices = [];
let selectedBarber = "";
let selectedTime = "";

function toggleService(service) {
  const index = selectedServices.indexOf(service);
  if (index === -1) {
    selectedServices.push(service);
  } else {
    selectedServices.splice(index, 1);
  }
  event.target.classList.toggle('selected');
  document.getElementById("next-btn").classList.remove("hidden");
}

function selectBarber(name) {
  selectedBarber = name;
  document.querySelectorAll(".barber-card").forEach(card => card.classList.remove("selected"));
  event.target.classList.add("selected");
  document.getElementById("next-btn").classList.remove("hidden");
}

function selectTime(time) {
  selectedTime = time;
  document.querySelectorAll(".time-slots button").forEach(btn => btn.classList.remove("selected"));
  event.target.classList.add("selected");
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextPage(page) {
  localStorage.setItem("services", JSON.stringify(selectedServices));
  localStorage.setItem("barber", selectedBarber);
  localStorage.setItem("time", selectedTime);
  window.location.href = page;
}

function finalizeBooking() {
  alert("Your appointment is confirmed!");
}
