# Front End Take-Home Project

## Time Expectation
Please spend **no more than 2–3 hours** on this exercise.

We care more about **clarity and reasoning** than polish or completeness.

---

## The Task
This repo contains a very basic product listing page.

Your goal is to **extend and improve it**.

### Requirements
- Add filtering (category or type)
- Add sorting by price (low → high, high → low)
- Improve accessibility (semantic HTML, keyboard support)
- Make reasonable responsive layout improvements
- Handle edge cases (empty results, missing data, etc.)

You may refactor the existing structure or add new components as needed.

---

## What’s Not Required
- Backend work
- Authentication
- Pixel-perfect design
- Full test coverage

---

## Deliverables
- Your completed solution
- A short README section answering:
  - What you prioritized
  - Tradeoffs you made
  - What you’d improve with more time
  - Any assumptions you made

---

## Deployed link
<a href="https://fiftyflowers-test-2.vercel.app/" target="_blank">Quick demo deployed link</a>

## Implementation notes
  - What you prioritized: I added filtering by category and type based on unique data within the data, placed a control to sort by price (no order, from lowest to highest and from highest to lowest), improved semantic markup and keyboard-only handling, improved the design and responsive functionality, and also placed a fallback when some important data is missing.
  - Tradeoffs you made: Minimal changes were made, no dependencies of any kind were added, the user experience is simple but functional
  - What you’d improve with more time: Implement a UI library, divide the functionalities into components, make a connection with an API for data persistence, and add the image attribute to the product.
  - Any assumptions you made: The data is obtained from the json data/products.json file; product attributes may be missing or have null, empty, or undefined values; there is no backend.

## Getting Started
```bash
npm install
npm run dev

