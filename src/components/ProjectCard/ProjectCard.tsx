import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }: Props) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
        <a className="project-card-main" href={project.url}>
            <div className="card-title">
                <p>{project.title}</p>
            </div>
            <div className='card-image'>
                <img src={require(`../../assets/${project.image}`)} alt="Logo" />
            </div>
            <div className="card-desc">
                <p>{project.desc}</p>
                <p>개발 기간 : {project.duration}</p>
                <p>{project.skill}</p>
            </div>
        </a>
        </Fade>
    );
}
interface Props {
    project: {
        title: string,
        desc: string,
        image: string,
        duration: string,
        skill: string,
        url: string
    }
}
export default ProjectCard;