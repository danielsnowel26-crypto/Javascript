// Run this code only after the HTML page fully loads
document.addEventListener("DOMContentLoaded", function () {
  // --- STEP 1: Get all the HTML elements we need ---
  const studentNameInput = document.getElementById("studentName"); // Input for student's name
  const numSubjectsInput = document.getElementById("numSubjects"); // Input for number of subjects
  const setupSubjectsBtn = document.getElementById("setupSubjectsBtn"); // Button to create subject fields
  const subjectInputsDiv = document.getElementById("subjectInputs"); // Container for subject + grade inputs
  const generateReportBtn = document.getElementById("generateReportBtn"); // Button to generate report
  const reportSection = document.getElementById("reportSection"); // Section that shows the report
  const reportDetailsDiv = document.getElementById("reportDetails"); // Where report details go
  const newStudentBtn = document.getElementById("newStudentBtn"); // Button to add another student
  const resetBtn = document.getElementById("resetBtn"); // Button to reset everything
  const inputSection = document.getElementById("inputSection"); // Section where we input data
  const nameError = document.getElementById("nameError"); // Error message for name
  const subjectError = document.getElementById("subjectError"); // Error message for subjects


  // --- STEP 2: When "Setup Subjects" is clicked ---
  setupSubjectsBtn.addEventListener("click", function () {
    let isValid = true;

    // Check if student name is empty
    if (!studentNameInput.value.trim()) {
      nameError.style.display = "block"; // show error
      isValid = false;
    } else {
      nameError.style.display = "none"; // hide error
    }

    // Check if number of subjects is valid (1–10)
    const numSubjects = parseInt(numSubjectsInput.value);
    if (isNaN(numSubjects) || numSubjects < 1 || numSubjects > 10) {
      subjectError.style.display = "block";
      isValid = false;
    } else {
      subjectError.style.display = "none";
    }

    if (!isValid) return; // Stop if invalid

    // Clear old inputs before creating new ones
    subjectInputsDiv.innerHTML = "";

    // Create subject + grade input fields
    for (let i = 0; i < numSubjects; i++) {
      const subjectRow = document.createElement("div");
      subjectRow.className = "subject-row";

      // Subject input
      const subjectInput = document.createElement("input");
      subjectInput.type = "text";
      subjectInput.placeholder = `Subject ${i + 1} Name`;
      subjectInput.id = `subject${i}`;

      // Grade input
      const gradeInput = document.createElement("input");
      gradeInput.type = "number";
      gradeInput.min = 0;
      gradeInput.max = 100;
      gradeInput.placeholder = "Grade (0-100)";
      gradeInput.id = `grade${i}`;

      subjectRow.appendChild(subjectInput);
      subjectRow.appendChild(gradeInput);
      subjectInputsDiv.appendChild(subjectRow);
    }

    // Show "Generate Report" button
    generateReportBtn.style.display = "block";
  });

  // --- STEP 3: When "Generate Report" is clicked ---
  generateReportBtn.addEventListener("click", function () {
    subjects = [];
    grades = [];

    const numSubjects = parseInt(numSubjectsInput.value);
    let hasError = false;

    // Collect subject names and grades
    for (let i = 0; i < numSubjects; i++) {
      const subjectInput = document.getElementById(`subject${i}`);
      const gradeInput = document.getElementById(`grade${i}`);

      // Check subject name
      if (!subjectInput.value.trim()) {
        alert(`Please enter a name for subject ${i + 1}`);
        hasError = true;
        break;
      }

      // Check grade
      const grade = parseInt(gradeInput.value);
      if (isNaN(grade) || grade < 0 || grade > 100) {
        alert(`Please enter a valid grade (0-100) for ${subjectInput.value}`);
        hasError = true;
        break;
      }

      subjects.push(subjectInput.value);
      grades.push(grade);
    }

    if (hasError) return;

    // Calculate total and average
    let total = 0;
    for (let grade of grades) {
      total += grade;
    }
    const average = Math.floor(total / grades.length);

    // Determine grade level
    let gradeLevel;
    if (average >= 90) gradeLevel = "A";
    else if (average >= 80) gradeLevel = "B";
    else if (average >= 70) gradeLevel = "C";
    else if (average >= 60) gradeLevel = "D";
    else gradeLevel = "F";

    // Create the report
    let reportHTML = `
      <h3>Name: ${studentNameInput.value.toUpperCase()}</h3>
      <table>
        <tr>
          <th>Subject</th>
          <th>Grade</th>
        </tr>
    `;

    for (let i = 0; i < subjects.length; i++) {
      reportHTML += `
        <tr>
          <td>${subjects[i]}</td>
          <td>${grades[i]}</td>
        </tr>
      `;
    }

    reportHTML += `
      </table>
      <div class="grade-summary">
        <div class="grade-box">
          <div>Average</div>
          <div style="font-size: 24px; font-weight: bold;">${average}%</div>
        </div>
        <div class="grade-box grade-${gradeLevel}">
          <div>Final Grade</div>
          <div style="font-size: 24px; font-weight: bold;">${gradeLevel}</div>
        </div>
      </div>
    `;

    // Show the report and hide the input section
    reportDetailsDiv.innerHTML = reportHTML;
    reportSection.style.display = "block";
    inputSection.style.display = "none";
  });

  // --- STEP 4: Add new student (clear name and subjects) ---
  newStudentBtn.addEventListener("click", function () {
    reportSection.style.display = "none";
    inputSection.style.display = "block";
    studentNameInput.value = "";
    subjectInputsDiv.innerHTML = "";
    generateReportBtn.style.display = "none";
  });

  // --- STEP 5: Reset everything ---
  resetBtn.addEventListener("click", function () {
    reportSection.style.display = "none";
    inputSection.style.display = "block";
    studentNameInput.value = "";
    numSubjectsInput.value = "";
    subjectInputsDiv.innerHTML = "";
    generateReportBtn.style.display = "none";
    nameError.style.display = "none";
    subjectError.style.display = "none";
  });
}); // End of DOMContentLoaded