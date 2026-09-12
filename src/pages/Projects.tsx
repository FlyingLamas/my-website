import ExpenseTracker from "../assets/images/expense-tracker.png"
import "./projects.css"

export function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="project-image-container">
                <img className="project-image" src={ExpenseTracker} alt="Expense Tracker Project" />
            </div>
        </div>
    );
}