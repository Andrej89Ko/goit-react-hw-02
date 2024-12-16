import { useState, useEffect } from 'react';
import './App.css';
import Discription from './components/Discription/Discription';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';

const initState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(
    () => JSON.parse(localStorage.getItem('revievs')) || initState
  );

  useEffect(() => {
    localStorage.setItem('revievs', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const onResetfeedback = () => {
    setFeedback(initState);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positive = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <Discription />
      <Options
        feedback={feedback}
        updateFeedback={updateFeedback}
        onResetfeedback={onResetfeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackItem={feedback}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
