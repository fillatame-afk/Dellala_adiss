
import React from 'react';
import { Property, PropertyStatus } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border border-slate-100">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg ${property.status === PropertyStatus.FOR_SALE ? 'bg-amber-600' : 'bg-emerald-600'}`}>
            {property.status}
          </span>
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 backdrop-blur-sm text-emerald-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-emerald-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <p className="text-emerald-600 font-bold text-lg">
            {property.price.toLocaleString()} <span className="text-sm font-medium">{property.currency}{property.status === PropertyStatus.FOR_RENT ? '/mo' : ''}</span>
          </p>
          <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded uppercase tracking-wider font-bold">
            {property.type}
          </p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center text-slate-500 text-sm mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {property.location}
        </div>

        <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed">
          {property.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
          <div className="flex items-center space-x-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center text-slate-600">
                <span className="text-xs font-bold mr-1">{property.bedrooms}</span>
                <span className="text-[10px] uppercase text-slate-400 font-bold">Beds</span>
              </div>
            )}
            <div className="flex items-center text-slate-600">
              <span className="text-xs font-bold mr-1">{property.area}</span>
              <span className="text-[10px] uppercase text-slate-400 font-bold">m²</span>
            </div>
          </div>
          <button className="text-emerald-600 font-bold text-sm hover:text-emerald-700 flex items-center transition-colors group/btn">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
