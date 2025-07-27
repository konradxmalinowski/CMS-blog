import { type ReactNode } from 'react';

const Category = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-gray-200 text-neutral-950 rounded-xl text-center px-2 py-0.5 capitalize">
      {children}
    </span>
  );
};

export default Category;
