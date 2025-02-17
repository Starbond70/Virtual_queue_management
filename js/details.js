// Function to retrieve URL parameters
function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    barber: urlParams.get('barber'),
    appointmentType: urlParams.get('appointmentType'),
    date: urlParams.get('date'),
    time: urlParams.get('time'),
  };
}

// Populate the form with the selected appointment details
document.addEventListener('DOMContentLoaded', () => {
  const appointmentData = getQueryParams();

  if (appointmentData.barber && appointmentData.appointmentType && appointmentData.date && appointmentData.time) {
    // Display the appointment details for review
    alert(`You have selected: \nBarber: ${appointmentData.barber}\nAppointment Type: ${appointmentData.appointmentType}\nDate: ${appointmentData.date}\nTime: ${appointmentData.time}`);
  } else {
    alert('No appointment data found.');
  }

  // Handle form submission to book the appointment
  const form = document.getElementById('personalDetailsForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture user details
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
      // Normally, here you would send the data to a server via an API call
      console.log(`Appointment Booked:
        Barber: ${appointmentData.barber}
        Type: ${appointmentData.appointmentType}
        Date: ${appointmentData.date}
        Time: ${appointmentData.time}
        Name: ${name}
        Email: ${email}
        Phone: ${phone}`);
      
      alert("Your appointment has been booked!");
    } else {
      alert('Please fill in all your personal details');
    }
  });
});
