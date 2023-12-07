import { useState } from "react";
import Header from "./components/Header";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

import "./style.css";

const USER = {
  username: "educartoons",
  email: "educartoons@gmail.com",
};

function App() {
  const [user, setUser] = useState(USER);
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={theme === "light" ? "bg-zinc-200" : "bg-black"}>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <Header />
          <button
            className="border border-gray-700 px-4 rounded-lg"
            onClick={handleChangeTheme}
          >
            {theme === "light" ? "🌙" : "🌞"}
          </button>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
