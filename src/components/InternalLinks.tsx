import Link from 'next/link';
import { INTERNAL_LINKING_MAP } from '@/lib/internal-linking-map';

interface InternalLinksProps {
  currentPage: string;
  className?: string;
}

export default function InternalLinks({ currentPage, className = '' }: InternalLinksProps) {
  const pageLinks = INTERNAL_LINKING_MAP[currentPage as keyof typeof INTERNAL_LINKING_MAP];

  if (!pageLinks || !pageLinks.outgoing) {
    return null;
  }

  // Show only top 3 most relevant links
  const topLinks = pageLinks.outgoing.slice(0, 3);

  return (
    <div className={`internal-links ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">روابط ذات صلة</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {topLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
              title={link.context}
            >
              {link.anchor}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hook to get related pages for a given page
export function useRelatedPages(currentPage: string) {
  const pageLinks = INTERNAL_LINKING_MAP[currentPage as keyof typeof INTERNAL_LINKING_MAP];
  return pageLinks?.outgoing || [];
}

// Component for breadcrumb navigation
export function BreadcrumbLinks({ currentPage }: { currentPage: string }) {
  const breadcrumbs = [
    { url: '/', anchor: 'الرئيسية' },
  ];

  // Add current page breadcrumb
  if (currentPage !== 'home') {
    const pageTitle = getPageTitle(currentPage);
    breadcrumbs.push({ url: `/${currentPage}`, anchor: pageTitle });
  }

  return (
    <nav className="breadcrumb-nav mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-yellow-400">{crumb.anchor}</span>
            ) : (
              <Link href={crumb.url} className="hover:text-yellow-400 transition-colors">
                {crumb.anchor}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Helper function to get page title
function getPageTitle(page: string): string {
  const titles: Record<string, string> = {
    'prices/cairo': 'أسعار القاهرة',
    'locations/cairo': 'مواقع القاهرة',
    'guides/booking': 'دليل الحجز',
    'reviews/cairo': 'التقييمات',
    'places': 'الملاهي الليلية',
    'places/cairo': 'نوادي القاهرة',
    'vip': 'خدمات VIP',
    'gallery': 'معرض الصور',
    'blog/ultimate-guide-egypt-nightlife': 'دليل الحياة الليلية',
    'contact': 'اتصل بنا',
    'about': 'عن النادي'
  };

  return titles[page] || page.replace(/[-/]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}