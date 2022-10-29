var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");
var form_6 = document.querySelector(".form_6");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");
var form_6_btns = document.querySelector(".form_6_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");
var form_5_next_btn = document.querySelector(".form_5_btns .btn_next");
var form_6_back_btn = document.querySelector(".form_6_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");
var form_5_progessbar = document.querySelector(".form_5_progessbar");
var form_6_progessbar = document.querySelector(".form_6_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

// form_1_next_btn.addEventListener("click", function () {
//   function formValidation1() {
//     var firstNameInput = document.getElementsByName("firstName");
//     var lastNameInput = document.getElementsByName("lastName");
//     var studentNumberInput = document.getElementsByName("studentNumber");
//     var gender = document.getElementsByName("gender");
//     var courses = document.getElementsByName("courses");
//     var yearLevel = document.getElementsByName("yearLevel");

//     if (allLetter(firstNameInput, lastNameInput)) {
//       if (allnumeric(studentNumberInput)) {
//         if (validSex(gender)) {
//           if (validCourses(courses)) {
//             if (validYearLevel(yearLevel)) {
//               form_1.style.display = "none";
//               form_2.style.display = "block";
//               form_1_btns.style.display = "none";
//               form_2_btns.style.display = "flex";
//               form_2_progessbar.classList.add("active");
//             }
//           }
//         }
//       }
//     }
//   }
// });

// function formValidation1() {
//   var firstNameInput = document.getElementsByName("firstName");
//   var lastNameInput = document.getElementsByName("lastName");
//   var studentNumberInput = document.getElementsByName("studentNumber");
//   var gender = document.getElementsByName("gender");
//   var courses = document.getElementsByName("courses");
//   var yearLevel = document.getElementsByName("yearLevel");

//   form_1_next_btn.addEventListener("click", function () {
//     if (allnumeric(studentNumberInput)) {
//       if (validSex(gender)) {
//         if (validCourses(courses)) {
//           if (validYearLevel(yearLevel)) {
//             form_1.style.display = "none";
//             form_2.style.display = "block";
//             form_1_btns.style.display = "none";
//             form_2_btns.style.display = "flex";
//             form_2_progessbar.classList.add("active");
//           }
//         }
//       }
//     }
//   }
// }

form_1_next_btn.addEventListener("click", function () {
  form_1.style.display = "none";
  form_2.style.display = "block";
  form_1_btns.style.display = "none";
  form_2_btns.style.display = "flex";
  form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function () {
  form_1.style.display = "block";
  form_2.style.display = "none";
  form_1_btns.style.display = "flex";
  form_2_btns.style.display = "none";
  form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function () {
  form_2.style.display = "none";
  form_3.style.display = "block";

  form_3_btns.style.display = "flex";
  form_2_btns.style.display = "none";

  form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function () {
  form_2.style.display = "block";
  form_3.style.display = "none";

  form_3_btns.style.display = "none";
  form_2_btns.style.display = "flex";

  form_3_progessbar.classList.remove("active");
});

form_3_next_btn.addEventListener("click", function () {
  form_3.style.display = "none";
  form_4.style.display = "block";

  form_4_btns.style.display = "flex";
  form_3_btns.style.display = "none";

  form_4_progessbar.classList.add("active");
});

form_4_back_btn.addEventListener("click", function () {
  form_3.style.display = "block";
  form_4.style.display = "none";

  form_4_btns.style.display = "none";
  form_3_btns.style.display = "flex";

  form_4_progessbar.classList.remove("active");
});

form_4_next_btn.addEventListener("click", function () {
  form_4.style.display = "none";
  form_5.style.display = "block";

  form_5_btns.style.display = "flex";
  form_4_btns.style.display = "none";

  form_5_progessbar.classList.add("active");
});

form_5_back_btn.addEventListener("click", function () {
  form_4.style.display = "block";
  form_5.style.display = "none";

  form_5_btns.style.display = "none";
  form_4_btns.style.display = "flex";

  form_5_progessbar.classList.remove("active");
});

form_5_next_btn.addEventListener("click", function () {
  form_5.style.display = "none";
  form_6.style.display = "block";

  form_6_btns.style.display = "flex";
  form_5_btns.style.display = "none";

  form_6_progessbar.classList.add("active");
});

form_6_back_btn.addEventListener("click", function () {
  form_5.style.display = "block";
  form_6.style.display = "none";

  form_6_btns.style.display = "none";
  form_5_btns.style.display = "flex";

  form_6_progessbar.classList.remove("active");
});

// check for all  letters input
function allLetter(fname, lname) {
  var letters = /^[A-Za-z]+$/;
  if (fname.value.match(letters) && lname.value.match(letters)) {
    return true;
  } else {
    alert("First, Last name must have alphabet characters only!");
    if (fname.value.match(letters)) {
      firstNameInput.focus();
    } else {
      lastNameInput.focus();
    }
    return false;
  }
}

// check for student number
function allnumeric(studentNumberInput) {
  var numbers = /^[0-9]+$/;
  if (
    studentNumberInput.value.match(numbers) &&
    studentNumberInput.value.toString().length == 11
  ) {
    return true;
  } else {
    if (
      studentNumberInput.value.toString().length != 11 &&
      studentNumberInput.value.match(numbers)
    ) {
      alert("Student number should be 11 digits!");
      studentNumberInput.focus();
    } else {
      alert("Please input numeric characters only in Student Number!");
      studentNumberInput.focus();
    }
    return false;
  }
}

// check email
function validateEmail(ue, personal) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (ue.value.match(mailformat) && personal.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    ue.focus();
    return false;
  }
}

// validate sex
function validSex(gender) {
  if (gender.value == "Default") {
    alert("Please Select Gender!");
    gender.focus();
    return false;
  } else {
    return true;
  }
}

// validate courses
function validCourses(courses) {
  if (courses.value == "Default") {
    alert("Please Select Courses!");
    courses.focus();
    return false;
  } else {
    return true;
  }
}

// validate courses
function validYearLevel(yearLevel) {
  if (yearLevel.value == "Default") {
    alert("Please Select Year Level!");
    yearLevel.focus();
    return false;
  } else {
    alert("Form Succesfully Submitted.");
    window.location.reload();
    return true;
  }
}

btn_done.addEventListener("click", function () {
  modal_wrapper.classList.add("active");
});

shadow.addEventListener("click", function () {
  modal_wrapper.classList.remove("active");
});
