# E-Commerce Website

An elegant and fully functional e-commerce website built using React.js (Vite) and styled with Tailwind CSS. The website is hosted on Firebase.

## Features

- **Product Details**: Displays details of the products, including colors, sizes, and prices.
- **Color Selection**: Dynamically updates the displayed item based on the selected color.
- **Size Selection with Price**: Four sizes available for each product, with corresponding prices.
- **Item Counter**: Allows users to increment or decrement the item quantity.
  - "Add to Cart" button becomes clickable only when the count is greater than zero; otherwise, it remains disabled.
- **Add to Cart**: Adds the selected items to the cart, displays a success alert, and shows the "Checkout" button.
- **Checkout Modal**: Displays cart details in a modal upon clicking the "Checkout" button.

## Tech Stack

- **Frontend**: React.js(^18.3.1) (Vite)(^6.0.1)
- **Styling**: Tailwind CSS
- **Hosting**: Firebase

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd e-commerce-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Live Demo

Check out the live site [here](https://softnio-task.web.app/).

## Implementation Details

### State Management
- The product details and cart data are managed using React's `useState` hook.
- 
### React Icon
- USe react icon.

### Adding to Cart
- The "Add to Cart" button becomes active only when the item counter is greater than zero.
- Clicking the button adds the item to the cart and shows a success alert.

### Checkout
- The "Checkout" button opens a modal displaying the cart details.
- Users can review their items before proceeding further.

### Future Work
- cart items will store in localStorage

