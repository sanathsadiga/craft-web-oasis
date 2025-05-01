
interface PriceOptions {
  inr: number;
  usd: number;
}

// Conversion rates (simplified for this example)
const INR_TO_USD = 0.012; // Approximate conversion rate: 1 INR ≈ 0.012 USD

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
  // If country code is provided, use it; otherwise, use India as default
  const isIndia = countryCode ? countryCode === 'IN' : false;
  
  if (isIndia) {
    return `₹${price.inr.toLocaleString('en-IN')}`;
  } else {
    // If price.usd is provided, use it; otherwise, calculate from INR
    const usdPrice = price.usd || Math.round(price.inr * INR_TO_USD);
    return `$${usdPrice.toLocaleString('en-US')}`;
  }
};

export const useCurrencySymbol = (countryCode?: string): string => {
  return countryCode === 'IN' ? '₹' : '$';
};
