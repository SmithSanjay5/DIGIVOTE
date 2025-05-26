//localStorage.clear();
function sendOTP() {
    var aadharNumber = document.getElementById("aadharNumber").value;
    
    // Validate Aadhar number to allow only numbers
    if (!/^\d+$/.test(aadharNumber)) {
        alert("Please Enter Valid Aadhaar Number");
        return;
    }
    
    // Check if the Aadhar number is already stored
    if (localStorage.getItem(aadharNumber)) {
        alert("The Member is already Voted !");
        return;
    }
    
    // Simulated function to send OTP
    // You can implement your backend logic here
    alert("OTP sent successfully!");
}

function verifyOTP() {
    var aadharNumber = document.getElementById("aadharNumber").value;
    var enteredOTP = document.getElementById("otp").value;
    
    // Validate Aadhar number to allow only numbers
    if (!/^\d+$/.test(aadharNumber)) {
        alert("Please Enter Valid Aadhaar Number.");
        return;
    }
    
    // Check if the Aadhar number is already stored
    if (localStorage.getItem(aadharNumber)) {
        alert("The Member is already Voted !");
        return;
    }
    
    // Simulated function to verify OTP
    // You can implement your backend logic here
    if (enteredOTP === "123456") { // Dummy OTP for demonstration
        // Store the username in localStorage
        localStorage.setItem(aadharNumber, true);
        alert("OTP verified successfully! , Click OK to Vote");
        window.location.href = "voting.html"; // Redirect to voting page
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
