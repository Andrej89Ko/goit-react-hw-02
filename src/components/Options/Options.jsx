import s from './Options.module.css';

const Options = ({
  feedback,
  totalFeedback,
  updateFeedback,
  onResetfeedback,
}) => {
  return (
    <div className={s.container}>
      {Object.keys(feedback).map((item, id) => (
        <button onClick={() => updateFeedback(item)} key={id} className={s.btn}>
          {item}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={() => onResetfeedback()} className={s.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
