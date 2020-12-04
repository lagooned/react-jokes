
const Joke = (props) => {
  return (
    <div className="joke">
      {props.question ? <p>Question: {props.question}</p> : null}
      <p>Punchline: {props.punchline}</p>
    </div>
  );
}

export default Joke;
