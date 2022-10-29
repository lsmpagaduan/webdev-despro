//  form 1
function formValidation1() {
  var firstNameInput = document.personalInformation.firstNameInput;
  var lastNameInput = document.personalInformation.lastNameInput;
  var studentNumberInput = document.personalInformation.studentNumberInput;
  var emailInput = document.personalInformation.emailInput;
  var gender = document.personalInformation.gender;
  var courses = document.personalInformation.courses;
  var yearLevel = document.personalInformation.yearLevel;

  if (allLetter(firstNameInput, lastNameInput)) {
    if (allnumeric(studentNumberInput)) {
      
        if (validSex(gender)) {
          if (validCourses(courses)) {
            if (validYearLevel(yearLevel)) {
            }
          }
        }
    }
  }
  return false;
}

// form 2
function formValidation2(){
  var ueEmailInput = document.personalInformation.ueEmailInput;
  var personalEmailInput = document.personalInformation.personalEmailInput;
  var contactNumber = document.personalInformation.contactNumber;
  var homeAddress = document.personalInformation.homeAddress;
  var provincialAddress = document.personalInformation.provincialAddress;
  var addressSameStatedAbove = document.personalInformation.addressSameStatedAbove;
}

if (validateEmail(ueEmailInput, personalEmailInput)) {
}


// button next
var next1 = document.personalInformation.next1;
var next2 = document.contactInformation.next2;
var next3 = document.socialMedia.next3;
var next4 = document.emergencyContact.next4;
var next5 = document.membershipType.next5;
var next6 = document.termsConditions.next6;

// next1.onclick = (){

// }


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
    if(studentNumberInput.value.toString().length != 11 && studentNumberInput.value.match(numbers)){
      alert("Student number should be 11 digits!");
      studentNumberInput.focus();
    }
    else{
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


