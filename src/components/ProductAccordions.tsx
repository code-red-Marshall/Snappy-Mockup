import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductAccordionsProps {
  description: string;
  sizeChart: string; // HTML string for size chart table
  terms: string[];
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-vantage-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left hover:bg-vantage-bg-light transition-colors px-6 lg:px-8"
      >
        <span className="text-lg font-semibold text-vantage-text-primary">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-vantage-text-secondary transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      {isOpen && (
        <div className="px-6 lg:px-8 pb-6">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductAccordions = ({
  description,
  sizeChart,
  terms,
}: ProductAccordionsProps) => {
  return (
    <div className="border-t border-vantage-border">
      <AccordionItem title="About the Product" defaultOpen={true}>
        <div className="text-vantage-text-secondary whitespace-pre-line leading-relaxed text-base">
          {description}
        </div>
        {sizeChart && (
          <div className="mt-6">
            <div
              className="size-chart-table"
              dangerouslySetInnerHTML={{ __html: sizeChart }}
            />
          </div>
        )}
      </AccordionItem>

      <AccordionItem title="Terms & Conditions">
        <ul className="space-y-3">
          {terms.map((term, index) => (
            <li key={index} className="flex gap-3 text-sm text-vantage-text-secondary leading-relaxed">
              <span className="text-vantage-purple flex-shrink-0">•</span>
              <span>{term}</span>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
};

export default ProductAccordions;
