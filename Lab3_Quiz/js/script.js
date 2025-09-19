// event listeners
document.querySelector("#submitBtn").addEventListener("click", gradeQuiz);

// shuffle option function calls
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
    let score = 0;
    let answer1 = document.querySelector("#numInput").value;
    console.log(answer1);
    if (answer1 == 6) {
        score+= 20;
    }


    let answer2 = document.querySelector("#answer2").value;
    console.log(answer2);
    if(answer2 == "Titans"){
        score+= 20;
    }
    

    let answer3 = document.querySelector("input[name=q3]:checked").value;
    console.log(answer3);
    if (answer3 == "Eagles") {
        score+=20;
    }
    

    let answer4 = document.querySelector("#textInput").value;
    console.log(answer4);
    if (answer4 == "National Football League") {
        score+= 20;
    }

    console.log(document.querySelector("#q549ers").checked);
    console.log(document.querySelector("#q5Cardinals").checked);
    console.log(document.querySelector("#q5Rams").checked);
    console.log(document.querySelector("#q5Chargers").checked);
    console.log(document.querySelector("#q5Seahawks").checked);

    if (document.querySelector("#q549ers").checked &&
        !document.querySelector("#q5Cardinals").checked &&
        document.querySelector("#q5Rams").checked &&
        document.querySelector("#q5Chargers").checked &&
        !document.querySelector("#q5Seahawks").checked) {
            score+= 20;
        }


    document.querySelector("#score").textContent = score + "/100";
    document.querySelector("#score").style.display = "inline";
    
}
