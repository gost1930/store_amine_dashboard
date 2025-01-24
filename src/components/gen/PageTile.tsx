const PageTile = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <h1 className={`text-lg text-zinc-800 font-semibold ${className}`}>{title}</h1>;
};

export default PageTile;
