import { Home, Monitor, Heart, ShoppingCart, Bell, User, Wallet, MoreHorizontal } from 'lucide-react';

// Reusable component for top navigation icons
const TopNavIcon = ({ 
  icon: Icon, 
  isActive = false, 
  href = "#" 
}: { 
  icon: React.ElementType; 
  isActive?: boolean; 
  href?: string;
}) => {
  return (
    <a 
      href={href} 
      className={`relative flex items-center justify-center w-10 h-10 transition-colors ${
        isActive 
          ? 'text-vantage-purple' 
          : 'text-vantage-text-secondary hover:text-vantage-text-primary'
      }`}
    >
      <Icon 
        className={`w-6 h-6 ${isActive ? 'fill-vantage-purple' : ''}`} 
        strokeWidth={isActive ? 2 : 1.5} 
      />
    </a>
  );
};

// Reusable component for points pills
const PointsPill = ({ 
  icon: Icon, 
  label, 
  value 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string | number;
}) => {
  return (
    <div className="flex items-center gap-2.5 bg-white px-3 py-2 rounded-full shadow-vantage-soft">
      <div className="w-7 h-7 bg-vantage-purple rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-vantage-text-primary leading-tight font-medium">{label}</span>
        <span className="text-sm font-bold text-vantage-purple leading-tight">{value.toLocaleString()}</span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-vantage-bg-light">
      {/* Top Row */}
      <div className="bg-white border-b border-vantage-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/Branding/new-vc-logo.png" 
                alt="Vantage Circle" 
                className="h-8 w-auto"
              />
            </div>

            {/* Center Navigation Icons */}
            <nav className="hidden md:flex items-center gap-6">
              <TopNavIcon icon={Home} />
              <div className="relative h-full flex items-center">
                <TopNavIcon icon={Monitor} isActive={true} />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-vantage-purple"></span>
              </div>
              <TopNavIcon icon={Heart} />
              <TopNavIcon icon={ShoppingCart} />
              <TopNavIcon icon={Bell} />
            </nav>

            {/* Right: Points Pills + Avatar */}
            <div className="flex items-center gap-3">
              <PointsPill icon={Home} label="Wellness Points" value={0} />
              <PointsPill icon={Wallet} label="Vantage Points" value={15227} />
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors overflow-hidden">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Category Tabs */}
      <div className="bg-vantage-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="bg-white rounded-3xl shadow-vantage-soft px-6 flex items-center justify-between h-14">
            <div className="flex items-center flex-1 justify-between">
              <a 
                href="#" 
                className="text-sm font-medium text-vantage-text-primary hover:text-vantage-purple transition-colors px-4 py-2 rounded-xl whitespace-nowrap"
              >
                Gift Cards
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-vantage-text-primary hover:text-vantage-purple transition-colors px-4 py-2 rounded-xl whitespace-nowrap"
              >
                Milestone Catalog
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-vantage-text-primary hover:text-vantage-purple transition-colors px-4 py-2 rounded-xl whitespace-nowrap"
              >
                Merchandise
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-white bg-vantage-purple hover:bg-[#6D28D9] transition-colors px-4 py-2 rounded-xl whitespace-nowrap"
              >
                Marketplace
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-vantage-text-primary hover:text-vantage-purple transition-colors px-4 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap"
              >
                Experience
                <span className="bg-vantage-purple text-white text-xs px-2 py-0.5 rounded-lg font-medium">NEW</span>
              </a>
            </div>
            <button className="ml-4 w-8 h-8 rounded-full bg-[rgba(124,58,237,0.08)] flex items-center justify-center hover:bg-[rgba(124,58,237,0.12)] transition-colors flex-shrink-0">
              <MoreHorizontal className="w-5 h-5 text-vantage-purple" strokeWidth={2} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
