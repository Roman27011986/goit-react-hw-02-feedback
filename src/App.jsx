import FeedbackOptions from './components/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Notification from './components/Notification'
import Section from './components/Section'
import React, { Component } from 'react';

class App extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    addFeedBack = event => {

        const stateKey = event.target.id;
        this.setState((prevState) => ({ [stateKey]: prevState[stateKey] + 1 }));
        
    }

    countTotalFeedback = () => {

        const { good, neutral, bad } = this.state
        return (good + neutral + bad)
    }
     
    countPositiveFeedbackPercentage = () => {

        const total = this.countTotalFeedback()
        const { good } = this.state;
        const percent = good * 100 / total;
        return percent
    }  
    
    
    render() {

         const total = this.countTotalFeedback()
         const percent = this.countPositiveFeedbackPercentage()
         const { good, neutral, bad } = this.state
        const objKey = Object.keys(this.state)
        
        return (
        
            <Section title={"Please leave feedback"} >
                
                <FeedbackOptions options={objKey} onLeaveFeedback={this.addFeedBack} />
                
                {!!total && <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={Math.round(percent)} />}
                
                {!total && <Notification message={'No feedback given'} />}
                
             </Section>
               
             )
    }
}

export default App;