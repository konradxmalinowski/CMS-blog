type propsType = {
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
};

const Input = ({ type, onChange, placeholder, label }: propsType) => {
  return (
    <label className="w-full flex flex-col gap-y-2 items-start justify-center">
      <span className="font-medium">{label}</span>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-200 text-neutral-950 rounded-xl py-2 px-2.5 focus:outline-gray-400"
      />
    </label>
  );
};

export default Input;
