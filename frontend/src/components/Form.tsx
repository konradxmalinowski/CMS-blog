type propsType = {
  className?: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, className, onSubmit }: propsType) => {
  return (
    <form
      method="POST"
      onSubmit={onSubmit}
      className={`p-5 flex flex-col items-start justify-center gap-y-5 w-full max-w-110 ${className}`}
    >
      {children}
    </form>
  );
};

export default Form;
