const Button = ({
  variant,
  children,
  className,
  ...props
}: {
  variant: string;
  className?: string;
  children: React.ReactNode;
}) => {
  let styles =
    'font-semibold py-2 px-3 rounded-xl transition-colors hover:transition-colors ';
  styles += className + ' ';

  if (variant === 'light')
    styles += 'bg-gray-100 text-neutral-950 hover:bg-gray-200';
  else if (variant === 'dark')
    styles += 'text-white bg-neutral-950 hover:bg-neutral-800';

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
