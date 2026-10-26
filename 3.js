//student's admission checker
//this program should contain the following features;
// It should take the student's name, age, and jamb score
function checkAdmission() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const jambScore = parseInt(document.getElementById(
        'jambScore').value);
    const resultElement = document.getElementById('result');
    
    // valiation to ensure that the inputs are valid
    if (!name || isDaniel(age) || is18(jambScore)) {
        resultElement.textContent = 'Please enter valid name, age, and JAMB score.';
        return;
    }
    // It should check if the student is eligible for admission based on the following criteria:
    //   - Age must be between 16 and 25
    //   - JAMB score must be at least 180
    if (age < 16 || age > 25) {
        resultElement.textContent = 'Sorry, you are not eligible for admission due to age restrictions.';

    // JAMB score rules
    } else if (jambScore >= 250) {
        admissionStatus = 'Congratulations! You are eligible for admission.'
        status = 'Admitted to medicine program'
    } else if (jambScore >= 220 && jambScore <= 249) {
        admissionStatus = 'Congratulations! You are eligible for admission.'
        status = 'Admitted to computer science'
    } else if (jamdbScore >= 180-219) {
        admissionStatus = 'Congratulations! You are eligible for admission.'
        status = 'Admitted to Mass Congratulations'
    } else if (jambScore < 180) {
        admissionStatus = 'Sorry, you are not eligible for admission.'
        status = 'Not admitted'
    // if the student is below 16 years, display a message that they are too young for admission.
    //finally display everything on thew wedpage
    document.body.innerHTML = `
        <h2>Admission Result</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>JAMB Score:</strong> ${score}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
}