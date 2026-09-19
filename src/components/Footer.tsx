
const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-white/10 bg-black/20">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="text-gray-400">
          Developed by <span className="text-purple-400 font-semibold">ruben@</span>
        </p>
        <div className="hidden sm:block w-px h-5 bg-white/20"></div>
        <p className="text-gray-400 text-sm">© 2025 Mariya Babu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
