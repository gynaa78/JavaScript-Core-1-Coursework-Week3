/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = group.every (function (student){
  return (students.some(function(name){
    return name === student;
  }))
})   // complete this statement


// Some: returns true if AT LEAST one value returns true
// [true, false, true] == true, [false, false, false] == false

// Every: returns true if ALL values are true (if any are false, it returns false)
// [true, true, true] == true, [true, false, true] == false  

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
