import './Person.css';


function Person() {
    return (
        <div className="person">
            <div className='container-info'>
                <div className='container-head'>
                    <div className='avatar'></div>
                    <div className='container-name'>
                        <div className='person-name'>Viatsiorets Nikita</div>
                        <div className='person-description'>Front-end Developer</div>
                    </div>
                </div>
                <div className='description'>
                    <p>Hi! I am Nikita Viatsiorets from Novolukoml' in Vitebsk region. Now i am live in Minsk.</p>
                    <p>I am studied HTML, CSS, JS, React, GitHub, Figma, Sass, Pug.</p>
                    <p>I am developed his own react app with weather. This app allows watch the weather for city and village around the world. The weather is shown for day or week (starting today). In the app you can look temperature, humidity, pressure, time of sunrise or sunset. App use OpenWeatherMap API for getting data of weather and hooks, state and built on several functional components. App avaible in GitHub hosting via link below.</p>
                    <a href="https://bynikitachel.github.io/">Weather app</a>
                </div>
            </div>
        </div>
    );
}

export default Person;