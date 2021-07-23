import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  href: string;
  src: string;
  alt: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ href, src, alt, layoutId }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img
          src={src}
          alt={alt}
          layoutId={layoutId}
          className="w-full h-full"
        />
      </div>
    </Link>
  );
};

export default Card;
