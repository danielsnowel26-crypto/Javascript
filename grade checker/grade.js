document.addEventListener("DOMContentLoaded", function () {
  // 1. DOM Elements
  const studentNameInput = document.getElementById("studentName");
  const numSubjectsInput = document.getElementById("numSubjects");
  const setupSubjectsBtn = document.getElementById("setupSubjectsBtn");
  const subjectInputsDiv = document.getElementById("subjectInputs");
  const generateReportBtn = document.getElementById("generateReportBtn");
  const reportSection = document.getElementById("reportSection");
  const reportDetailsDiv = document.getElementById("reportDetails");
  const newStudentBtn = document.getElementById("newStudentBtn");
  const resetBtn = document.getElementById("resetBtn");
  const inputSection = document.getElementById("inputSection");
  const nameError = document.getElementById("nameError");
  const subjectError = document.getElementById("subjectError");

  let numSubjects = 0;

  // 2. Setup Subject Input Fields Dynamically
  setupSubjectsBtn.addEventListener("click", function () {
    nameError.style.display = "none";
    subjectError.style.display = "none";

    const name = studentNameInput.value.trim();
    numSubjects = parseInt(numSubjectsInput.value);

    // Validation
    if (!name) {
      nameError.style.display = "block";
      return;
    }
    if (isNaN(numSubjects) || numSubjects < 1 || numSubjects > 10) {
      subjectError.style.display = "block";
      return;
    }

    // Clear previous dynamic inputs
    subjectInputsDiv.innerHTML = "";

    // Generate input rows
    for (let i = 1; i <= numSubjects; i++) {
      const row = document.createElement("div");
      row.className = "subject-row";

      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.placeholder = `Subject ${i} Name`;
      nameInput.id = `subject${i}`;

      const gradeInput = document.createElement("input");
      gradeInput.type = "number";
      gradeInput.placeholder = "Grade (0-100)";
      gradeInput.min = "0";
      gradeInput.max = "100";
      gradeInput.id = `grade${i}`;

      row.appendChild(nameInput);
      row.appendChild(gradeInput);
      subjectInputsDiv.appendChild(row);
    }

    generateReportBtn.style.display = "block";
  });

  // 3. Generate Report
  generateReportBtn.addEventListener("click", function () {
    const name = studentNameInput.value.trim().toUpperCase();
    let totalScore = 0;
    let tableRows = "";
    let hasError = false;

    for (let i = 1; i <= numSubjects; i++) {
      const subName = document.getElementById(`subject${i}`).value.trim();
      const subGrade = parseFloat(document.getElementById(`grade${i}`).value);

      if (!subName || isNaN(subGrade) || subGrade < 0 || subGrade > 100) {
        alert(`Please enter a valid subject name and grade (0-100) for Subject ${i}.`);
        hasError = true;
        break;
      }

      totalScore += subGrade;
      tableRows += `
        <tr>
          <td>${subName}</td>
          <td>${subGrade}</td>
        </tr>
      `;
    }

    if (hasError) return;

    // Calculations
    const average = Math.round(totalScore / numSubjects);
    let letterGrade = "F";
    if (average >= 70) letterGrade = "A";
    else if (average >= 60) letterGrade = "B";
    else if (average >= 50) letterGrade = "C";
    else if (average >= 45) letterGrade = "D";

    // Build Report Card HTML
    reportDetailsDiv.innerHTML = `
      <div class="report-header">STUDENT REPORT</div>
      <p style="margin-bottom: 15px;"><strong>Name:</strong> ${name}</p>
      <table class="report-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
      <div class="summary-boxes">
        <div class="grade-box avg">
          <div style="font-size: 12px;">Average</div>
          <div style="font-size: 22px;">${average}%</div>
        </div>
        <div class="grade-box final">
          <div style="font-size: 12px;">Final Grade</div>
          <div style="font-size: 22px;">${letterGrade}</div>
        </div>
      </div>
    `;

    // Toggle View
    inputSection.style.display = "none";
    reportSection.style.display = "block";
  });

  // 4. Add New Student (Keep inputs open, clear values)
  newStudentBtn.addEventListener("click", function () {
    studentNameInput.value = "";
    numSubjectsInput.value = "";
    subjectInputsDiv.innerHTML = "";
    generateReportBtn.style.display = "none";

    reportSection.style.display = "none";
    inputSection.style.display = "block";
  });

  // 5. Reset All
  resetBtn.addEventListener("click", function () {
    studentNameInput.value = "";
    numSubjectsInput.value = "";
    subjectInputsDiv.innerHTML = "";
    generateReportBtn.style.display = "none";
    nameError.style.display = "none";
    subjectError.style.display = "none";

    reportSection.style.display = "none";
    inputSection.style.display = "block";
  });
});