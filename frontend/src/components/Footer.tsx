import LinkItem from './LinkItem';

const Footer = () => {
  const styles = 'flex items-center gap-x-4';

  return (
    <footer className="w-full border-t-1 border-t-gray-300 min-h-12 flex justify-between py-6 px-14 mt-8">
      <section className={styles}>
        <p className="text-gray-500">© 2025 TechBlog. All rights reserved.</p>
      </section>
      <section className={styles}>
        <ul className="flex gap-x-4">
          <li>
            <LinkItem to="/about">About</LinkItem>
          </li>
          <li>
            <LinkItem to="">Privacy Policy</LinkItem>
          </li>
          <li>
            <LinkItem to="">Terms of Service</LinkItem>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
