import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    // calculate average ratings

  let average = feedback.reduce((acc, cur) => {
      return acc + cur.rating
  }, 0)/ feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '') // 8.66666 değil de 8.7 gösteriyor yani virgülden sonra 1 decimal var. Replacedeki kod da eğer tam sayıysa 7.0 değil 7 olarak göster diyor

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}



export default FeedbackStats