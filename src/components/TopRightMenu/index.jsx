import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function TopRightMenu() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <button className={theme === "light" ? "bg-amber-400" : "bg-white"}>
      &#127828; {user.username}
    </button>
  );
}
