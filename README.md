file - structure

vflyorions-test/
|- node_modules/
├── public/
│   ├── Productimage/
│   │   ├── All product images
│   ├── ProductData.json
├── src/
│   ├── app/
│   │   ├── cartitem/
│   │   │   └── page.js
│   │   ├── products/
│   │   │   └── [id]/
│   │   │       └── page.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── ProductCards.js
│   │   ├── ProductDetails.js
│   ├── context/
│   │   └── Dataprovider.js
├── package.json
├── README.md
└── ...


E-commerce Product Page
Description
This project is a custom e-commerce product page built using Next.js. The page features a seamless user experience, responsive design, and interactive elements including a hero section, detailed product information, user reviews,  and a sticky add-to-cart button.

Features
 - Hero Section: Displays the product image, name, price, and a brief description.
 - Detailed Product Information: Specifications, features, and benefits of the product.
 - User Reviews and Ratings: Section for users to leave and view reviews.
 - Recommended Products: Carousel or grid display of recommended products.
 - Sticky Add-to-Cart Button: Follows the user as they scroll.
 - Responsive Design: Optimized for mobile, tablet, and desktop devices.
 - Review Form: Allows users to submit product reviews.
 - Add to Cart and Remove from Cart Buttons: For managing items in the cart.

Components
 - Footer.js: Footer section of the page.
 - Navbar.js: Site navigation.
 - ProductCards.js: Displays product information in a card format.
 - ProductDetails.js: Shows detailed product information.
   
Pages
 - Homepage (src/app/page.js): Displays hero section, detailed product information, user reviews, and recommended products.
 - Cart Item Page (src/app/cartitem/page.js): Shows items in the cart with add and remove functionality.
 - Product Details Page (src/app/products/[id]/page.js): Shows detailed information for a selected product.
   
Context
 - Dataprovider.js: Provides data to all pages and components.
