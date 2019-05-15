import React from 'react';
import './Typing.css';

const Typing = () =>{
    return(
        <React.Fragment>
            <header className="masthead">
                <h1>Test Your Typing Speed</h1>
            </header>
                <main className="main">
                    <article className="intro">
                        <p>This is a typing test. Your goal is to duplicate the provided text, EXACTLY, in the field below. The timer starts when you start typing, and only stops when you match this text exactly. Good Luck!</p>
                    </article> 
                    <section className="test-area">
                        <div id="origin-text">
                            <p>The text to test.</p>
                        </div>
                        <div className="test-wrapper">
                            <textarea id="test-area" name="textarea" rows="6" placeholder="The clock starts when you start typing."></textarea>
                        </div>
                        <div className="meta">
                            <section id="clock">
                                <div className="timer">00:00:00</div>
                            </section>
                            <button id="reset">Start over</button>
                        </div>
                    </section>
                </main>
        </React.Fragment>
    )
}
export default Typing;