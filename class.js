const form = document.getElementById(userForm);
const output2 = document.getElementById("output2")

form.output2 = function () {
  preventfault();
}

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").Value.trim();
    const DOB = document.getElementById("dob").value.trim();

    const userinformation = { name,age, DOB};

    localStorage.setitem("sessionUser4", JSON.stringify{userinformation});
    sessionStorage.setitem("localUser4", JSON.stringify{userinformation});

    const storeUser = JSON.parse(localStorage.getitem{localUser4});