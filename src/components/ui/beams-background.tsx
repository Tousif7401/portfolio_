import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BeamsBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const beams = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 3 + i * 0.5,
    width: Math.random() * 2 + 1,
    left: Math.random() * 100,
  }));

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Animated beams */}
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute top-0 bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent"
          style={{
            left: `${beam.left}%`,
            width: `${beam.width}px`,
            height: "100%",
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-900" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};