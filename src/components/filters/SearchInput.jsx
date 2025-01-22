import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';

export const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <div className="flex-shrink-0 min-w-[300px] lg:min-w-[350px]">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search products..."
          className="pl-8 pr-8 h-10 bg-white text-sm w-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <button
            onClick={() => setSearchValue('')}
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
    </div>
  );
}; 