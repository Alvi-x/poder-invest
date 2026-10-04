import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  variant = "primary",
  href,
  withArrow = true,
  className = "",
  onClick,
  type = "button",
}: Props) {
  const base =
    "group relative inline-flex items-center gap-3 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 font-mono";

  const styles = {
    primary:
      "bg-gold-500 text-navy-950 hover:bg-gold-400 border border-gold-500 hover:border-gold-400",
    secondary:
      "bg-transparent text-white border border-white/40 hover:border-gold-500 hover:text-gold-400 backdrop-blur-sm",
    ghost:
      "bg-transparent text-ink border border-ink/20 hover:border-gold-500 hover:text-gold-500",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={14}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
}