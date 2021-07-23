import Link from 'next/link';

interface NavLinkProps {
  href: string;
  description: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, description }) => {
  return (
    <Link href={href}>
      <a className="tracking-wide hover:text-gray-300">{description}</a>
    </Link>
  );
};

export default NavLink;
