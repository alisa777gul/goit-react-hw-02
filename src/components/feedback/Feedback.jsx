

export default function Feedback({good,neutral,bad, positive}) {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Positive: {positive}%</p>
        </>
    )
}