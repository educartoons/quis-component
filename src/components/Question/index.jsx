import ListItem from "../ListItem";

export default function Question(props) {
  const { question } = props;

  return (
    <div>
      <span className="inline-block text-xs border border-slate-300 rounded-md px-2">
        Multiple response
      </span>
      <h2 className="font-medium mt-3 border-b border-slate-200 pb-8">
        {question.title}
      </h2>

      <ul className="mt-8">
        {question.alternatives.map((alternative, index) => (
          <ListItem key={index} text={alternative} />
        ))}
      </ul>
    </div>
  );
}
