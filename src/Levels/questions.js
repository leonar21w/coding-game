export class Question_Details {
    constructor(title, id, q_chosen, q_solved, q_difficulty_text, q_diff_barNumber, q_genre) {
        this.questionName = title;
        this.id = id;
        this.question_chosen = q_chosen;
        this.question_solved = q_solved;
        this.question_diff_text = q_difficulty_text;
        this.question_diff_bar = q_diff_barNumber;
        this.question_genre = q_genre;
    }
}