import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Info, Sparkles } from 'lucide-react';
import Header from './Header';
import Breadcrumb from './Breadcrumb';

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  points: number;
  href?: string;
}

const marketplaceProducts: ProductCardProps[] = [
  {
    id: 'jacket',
    title: 'Vantage Active WeatherShield Jacket',
    image: '/images/Red/  red-jacket-1.png',
    points: 18900,
    href: '/product/vantage-active-weathershield-jacket',
  },
  {
    id: 'notebook',
    title: 'Notebook with Pen Combo',
    image: '/images/Product Listing/Notebook with Pen Combo.png',
    points: 4200,
  },
  {
    id: 'bottle',
    title: 'Stainless Steel Water Bottle',
    image: '/images/Product Listing/Stainless Steel Water Bottle.png',
    points: 3600,
  },
  {
    id: 'organiser',
    title: 'Desk Shelf Organizer',
    image: '/images/Product Listing/Desk Shelf Organizer.png',
    points: 5100,
  },
  {
    id: 'messenger',
    title: 'Pure Leather Messenger Bag',
    image: '/images/Product Listing/Pure Leather Messenger Bag.png',
    points: 14600,
  },
  {
    id: 'calendar',
    title: '2025 Desk Calendar',
    image: '/images/Product Listing/2025 Desk Calendar.png',
    points: 2800,
  },
  {
    id: 'pen-pack',
    title: '0.7mm Ball Pen Pack',
    image: '/images/Product Listing/0.7mm Ball Pen Pack.png',
    points: 1800,
  },
  {
    id: 'file-folder',
    title: 'Expanding File Folder',
    image: '/images/Product Listing/Expanding File Folder.png',
    points: 2400,
  },
];

const MarketplacePage = () => {
  const totalItems = useMemo(() => marketplaceProducts.length, []);

  return (
    <div className="min-h-screen bg-vantage-bg-light">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Swag', href: '/swag' },
          ]}
        />

        <div className="mt-8 flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-72 bg-white rounded-2xl shadow-vantage-soft p-6 space-y-8 border border-vantage-border/60">
            <div>
              <h3 className="text-lg font-semibold text-vantage-text-primary">Filter By</h3>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <span className="text-xs uppercase text-vantage-text-secondary tracking-wide">Type</span>
                  <label className="flex items-center gap-3 text-sm text-vantage-text-primary">
                    <input type="radio" name="type" defaultChecked className="text-vantage-purple focus:ring-vantage-purple" />
                    Swag
                  </label>
                  <label className="flex items-center gap-3 text-sm text-vantage-text-primary">
                    <input type="radio" name="type" className="text-vantage-purple focus:ring-vantage-purple" />
                    Merchandise
                  </label>
                </div>

                <button className="w-full mt-4 py-2.5 text-sm font-semibold rounded-xl border border-vantage-purple text-vantage-purple hover:bg-[rgba(124,58,237,0.08)] transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase text-vantage-text-secondary tracking-wide">Categories</span>
                <span className="text-xs text-vantage-text-secondary">10</span>
              </div>
              <div className="mt-3 bg-vantage-bg-light rounded-xl flex items-center px-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-transparent py-2 text-sm placeholder:text-vantage-text-secondary focus:outline-none"
                />
              </div>
              <div className="mt-4 space-y-3 max-h-64 overflow-y-auto pr-2">
                {[
                  'Accessories',
                  'Edibles',
                  'Electronics',
                  'Gadgets',
                  'Gifts',
                  'Home and Decor',
                  'Kids',
                  'Personal care',
                  'Sports and fitness',
                  'Travel',
                ].map((category) => (
                  <label key={category} className="flex items-center gap-3 text-sm text-vantage-text-primary">
                    <input type="checkbox" className="text-vantage-purple focus:ring-vantage-purple" />
                    {category}
                  </label>
                ))}
              </div>
              <button className="w-full mt-4 py-2.5 text-sm font-semibold rounded-xl border border-vantage-purple text-vantage-purple hover:bg-[rgba(124,58,237,0.08)] transition-colors">
                Apply
              </button>
            </div>
          </aside>

          <section className="flex-1 space-y-6">
            <header className="bg-white rounded-2xl shadow-vantage-soft border border-vantage-border/60 p-6 space-y-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-vantage-text-primary">Marketplace</h1>
                <p className="text-base text-vantage-text-secondary">Exclusive company collection</p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                <div className="flex items-center gap-2 bg-vantage-bg-light rounded-xl px-4 py-2.5 text-sm text-vantage-text-primary">
                  <Sparkles className="w-4 h-4 text-vantage-purple" />
                  Showing {totalItems} items from selected categories
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <div className="flex-1 bg-vantage-bg-light rounded-2xl flex items-center px-4 py-2">
                    <Search className="w-4 h-4 text-vantage-text-secondary" />
                    <input
                      type="text"
                      placeholder="Search for Merchandise"
                      className="flex-1 bg-transparent focus:outline-none text-sm text-vantage-text-primary placeholder:text-vantage-text-secondary ml-2"
                    />
                  </div>
                  <button className="px-4 py-2 rounded-2xl bg-vantage-purple text-white text-sm font-semibold hover:bg-[#6D28D9] transition-colors">
                    Search
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-vantage-text-secondary">
                <span>
                  You are redeeming with <span className="font-semibold text-vantage-purple">Vantage Points</span>
                </span>
                <button className="inline-flex items-center gap-1 text-vantage-purple font-medium hover:underline">
                  FAQ
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {marketplaceProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-2xl border border-dashed border-vantage-border/80 shadow-vantage-soft overflow-hidden flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-vantage-text-primary leading-tight">{product.title}</h3>
                      <p className="text-sm text-vantage-text-secondary mt-1">{product.points.toLocaleString()} pts</p>
                    </div>
                    {product.href ? (
                      <Link
                        to={product.href}
                        className="mt-auto inline-flex items-center justify-center w-full py-2.5 text-sm font-semibold text-white bg-vantage-purple rounded-xl hover:bg-[#6D28D9] transition-colors"
                      >
                        View Details
                      </Link>
                    ) : (
                      <button className="mt-auto inline-flex items-center justify-center w-full py-2.5 text-sm font-semibold text-vantage-purple border border-vantage-purple rounded-xl bg-white">
                        View Details
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MarketplacePage;

