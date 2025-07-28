import Form from '../components/Form';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useContext, useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import LinkItem from '../components/LinkItem';
import { checkIfIsLoggedIn, login, logout as logoutHttp } from '../http';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/Context';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const { setName: setGlobalName } = useContext(Context);
  const navigate = useNavigate();

  const check = async () => {
    const result = await checkIfIsLoggedIn();
    if (!result?.success) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      setName(result?.name ?? '');
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!email.trim() || !password.trim()) {
      alert('Email and password must be filled');
      setIsSubmitted(false);
      return;
    }

    const result = await login(email, password);
    if (!result?.success) {
      alert(result?.message);
      return;
    }

    setGlobalName(name);

    console.log('Logged in successfully. Redirecting to admin panel...');
    setTimeout(() => {
      navigate('/admin');
    }, 1000);
  };

  const logout = async () => {
    const result = await logoutHttp();
    if (!result?.success) {
      alert(result?.message);
      return;
    }

    setIsSubmitted(false);
    setGlobalName('');
  };

  useEffect(() => {
    check();
  }, [isSubmitted]);

  const content = (
    <>
      <Form onSubmit={onSubmit}>
        <h1 className="text-xl font-medium">Sign in to TechBlog</h1>
        <Input
          label="Email"
          type="email"
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
        <Button variant="dark" className="w-full">
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
        <div className="flex justify-center items-center flex-col gap-y-2.5">
          <p>Hello {name}. Do you want to logout?</p>
          <Button variant="dark" onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        content
      )}
      <Footer />
    </>
  );
};

export default Login;
