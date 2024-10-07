// import css from "./Options.module.css"


export default function Options({ updateFeedback, totalFeedback }) {  // Получаем updateFeedback через {}
  
    const handleReset = () => {
        updateFeedback('reset'); 
  }
    return (
    <>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
    <button onClick={() => updateFeedback('bad')}>Bad</button>
    {totalFeedback>0 ? <button onClick={handleReset}>Reset</button> : <p></p>}       
    </>
  );
}