// fetch("https://boaz.hotelipad.com/api/tariffs", {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// })
//   .then((response) => {
//     // handle the response
//     console.log(response.data);
//     let select = document.querySelector("#tariff-selector");

//     response.json().then(function (data) {
//       console.log("data", data);
//       for (var i = 0; i <= data.length; i++) {
//         var opt = document.createElement("option");
//         opt.value = data[i].id;
//         opt.innerHTML = data[i].name + " (GHc " + data[i].rate + ")";
//         select.appendChild(opt);
//       }
//     });
//   })
//   .catch((error) => {
//     // handle the error
//     console.log(error);
//   });

// let form = document.querySelector("#reservation-form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formTr = new FormData(form);
//   console.log(formTr);

//   let response = fetch("https://boaz.hotelipad.com/api/sr", {
//     method: "POST",
//     body: new FormData(form),
//   });

//   response
//     .then((re) => re.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
//   // let data = await response.json()
//   // console.log(response)
//   // alert(response)
// });
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const form = document.getElementById("reservation-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  const formData = new FormData(form); // create a new FormData object to store the form data

  fetch("https://boaz.hotelipad.com/api/sr", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // handle the response data
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
