import { Truck, Ban, Minus, Plus, Check } from 'lucide-react';

interface Color {
  id: string;
  label: string;
  hex?: string;
  image?: string | null;
  gallery?: string[];
}

interface ProductInfoProps {
  title: string;
  subtitle?: string;
  points: number;
  deliveryInfo: string;
  noReturns: boolean;
  colors: Color[];
  sizes: string[];
  highlights: string[];
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
  onQuantityChange: (quantity: number) => void;
}

const ProductInfo = ({
  title,
  subtitle,
  points,
  deliveryInfo,
  noReturns,
  colors,
  sizes,
  highlights,
  selectedColor,
  selectedSize,
  quantity,
  onColorChange,
  onSizeChange,
  onQuantityChange,
}: ProductInfoProps) => {
  const hasImages = colors.some(c => c.image);
  const hasHex = colors.some(c => c.hex);

  return (
    <div className="p-6 md:p-8 flex flex-col gap-6 text-left">
      <section className="product-overview">
        <h1 className="text-2xl lg:text-3xl font-bold text-vantage-text-primary leading-tight">{title}</h1>
        {subtitle && <p className="mt-2 text-base text-vantage-text-secondary leading-relaxed">{subtitle}</p>}
        
        <div className="flex items-baseline gap-2 mt-4">
          <span className="text-4xl font-bold text-vantage-purple">{points.toLocaleString()}</span>
          <span className="text-lg font-semibold text-vantage-text-primary">Vantage Points</span>
        </div>

        <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-vantage-border">
          <div className="flex items-center gap-2 text-sm text-vantage-text-primary">
            <Truck className="w-5 h-5 text-vantage-text-primary" strokeWidth={1.5} />
            <span>{deliveryInfo}</span>
          </div>
          {noReturns && (
            <div className="flex items-center gap-2 text-sm text-vantage-text-primary">
              <Ban className="w-5 h-5 text-vantage-text-primary" strokeWidth={1.5} />
              <span>No returns once redeemed</span>
            </div>
          )}
        </div>
      </section>

      <section className="variant-selection pt-6 border-t border-vantage-border">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-vantage-text-primary mb-3 text-left">
            Color: <span className="font-normal text-vantage-text-secondary">{colors.find(c => c.id === selectedColor)?.label}</span>
          </label>
          <div className="flex gap-3">
            {hasHex ? (
              colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => onColorChange(color.id)}
                  className={`w-12 h-12 rounded-xl border-2 transition-all flex items-center justify-center ${
                    selectedColor === color.id
                      ? 'border-vantage-purple ring-2 ring-vantage-purple-secondary ring-opacity-30'
                      : 'border-vantage-border hover:border-vantage-purple-secondary'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.label}
                >
                  {selectedColor === color.id && (
                    <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
                  )}
                </button>
              ))
            ) : hasImages ? (
              colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => onColorChange(color.id)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedColor === color.id
                      ? 'border-vantage-purple ring-2 ring-vantage-purple-secondary ring-opacity-30'
                      : 'border-vantage-border hover:border-vantage-purple-secondary'
                  }`}
                >
                  <img 
                    src={color.image!}
                    alt={color.label} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))
            ) : (
              colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => onColorChange(color.id)}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all ${
                    selectedColor === color.id
                      ? 'border-vantage-purple bg-[rgba(124,58,237,0.08)] text-vantage-purple'
                      : 'border-vantage-border bg-white text-vantage-text-primary hover:border-vantage-purple-secondary'
                  }`}
                >
                  {color.label}
                </button>
              ))
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-vantage-text-primary mb-3 text-left">
            Size: <span className="font-normal text-vantage-text-secondary">{selectedSize}</span>
          </label>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`w-14 h-12 rounded-xl border-2 text-sm font-semibold transition-all ${
                  selectedSize === size
                    ? 'border-vantage-purple bg-[rgba(93,63,211,0.08)] text-vantage-purple'
                    : 'border-vantage-border bg-white text-vantage-text-primary hover:border-vantage-purple-secondary'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-vantage-text-primary mb-3 text-left">Quantity</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-xl border-2 border-vantage-border hover:border-vantage-purple-secondary flex items-center justify-center transition-colors"
            >
              <Minus className="w-4 h-4 text-vantage-text-secondary" strokeWidth={2} />
            </button>
            <span className="w-12 text-center text-lg font-semibold text-vantage-text-primary">{quantity}</span>
            <button
              onClick={() => onQuantityChange(quantity + 1)}
              className="w-10 h-10 rounded-xl border-2 border-vantage-border hover:border-vantage-purple-secondary flex items-center justify-center transition-colors"
            >
              <Plus className="w-4 h-4 text-vantage-text-secondary" strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      <section className="actions pt-6 border-t border-vantage-border">
        <button className="w-full py-4 px-6 bg-vantage-purple hover:bg-[#6D28D9] text-white font-semibold text-base rounded-xl transition-colors shadow-vantage-soft">
          Checkout
        </button>
        <button className="w-full py-4 px-6 border-2 border-vantage-purple text-vantage-purple hover:bg-[rgba(124,58,237,0.08)] font-semibold text-base rounded-xl transition-colors mt-3">
          Add to Cart
        </button>
      </section>
    </div>
  );
};

export default ProductInfo;
