import {FaTimes} from "react-icons/fa"
import PropTypes from "prop-types";
import Card from "./Shared/Card";

function FeedbackItems({item, handleDelete}) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color= 'white'/>
      </button>
      <div className="text-display">{item.text}</div>
      
    </Card>
  )
}

FeedbackItems.propTypes ={
  item: PropTypes.object.isRequired
}

export default FeedbackItems;
