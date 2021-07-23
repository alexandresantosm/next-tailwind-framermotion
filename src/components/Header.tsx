import Image from 'next/image';
import NavLink from './NavLink';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Image src="/images/logo.svg" width={150} height={33} alt="Logo" />

      <nav className="hidden md:block space-x-8">
        <NavLink href="/nextjs" description="Next.js" />

        <NavLink href="/tailwind" description="Tailwind" />

        <NavLink href="/framermotion" description="Framer Motion" />
      </nav>
    </header>
  );
};

export default Header;
