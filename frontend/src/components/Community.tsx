import { useState } from 'react';
import Button from './Button';

const Community = () => {
  const [email, setEmail] = useState<string>('');

  const subscribe = (email: string) => {
    if (!email.trim()) {
      alert('Email must be filled');
      return;
    }

    // add sending emails (php mail function)
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-y-4 mb-10 lg:max-w-250 mt-13 p-3">
      <h1 className="text-xl">Join Our Community</h1>
      <p className="text-gray-400 text-center">
        Sign up for our newsletter to get the latest articles delivered to your
        inbox.
      </p>
      <div className="w-full flex justify-center gap-2 flex-wrap">
        <input
          type="text"
          className="py-2 px-3 rounded-xl transition-colors hover:transition-colors bg-gray-100 text-neutral-950 hover:bg-gray-200"
          placeholder="Enter your email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <Button variant="dark" onClick={() => subscribe(email)}>
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default Community;
