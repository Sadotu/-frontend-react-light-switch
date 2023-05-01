import React, {useState} from 'react';
import './App.css';

function App() {
    const [currentState, toggleState] = useState('off');

    const handleClick = () => {
        toggleState(currentState === 'off' ? 'on' : 'off');
    };

    return (
        <main className={currentState}>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={handleClick}>
                    Turn {currentState === 'off' ? 'on' : 'off'}
                </button>
            </section>
        </main>
    );
}

export default App;
