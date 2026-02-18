
import React from 'react';
import { FilterState, PropertyStatus, PropertyType } from '../types.ts';
import { LOCATIONS } from '../constants.tsx';

interface SearchFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, setFilters }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 -mt-24 relative z-20 border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Status */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Transaction Type</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
          >
            <option value="All">All Types</option>
            <option value={PropertyStatus.FOR_RENT}>Rent</option>
            <option value={PropertyStatus.FOR_SALE}>Buy</option>
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Property Style</label>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
          >
            <option value="All">Any Property</option>
            <option value={PropertyType.APARTMENT}>Apartment</option>
            <option value={PropertyType.VILLA}>Villa</option>
            <option value={PropertyType.COMMERCIAL}>Office Space</option>
            <option value={PropertyType.FAMILY_HOUSE}>Family House</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
          >
            <option value="">Anywhere in Addis</option>
            {LOCATIONS.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Price Range (Min) */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice === 0 ? '' : filters.minPrice}
              onChange={handleChange}
              placeholder="Min ETB"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice === 0 ? '' : filters.maxPrice}
              onChange={handleChange}
              placeholder="Max ETB"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Bedrooms</label>
          <div className="flex space-x-2">
            {['Any', '1', '2', '3', '4+'].map(val => (
              <button
                key={val}
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, bedrooms: val }))}
                className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all ${filters.bedrooms === val ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-200 hover:bg-emerald-50'}`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Reset / Search Action */}
        <div className="flex items-end">
          <button
            onClick={() => setFilters({
              status: 'All',
              type: 'All',
              minPrice: 0,
              maxPrice: 0,
              location: '',
              bedrooms: 'Any'
            })}
            className="w-full h-12 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
