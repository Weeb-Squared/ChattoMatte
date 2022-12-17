import React from 'react';

import { Link } from 'react-router-dom';

class Agreement extends React.Component {

    /**
     * scrollEvent - method called every time user clicks on link to see login or register form
     * 
     * @param {event} e 
     */
    scrollEvent(e) {
        if (e.currentTarget.href.includes("login")) {
            document.title = "ChattoMatte - Login";
            window.scrollTo(0, 0);
        } else {
            document.title = "ChattoMatte - Register";
            window.scrollTo(0, document.body.scrollHeight);
        }
    }

    render() {
        return (
            <div id='agreement'>
                <div>
                    <ul>
                        <li><Link to="#login" onClick={this.scrollEvent}>Login</Link></li>
                        <li><Link to="#register" onClick={this.scrollEvent}>Register</Link></li>
                    </ul>
                    <section id='mainSection'>
                        <article>Some wierd text tho, no one reads this thing</article>
                    </section>
                </div>
            </div>
        )
    }
}

export default Agreement;