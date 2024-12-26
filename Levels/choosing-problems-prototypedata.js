import { Question_Details } from "./questions.js";

function Make_Question_Bar_Information_Html(question) {
    const bar_div = document.createElement("div")
    bar_div.classList.add("bar-element");

    //* Bar properties ( name, q number, q chosen, q solved, q difficulty text, q bar diff, q topics)

    const question_name_property = document.createElement("div");
    question_name_property.classList.add("bar_question_property");
    question_name_property.textContent = question.questionName;

    const question_id_property = document.createElement("div");
    question_id_property.classList.add("bar_id_property");
    question_id_property.textContent = question.id;

    const question_chosen = document.createElement("div");
    question_chosen.classList.add("bar_question-chosen_property");
    question_chosen.textContent = question.question_chosen;

    const question_solved = document.createElement("div");
    question_solved.classList.add("bar_question-solved_property");
    question_solved.textContent = question.question_solved;
    //Todo: Solved = Green thumbs up, Not solved = grey thumbs up

    const question_diff_text = document.createElement("div");
    question_diff_text.classList.add("bar_question-diff-text_property");
    question_diff_text.textContent = question.question_diff_text

    const question_diff_bar = document.createElement("div");
    question_diff_bar.classList.add("bar_question-diff-bar_property");
    question_diff_bar.textContent = question.question_diff_bar;
    //Todo: make a bar like a difficulty bar

    const question_genre = document.createElement("div");
    question_genre.classList.add("bar_question-genre_property");
    question_genre.textContent = question.question_genre;

    bar_div.appendChild(question_name_property);
    bar_div.appendChild(question_id_property);
    bar_div.appendChild(question_chosen);
    bar_div.appendChild(question_solved);
    bar_div.appendChild(question_diff_text);
    bar_div.appendChild(question_diff_bar);
    bar_div.appendChild(question_genre);

    return bar_div
}

function Populate_Question_Table_With_Bar_Html() {
    const questionslistContainer = document.getElementById("questions-list-container");
    
    //Todo: datalist is temporary, we will take data from db later (async imported func)
    
    const dataList = [
        new Question_Details("twosum", 1, true, false, "Easy", 1, ["array", "hashmap"]),
        new Question_Details("Add Two Numbers", 2, true, false, "Medium", 3, ["linked list", "math", "recursion"])
    ];
    dataList.forEach(question => {
        const question_element_bar = Make_Question_Bar_Information_Html(question);
        questionslistContainer.appendChild(question_element_bar);
    });
}


//* Test Button later this will just be onload
const buttonTest = document.getElementById("temp-btn");
buttonTest.addEventListener("click", () => {
    Populate_Question_Table_With_Bar_Html();
})



