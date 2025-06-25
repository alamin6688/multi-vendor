
interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer className={`${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white/80 border-blue-100'} border-t backdrop-blur-lg mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
              MarketPlace
            </span>
          </div>
          <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Your premier destination for amazing products from verified vendors worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
