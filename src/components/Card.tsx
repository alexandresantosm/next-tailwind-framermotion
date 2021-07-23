import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface CardProps {
  href: string;
  src: string;
  alt: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ href, src, alt, layoutId }) => {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.7
      }
    }
  };

  return (
    <Link href={href}>
      <motion.div
        className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition"
        variants={variants}
      >
        <motion.img
          src={src}
          alt={alt}
          layoutId={layoutId}
          className="w-full h-full"
        />
      </motion.div>
    </Link>
  );
};

export default Card;
