import React, { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0]);

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const handleChange = () => {
    setIndex(Math.floor(Math.random() * anecdotes.length));
  };

  const voteChange = () => {
    let copy = [...vote];
    copy[index]++;
    setVote(copy);
  };

  const findMax = () => {
    let max = -1,
      maxKey = -1;

    for (let key in vote) {
      if (vote[key] > max) {
        maxKey = key;
        max = vote[key];
      }
    }
    return maxKey;
  };

  console.log(findMax());
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <div>
        {anecdotes[index]}
        <br />
        Has {vote[index]} Votes
      </div>
      <div>
        <button onClick={handleChange}>next anecdote</button>
        <button onClick={voteChange}>vote</button>
      </div>
      <h1>Anecdote of all Time!</h1>
      <div>{anecdotes[findMax()]}</div>
    </div>
  );
};

export default App;
