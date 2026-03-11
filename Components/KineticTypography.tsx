import { motion, useScroll, useTransform } from 'framer-motion';

export default function KineticTypography() {
  const { scrollYProgress } = useScroll();
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.05em", "0.4em"]);
  return (
    <motion.h1 style={{ letterSpacing }} className="text-6xl font-black text-white text-center py-10 uppercase tracking-tighter">ARCHITECT</motion.h1>
  );
}