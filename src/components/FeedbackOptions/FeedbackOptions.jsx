import PropTypes from 'prop-types';
import sryles from './FeedbackOptions.module.css'
const FeedbackOptions = ({ options, onLeaveFeedback }) => (

    options.map(option => (
       
        <button className={sryles.btn} type="button" key={option} id={option} onClick={onLeaveFeedback}>{option}</button>
        
    ))
    
)

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}
export default FeedbackOptions