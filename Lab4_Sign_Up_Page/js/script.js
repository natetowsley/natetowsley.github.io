// event listener
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#pass").addEventListener("click", suggestPassword);
document.querySelector("#username").addEventListener("change", isAvailable);
document.querySelector("#signUpBtn").addEventListener("click", checkPassword);

displayStates();

async function displayCity() {
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
        let response = await fetch(url);

        try {
            let data = await response.json();
            console.log(data);
            if (data == false) {
                document.querySelector("#validZip").textContent = "No City found. Invalid Zip Code.";
            }
            else {
                document.querySelector("#validZip").textContent = "";
                document.querySelector("#city").textContent = data.city;
                document.querySelector("#lat").textContent = data.latitude;
                document.querySelector("#lon").textContent = data.longitude;                
            }
        } catch (error) {
            console.log("Parsing error: " + error);
        }

    } catch (error) {
        console.log("Network error: " + error);
    }
}

async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.state;
                optionElement.value = i.usps;
                document.querySelector("#state").append(optionElement);
            }
        } catch (error) {
            console.log("Parsing error: " + error);
        }

    } catch (error) {
        console.log("Network error: " + error);
    }
}

async function displayCounties() {
    let state = document.querySelector("#state").value;
    let url = "https://csumb.space/api/countyListAPI.php?state=" + state;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            document.querySelector("#county").textContent = "";

            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.county;
                document.querySelector("#county").append(optionElement);
            }
        } catch (error) {
            console.log("Parsing error: " + error);
        }

    } catch (error) {
        console.log("Network error: " + error);
    }
}

async function suggestPassword() {
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);

            document.querySelector("#suggested").textContent = " " + data.password;
        } catch (error) {
            console.log("Parsing error: " + error);
        }

    } catch (error) {
        console.log("Network error: " + error);
    }
}

async function isAvailable() {
    let name = document.querySelector("#username").value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + name;
    try {
        let response = await fetch(url);
        try {
            let data = await response.json();
            console.log(data);
            if (data.available == true) {
                document.querySelector("#available").textContent = "Username is available!";
                document.querySelector("#available").style.color = "green";
            }
            else {
                document.querySelector("#available").textContent = "Username is NOT available!";
                document.querySelector("#available").style.color = "red";
            }
        } catch (error) {
            console.log("Parsing error: " + error);
        }

    } catch (error) {
        console.log("Network error: " + error);
    }
}

function checkPassword() {
    let pass = document.querySelector("#pass").value;
    let confirm = document.querySelector("#confirm").value;

    if (pass.length < 6) {
        document.querySelector("#feedback").textContent = "Password must be 6 characters or longer!";
        document.querySelector("#feedback").style.color = "red";
    }
    else if (pass !== confirm) {
        document.querySelector("#feedback").textContent = "Passwords do not match!";
        document.querySelector("#feedback").style.color = "red";
    }
    else {
        document.querySelector("#feedback").textContent = "";
    }

}