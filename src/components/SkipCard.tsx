import type { Skip } from '../types/skip';

interface Props {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

const SkipCard: React.FC<Props> = ({ skip, isSelected, onSelect }) => {
  const totalPrice = skip.price_before_vat + (skip.vat / 100) * skip.price_before_vat;

  return (
    <div className={`bg-white border p-4 rounded-xl shadow transition text-sm ${isSelected ? 'ring-2 ring-blue-500' : 'hover:shadow-md'}`}>
      <h3 className="text-xl font-bold mb-2">🚛 {skip.size} Yard Skip</h3>

      <p className="text-gray-700">🗓️ Hire period: <strong>{skip.hire_period_days} days</strong></p>
      <p className="text-gray-700">📍 Postcode: {skip.postcode}</p>

      {skip.transport_cost && (
        <p className="text-gray-700">🚚 Transport: £{skip.transport_cost}</p>
      )}

      {skip.per_tonne_cost && (
        <p className="text-gray-700">⚖️ Per tonne: £{skip.per_tonne_cost}</p>
      )}

      <p className="text-gray-700">💷 Price before VAT: £{skip.price_before_vat}</p>
      <p className="text-gray-800 font-semibold">✅ Total Price: £{totalPrice.toFixed(2)}</p>

      {!skip.allowed_on_road && (
        <span className="inline-block mt-2 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
          🚫 Not allowed on the road
        </span>
      )}

      <button
        onClick={() => onSelect(skip)}
        className={`mt-4 w-full py-2 rounded transition ${isSelected ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        {isSelected ? 'Selected ✓' : 'Select This Skip'}
      </button>
    </div>
  );
};

export default SkipCard;