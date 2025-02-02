const PageTile = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <h1 className={`text-lg text-zinc-800 font-semibold mt-7 mb-1 ${className}`}>{title}</h1>;
};

export default PageTile;
