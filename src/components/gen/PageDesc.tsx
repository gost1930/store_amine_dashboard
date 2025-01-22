const PageDesc = ({ className, text }: { className?: string; text: string }) => {
  return (
    <p className={`text-zinc-500 text-base font-semibold my-3 ${className}`}>
      {text}
    </p>
  );
};

export default PageDesc;
