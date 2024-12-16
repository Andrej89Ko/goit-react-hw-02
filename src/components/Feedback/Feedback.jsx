import s from './Feedback.module.css';

const Feedback = ({ feedbackItem, totalFeedback, positive }) => {
  return (
    <>
      <ul className={s.list}>
        {Object.entries(feedbackItem).map(([key, value]) => {
          return (
            <li key={key}>
              {key} : {value}
            </li>
          );
        })}
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
};

export default Feedback;
