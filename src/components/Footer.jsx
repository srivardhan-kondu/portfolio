const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {2025} Srivardhan Rao. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Empowering learners through education and technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
