import { Link } from 'react-router-dom';

const LinkItem = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link to={to} {...props} className="text-gray-600 hover:text-gray-800">
      {children}
    </Link>
  );
};

export default LinkItem;
