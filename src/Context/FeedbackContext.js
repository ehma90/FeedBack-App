import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedbacck] = useState({
        id: 1,
        text: 'This text is from context',
        rating: 10
    })

    return <FeedbackContext.Provider value={{
        feedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext