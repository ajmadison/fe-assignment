# AJ Madison Demo

## NOTES:

- The `SHOW MORE` button at the bottom of the page is functional and currently renders 4 additional products each time it is clicked. When all products are rendered, the button is removed from the DOM. This setting can be modified in `App.js` state.

- All products in the provided API have value `is_quick_ship: false`. Therefore, this demo is not rendering the QuickShip badge dynamically (because then no QuickShip badges would display on these selected products, per its value `false`). In `ProductCard.jsx`, you can see sample commented code for dynamic render of the QuickShip badge. 

- The breakpoint from mobile to tablet design is intentionally set to 720px in this demo. Wider breakpoints are current best practice when no tablet design has been built (some sites display mobile UX up to 960px).

- "1-4 of 26 Items" pagination values in the mobile breakpoint are dynamic.

- PropTypes for each component.

- Unit tests for each component.



---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).