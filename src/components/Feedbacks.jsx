import React, { useState, useRef } from 'react'
import feedbacksMock from '../mocks/feedbacks.mock'
import Feedback from './Feedback'

function Feedbacks () {
    const [feedback, setFeedback] = useState(false)

    const feedbackContainer = useRef(null);
    const feedbackText = useRef(null);

    const userName = localStorage.getItem('userName');

    function TextArea () {
        return (
            <div className='w-full flex flex-col justify-center items-center'>
                <textarea ref={feedbackText} placeholder='Write your feedback' className='w-[400px] min-h-[100px] text-gold p-2 border border-gold h-auto rounded-lg bg-blue focus:outline-none focus:border-2'></textarea>
                <button 
                    onClick={addFeedback}
                    className='my-4 text-white px-2 w-auto h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all'
                >Add Feedback</button>
            </div>
        )
    }

    return(
        <div className='bg-blue w-full min-h-screen'>
            <p className='text-2xl text-center align middle py-10'>Dear, {userName}, leave your feedback bellow, our team will review all of them. Thank you</p>
            <div ref={feedbackContainer} className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {feedbacksMock.map(({id, feedback}) => {
                    return(
                        <Feedback key={id} text={feedback}/>
                    )
                })}
            </div>
            <div className='w-full my-7 flex justify-center items-center'>
                <button
                    onClick={() => {
                        setFeedback(!feedback)
                    }}
                    className='text-white px-2 w-auto h-[30px] rounded-2xl bg-turquoise hover:scale-125 transition-all'
                >Write Feedback</button>
            </div>
            {feedback ? <TextArea /> : ''}
        </div>
    )

    function addFeedback() {
        const feedbackId = Math.floor(Math.random() * 1000);
        if(feedbackText.current.value.length > 0) {
            feedbacksMock.push({id: feedbackId, feedback: feedbackText.current.value});
        } else {
            alert("You can't add empty text to feedbacks")
        }
        setFeedback(false)
    }
}

export default Feedbacks