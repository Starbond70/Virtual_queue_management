function bookAppointment() {
  const barber = document.getElementById('barber').value;
  const appointmentType = document.getElementById('appointmentType').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (barber && appointmentType && date && time) {
    // Create a query string to pass the selected data to the next page
    const appointmentData = `barber=${barber}&appointmentType=${appointmentType}&date=${date}&time=${time}`;
    
    // Redirect to the details page with the selected appointment data
    window.location.href = `details.html?${appointmentData}`;
  } else {
    alert('Please fill in all required fields');
  }
}
