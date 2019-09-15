# Williams Sonona's Angular Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.
It consists of a simple catalog page plus a detail page for each product

## Setup

**Prerequisites**: you need npm  (Node Package Manager) and NodeJs version 10.16.3 or higher
```
git clone https://github.com/gonzalo-roberto-diaz/wsonomaangular.git
cd wsonomaangular
npm install
````  

## Running the project



**Build**: 
``ng serve``
served at http://localhost:4200

**Production mode:**: 
``ng start``
served at http://localhost:4000

This project is written in Angular 8 Universal, with server-side rendering. 

When run in development mode, it is rendered in browser mode only.

When run in production mode, it is rendered first server-side (SSR), and the it switches to browser mode.


# Highlights
* Products are shown sorted alphabetically or by price (there happens to be little difference in most cases), 
and the list can be limited by certain example flags.
* The data shown is an internally stored JSON file `catalog.json`, which is read only once for performance. An pair of  `environment.ts` 
files can be configured to query the actual site. (if CORS were allowed by it)
* There is a `sitemap.xml`  (simulated, can be automatically generted)
* Images in the front page are displayed using an `IntersectionObserver``, which renders only those products that are visible 
in the scroll at the moment. This means the json could have thousands of records, but only a few are displayed at a time.
* Server-side rendering allows persistent URLs, navigation using the Back, Forward buttons, and better SEO
* All pages have a dynamically generated title and description
* The production run Passes most of the LightHouse audits, including: performance, accessibility, Best Practices, SEO 
and Progressive App. 