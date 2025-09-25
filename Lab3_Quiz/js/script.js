// event listeners
document.querySelector("#submitBtn").addEventListener("click", gradeQuiz);

// global variables
let attempts = localStorage.getItem("totalAttempts");

// shuffle option function calls
if (attempts == null) {
document.querySelector("#attemptCount").textContent = `Quiz attempts: 0`;
}
else {
    document.querySelector("#attemptCount").textContent = `Quiz attempts: ${attempts}`;
}
displayQ3Options();
displayQ5Options();

function displayQ3Options() {
let q3Options = ["Chiefs", "49ers", "Eagles", "Lakers"];
    q3Options = _.shuffle(q3Options);

    for (let i of q3Options) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q3";
        inputElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q3Options").append(labelElement);
    }
}

function displayQ5Options() {
let q5Options = ["49ers","Cardinals","Rams","Chargers","Seahawks"];
    q5Options = _.shuffle(q5Options);

    for (let i of q5Options) {
        let inputElement = document.createElement("input");
        inputElement.style.margin = "7px";
        inputElement.type = "checkbox";
        inputElement.id = "q5" + i;
        inputElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q5Options").append(labelElement);
    }
}

function gradeQuiz() {
    document.querySelector("#attemptCount").textContent = `Quiz attempts: ${++attempts}`;
    localStorage.setItem("totalAttempts", attempts);

    let score = 0;
    let answer1 = document.querySelector("#numInput").value;
    console.log(`Q1: ${answer1}`);
    if (answer1 == 6) {
        score+= 20;
        document.querySelector("#check1").textContent = "✅ Correct!";
    }
    else {
        document.querySelector("#check1").textContent = "❌ Incorrect!";
    }

    let answer2 = document.querySelector("#answer2").value;
    console.log(`Q2: ${answer2}`);
    if(answer2 == "Titans"){
        score+= 20;
        document.querySelector("#check2").textContent = "✅ Correct!";
    }
    else {
        document.querySelector("#check2").textContent = "❌ Incorrect!";
    }

    let answer3;
    try {
        answer3 = document.querySelector("input[name=q3]:checked").value;
    }catch(noAnswer) {
        answer3 = "";
    }
    console.log(`Q3: ${answer3}`);
    if (answer3 == "Eagles") {
        score+=20;
        document.querySelector("#check3").textContent = "✅ Correct!";
    }
    else {
        document.querySelector("#check3").textContent = "❌ Incorrect!";
    }

    let answer4 = document.querySelector("#textInput").value;
    console.log(`Q4: ${answer4}`);
    if (answer4.toLowerCase() == "national football league") {
        score+= 20;
        document.querySelector("#check4").textContent = "✅ Correct!";
    }
    else {
        document.querySelector("#check4").textContent = "❌ Incorrect!";
    }

    console.log(`Q5: ${document.querySelector("#q549ers").checked}\n
    ${document.querySelector("#q5Cardinals").checked}\n
    ${document.querySelector("#q5Rams").checked}\n
    ${document.querySelector("#q5Chargers").checked}\n
    ${document.querySelector("#q5Seahawks").checked}`);

    if (document.querySelector("#q549ers").checked &&
        !document.querySelector("#q5Cardinals").checked &&
        document.querySelector("#q5Rams").checked &&
        document.querySelector("#q5Chargers").checked &&
        !document.querySelector("#q5Seahawks").checked) {
        score+= 20;
        document.querySelector("#check5").textContent = "✅ Correct!";
    }
    else {
        document.querySelector("#check5").textContent = "❌ Incorrect!";
    }



    document.querySelector("#score").textContent = score + "/100";
    if (score >= 80) {
        document.querySelector("#score").textContent += " Congrats, you passed!";
    }
    document.querySelector("#score").style.display = "inline";
}