import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Skip } from '../types/skip';
import SkipCard from './SkipCard';

const SkipList = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  // Fetch dei dati all'avvio
  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await axios.get<Skip[]>(
          'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
        );
        setSkips(response.data);
      } catch (err) {
        console.error('Errore fetch:', err);
        setError('Errore durante il caricamento dei dati.');
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelect = (skip: Skip) => {
    setSelectedSkipId((prev) => (prev === skip.id ? null : skip.id));
  };

  // Stato di caricamento
  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Caricamento cassonetti in corso...
      </div>
    );
  }

  // Stato di errore
  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        {error}
      </div>
    );
  }

  // Stato lista vuota
  if (skips.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        Nessun cassonetto disponibile per questa zona.
      </div>
    );
  }

  // Render normale
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkipId === skip.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SkipList;
