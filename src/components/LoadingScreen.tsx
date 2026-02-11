import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute w-48 h-48 rounded-full bg-secondary/10 blur-[80px] translate-x-20 -translate-y-10" />

          <div className="relative flex flex-col items-center gap-8">
            {/* Spinning ring */}
            <div className="relative w-20 h-20">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary"
                style={{ filter: "drop-shadow(0 0 8px hsl(185 100% 50% / 0.5))" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-t-2 border-secondary"
                style={{ filter: "drop-shadow(0 0 6px hsl(330 100% 60% / 0.4))" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {/* Center dot */}
              <motion.div
                className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading
            </motion.p>

            {/* Progress bar */}
            <div className="w-40 h-0.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline pointer-events-none opacity-30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
