import { useNavigate } from 'react-router-dom';
import Button from './Button';
import LinkItem from './LinkItem';

const Header = () => {
  const navigate = useNavigate();
  const styles = 'flex items-center gap-x-4';

  return (
    <header className="w-full border-b-1 border-b-gray-300 min-h-12 flex justify-between py-4 px-14 mb-8">
      <section className={styles}>
        <h2 className="font-semibold text-2xl">TechBlog</h2>
        <ul className="flex gap-x-3">
          <li>
            <LinkItem to="/">Home</LinkItem>
          </li>
          <li>
            <LinkItem to="/about">About</LinkItem>
          </li>
          <li>
            <LinkItem to="/admin">Admin</LinkItem>
          </li>
        </ul>
      </section>
      <section className={styles}>
        <Button variant="light" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button variant="dark" onClick={() => navigate('/register')}>
          Register
        </Button>
      </section>
    </header>
  );
};

export default Header;
