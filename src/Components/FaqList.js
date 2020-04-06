import React, { Component } from 'react';
import './faqlist.css';
import faq from '../faqData';
import FaqItem from './FaqItem';


// const answerStyle = {
//     display: "block"
// }


class FaqList extends Component {
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
        const data = this.state.dataState.map((elt, i) =>
            <FaqItem question={elt.question}
                answer={elt.answer}
                answerLong={elt.answerLong}
                key={i}
            />)
        return (
            <section className="faq-section">
                {data}
            </section >
        );
    }
}

export default FaqList;