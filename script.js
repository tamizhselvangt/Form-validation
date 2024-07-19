// document.querySelector(".form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   let name = document.querySelector("#first-name").value;
//   let email = document.querySelector("#email").value;
//   let city = document.querySelector("#city").value;
//   let phoneNumber = document.querySelector("#phone-number").value;

//   if (name === "" || email === "" || city === "" || phoneNumber === "") {
//     alert("Please Enter the Feilds");
//     return false;
//   } else if (phoneNumber.length < 10) {
//     alert("Please Enter Valid Phone Number, Number Should be 10 Character");
//   } else {
//     confirm("Form Submitted");
//     document.querySelector("#first-name").value = "";
//     email = "";
//     city = "";
//     phoneNumber = "";
//   }
// });

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector("#first-name").value;
  let email = document.querySelector("#email").value;
  let city = document.querySelector("#city").value;
  let phoneNumber = document.querySelector("#phone-number").value;

  if (name === "" || email === "" || city === "" || phoneNumber === "") {
    alert("Please Enter the Feilds");
    return false;
  } else if (phoneNumber.length < 10) {
    alert("Please Enter Valid Phone Number, Number Should be 10 Character");
  } else {
    confirm("Form Submitted");
    document.querySelector("#first-name").value = ""; 
    document.querySelector("#email").value = ""; 
    document.querySelector("#city").value = ""; 
    document.querySelector("#phone-number").value = ""; 
  }
});
