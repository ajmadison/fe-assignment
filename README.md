# AJ Madison Coding Challenge


## My approach

I started this project by identifying the major components on the page, which I determined to be the Header with text, the Selection controls, and then the ProductList, populated with Products.

I wanted to keep components as dumb as possible, so I made the call to the API at the top level and then passed down the product array as a prop after capturing it in state. Another way to do this would have been to use the UseEffect hook in ProductList to make the call, but because I planned to later add methods connected to the Selection components that would modify the product array, I decided to centralize state at the App level.

I prioritzed mimicking the desktop mock up first and then planned to tweak the Selection component to respond to mobile viewports. I would use media queries to change the Selection component to a single button that on click could mount a modal for filtering and sorting when on tablet or a phone.

## Libraries

Originally I chose to use the node-sass package out of habit, but because I adopted the css module pattern, I found that I didn't need to rely on nesting or other features Sass provides, so I removed the node-sass package.

With more time for this challenge, I would have added unit tests with the Jest library.

## Improvements

While I focused most of my time on mimicking the mock up design, in the future I would like to add the methods that would handle the sorting and filtering of the data. I would create these methods at the App level so they could easily interact with the state and pass the methods down to elements as props. 

I would also improve the logic that determines the price displayed. Right now it is rounded to the tenth, but because these are products that are consumer facing, rounding to the nearest cent would be a better solution.

Another improvement the app should have is proper truncation of description titles. Currently the descriptions are truncated after 3 lines, but if I were working with a designer, I could imagine the designer asking for elipses where descriptions were too long so the text isn't cut off.

With more time, I would also perform an accessibility audit using my computer's screen reader, and I would doublecheck that I could easily tab through all the Selection options as well as each product thumbnail. 