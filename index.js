document.getElementById("travelForm").addEventListener("submit",function (e){
    e.preventDefault();

    if (!name ||!phone ||age ||!email ||!address) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("form-message").textContent =
    "Thank you for booking! we will contact you soon.";
    document.getElementById("travelform").resert();
});