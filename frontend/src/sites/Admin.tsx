import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type resultType = {
  success: boolean;
  message?: string;
  users?: usersType[];
};

type usersType = {
  id: number;
  role: string;
  name: string;
  email: string;
};

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>();
  const [users, setUsers] = useState<usersType[]>([]);
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    const check = async () => {
      const response: Response = await fetch(
        'http://localhost/cms-blog/backend/admin_panel.php',
        {
          credentials: 'include',
        }
      );

      if (!response.ok) {
        setIsAdmin(false);
        return;
      }

      const result: resultType = await response.json();
      if (!result.success) {
        setIsAdmin(false);
        setMessage(result.message);
        return;
      }

      setIsAdmin(true);

      if (result.users) {
        setUsers(result.users);
      }
    };

    check();
  }, []);
  return (
    <>
      <Header />
      {!isAdmin && <h1 className="text-2xl">{message}</h1>}
      {isAdmin && (
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} &lt;-&gt; {user.email}
            </li>
          ))}
        </ol>
      )}
      <Footer />
    </>
  );
};

export default Admin;
