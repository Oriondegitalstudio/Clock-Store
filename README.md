# AURELIS

## Luxury Watch E-Commerce Platform

AURELIS is a modern luxury watch e-commerce platform built with **Angular and TypeScript**.

The project is designed around a premium, elegant shopping experience combined with a scalable and maintainable frontend architecture.

The goal is to build more than a simple product showcase. AURELIS is being developed as a complete e-commerce foundation capable of supporting:

* Product management
* Product collections
* Customer accounts
* Wishlist
* Shopping cart
* Checkout
* Orders
* Authentication
* Internationalization
* Future administration features
* Backend API integration

---

## Table of Contents

* [Overview](#overview)
* [Project Vision](#project-vision)
* [Main Features](#main-features)
* [Technology Stack](#technology-stack)
* [Architecture](#architecture)
* [Project Structure](#project-structure)
* [Architecture Layers](#architecture-layers)
* [Core Layer](#core-layer)
* [Features Layer](#features-layer)
* [Pages Layer](#pages-layer)
* [Shared Layer](#shared-layer)
* [Product Architecture](#product-architecture)
* [Reusable Component System](#reusable-component-system)
* [Icon System](#icon-system)
* [Internationalization](#internationalization)
* [Routing](#routing)
* [Environment Configuration](#environment-configuration)
* [Design System](#design-system)
* [Responsive Design](#responsive-design)
* [Data Flow](#data-flow)
* [Security Principles](#security-principles)
* [Performance Principles](#performance-principles)
* [SEO](#seo)
* [Accessibility](#accessibility)
* [Future E-Commerce Architecture](#future-e-commerce-architecture)
* [Development Principles](#development-principles)
* [Git Workflow](#git-workflow)
* [Installation](#installation)
* [Development Server](#development-server)
* [Production Build](#production-build)
* [Recommended Development Flow](#recommended-development-flow)
* [Project Roadmap](#project-roadmap)
* [Project Philosophy](#project-philosophy)
* [Author](#author)
* [License](#license)

---

# Overview

AURELIS is a premium digital storefront for a luxury watch brand.

The platform focuses on:

* Elegant product presentation
* Minimal and premium UI
* Strong visual hierarchy
* Smooth navigation
* Responsive design
* Reusable Angular components
* Strong TypeScript typing
* Multi-language support
* Scalable e-commerce architecture
* Separation of concerns
* Maintainable code organization

The application is structured around four major architectural responsibilities:

```text
Application Infrastructure
        ↓
Business Features
        ↓
Route-Level Pages
        ↓
Reusable UI
```

This structure allows AURELIS to grow without turning individual pages into large and difficult-to-maintain components.

---

# Project Vision

AURELIS is designed to evolve from a luxury watch storefront into a complete e-commerce platform.

The long-term vision is:

```text
Luxury Storefront
       ↓
Product Catalogue
       ↓
Product Discovery
       ↓
Shopping Experience
       ↓
Customer Accounts
       ↓
Wishlist
       ↓
Shopping Cart
       ↓
Checkout
       ↓
Orders
       ↓
Administration
```

The frontend architecture is therefore designed from the beginning to support future backend and API integration.

---

# Main Features

## Storefront

The storefront provides the foundation for:

* Home page
* Store page
* Collections
* About page
* Contact page
* Product catalogue
* Product categories
* Product cards
* Product imagery
* Responsive navigation
* Wishlist interaction
* Shopping bag interaction
* Reusable buttons
* Reusable section headers
* Toast notifications
* Responsive layouts

---

## Product Experience

The product architecture supports:

* Product information
* Product images
* Product pricing
* Product variants
* Product options
* Inventory information
* Brands
* Categories
* Product visibility
* Product status
* Currency handling

The product system is designed to support future API-driven data instead of relying exclusively on static frontend data.

---

## Internationalization

AURELIS supports multiple languages:

* English
* French
* Arabic

Translation files are maintained independently from the UI.

The Arabic translation foundation also prepares the application for RTL support.

---

## Responsive Experience

The application is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

The interface uses responsive layouts and reusable components to maintain a consistent luxury experience across screen sizes.

---

# Technology Stack

## Framework

* Angular
* Angular Router
* Angular CLI

## Languages

* TypeScript
* HTML5
* CSS

## Styling

* Tailwind CSS

## Internationalization

* `@ngx-translate/core`

## Development Tools

* Node.js
* npm
* Git
* GitHub
* Visual Studio Code

## Architecture & Angular Features

AURELIS uses:

* Standalone Angular components
* Angular Router
* Lazy-loaded routes
* Dependency Injection
* Signals where appropriate
* Typed inputs and outputs
* Reactive forms where required
* Route guards
* HTTP interceptors
* Environment-based configuration

## Design & UI Principles

The project intentionally avoids heavy animation frameworks such as:

* Three.js
* GSAP

Instead, the interface relies on:

* CSS transitions
* Responsive layouts
* Lightweight Angular interactions
* Component-based UI behavior
* Performance-oriented implementation

---

# Architecture

AURELIS follows a modular Angular architecture based on separation of concerns.

The main structure is:

```text
src/
│
├── app/
├── assets/
├── core/
├── environment/
├── features/
├── Pages/
└── shared/
```

The architecture can be represented as:

```text
┌──────────────────────────────────────┐
│                 APP                  │
│ Bootstrap / Routing / Configuration  │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│                CORE                  │
│ Infrastructure / Services / Layout   │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│              FEATURES                │
│ Business Domains / Application Logic │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│               PAGES                  │
│ Route-Level Composition              │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│               SHARED                 │
│ Reusable UI / Models / Types         │
└──────────────────────────────────────┘
```

---

# Project Structure

Current high-level structure:

```text
AURELIS/
│
├── src/
│   │
│   ├── app/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── i18n/
│   │
│   ├── core/
│   │   ├── config/
│   │   ├── guards/
│   │   ├── i18n/
│   │   ├── interceptors/
│   │   ├── layout/
│   │   └── services/
│   │
│   ├── environment/
│   │   ├── environments.ts
│   │   ├── environments.preprod.ts
│   │   └── environments.prod.ts
│   │
│   ├── features/
│   │
│   ├── Pages/
│   │   ├── home/
│   │   ├── store/
│   │   ├── collections/
│   │   ├── about/
│   │   └── contact/
│   │
│   ├── shared/
│   │   ├── components/
│   │   ├── enum/
│   │   ├── interfaces/
│   │   ├── models/
│   │   └── types/
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
└── README.md
```

---

# Architecture Layers

AURELIS follows a strict responsibility model.

| Layer      | Responsibility                                 |
| ---------- | ---------------------------------------------- |
| `app`      | Bootstrap and global application configuration |
| `core`     | Application-wide infrastructure                |
| `features` | Business domains                               |
| `Pages`    | Route-level composition                        |
| `shared`   | Reusable UI, models, interfaces and types      |

The distinction between these layers is intentional and should remain consistent as the storefront grows.

---

# App Layer

The `app` directory contains the Angular application entry structure.

Typical files include:

```text
app/
├── app.ts
├── app.html
├── app.config.ts
└── app.routes.ts
```

Responsibilities include:

* Application bootstrap
* Global Angular configuration
* Provider configuration
* Router configuration
* Root component

The app layer should remain lightweight.

Business logic should not be placed directly inside the root application component.

---

# Core Layer

The `core` directory contains application-wide infrastructure.

```text
core/
├── config/
├── guards/
├── i18n/
├── interceptors/
├── layout/
└── services/
```

The Core layer contains functionality that is used across the application and generally represents application-wide services or infrastructure.

---

## Core Configuration

Located at:

```text
core/config/
```

Configuration can include:

* API configuration
* Application configuration
* Global constants
* Runtime configuration
* Feature flags

Environment-specific configuration should be provided through the environment layer.

---

## Core Guards

Located at:

```text
core/guards/
```

Contains Angular route guards.

Potential guards include:

```text
auth.guard.ts
guest.guard.ts
admin.guard.ts
```

Guards will eventually protect routes such as:

```text
/account
/orders
/checkout
/admin
```

Frontend route guards improve the user experience but are not a replacement for backend authorization.

---

## Core Internationalization

Located at:

```text
core/i18n/
```

The i18n infrastructure manages the active application language.

Translation resources are stored in:

```text
src/assets/i18n/

├── en.json
├── fr.json
└── ar.json
```

Supported languages:

* English
* French
* Arabic

---

## Core Interceptors

Located at:

```text
core/interceptors/
```

HTTP interceptors are responsible for cross-cutting HTTP concerns.

Potential responsibilities include:

* Authentication tokens
* API headers
* Error handling
* Request logging
* Loading states
* Global HTTP behavior

Business-specific API logic should remain inside feature services.

---

## Core Layout

Located at:

```text
core/layout/
└── main-layout/
```

The main layout provides the global storefront structure.

Conceptually:

```text
┌─────────────────────────────┐
│           Navbar            │
├─────────────────────────────┤
│                             │
│        Router Outlet        │
│                             │
├─────────────────────────────┤
│           Footer            │
└─────────────────────────────┘
```

This prevents every page from implementing its own navbar and footer.

---

## Core Services

Located at:

```text
core/services/
```

Potential application-wide services include:

* Authentication
* SEO
* Cart
* Wishlist
* Notifications
* User session
* API infrastructure

Services should contain application logic rather than presentation markup.

---

# Features Layer

The `features` directory contains the application's business domains.

This is one of the most important parts of the architecture.

Future feature structure can include:

```text
features/
│
├── authentication/
├── products/
├── collections/
├── cart/
├── wishlist/
├── checkout/
├── orders/
├── account/
└── administration/
```

Each feature should own the functionality directly related to its business domain.

For example:

```text
features/
└── products/
    ├── components/
    ├── pages/
    ├── services/
    ├── models/
    └── types/
```

---

## Why Features Exist Separately

The features layer prevents the application from becoming entirely page-driven.

Instead of putting all product functionality directly inside the Store page, the Store page consumes the Products feature.

Conceptually:

```text
Store Page
     │
     ▼
Products Feature
     │
     ├── Product Service
     ├── Product Models
     ├── Product Components
     └── Product API
```

This makes the application easier to scale.

---

# Pages Layer

The `Pages` directory contains route-level pages.

Current pages include:

```text
Pages/
├── home/
├── store/
├── collections/
├── about/
└── contact/
```

These pages correspond to the main public routes:

```text
/
├── /store
├── /collections
├── /about
└── /contact
```

Pages should primarily compose:

* Feature components
* Shared components
* Layouts
* Required services

Pages should avoid becoming repositories for reusable business logic.

---

# Shared Layer

The `shared` directory contains reusable application resources.

```text
shared/
├── components/
├── enum/
├── interfaces/
├── models/
└── types/
```

The Shared layer should not contain business logic that belongs exclusively to one feature.

---

# Shared Components

Reusable UI components are located inside:

```text
shared/components/
```

Current shared components include:

```text
shared/components/
├── footer/
├── navbar/
├── toast/
└── widgets/
```

---

## Widgets

Reusable widgets include:

```text
widgets/
├── custom_button/
├── custom_title/
├── icon-button/
├── icons/
├── product-card/
└── section-header/
```

Examples include:

* ProductCard
* Icon
* IconButton
* CustomButton
* CustomTitle
* SectionHeader
* Toast
* Navbar
* Footer

The goal is to implement reusable UI once and consume it across the storefront.

---

# Product Card

The `ProductCard` is a reusable presentation component responsible for displaying product information.

A product card can contain:

* Product image
* Product name
* Brand
* Price
* Sale information
* Wishlist action
* Product status

The component should remain reusable and should not contain product API logic.

Recommended flow:

```text
Product Service
      ↓
Product Model
      ↓
Store / Product Page
      ↓
Product Card
```

The ProductCard receives product data and focuses on presentation.

---

# Product Architecture

AURELIS is designed around a structured product model.

Conceptually:

```text
Product
│
├── Brand
├── Category
├── Images
├── Pricing
├── Inventory
├── Options
└── Variants
```

This allows the platform to support products with different:

* Prices
* Images
* Variants
* Options
* Inventory quantities
* Visibility states
* Availability states

This is more scalable than representing products as simple static objects.

---

## Product Models

Current product-related models include:

```text
shared/models/

├── ProductImage.model.ts
├── brand.model.ts
├── category.model.ts
├── inventory.model.ts
├── product-option-value.model.ts
├── product-option.model.ts
├── product-pricing.model.ts
├── product-variant.model.ts
└── product.model.ts
```

---

# Enums

Shared enums are stored in:

```text
shared/enum/
```

Examples include:

```text
ApiPath.ts
currency.enum.ts
product-status.enum.ts
product-visibility.enum.ts
imagePath.ts
```

Enums are used for values that have a controlled set of possible states.

For example:

```text
Product Status

ACTIVE
INACTIVE
DRAFT
```

and:

```text
Product Visibility

VISIBLE
HIDDEN
```

---

# Interfaces

Shared interfaces are stored in:

```text
shared/interfaces/
```

Interfaces describe reusable contracts between different parts of the application.

They help maintain:

* Strong typing
* Predictable data structures
* Clear contracts
* Better maintainability

---

# Types

Reusable TypeScript types are stored in:

```text
shared/types/
```

Types should be used for reusable type definitions that do not necessarily represent complete business entities.

---

# Icon System

AURELIS uses a centralized SVG icon architecture.

The icon system is located at:

```text
shared/components/widgets/icons/

├── icons.html
├── icons.ts
├── icon.component.html
└── icon.component.ts
```

The goal is to define SVG icons once and reuse them throughout the application.

Example icon names:

```text
heart-outline
heart
search
shopping-bag
user
close
plus
minus
arrow-right
arrow-left
```

The TypeScript icon registry provides type safety.

Example:

```typescript
export const ICONS = {
  heartOutline: 'heart-outline',
  heart: 'heart',
  search: 'search',
  shoppingBag: 'shopping-bag',
  user: 'user',
  close: 'close',
  plus: 'plus',
  minus: 'minus',
  arrowRight: 'arrow-right',
  arrowLeft: 'arrow-left'
} as const;
```

This prevents arbitrary icon names from being passed throughout the application.

---

## IconButton

`IconButtonComponent` provides a reusable button around the centralized icon system.

Example:

```html
<app-icon-button
  [icon]="icons.heartOutline"
  [activeIcon]="icons.heart"
  [active]="isWishlisted"
  ariaLabel="Add to wishlist"
/>
```

The button does not duplicate SVG definitions.

Instead:

```text
IconButton
    ↓
IconComponent
    ↓
SVG Symbol
    ↓
icons.html
```

This keeps the icon system centralized.

---

# Internationalization

AURELIS is multilingual.

Translation resources are stored in:

```text
src/assets/i18n/

├── en.json
├── fr.json
└── ar.json
```

The application uses:

```text
@ngx-translate/core
```

Components should use translation keys rather than hardcoded user-facing strings wherever the text needs localization.

Example:

```html
{{ 'navbar.home' | translate }}
```

The Arabic translation foundation also prepares the storefront for RTL support.

---

# Routing

AURELIS uses Angular Router.

The public storefront routes are:

```text
/
├── /store
├── /collections
├── /about
└── /contact
```

Routes are defined inside:

```text
src/app/app.routes.ts
```

The application uses lazy-loaded routes where appropriate.

This keeps the initial application bundle smaller and makes the application easier to scale.

---

# Environment Configuration

Environment files are located at:

```text
src/environment/

├── environments.ts
├── environments.preprod.ts
└── environments.prod.ts
```

Different environments can provide different configuration values.

Conceptually:

```text
Development
     ↓
Pre-production
     ↓
Production
```

Potential configuration values include:

* API URL
* Application URL
* Feature flags
* Environment name
* External service configuration

Environment-specific values should not be hardcoded inside components or services.

---

# Design System

AURELIS follows a premium luxury design direction.

The interface is intentionally different from a generic marketplace.

The visual language focuses on:

* Luxury
* Minimalism
* Elegance
* Precision
* Spacious layouts
* Premium typography
* Strong product photography
* Subtle interactions
* Refined UI elements

The objective is to create a visual relationship between:

```text
Luxury Watch
      ↓
Luxury Brand
      ↓
Luxury Digital Experience
```

---

# Visual Identity

The storefront uses a luxury-inspired visual palette built around:

* Deep dark tones
* Warm gold
* Cream
* White
* Neutral surfaces

Exact color values are maintained inside the application's styling system.

---

# Typography

Typography is treated as part of the product experience.

The design uses modern typography with refined display styling where appropriate.

Typography should maintain:

* Clear hierarchy
* Premium appearance
* Strong readability
* Consistent spacing
* Responsive scaling

---

# Responsive Design

AURELIS follows a responsive-first approach.

The UI must adapt to:

```text
Mobile
   ↓
Tablet
   ↓
Laptop
   ↓
Desktop
```

Components should avoid hardcoded dimensions that prevent layouts from adapting to different screen sizes.

Responsive behavior should be considered when creating every reusable component.

---

# No Heavy Animation Dependencies

AURELIS intentionally does not rely on Three.js or GSAP for its storefront experience.

The project focuses instead on:

* CSS transitions
* Responsive layouts
* Clean component interactions
* Lightweight UI behavior
* Performance
* Maintainability

This keeps the e-commerce experience focused on the products rather than unnecessary visual effects.

---

# Data Flow

The intended architecture for API-driven functionality is:

```text
                USER
                  │
                  ▼
                PAGE
                  │
                  ▼
           FEATURE COMPONENT
                  │
                  ▼
               SERVICE
                  │
                  ▼
                 API
                  │
                  ▼
              BACKEND
                  │
                  ▼
              DATABASE
```

For presentation components:

```text
API
 ↓
Service
 ↓
Typed Model
 ↓
Feature
 ↓
Shared Component
```

This keeps responsibilities separated.

---

# Service Responsibilities

Services are responsible for application and business communication.

For example:

```text
ProductsService
```

may eventually be responsible for:

* Get products
* Get product by ID
* Get categories
* Get collections
* Search products
* Filter products
* Sort products

The ProductCard should never directly communicate with the API.

Instead:

```text
ProductCard
     ↓
Receives Product
     ↓
Displays Product
```

while:

```text
ProductsService
     ↓
Communicates with API
```

---

# Future E-Commerce Architecture

AURELIS is structured to support the following business domains:

```text
features/
│
├── authentication/
├── products/
├── collections/
├── cart/
├── wishlist/
├── checkout/
├── orders/
├── account/
└── administration/
```

---

# Authentication

Future authentication functionality may include:

* Login
* Register
* Logout
* Password reset
* Email verification
* Session management

Protected areas may include:

```text
/account
/orders
/checkout
```

These areas will use Angular route guards while backend authorization remains the actual security boundary.

---

# Wishlist

The wishlist feature will allow customers to:

* Add products
* Remove products
* View saved products
* Toggle wishlist state directly from product cards

Conceptually:

```text
Product Card
      ↓
Wishlist Service
      ↓
Wishlist API
      ↓
Customer Account
```

---

# Shopping Cart

The shopping cart will support:

* Add product
* Remove product
* Change quantity
* Calculate subtotal
* Apply discounts
* Calculate total
* Continue shopping
* Proceed to checkout

Expected structure:

```text
features/cart/

├── components/
├── pages/
├── services/
└── models/
```

---

# Checkout

The checkout domain will eventually handle:

```text
Cart
 ↓
Customer Information
 ↓
Shipping Information
 ↓
Payment
 ↓
Order Creation
 ↓
Confirmation
```

---

# Orders

The order system will support future functionality such as:

* Order creation
* Order details
* Order history
* Order status
* Customer order tracking

Example order states:

```text
PENDING
CONFIRMED
PROCESSING
SHIPPED
DELIVERED
CANCELLED
```

---

# Customer Account

The customer account area can eventually contain:

* Profile
* Addresses
* Wishlist
* Orders
* Account settings
* Authentication

---

# Administration

The architecture is prepared for a future administration system.

Possible administration modules include:

```text
Dashboard
Products
Categories
Collections
Inventory
Orders
Customers
Users
Analytics
Settings
```

The administration system should remain separated from the public storefront.

---

# API Architecture

The frontend is designed to communicate with a backend through HTTP/REST APIs.

Conceptually:

```text
AURELIS Angular Frontend
          │
          │ HTTP / REST
          ▼
    AURELIS Backend
          │
          ▼
       Database
```

The frontend should never communicate directly with the database.

The backend is responsible for:

* Business rules
* Data validation
* Authentication
* Authorization
* Database access
* Sensitive operations
* API responses

---

# Security Principles

Security should be considered throughout the application.

Important principles include:

* Never store secrets in the frontend
* Never expose private API credentials
* Use HTTPS in production
* Validate data on the backend
* Validate user permissions server-side
* Protect authenticated routes
* Handle authentication tokens securely
* Sanitize user-generated content
* Avoid trusting frontend authorization
* Keep environment secrets outside the repository

Frontend route guards improve user experience but are not a replacement for backend authorization.

---

# Performance Principles

The project aims to maintain a fast storefront experience.

Important considerations include:

* Lazy-loaded routes
* Optimized images
* Reusable components
* Minimal unnecessary dependencies
* Efficient API calls
* Avoiding unnecessary rendering
* Responsive image sizing
* Production builds
* Proper caching strategies

The absence of Three.js and GSAP also helps keep the storefront architecture lightweight.

---

# SEO

SEO is important for a public e-commerce storefront.

Future SEO responsibilities may include:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph metadata
* Product metadata
* Structured data
* Sitemap
* Robots configuration

SEO-related infrastructure should be centralized where possible instead of duplicated across pages.

---

# Accessibility

AURELIS should follow accessible UI practices.

Important principles include:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Accessible navigation
* Meaningful `aria-label` values
* Keyboard navigation
* Visible focus states
* Sufficient color contrast
* Alternative text for meaningful images

For example, icon-only buttons should always provide an accessible label:

```html
<button aria-label="Add to wishlist">
  ...
</button>
```

---

# Development Principles

AURELIS follows several architectural principles.

## 1. Separation of Concerns

Each part of the application should have one clear responsibility.

```text
Core
→ Infrastructure

Features
→ Business functionality

Pages
→ Route composition

Shared
→ Reusable UI and types
```

---

## 2. Single Responsibility

Components and services should not become responsible for unrelated functionality.

Avoid:

```text
Huge Component
├── API
├── Business Logic
├── UI
├── State
├── Validation
└── Navigation
```

Prefer:

```text
Component
    ↓
Service
    ↓
API
```

and:

```text
Component
    ↓
Reusable UI
```

---

## 3. Reusability

Reusable functionality should be implemented once.

Examples:

```text
Icon
Button
ProductCard
SectionHeader
Toast
Navbar
Footer
```

Reusable components should not contain unnecessary feature-specific assumptions.

---

## 4. Type Safety

Use TypeScript models, interfaces, enums, and types instead of relying on `any`.

Prefer:

```text
Product
ProductVariant
ProductPricing
```

over:

```text
any
```

Strong typing improves:

* Developer experience
* Maintainability
* Refactoring safety
* API integration
* Testability

---

## 5. Maintainability

Code should be organized so developers can quickly identify where functionality belongs.

For example:

```text
Product functionality
→ features/products

Global authentication
→ core

Reusable button
→ shared/components

Store page
→ Pages/store
```

---

## 6. Scalability

New features should be added without restructuring existing application code.

For example:

```text
features/
├── products/
├── cart/
├── wishlist/
└── checkout/
```

Each business domain remains independently organized.

---

## 7. Testability

Business logic should be isolated from UI whenever possible.

Services and feature logic should be designed so they can be tested independently.

---

# Architectural Rule

The project follows a strict layer responsibility model.

```text
Pages
→ Route-level pages

features
→ Business domains

core
→ Application infrastructure

shared
→ Reusable resources
```

This distinction is intentional and should remain consistent as the storefront grows.

`features/` is not merely future state. It represents the application's business domains, such as:

* Products
* Product details
* Cart
* Wishlist
* Checkout
* Orders

The Pages layer should compose these domains, while the Core layer provides infrastructure and the Shared layer contains reusable UI and data resources.

This separation becomes especially important as the application evolves from product browsing into the full customer purchase flow.

---

# Git Workflow

The project uses Git for version control.

Branches should be organized around:

* Features
* Fixes
* Refactoring
* Documentation
* Architectural work

Example:

```text
main
│
├── feature/product-details
├── feature/cart
├── feature/wishlist
├── feature/authentication
├── feature/checkout
├── fix/navbar
└── app-layout
```

---

# Branch Naming

Recommended conventions:

```text
feature/<feature-name>
fix/<issue-name>
refactor/<area-name>
chore/<task-name>
docs/<documentation-name>
```

Examples:

```text
feature/product-details
feature/wishlist
fix/mobile-navbar
refactor/icon-system
docs/update-readme
```

---

# Commit Convention

Recommended commit format:

```text
type: description
```

Examples:

```text
feat: add product details page

feat: add wishlist interaction

fix: correct store route

refactor: centralize icon system

style: improve product card layout

docs: update architecture documentation

chore: update dependencies
```

Recommended commit types:

```text
feat
fix
refactor
style
docs
chore
test
perf
```

---

# Installation

## Requirements

Before running AURELIS locally, install:

* Node.js
* npm
* Angular CLI
* Git

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

Verify Angular CLI:

```bash
ng version
```

---

# Clone the Repository

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd AURELIS
```

---

# Install Dependencies

Install project dependencies:

```bash
npm install
```

---

# Development Server

Start the Angular development server:

```bash
ng serve
```

The application will be available at:

```text
http://localhost:4200/
```

The development server automatically reloads when source files change.

---

# Production Build

Create a production build:

```bash
ng build
```

The generated files will be available inside:

```text
dist/
```

The production build should be tested before deployment.

---

# Code Quality Checklist

Before creating a pull request or merging a feature, verify that:

* The application builds successfully
* No unnecessary console logs remain
* Components have clear responsibilities
* Reusable logic is extracted
* Types are correctly defined
* Routes work correctly
* Responsive layouts are tested
* Translations are available
* Accessibility labels are present where required
* No unnecessary dependencies were introduced
* Environment-specific configuration is respected

---

# Recommended Development Flow

A typical feature should follow this process:

```text
1. Define the business requirement
                ↓
2. Define the model / interface
                ↓
3. Create the feature
                ↓
4. Create the service
                ↓
5. Create reusable components
                ↓
6. Connect the page
                ↓
7. Add translations
                ↓
8. Test responsive behavior
                ↓
9. Test functionality
                ↓
10. Commit changes
```

This workflow keeps business logic, UI, and infrastructure separated.

---

# Example Feature Structure

For a new product details feature:

```text
features/
└── products/
    │
    ├── components/
    │   ├── product-gallery/
    │   ├── product-info/
    │   └── product-options/
    │
    ├── pages/
    │   ├── product-list/
    │   └── product-details/
    │
    ├── services/
    │   └── products.service.ts
    │
    ├── models/
    │   └── product.model.ts
    │
    └── types/
```

This keeps the entire product domain together.

---

# Current Application Structure

At the current stage, the application contains:

```text
src/
│
├── app/
│   ├── app.ts
│   ├── app.html
│   ├── app.config.ts
│   └── app.routes.ts
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── i18n/
│
├── core/
│   ├── config/
│   ├── guards/
│   ├── i18n/
│   ├── interceptors/
│   ├── layout/
│   └── services/
│
├── environment/
│   ├── environments.ts
│   ├── environments.preprod.ts
│   └── environments.prod.ts
│
├── features/
│
├── Pages/
│   ├── home/
│   ├── store/
│   ├── collections/
│   ├── about/
│   └── contact/
│
├── shared/
│   ├── components/
│   ├── enum/
│   ├── interfaces/
│   ├── models/
│   └── types/
│
├── index.html
├── main.ts
└── styles.css
```

---

# Architecture at a Glance

```text
                         AURELIS
                            │
                            ▼
                   Angular Application
                            │
            ┌───────────────┴───────────────┐
            │                               │
            ▼                               ▼
          CORE                           FEATURES
            │                               │
     ┌──────┼──────┐             ┌─────────┼─────────┐
     │      │      │             │         │         │
   Guards Services Layout      Products    Cart   Wishlist
     │      │      │             │         │         │
     └──────┴──────┘             └─────────┼─────────┘
                                          │
                                          ▼
                                        PAGES
                                          │
                                          ▼
                                       SHARED
                                          │
                          ┌───────────────┼───────────────┐
                          │               │               │
                     Components        Models           Types
                          │
                 ┌────────┼─────────┐
                 │        │         │
             ProductCard  Icon     Button
```

---

# Project Roadmap

## Phase 1 — Foundation

* [x] Angular project setup
* [x] Application routing
* [x] Main layout
* [x] Navbar
* [x] Footer
* [x] Shared component structure
* [x] Environment configuration
* [x] Internationalization foundation
* [x] Product models
* [x] Reusable icon system
* [x] Product card foundation

---

## Phase 2 — Storefront

* [x] Homepage foundation
* [x] Store page foundation
* [x] Product catalogue foundation
* [ ] Product filtering
* [ ] Product search
* [ ] Product sorting
* [ ] Collections
* [ ] Product details
* [ ] Responsive optimization

---

## Phase 3 — Customer Experience

* [ ] Authentication
* [ ] Customer registration
* [ ] Customer login
* [ ] Customer account
* [ ] Wishlist
* [ ] Shopping cart
* [ ] Product reviews

---

## Phase 4 — Checkout

* [ ] Checkout flow
* [ ] Shipping information
* [ ] Payment integration
* [ ] Order creation
* [ ] Order confirmation
* [ ] Customer order history

---

## Phase 5 — Backend Integration

* [ ] Connect product API
* [ ] Connect category API
* [ ] Connect collection API
* [ ] Authentication API
* [ ] Cart API
* [ ] Wishlist API
* [ ] Order API
* [ ] Customer API

---

## Phase 6 — Administration

* [ ] Admin authentication
* [ ] Dashboard
* [ ] Product management
* [ ] Category management
* [ ] Collection management
* [ ] Inventory management
* [ ] Order management
* [ ] Customer management
* [ ] Analytics
* [ ] Settings

---

# Long-Term Architecture

The final platform is intended to follow this architecture:

```text
                         AURELIS
                            │
                            ▼
                    Angular Frontend
                            │
                            │ REST API
                            ▼
                    Backend Application
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
          Products      Customers       Orders
              │             │             │
              └─────────────┼─────────────┘
                            │
                            ▼
                         Database
```

The frontend and backend remain separated through a clear API contract.

The architecture allows the frontend to evolve independently from the backend implementation.

---

# Project Philosophy

AURELIS is built around one primary principle:

> **Build a premium experience without sacrificing engineering quality.**

The project combines:

```text
Luxury Design
      +
Strong UX
      +
Clean Architecture
      +
Reusable Components
      +
Type Safety
      +
Scalability
      =
AURELIS
```

The objective is to create an e-commerce platform that feels premium to the customer while remaining maintainable, testable, and scalable for the developer.

---

# Author

**Orion Digital Studio**

AURELIS is developed as a full-stack e-commerce project by **Orion Digital Studio**.

The project combines:

* Modern frontend engineering
* Premium UI/UX design
* Type-safe development
* Modular Angular architecture
* Scalable e-commerce architecture

---

# License

This project is private and intended for development, demonstration, and portfolio purposes unless otherwise specified.

All product names, branding, visual assets, and content associated with AURELIS are proprietary to the project unless otherwise stated.

---

## Architectural Rule

The following responsibility model should remain consistent throughout the project:

```text
Pages
→ Route-level pages

features
→ Business domains

core
→ Application infrastructure

shared
→ Reusable resources
```

`features/` is a core part of the architecture, not merely a future placeholder.

It represents the application's business domains, including:

* Products
* Product details
* Cart
* Wishlist
* Checkout
* Orders

The Pages layer composes these domains.

The Core layer provides application-wide infrastructure.

The Shared layer provides reusable UI, models, interfaces, enums, and types.

This separation is especially important as AURELIS evolves from a product browsing experience into a complete customer purchase platform.
