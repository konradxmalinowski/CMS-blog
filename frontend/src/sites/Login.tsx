import Form from '../components/Form';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import LinkItem from '../components/LinkItem';
import { checkIfIsLoggedIn, login } from '../http';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit = async (email: string, password: string) => {
    if (!email.trim() || !password.trim()) {
      alert('Email and password must be filled');
      return;
    }

    const result = await login(email, password);
    if (!result?.success) {
      alert(result?.error);
      return;
    }

    console.log('Logged in successfully. Redirecting to admin panel...');
    setTimeout(() => {
      navigate('/admin');
    }, 1000);
  };

  useEffect(() => {
    const check = async () => {
      const result = await checkIfIsLoggedIn();
      if (!result?.success) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };

    check();
  }, []);

  const content = (
    <>
      <Form>
        <h1 className="text-xl font-medium">Sign in to TechBlog</h1>
        <Input
          label="Email"
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value ?? '')
          }
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value ?? '')
          }
          placeholder="Enter your password"
        />
        <Button
          onClick={() => onSubmit(email, password)}
          variant="dark"
          className="w-full"
        >
          Sign in
        </Button>
        <p className="text-center w-full">
          <span className="text-gray-400">Don&apos;t have an account?</span>
          <LinkItem to="/register">&nbsp;Sign up</LinkItem>
        </p>
      </Form>
    </>
  );

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <Button variant="dark" onClick={() => {}}>
          Logout
        </Button>
      ) : (
        content
      )}
      <Footer />
    </>
  );
};

export default Login;
