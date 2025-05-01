
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4c26e3d9-0356-47c2-bdee-aab1d52532d9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4c26e3d9-0356-47c2-bdee-aab1d52532d9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Payment Gateway Integration Guide

Here's a step-by-step plan to integrate payment gateways such as Razorpay, PayPal, or Stripe:

### 1. Setting up Razorpay

#### Prerequisites:
- Create a Razorpay account at [razorpay.com](https://razorpay.com)
- Get your API Key ID and API Key Secret from the dashboard

#### Implementation Steps:

1. **Install the Razorpay SDK**:
   ```bash
   npm install razorpay
   ```

2. **Create a payment button component**:
   - Create a new component in `src/components/payment/RazorpayCheckout.tsx`
   - Add the Razorpay checkout form implementation

3. **Set up backend endpoint for order creation**:
   - Implement a serverless function or backend API to create a Razorpay order
   - Securely store your API key secret in environment variables

4. **Handle payment success and failure callbacks**:
   - Create methods to handle successful payments
   - Implement error handling for failed payments

### 2. Setting up Stripe

#### Prerequisites:
- Create a Stripe account at [stripe.com](https://stripe.com)
- Get your Publishable key and Secret key from the dashboard

#### Implementation Steps:

1. **Set up Supabase edge functions**:
   - Create a new edge function for payment checkout
   ```bash
   npx supabase functions new stripe-checkout
   ```

2. **Configure the checkout function**:
   ```typescript
   // Example implementation for stripe-checkout edge function
   import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
   import Stripe from 'https://esm.sh/stripe@11.11.0?target=deno'

   const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
     apiVersion: '2022-11-15',
   })

   serve(async (req) => {
     const { priceId, successUrl, cancelUrl } = await req.json()

     try {
       const session = await stripe.checkout.sessions.create({
         mode: 'payment',
         line_items: [{ price: priceId, quantity: 1 }],
         success_url: successUrl,
         cancel_url: cancelUrl,
       })

       return new Response(JSON.stringify({ url: session.url }), {
         headers: { 'Content-Type': 'application/json' },
         status: 200,
       })
     } catch (error) {
       return new Response(JSON.stringify({ error: error.message }), {
         headers: { 'Content-Type': 'application/json' },
         status: 500,
       })
     }
   })
   ```

3. **Create a frontend component**:
   - Build a component that triggers the Stripe checkout
   - Implement success and cancel handling

### 3. Setting up PayPal

#### Prerequisites:
- Create a PayPal Developer account at [developer.paypal.com](https://developer.paypal.com)
- Get your Client ID and Secret

#### Implementation Steps:

1. **Install the PayPal SDK**:
   ```bash
   npm install @paypal/react-paypal-js
   ```

2. **Set up PayPal provider**:
   ```jsx
   import { PayPalScriptProvider } from "@paypal/react-paypal-js";

   // In your app root
   <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
     <App />
   </PayPalScriptProvider>
   ```

3. **Create a PayPal button component**:
   - Create a component that renders the PayPal buttons
   - Handle approval and cancellation events

### 4. Integration with your pricing page:

Update your `Pricing.tsx` page to include payment buttons that trigger the appropriate payment flow based on the selected pricing tier.

### 5. Securely manage API keys:

For any payment integration, ensure you're securely managing your API keys:

- Never expose secret keys in client-side code
- Use environment variables for all sensitive information
- For serverless deployments, use the platform's secrets management system
- With Supabase, store secrets securely with:
  ```bash
  npx supabase secrets set STRIPE_SECRET_KEY=sk_your_secret_key
  ```

### 6. Testing payments:

All payment providers offer testing modes:
- Use Razorpay's test mode for development
- Use Stripe's test cards (e.g., 4242 4242 4242 4242)
- Use PayPal's sandbox environment

### 7. Handle webhooks (for advanced use cases):

Set up webhook endpoints to receive payment event notifications from your payment provider for automated order fulfillment.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4c26e3d9-0356-47c2-bdee-aab1d52532d9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

