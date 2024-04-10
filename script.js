// Function to generate password
function generatePassword() {
    // Get the password length from the input field
    var passwordLength = document.getElementById('length').value;
    
    // Instantiate a headers object
    var myHeaders = new Headers();
    // Add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // Using built-in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"length": passwordLength});
    // Create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // Make API call with parameters and use promises to get response
    fetch("https://nkx0b5is2j.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
    .then(response => response.json()) // Parse the response as JSON
    .then(result => {
        // Display the generated password in the password-output div
        document.getElementById('password-output').innerHTML = result.message;
    })
    .catch(error => console.log('error', error));
}

// Attach the generatePassword function to the button's click event
document.getElementById('generate-btn').addEventListener('click', generatePassword);
