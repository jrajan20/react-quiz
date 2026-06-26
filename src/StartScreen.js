function StartScreen({length}) {
    return (
        <div className="start">
            <h2>Welcome to the react quiz!</h2>
            <h3>{length} questions to test your react mastery</h3>
            <button className="btn btn-ui">Lets Start!</button>

        </div>
    )
}

export default StartScreen
