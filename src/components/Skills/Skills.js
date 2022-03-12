import React from 'react'
import { useState } from 'react';
import './Skills.css';
import SkillsItem from './SkillsItem/SkillsItem'
import BlindButton from '../../ui/buttons/BlindButton'

function Skills(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const styleContainerDescription = position.x && position.y ? { clipPath: `circle(7% at ${position?.x}px  ${position?.y}px)` } : {}

    const onMouseMove = (e) => {
        setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }

    return (
        <div className={'skills-wrapper' + (props.isVisible ? ' is-open' : '')}>
            <svg onMouseMove={onMouseMove}>
                <rect></rect>
            </svg>
            <div className='container-skills'>
                <SkillsItem nameSkill='My skills:' nameClass='start' isVisible={props.isVisible} />
                <SkillsItem nameIcon='html' nameClass='first' />
                <SkillsItem nameIcon='css' nameClass='second' />
                <SkillsItem nameIcon='js' nameClass='third' />
                <SkillsItem nameIcon='react' nameClass='fourth' />
                <SkillsItem nameIcon='git' nameClass='fifth' />
                <SkillsItem nameIcon='redux' nameClass='sixth' />
                <SkillsItem nameSkill='Took took!' nameClass='end' />
            </div>
            <div className='container-descriptions' style={styleContainerDescription}>
                <SkillsItem nameSkill='---->' nameClass='start' />
                <SkillsItem nameSkill='HTML' nameClass='first-description' />
                <SkillsItem nameSkill='CSS' nameClass='second-description' />
                <SkillsItem nameSkill='JS' nameClass='third-description' />
                <SkillsItem nameSkill='REACT' nameClass='fourth-description' />
                <SkillsItem nameSkill='GIT' nameClass='fifth-description' />
                <SkillsItem nameSkill='REDUX' nameClass='sixth-description' />
                <SkillsItem nameSkill='Hello?' nameClass='end' />
            </div>
            <BlindButton
                clickButton={props.clickButton}
                isVisible={props.isVisible}
            />
        </div >
    );
}

export default Skills;