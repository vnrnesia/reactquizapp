import quizlogo from "@/assets/quiz-logo.png";
export default function Header() {

    return (
        <header>
        <h1>
            ReactQuiz
        </h1>
        <img src={quizlogo} alt="Quiz logo" />
        </header>
    )
}