
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Vendor {
  id: number;
  name: string;
  rating: number;
  products: number;
  image: string;
  verified: boolean;
}

interface VendorCardProps {
  vendor: Vendor;
  isDark: boolean;
}

const VendorCard = ({ vendor, isDark }: VendorCardProps) => {
  return (
    <Card className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white/70 border-blue-100'} backdrop-blur-lg hover:scale-105 transition-all duration-300 cursor-pointer group`}>
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {vendor.image}
        </div>
        <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {vendor.name}
          {vendor.verified && (
            <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
              ✓ Verified
            </Badge>
          )}
        </h3>
        <div className="flex items-center justify-center space-x-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {vendor.rating} ({vendor.products} products)
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorCard;
