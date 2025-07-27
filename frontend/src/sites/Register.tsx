import Button from '../components/Button';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Input from '../components/Input';
import { useState } from 'react';
import LinkItem from '../components/LinkItem';
import { register } from '../http';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit = async (email: string, password: string, name: string) => {
    if (!email.trim() || !password.trim() || !name.trim()) {
      alert('Email, name and password must be filled');
      return;
    }

    const result = await register(name, email, password);
    if (!result?.success) {
      alert(result?.error);
      return;
    }

    console.log('Registered successfully. Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <>
      <Header />
      <Form>
        <h1 className="text-xl font-medium">Create your account</h1>
        <Input
          label="Full Name"
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value ?? '')
          }
          placeholder="Enter your full name"
        />
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
          placeholder="Create a password"
        />
        <Button
          onClick={() => onSubmit(email, password, name)}
          variant="dark"
          className="w-full"
        >
          Create account
        </Button>
        <p className="text-center w-full">
          <span className="text-gray-400">Already have an account? </span>
          <LinkItem to="/login">Sign in</LinkItem>
        </p>
      </Form>
      <Footer />
    </>
  );
};

export default Register;
