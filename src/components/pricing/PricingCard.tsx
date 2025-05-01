
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  yearlyPrice: {
    inr: number;
    usd: number;
  };
  monthlyPrice: {
    inr: number;
    usd: number;
  };
  advancePayment: {
    inr: number;
    usd: number;
  };
  features: PricingFeature[];
  popular?: boolean;
}

const PricingCard = ({
  title,
  description,
  yearlyPrice,
  monthlyPrice,
  advancePayment,
  features,
  popular = false,
}: PricingCardProps) => {
  const { format, isIndia, loading } = useCurrency();
  const [billing, setBilling] = React.useState<"yearly" | "monthly">("yearly");

  if (loading) {
    return <div className="animate-pulse bg-gray-200 rounded-xl h-96"></div>;
  }

  return (
    <Card className={`flex flex-col h-full ${popular ? 'border-accent border-2' : 'border-border'}`}>
      {popular && (
        <div className="bg-accent text-accent-foreground text-center py-1 text-sm font-medium">
          Popular Choice
        </div>
      )}
      <CardHeader className="pb-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="mb-6">
          <div className="inline-flex items-center bg-secondary rounded-lg p-1 mb-4">
            <button
              className={`px-4 py-1.5 text-sm ${billing === "yearly" ? 'bg-background rounded-md shadow-sm' : ''}`}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
            <button
              className={`px-4 py-1.5 text-sm ${billing === "monthly" ? 'bg-background rounded-md shadow-sm' : ''}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
          </div>
          
          <div className="mb-2">
            <span className="text-3xl font-bold">
              {billing === "yearly" ? format(yearlyPrice) : format(monthlyPrice)}
            </span>
            <span className="text-muted-foreground ml-1">
              /{billing === "yearly" ? "year" : "month"}
            </span>
          </div>
          
          <div className="mt-4 text-sm font-medium">
            Advance payment: {format(advancePayment)}
          </div>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-2">
        <a 
          href="https://calendly.com/sanathadigas/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full">Schedule a Call</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
