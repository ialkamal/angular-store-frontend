# Angular Store Frontend

An e-commerce web application built with Angular that allows users to browse products, add items to their cart, and complete purchases with a checkout form.

## Project Description

This is a single-page application (SPA) e-commerce store featuring:

- **Product Listing**: Browse available products with images, names, and prices
- **Product Details**: View detailed information about individual products
- **Shopping Cart**: Add products to cart with customizable quantities
- **Checkout Form**: Complete purchases with form validation for customer details
- **Order Confirmation**: Receive confirmation after successful checkout
- **Responsive Design**: Clean, user-friendly interface with Bootstrap styling

## Technologies Used

- **Angular 20.3.8**: Frontend framework
- **TypeScript**: Type-safe development
- **Bootstrap (ng-bootstrap)**: UI components and styling
- **Angular Router**: Navigation and routing
- **Angular Forms**: Form handling and validation
- **Jasmine & Karma**: Unit testing

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/ialkamal/angular-store-frontend.git
cd angular-store-frontend
```

2. Install dependencies:

```bash
npm install
```

## Launch Instructions

### Development Server

To start the development server:

```bash
npm start
```

Or using Angular CLI:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Production Build

To build the project for production:

```bash
npm run build
```

Or:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory, optimized for performance and speed.

## Running Tests

### Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner:

```bash
npm test
```

Or:

```bash
ng test
```

### End-to-End Tests

For end-to-end (e2e) testing:

```bash
ng e2e
```

Note: Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Structure

```
src/
├── app/
│   ├── cart/                    # Shopping cart component
│   ├── confirmation/            # Order confirmation component
│   ├── layout/
│   │   └── header/              # Header navigation component
│   ├── models/
│   │   └── productM.ts          # Product model
│   ├── product-item/            # Product item card component
│   ├── product-item-detail/     # Product detail page component
│   ├── product-list/            # Product listing component
│   ├── services/
│   │   └── cart-service.ts      # Cart management service
│   ├── app-module.ts            # Main application module
│   ├── app-routing-module.ts    # Routing configuration
│   └── app.ts                   # Root component
├── assets/
│   └── data.json                # Product data
└── index.html                   # Main HTML file
```

## Features

### Product Browsing

- View all available products with images and pricing
- Click on products to see detailed descriptions

### Shopping Cart

- Add products to cart with quantity selection (1-10)
- Modify quantities in the cart
- View cart total in real-time
- Cart persists during session

### Checkout

- Form validation for customer information:
  - Full name (minimum 3 characters)
  - Address (minimum 6 characters)
  - Credit card number (16-digit validation)
- Submit order and receive confirmation

## Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`):

```bash
ng generate --help
```

## Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.
