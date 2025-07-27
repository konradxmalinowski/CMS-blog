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
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [users, setUsers] = useState<usersType[]>([]);

  useEffect(() => {
    const check = async () => {
      const response: Response = await fetch(
        'http://localhost/cms-blog/backend/admin_panel.php'
      );

      if (!response.ok) {
        setIsAdmin(false);
        return;
      }

      const result: resultType = await response.json();
      if (!result.success) {
        setIsAdmin(false);
        return;
      }

      if (result.users) {
        setUsers(result.users);
      }
      setIsAdmin(true);
    };

    check();
  }, []);
  return (
    <>
      <Header />
      {!isAdmin && <h1 className="text-2xl font-medium">Access denied</h1>}
      {isAdmin &&
        users.map((user) => (
          <li key={user.id}>
            {user.name} &lt;-&gt; {user.email}
          </li>
        ))}
      <Footer />
    </>
  );
};

export default Admin;
