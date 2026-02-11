import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import galleryCloud from "@/assets/gallery-cloud.jpg";
import galleryApi from "@/assets/gallery-api.jpg";
import galleryLibrary from "@/assets/gallery-library.jpg";
import galleryLaptop from "@/assets/gallery-laptop.jpg";

interface GalleryItem {
  id: number;
  src: string;
  label: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: galleryApi, label: "API Architecture", category: "Backend" },
  { id: 2, src: galleryLibrary, label: "Library Management", category: "Project" },
  { id: 3, src: galleryCloud, label: "Cloud Infrastructure", category: "Technology" },
  { id: 4, src: galleryLaptop, label: "Development Setup", category: "Workspace" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      {/* Floating circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10 pointer-events-none"
          style={{
            width: 6 + i * 3,
            height: 6 + i * 3,
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

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
            A glimpse into my work, tools, and creative process.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedItem(item)}
              className="relative group rounded-xl overflow-hidden border border-border bg-card cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Pulse ring on hover */}
              <motion.div
                animate={hoveredId === item.id ? {
                  scale: [1, 1.6, 1],
                  opacity: [0.4, 0, 0.4],
                } : { opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-xl border-2 border-primary pointer-events-none"
              />

              {/* Gradient overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-end p-4"
              >
                <div>
                  <p className="text-sm font-display font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-primary font-body">{item.category}</p>
                </div>
              </motion.div>

              {/* Corner glow */}
              <motion.div
                animate={{ opacity: hoveredId === item.id ? 0.6 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary blur-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="max-w-4xl w-[90vw] p-2 bg-card border-border">
            <VisuallyHidden>
              <DialogTitle>{selectedItem?.label}</DialogTitle>
            </VisuallyHidden>
            {selectedItem && (
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.label}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <p className="text-lg font-display font-semibold text-foreground">{selectedItem.label}</p>
                  <p className="text-sm text-primary font-body">{selectedItem.category}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
