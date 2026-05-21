import React from "react";
import '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons';

import { faBrain } from '@fortawesome/free-solid-svg-icons';

import Chip from '@mui/material/Chip';

import '../assets/styles/Expertise.scss';

const labelsML = [
    "Python",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "PyTorch",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Feature Engineering",
    "Model Training",
];

const labelsGenAI = [
    "OpenAI",
    "LangChain",
    "LlamaIndex",
    "Hugging Face",
    "Groq",
    "Qdrant",
    "Vector Databases",
    "Prompt Engineering",
    "RAG",
    "Streamlit",
];

const labelsFullStack = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "Git",
    "Docker",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">

                <h1>Expertise</h1>

                <div className="skills-grid">

                    {/* Machine Learning */}

                    <div className="skill">

                        <FontAwesomeIcon icon={faPython} size="3x" />

                        <h3>Machine Learning Engineering</h3>

                        <p>
                            I build end-to-end machine learning systems focused on
                            predictive modeling, intelligent automation, and
                            data-driven applications. My experience includes
                            model training, feature engineering, evaluation,
                            and deploying scalable ML solutions for real-world use cases.
                        </p>

                        <div className="flex-chips">

                            <span className="chip-title">Tech stack:</span>

                            {labelsML.map((label, index) => (
                                <Chip
                                    key={index}
                                    className='chip'
                                    label={label}
                                />
                            ))}

                        </div>

                    </div>

                    {/* GenAI */}

                    <div className="skill">

                        <FontAwesomeIcon icon={faBrain} size="3x" />

                        <h3>GenAI & AI Engineering</h3>

                        <p>
                            I develop AI-powered applications using modern LLMs,
                            RAG pipelines, vector databases, and AI orchestration
                            frameworks. My work focuses on building intelligent
                            assistants, automation systems, and production-ready
                            GenAI solutions.
                        </p>

                        <div className="flex-chips">

                            <span className="chip-title">Tech stack:</span>

                            {labelsGenAI.map((label, index) => (
                                <Chip
                                    key={index}
                                    className='chip'
                                    label={label}
                                />
                            ))}

                        </div>

                    </div>

                    {/* Full Stack */}

                    <div className="skill">

                        <FontAwesomeIcon icon={faReact} size="3x" />

                        <h3>Full Stack Development</h3>

                        <p>
                            I build responsive full stack web applications using
                            modern frontend and backend technologies. I focus on
                            creating scalable APIs, interactive user interfaces,
                            and deployment-ready systems with clean architecture.
                        </p>

                        <div className="flex-chips">

                            <span className="chip-title">Tech stack:</span>

                            {labelsFullStack.map((label, index) => (
                                <Chip
                                    key={index}
                                    className='chip'
                                    label={label}
                                />
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Expertise;