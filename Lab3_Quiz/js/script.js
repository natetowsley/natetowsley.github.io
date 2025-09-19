// event listeners
document.querySelector("#submitBtn").addEventListener("click", gradeQuiz);
displayQ3Options();


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
/*displayQ4Options
function displayQ4Options() {
    let q3Options = ["font-color", "color", "text-color"];
        q3Options = _.shuffle(q4Options);

    document.createElement("select");

    for (let i of q3Options) {
        let inputElement = document.createElement("option");
        inputElement.type = "dropdown";
        inputElement.name = "q4";
        inputElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#q4Options").append(labelElement);
    }

}*/


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
    alert(score);
    let scoreBox = document.createElement("h2");
    scoreBox.textContent = score + "/80";
    document.querySelector("#scoreBox").append(scoreBox);
    
}
