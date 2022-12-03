import React from 'react';
import "./Agreement.css"

import { Link } from 'react-router-dom';

class Agreement extends React.Component {
    scrollEvent(e) {
        if(e.currentTarget.href.includes("login")) window.scrollTo(0, 0);
        else window.scrollTo(0, document.body.scrollHeight);
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