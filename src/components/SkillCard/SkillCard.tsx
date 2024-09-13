import React from 'react';
import './SkillCard.css';

function SkillCard({ skill }: Props) {
    return (
        <div className="skill-card-main">
            <div className="skill-icon">
                <i className={skill.devicon}></i>
            </div>
            <div className="skill-text">
                <p>{skill.text}</p>
            </div>
        </div>
    );
}
interface Props {
    skill: {
        devicon: string,
        text: string
    }
}
export default SkillCard;