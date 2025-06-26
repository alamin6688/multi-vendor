import VendorCard from "./VendorCard";

interface Vendor {
  id: number;
  name: string;
  rating: number;
  products: number;
  image: string;
  verified: boolean;
}

interface VendorsSectionProps {
  vendors: Vendor[];
  isDark: boolean;
}

const VendorsSection = ({ vendors, isDark }: VendorsSectionProps) => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Featured Vendors
        </h2>
        <p
          className={`text-center ${
            isDark ? "text-slate-300" : "text-gray-600"
          } max-w-2xl mx-auto`}
        >
          Discover top-rated vendors known for quality, reliability, and
          exceptional service. Handpicked to bring you the best of our
          marketplace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorsSection;
