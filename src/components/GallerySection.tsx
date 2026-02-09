import { motion } from "framer-motion";
import { ImagePlus, User } from "lucide-react";
import { useState } from "react";

interface GalleryItem {
  id: number;
  type: "image" | "avatar";
  src?: string;
  label: string;
}

const defaultItems: GalleryItem[] = [
  { id: 1, type: "avatar", label: "Profile Shot" },
  { id: 2, type: "image", label: "Project Screenshot" },
  { id: 3, type: "image", label: "Design Work" },
  { id: 4, type: "avatar", label: "Action Shot" },
  { id: 5, type: "image", label: "UI Mockup" },
  { id: 6, type: "image", label: "Architecture Diagram" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const GallerySection = () => {
  const [items, setItems] = useState<GalleryItem[]>(defaultItems);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Visual <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            A glimpse into my work, personality, and creative process.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {items.map((item) => {
            const isAvatar = item.type === "avatar";
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ scale: 1.04, y: -6 }}
                whileTap={{ scale: 0.97 }}
                className={`relative group rounded-xl overflow-hidden border border-border bg-card cursor-pointer card-hover ${
                  isAvatar ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-muted/50">
                    <motion.div
                      animate={
                        hoveredId === item.id
                          ? { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }
                          : {}
                      }
                      transition={{ duration: 0.6 }}
                    >
                      {isAvatar ? (
                        <User className="w-10 h-10 text-muted-foreground/50" />
                      ) : (
                        <ImagePlus className="w-10 h-10 text-muted-foreground/50" />
                      )}
                    </motion.div>
                    <span className="text-xs text-muted-foreground/60 font-body">{item.label}</span>
                  </div>
                )}

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-end p-4"
                >
                  <div>
                    <p className="text-sm font-display font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-primary font-body">
                      {isAvatar ? "Avatar" : "Image"}
                    </p>
                  </div>
                </motion.div>

                {/* Corner glow on hover */}
                <motion.div
                  animate={{
                    opacity: hoveredId === item.id ? 0.6 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary blur-2xl pointer-events-none"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tip */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted-foreground/50 mt-8 font-body"
        >
          Upload your images through the chat to replace these placeholders
        </motion.p>
      </div>
    </section>
  );
};

export default GallerySection;
