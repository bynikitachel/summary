import './BlindButton.css';

function BlindButton(props) {
    return (
        <div className='container-blind-button' >
            <button className='blind-button' onClick={props.clickButton}>
                <div className={`blind-button-arrow-${props.isVisible ? 'up' : 'down'}`}></div>
            </button>
        </div >
    );
}

export default BlindButton;