import React from "react";
import smartCredit from "../assets/images/prediction-result.jpeg";
import "../assets/styles/Project.scss";

function Project() {

    return (

        <div className="projects-container" id="projects">

            <h1>Personal Projects</h1>

            <div className="projects-grid">

                <div className="project">

                    <a
                        href="https://github.com/sardarbashis/SmartCredit-Risk-Engine"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={smartCredit}
                            className="zoom"
                            alt="SmartCredit Risk Engine"
                            width="100%"
                        />
                    </a>

                    <a
                        href="https://github.com/sardarbashis/SmartCredit-Risk-Engine"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>SmartCredit Risk Engine</h2>
                    </a>

                    <p>
                        Built a FastAPI-powered machine learning credit risk
                        prediction system that calculates customer credit scores
                        using financial and loan-related information.
                    </p>

                    <p>
                        The system includes a trained ML inference pipeline,
                        REST API endpoint, Swagger documentation, structured
                        request validation, and real-time prediction responses.
                    </p>

                    <p>
                        <strong>Tech Stack:</strong> Python, FastAPI,
                        Scikit-learn, Pandas, NumPy, Swagger UI, Uvicorn,
                        Machine Learning
                    </p>

                    <a
                        href="https://github.com/sardarbashis/SmartCredit-Risk-Engine"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View GitHub Repository
                    </a>

                </div>

            </div>

        </div>

    );
}

export default Project;