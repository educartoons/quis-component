import { useState } from "react";

const lenguagesProgramming = [
  "Python",
  "Go",
  "C++",
  "JavaScript",
  "Java",
  "Swift",
  "Rust",
  "Php",
];

export default function App() {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <input onChange={handleChangeQuery} type="text" />
      {lenguagesProgramming
        .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        .map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
    </>
  );
}
