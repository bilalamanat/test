import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import quizData from './quizData.json';


function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30); // Reduced the initial timer to 30 seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
        handleTimeUp(); // Call a function to handle time's up logic
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [timer, currentQuestion]);

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30); // Reset the timer to 30 seconds for the next question
    } else {
      handleEndOfQuiz(); // Call a function to handle the end of the quiz logic
    }
  };

  useEffect(() => {
    // Automatically advance to the next question when the timer reaches 0
    if (timer === 0 && currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30); // Reset the timer to 30 seconds for the next question
    }
  }, [timer, currentQuestion]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success('Your answer is correct!', { autoClose: 2000 });
    } else {
      toast.error('Your answer is incorrect.', { autoClose: 2000 });
    }

    handleNextQuestion();
  };

  const handleTimeUp = () => {
    // Handle time's up logic here
    // You can deduct points, show a message, or take any other action
    // For now, let's simply move to the next question
    handleNextQuestion();
  };

  const handleEndOfQuiz = () => {
    // Handle the end of the quiz logic here
    // You can display a final score or take any other action
    // For now, let's simply display a message
    toast.info('Quiz completed!', { autoClose: 2000 });
  };

  return (
    <div className="quiz">
  
      
      <h1>App For Questions</h1>
      <p>Timer: {timer} seconds</p>
      {currentQuestion < quizData.length ? (
        <>
          <h2>{quizData[currentQuestion].question}</h2>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion}>Next</button>
        </>
      ) : (
        <>
          <h2>Quiz completed!</h2>
          <p>Your score: {score}</p>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default QuizApp;
