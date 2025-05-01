
import { useState, useEffect } from 'react';
import { detectUserCountry, formatPrice, useCurrencySymbol } from '@/utils/currencyUtils';

interface PriceOptions {
  inr: number;
  usd: number;
}

export const useCurrency = () => {
  const [countryCode, setCountryCode] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      setLoading(true);
      try {
        const country = await detectUserCountry();
        setCountryCode(country);
      } catch (error) {
        console.error('Failed to detect country:', error);
      } finally {
        setLoading(false);
      }
    };

    detectCountry();
  }, []);

  const format = (price: PriceOptions) => formatPrice(price, countryCode);
  const symbol = useCurrencySymbol(countryCode);

  return {
    countryCode,
    format,
    symbol,
    isIndia: countryCode === 'IN',
    loading,
  };
};
