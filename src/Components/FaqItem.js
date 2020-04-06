import React, { Component } from 'react';
import faq from '../faqData';
import './faqlist.css';

class FaqItem extends Component {
    state = {
        dataState: faq,
        answer: true,
        answerFull: true
    }
    handleClick = () => {
        this.setState({
            answer: !this.state.answer
        });
    }
    handleClick2 = () => {
        this.setState({
            answerFull: !this.state.answerFull
        });
    }
    render() {
        return (
            <article className="faq-list">
                <div>
                    <h2>{this.props.question}</h2>
                    <button onClick={this.handleClick}>{this.state.answer ? "+" : "-"}</button>
                </div>
                <div className={this.state.answer ? "answer" : "answerStyle"}>
                    <hr />
                    <div className="open-div">
                        <p>{this.props.answer}</p>
                        <button onClick={this.handleClick2}>{this.state.answerFull ? "+" : "-"}</button>
                    </div>
                </div>
                <div className={this.state.answerFull ? "fullAnswer" : "answerStyle"}>
                    <p>{this.props.answerLong}</p>
                </div>
            </article>
        );
    }
}

export default FaqItem;

