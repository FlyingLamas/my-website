import ExpenseTracker from "../assets/images/expense-tracker.png"
import "./projects.css"

export function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="project-image-container">
                <img className="project-image" src={ExpenseTracker} alt="Expense Tracker Project" />
                <div className="project-name">
                    <h3>Expense Tracker</h3>
                    <p>A personal finance application built to monitor monthly budgets and track expenses.</p>
                </div>
            </div>
        </div>
    );
}