// Get the form element
const form = document.querySelector("#reservation-form");

// Add an event listener for form submission
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Get the values from the form data
  const fullName = formData.get("name");
  const phoneNumber = formData.get("phone_number");
  const roomType = formData.get("room_type");
  const checkIn = formData.get("arrival_date");
  const checkOut = formData.get("departure_date");
  const numGuests = formData.get("number_of_guests");
  const numAdults = formData.get("number_of_adults");
  const numChildren = formData.get("number_of_children");

  // Display the values in the console (for testing purposes)
  console.log("Full Name:", fullName);
  console.log("Phone Number:", phoneNumber);
  console.log("Room Type:", roomType);
  console.log("Check-In:", checkIn);
  console.log("Check-Out:", checkOut);
  console.log("Number of Guests:", numGuests);
  console.log("Number of Adults:", numAdults);
  console.log("Number of Children:", numChildren);

  // Redirect to the booking details page with the form data as URL parameters
  window.location.href = `./booking-details.html?name=${fullName}&phone_number=${phoneNumber}&room_type=${roomType}&arrival_date=${checkIn}&departure_date=${checkOut}&number_of_guests=${numGuests}&number_of_adults=${numAdults}&number_of_children=${numChildren}`;
});
