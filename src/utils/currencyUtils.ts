
interface PriceOptions {
  inr: number;
  usd: number;
}

export const detectUserCountry = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.error('Error detecting country:', error);
    return 'US'; // Default to US if detection fails
  }
};

export const formatPrice = (price: PriceOptions, countryCode?: string): string => {
  // If country code is provided, use it; otherwise, use US as default
  const isIndia = countryCode ? countryCode === 'IN' : false;
  
  if (isIndia) {
    return `₹${price.inr.toLocaleString('en-IN')}`;
  } else {
    // Always use the provided USD price directly
    return `$${price.usd.toLocaleString('en-US')}`;
  }
};

export const useCurrencySymbol = (countryCode?: string): string => {
  return countryCode === 'IN' ? '₹' : '$';
};
