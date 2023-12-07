export default function ListItem(props) {
  // eslint-disable-next-line react/prop-types
  const { text } = props;

  return (
    <li className="bg-slate-100 rounded-md py-1 pl-10 mb-3 relative">
      <span className="inline-block absolute left-5 top-1">
        <input type="checkbox" />{" "}
      </span>
      <span className="text-sm">{text}</span>
    </li>
  );
}
