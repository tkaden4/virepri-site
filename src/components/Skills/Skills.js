import React from "react";
import PropTypes from "prop-types";

import _ from "underscore";
import classnames from "classnames";

import "./skills.sass";

export const SkillDot = ({ isOn }) =>
    <div className={classnames("skill-dot", { "on": isOn })}>{isOn}</div>;

SkillDot.propTypes = {
    isOn: PropTypes.bool.isRequired
};

const MakeSkill = (name, level) => ({ name, level });

const skills = [
    MakeSkill("Rust", 6),
    MakeSkill("Java", 8),
    MakeSkill("Go", 9),
    MakeSkill("C", 9),
    MakeSkill("C++", 5),
    MakeSkill("C#", 8)
];

const MAX_SKILL = 10;

export const Skill = ({ name, length }) =>
    <div className="skill">
        <div className="name">{name}</div>
        <div className="dots">
            {
                _.range(0, MAX_SKILL).map(x =>
                    <SkillDot isOn={x < length} />
                )
            }
        </div>
    </div>;

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
};

export const Skills = () =>
    <div className="skills">
        {
            _(skills).map(({ name, level }, i) =>
                <Skill key={i} name={name} length={level} />
            )
        }
    </div>;

export default Skills;