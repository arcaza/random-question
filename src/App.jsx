import { questions } from "./questionDB.js";

function App() {
  console.log(questions[0]);

  const pickRandomQuestion = () => {
    return questions[Math.floor(Math.random() * questions.length)];
  };

  let randomQuestion = pickRandomQuestion();


  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <h1>Random Question</h1>
      <h3>Category: {randomQuestion.category}</h3>
      <p
        style={{
          fontSize: "1.2rem",
          background: "#161616",
          padding: ".7rem",
          borderRadius: "1rem",
        }}
      >
        {randomQuestion.question}
      </p>
      <textarea
        style={{
          width: "100%",
          height: "100%",
          resize: "none",
          fontSize: "1.2rem",
        }}
      ></textarea>
    </div>
  );
}

export default App;
