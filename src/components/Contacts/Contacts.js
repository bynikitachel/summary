import './Contacts.css'

function Contacts() {
    return (
        <div className='container-contacts' >
            <a href="https://nikitavyatiorec@gmail.com/" className='contact-item'>
                <div className='container-icon'>
                    <div className='contact-icon mail'></div>
                </div>
                <div className='contact-description'></div>
            </a>
            <a href="https://github.com/bynikitachel/" className='contact-item'>
                <div className='container-icon'>
                    <div className='contact-icon git'></div>
                </div>
                <div className='contact-description'></div>
            </a>
            <a href="https://nikitavyatiorec@gmail.com/" className='contact-item'>
                <div className='container-icon'>
                    <div className='contact-icon linkedin'></div>
                </div>
                <div className='contact-description'></div>
            </a>
        </div >
    );
}

export default Contacts;