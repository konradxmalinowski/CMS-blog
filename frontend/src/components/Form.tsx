type propsType = {
  className?: string;
  children: React.ReactNode;
};

const Form = ({ children, className }: propsType) => {
  return (
    <form
      method="POST"
      onSubmit={(e) => e.preventDefault()}
      className={`p-5 flex flex-col items-start justify-center gap-y-5 w-full max-w-110 ${className}`}
    >
      {children}
    </form>
  );
};

export default Form;
