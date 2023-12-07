import TopRightMenu from "../TopRightMenu";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <TopRightMenu />
        </li>
      </ul>
    </nav>
  );
}
