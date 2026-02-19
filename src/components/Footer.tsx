import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <ScrollReveal className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} — Designed & Built with 💻
        </p>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
