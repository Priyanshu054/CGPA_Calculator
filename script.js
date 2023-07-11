"use strict";

// After clicking on Enter button
document.getElementById("semForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var semesterCount = parseInt(document.getElementById("semesterCount").value); // element.value = returns value inside input field

  var semesterDetails = document.getElementById("semesterDetails");
  // semesterDetails.innerHTML = '';
  semesterDetails.hidden = true;

  var semesterInputs = document.getElementById("semesterInputs");

  for (let i = 1; (i <= semesterCount) & (i <= 8); i++) {
    let sgpaInput = document.createElement("input");
    sgpaInput.type = "number";
    sgpaInput.id = "sgpa" + i;
    sgpaInput.min = "0";
    sgpaInput.max = "10.00";
    sgpaInput.step = "0.01";
    sgpaInput.required = true;
    sgpaInput.placeholder = "SGPA of Semester " + i;
    // sgpaInput.classList.add('dynamic-input'); // Add CSS class

    let creditInput = document.createElement("input");
    creditInput.type = "number";
    creditInput.id = "credit" + i;
    creditInput.min = "0";
    creditInput.max = "30";
    creditInput.required = true;
    creditInput.placeholder = "Credit in Semester " + i;
    // creditInput.classList.add('dynamic-input'); // Add CSS class

    semesterInputs.appendChild(sgpaInput);
    semesterInputs.appendChild(creditInput);
  }

  let button = document.createElement("button");
  button.id = "calculate";
  button.type = "submit";
  button.textContent = "Calculate CGPA";
  button.setAttribute("id", "calculate");
  semesterInputs.appendChild(button);

  // After clicking on Calculate CGPA button
  document
    .getElementById("sgpaForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      let totalCredit = 0;
      let SGPA_mul_credit = 0;

      for (let i = 1; i <= semesterCount; i++) {
        let sgpa = parseFloat(document.getElementById("sgpa" + i).value);
        let credit = parseInt(document.getElementById("credit" + i).value);

        totalCredit += credit;
        SGPA_mul_credit += sgpa * credit;
      }

      let cgpa = SGPA_mul_credit / totalCredit;

      document.getElementById("result").innerHTML = "CGPA: " + cgpa.toFixed(2); // toFixed(2) = precision upto 2 decimal values
    });
});
