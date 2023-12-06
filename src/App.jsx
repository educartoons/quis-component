import { useState } from "react";
import Question from "./Question";

import "./style.css";

const questions = [
  {
    title:
      "What is the main advantage of using a rolling budget instead of an annual budget?",
    alternatives: [
      "It requires less effort to create.",
      "It provides a longer-term financial outlook.",
      "It allows for more flexibility in adapting to changing circumstances",
      "It is a legal requirenment for some businesses",
    ],
  },
  {
    title:
      "What is the main advantage of using a rolling budget instead of an annual budget 2?",
    alternatives: [
      "It requires less effort to create 2.",
      "It provides a longer-term financial outlook 2.",
      "It allows for more flexibility in adapting to changing circumstances 2",
      "It is a legal requirenment for some businesses 2",
    ],
  },
  {
    title:
      "What is the main advantage of using a rolling budget instead of an annual budget 3?",
    alternatives: [
      "It requires less effort to create 3.",
      "It provides a longer-term financial outlook 3.",
      "It allows for more flexibility in adapting to changing circumstances 3",
      "It is a legal requirenment for some businesses 3",
    ],
  },
  {
    title:
      "What is the main advantage of using a rolling budget instead of an annual budget 4?",
    alternatives: [
      "It requires less effort to create 4.",
      "It provides a longer-term financial outlook 4.",
      "It allows for more flexibility in adapting to changing circumstances 4",
      "It is a legal requirenment for some businesses 4",
    ],
  },
];

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const newIndex = index + 1;
    if (newIndex < questions.length) {
      setIndex(newIndex);
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="container max-w-2xl mx-auto bg-white px-20 py-10">
        <Question question={questions[index]} />

        <div className="mt-8">
          <button
            // disabled={true}
            onClick={handleNext}
            className="bg-green-500 rounded-md px-4 py-1 text-white	"
          >
            {index + 1 === questions.length ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
