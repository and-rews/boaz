// Get the form and its elements
const formm = document.getElementById("reservation-form");
const roomType = form.elements["room_type"];
const arrivalDate = form.elements["arrival_date"];
const departureDate = form.elements["departure_date"];

// Define the prices
const prices = {
  "Apartment 1 (Ground Floor)": [100, 80, 60, 40],
  "Apartment 2 (Ground Floor)": [120, 100, 80, 60],
};

// Add an event listener to the form submit button
formm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting

  // Calculate the number of days between the arrival and departure dates
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const startDate = new Date(arrivalDate.value);
  const endDate = new Date(departureDate.value);
  const numDays = Math.round(Math.abs((startDate - endDate) / oneDay));

  // Get the selected room type and its corresponding price
  const selectedRoomType = roomType.value;
  const roomPrices = prices[selectedRoomType];

  // Calculate the total price based on the number of days and room type
  let totalPrice;
  if (numDays <= 6) {
    totalPrice = numDays * roomPrices[0];
  } else if (numDays <= 13) {
    totalPrice = 6 * roomPrices[0] + (numDays - 6) * roomPrices[1];
  } else if (numDays <= 27) {
    totalPrice =
      6 * roomPrices[0] + 7 * roomPrices[1] + (numDays - 13) * roomPrices[2];
  } else {
    totalPrice =
      6 * roomPrices[0] +
      7 * roomPrices[1] +
      14 * roomPrices[2] +
      (numDays - 27) * roomPrices[3];
  }

  // Display the total price to the user
  alert(`Total Price: $${totalPrice}`);

  // Save the total price in Local Storage
  localStorage.setItem("totalPrice", totalPrice);

  // Redirect to the booking-details.html page
  window.location.href = "booking-details.html";
});
// Get the form element
// const formm = document.getElementById("reservation-form");

// // Add an event listener to the form submit button
// formm.addEventListener("submit", function (event) {
//   // Prevent the form from submitting
//   event.preventDefault();

//   // Get the room type selected by the user
//   const roomType = document.getElementById("room_type").value;

//   // Get the check-in and check-out dates
//   const checkInDate = new Date(document.getElementById("arrival_date").value);
//   const checkOutDate = new Date(
//     document.getElementById("departure_date").value
//   );

//   // Calculate the number of days between the check-in and check-out dates
//   const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
//   const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

//   // Set the daily rates for each room type
//   let dailyRate = 0;
//   if (roomType === "Apartment 1 (Ground Floor)") {
//     if (numberOfDays <= 6) {
//       dailyRate = 100;
//     } else if (numberOfDays <= 13) {
//       dailyRate = 80;
//     } else if (numberOfDays <= 27) {
//       dailyRate = 60;
//     } else {
//       dailyRate = 40;
//     }
//   } else if (roomType === "Apartment 2 (Ground Floor)") {
//     if (numberOfDays <= 6) {
//       dailyRate = 120;
//     } else if (numberOfDays <= 13) {
//       dailyRate = 100;
//     } else if (numberOfDays <= 27) {
//       dailyRate = 80;
//     } else {
//       dailyRate = 60;
//     }
//   }

//   // Calculate the total price
//   const totalPrice = dailyRate * numberOfDays;

//   // Get the total price element
//   const totalPriceElement = document.getElementById("total-price");

//   // Set its text content to the total price
//   totalPriceElement.textContent = ` ${totalPrice}`;
// });
