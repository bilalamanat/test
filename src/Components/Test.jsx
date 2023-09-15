import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Confetti from 'react-confetti'; 
import 'react-toastify/dist/ReactToastify.css';
import quizData from './quizData.json';

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [showScore, setShowScore] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false); // State for controlling confetti

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
        handleTimeUp();
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [timer, currentQuestion]);

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
    } else {
      handleEndOfQuiz();
    }
  };

  useEffect(() => {
    if (timer === 0 && currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
    }
  }, [timer, currentQuestion]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success('Your answer is correct!', { autoClose: 1000 });
    } else {
      toast.error('Your answer is incorrect.', { autoClose: 1000 });
    }

    handleNextQuestion();
  };

  const handleTimeUp = () => {
    handleNextQuestion();
  };

  const handleEndOfQuiz = () => {
    setShowScore(true);
    setIsConfettiActive(true); // Activate confetti when the quiz is completed
  };

  return (
    <div className="quiz">
      <h1>App For Questions</h1>
      {!showScore && <p>Timer: {timer} seconds</p>}
      {showScore ? (
        <>
          <h2>Congratulations! Your task is completed!</h2>
          <p>Your score: {score}</p>
          {isConfettiActive && <Confetti />} {/* Display confetti when active */}
        </>
      ) : (
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
      )}
      <ToastContainer />
    </div>
  );
}

export default QuizApp;
