import { ProblemListProperty } from "./questions.js";

//* Temp data
let x = "Problem 1";
let y = 3;
let z = "easy";

//* Initial list (will be 10-20 questions that are mandatory)
function makeList(firstProblemListProperty) {
    const listContainer = document.getElementById("list-container");

    if (!listContainer) {
        console.error("List container not found!");
        return;
    }

    const newListItem = document.createElement("div");
    newListItem.classList.add("list-item");

    newListItem.innerHTML = `
        <h3>
            ${firstProblemListProperty.nameProblem} 
            (${firstProblemListProperty.problemDifficultyText}) 
            Difficulty Level: ${firstProblemListProperty.problemDifficultyBar}
        </h3>
    `;
    console.log("attempting to append")
    listContainer.appendChild(newListItem);
    console.log("appended")
}

//? Init list when page loads
document.addEventListener("DOMContentLoaded", () => {
    const initialProblem = new ProblemListProperty(x, z, y);
    makeList(initialProblem);
});

//* Temp
function makeNewListProblemMember() {
    const listContainer = document.getElementById("list-container");

    let newTempData = new ProblemListProperty(x, z, y);
    x = `Problem ${parseInt(x.split(" ")[1]) + 1}`;
    y -= 1;

    makeList(newTempData);
}

const tempButton = document.getElementById("temp-btn");
    tempButton.addEventListener("click", () => {
        makeNewListProblemMember();
    });
