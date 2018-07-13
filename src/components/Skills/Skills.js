import React from "react";

import _ from "underscore";

import "./skills.sass";

const skills = [
    "Go",
    "Java",
    "Linux"
];

export const Skill = ({ length }) =>
    <div className="skill">
        <div className="name">{skills[length]}</div>
        <div className="bar"></div>
    </div>;

export const Skills = () =>
    <div className="skills">
        {_.range(0, 3).map(i => <Skill key={i} length={i} />)}
    </div>;

export default Skills;