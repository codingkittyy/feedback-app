import {motion, AnimatePresence, animate} from 'framer-motion'
import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import  FeedbackContext  from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback, deleteFeedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }

// WITHOUT ANIMATION
//    return (
//    <div className='feedback-list'>
//        {
//            feedback.map((item) => (
//            <FeedbackItem 
//                key={item.id} 
//               item={item} 
//                handleDelete={handleDelete} 
//            /> )
//        )}
//   </div>
//  )
// }

    return (
    <div className='feedback-list'>
        <AnimatePresence>
        {
            feedback.map((item) => (
            <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate ={{opacity: 1}}
                exit={{opacity: 0}}    
            >
            <FeedbackItem 
                key={item.id} 
                item={item} 
                handleDelete={deleteFeedback} 
            /> 
            </motion.div>
            )
        )}
        </AnimatePresence>
   </div>
  )
 }




export default FeedbackList