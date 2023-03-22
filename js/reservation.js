// const form = document.getElementById("reservation-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // prevent the form from submitting normally

//   const formData = new FormData(form); // create a new FormData object to store the form data

//   fetch("https://boaz.hotelipad.com/api/sr", {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data); // handle the response data
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// });

$(document).ready(function () {
  $("#reservation-form").submit(function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Serialize the form data into a URL-encoded string
    var formData = $(this).serialize();

    // Send the AJAX request
    $.ajax({
      url: "https://boaz.hotelipad.com/api/sr",
      method: "POST",
      data: formData,
      dataType: "json",
      success: function (data) {
        // Handle successful response here
        alert("Your reservation was successfully booked!");
        $("#reservation-form")[0].reset(); // Reset the form
        window.location.href = "./booking-details.html"; // Redirect to booking details page
      },
      error: function (error) {
        // Handle error here
        console.error("There was a problem with the AJAX request:", error);
      },
    });
  });
});
