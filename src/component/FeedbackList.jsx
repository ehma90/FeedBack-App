// import{motion, AnimatePresence} from "framer-motion"
import FeedbackItems from "./FeedbackItems"
import PropTypes from "prop-types";

function FeedbackList({feedback, handleDelete}) {
    if (!feedback || feedback.length === 0){
        return <p>No Feedback yet</p>
    }

    // return (
    //     <div className="feedback-list">
    //         <AnimatePresence>
    //             {feedback.map((item) => (
    //                 <motion.dev key={item.id}
    //                     initial={{opacity: 0}}
    //                     animate={{opacity: 1}}
    //                     exit={{opacity: 1}} >
    //                     <FeedbackItems key={item.id} item={item} handleDelete={handleDelete} />
    //                 </motion.dev>
    //        ))   }
    //         </AnimatePresence>
    //     </div>
    //   )


  return (
    <div className="feedback-list">
        
       {feedback.map((item) => (
           <FeedbackItems 
           key={item.id}
           item={item} 
           handleDelete={handleDelete} />
       ))}
    </div>
  )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList