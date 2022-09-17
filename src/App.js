import{v4 as uuidv4} from "uuid"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackData from "./data/Feedbackdata";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./component/AboutIconLink";
import {FeedbackProvider} from "./Context/FeedbackContext";


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want delete?')) {
      setFeedback(feedback.filter((item) => item.id !==id))
    }
  }

  const addFeeback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<>
              <FeedbackForm handleAdd={addFeeback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList handleDelete={deleteFeedback} />
            </>
            }
            ></Route>

          <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </div>
        <AboutIconLink/>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
