// 1. Select the elements
const form = document.getElementById("userForm");
const outputDiv = document.getElementById("output");

// 2. Add an event listener to the form to handle submission
form.addEventListener("submit", function (event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // 3. Get the values from the inputs
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const dob = document.getElementById("dob").value.trim();

  // 4. Create an object to store the data
  const userInformation = {
    name: name,
    age: age,
    dob: dob,
  };

  // 5. Save to Storage
  // localStorage: Persists even after closing browser
  localStorage.setItem("userProfile", JSON.stringify(userInformation));

  // sessionStorage: Cleared when the tab/browser is closed
  sessionStorage.setItem("userProfile", JSON.stringify(userInformation));

  // 6. Update the UI to show the saved data
  displayStoredData();
});

// Helper function to show data on the page
function displayStoredData() {
  const savedData = localStorage.getItem("userProfile");
  if (savedData) {
    const user = JSON.parse(savedData);
    outputDiv.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>DOB:</strong> ${user.dob}</p>
        `;
  }
}

// Display data immediately if the page is refreshed and data already exists
window.onload = displayStoredData;
