import './SkillsItem.css';
import { useState } from 'react';

function SkillsItem(props) {

    const [isClick, setClick] = useState(false);

    const styleSkillsItem = { opacity: isClick ? '0' : '1' }

    return (
        <div className={`skills-item skills-item-${props.nameClass}`} style={styleSkillsItem} onClick={() => setClick(!isClick)}>
            {props.nameSkill && <div className='text'>{props.nameSkill}</div>}
            {props.nameIcon && <div className={`skills-icon skills-icon-${props.nameIcon}`}></div>}
        </div>

    );
}

export default SkillsItem;