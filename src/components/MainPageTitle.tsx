const PgesTitle = ({ title, title2 }: { title: string; title2: string }) => {
  return (
    <h1 className="text-3xl font-bold text-zinc-900">
      {title} <span className="text-primary">{title2}</span>
    </h1>
  );
};

export default PgesTitle;
