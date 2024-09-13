import React from 'react';
import './Skill.css';
import { skills } from '../../portfolio';
import SkillCard from '../SkillCard/SkillCard';

function Skill() {
    const Fade: any = require("react-reveal/Fade");
    return(
        <section className="section--skill" id="skills">
            <div className="inner">

                <Fade left duration={800}>
                <div className="wrapper">
                    <div className="skill-title">
                        <p>{skills.title}</p>
                    </div>
                    <div className="skill-subtitle">
                        <p>Front-End</p>
                    </div>
                    <div className="skill-cards">
                        {skills.front_lists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                    <div className="skill-subtitle">
                        <p>Back-End</p>
                    </div>
                    <div className="skill-cards">
                        {skills.back_lists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                    <div className="skill-subtitle">
                        <p>Tools & Framework</p>
                    </div>
                    <div className="skill-cards">
                        {skills.tool_lists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                    <div className="skill-subtitle">
                        <p>Collaboration</p>
                    </div>
                    <div className="skill-cards">
                        {skills.collabo_lists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                </div>
                </Fade>

                <Fade right duration={800}>
                <div className="skill-image">
                    <i className="fas fa-code"></i>
                </div>
                </Fade>

            </div>
        </section>
    );
}
export default Skill;