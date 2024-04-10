// Function to generate password
async function generatePassword() {
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
    try {
        // Make API call with parameters and use promises to get response
        const response = await fetch("https://nkx0b5is2j.execute-api.us-east-1.amazonaws.com/test", requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        // Display the generated password in the password-output div
        document.getElementById('password-output').innerHTML = result.message;
    } catch (error) {
        console.error('There was a problem with the Fetch operation:', error);
        // Display error message in the password-output div
        document.getElementById('password-output').innerHTML = 'Error: ' + error.message;
    }
}

// Attach the generatePassword function to the button's click event
document.getElementById('generate-btn').addEventListener('click', generatePassword);
