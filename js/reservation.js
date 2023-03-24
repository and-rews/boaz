// $(document).ready(function () {
//   $("#confirm-booking").click(function (event) {
//     var name = document.getElementById("name").value;
//     var phone_number = document.getElementById("phone-number").value;
//     var arrival_date = document.getElementById("check-in").value;
//     var departure_date = document.getElementById("check-out").value;
//     var room_type = document.getElementById("room-type").value;
//     var number_of_guests = document.getElementById("number-of-guests").value;
//     var number_of_children =
//       document.getElementById("number-of-children").value;
//     var number_of_adults = document.getElementById("number-of-adults").value;
//     var total_price = document.getElementById("total-price").value;

//     // Send the AJAX request
//     $.ajax({
//       url: "https://boaz.hotelipad.com/api/sr",
//       method: "POST",
//       data: {
//         name: name,
//         phone_number: phone_number,
//         arrival_date: arrival_date,
//         departure_date: departure_date,
//         room_type: room_type,
//         number_of_guests: number_of_guests,
//         number_of_children: number_of_children,
//         number_of_adults: number_of_adults,
//         total_price: total_price,
//       },
//       dataType: "json",
//       success: function (data) {
//         // Handle successful response here
//         alert("Your reservation was successfully booked!");
//         $("#form-details")[0].reset(); // Reset the form
//         window.location.href = "./"; // Redirect to booking details page
//       },
//       error: function (error) {
//         // Handle error here
//         console.error("There was a problem with the AJAX request:", error);
//       },
//     });
//   });
// });
