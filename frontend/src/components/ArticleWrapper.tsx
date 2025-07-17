const ArticleWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <article
      className={`border-2 border-gray-300 rounded-2xl p-8 min-w-120 transition-all  ${className}`}
    >
      {children}
    </article>
  );
};

export default ArticleWrapper;
