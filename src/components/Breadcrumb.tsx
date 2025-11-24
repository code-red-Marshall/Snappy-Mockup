import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4 text-vantage-text-secondary" strokeWidth={1.5} />}
          {index === items.length - 1 ? (
            <span className="text-vantage-text-primary font-medium">{item.label}</span>
          ) : (
            <a href={item.href} className="text-vantage-text-secondary hover:text-vantage-text-primary transition-colors">
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
