// import PropTypes from 'prop-types';
import styles from './Statistics.module.css'
import store from '../../redux/store';
console.log(store.getState())

const Statistics = ({ good, neutral, bad,  positivePercentage }) => (
    
    <ul className={styles.list}>

        <li>Good: {good }</li>
        <li>Neutral: {neutral }</li>
        <li>Bad: {bad}</li>
        <li>Total: {(good + neutral + bad) }</li>
        <li>Positive feedback: {good ? Math.round(good * 100 / (good + neutral + bad)) : 0} %</li>
        
    </ul>
    
)
// Statistics.propTypes = {
//     good:PropTypes.number.isRequired,
//     neutral:PropTypes.number.isRequired,
//         bad:PropTypes.number.isRequired,
//     total:PropTypes.number.isRequired,
//     positivePercentage:PropTypes.number.isRequired
// }

export default Statistics