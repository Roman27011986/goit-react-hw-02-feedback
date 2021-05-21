import FeedbackOptions from './components/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Notification from './components/Notification'
import Section from './components/Section'
import React from 'react';
import { connect } from 'react-redux'
import { addFeedBack } from './redux/actions'
import store from './redux/store';

function App({value,onLeaveFeedback})  {
    
      const objKey = Object.keys(store.getState())
    
        
        const {good, neutral, bad} =store.getState()
        
        return (
        
            <Section title={"Please leave feedback"} >
                
                
                <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
                
                
                
                { !!(good + neutral + bad) && <Statistics {...store.getState()} />}
                
                { !(good + neutral + bad) && <Notification message={'No feedback given'} />} 
                
             </Section>
               
             )
    
}
const mapStateToProps = state => {
    return {
        value: state
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onLeaveFeedback: e => dispatch(addFeedBack(1,e.target.id))
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App) ;