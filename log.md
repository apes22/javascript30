# 30 Days of Javascript - Log

### Day 1: July 23, 2018

**Today's Progress**: Implemented Javascript Drum Kit

**Thoughts:** On my first day, I took it easy and first watched the video on how Wes implemented the Drumk Kit. This helped me get
familiarized with the course layout. There were alot of new concepts that I hadn't learned before like the ability to add my own
attributes to html tags by simplying adding "data-" and the name of the new attribute. This allowed us to set key values to our key divs.
These custom attributes can be shared between different html tags. In this exercise, we added the same data-key value to the key div as well
as the corresponding audio html tag. I also learned about the "keydown" and "transitionend" event listeners and ways of doing a query selector
on an html tag based on its attribute value (e.g. document.querySelector(`audio[data-key="${e.keyCode}"]`). One important reminder is that in
order for css transforms to work on elements, we need to first set a transition value to that element. Wow I learned so much from this small exercise!

### Day 2: July 24, 2018

**Today's Progress**: Implemented Javscript and CSS Clock

**Thoughts:** This one was actually pretty tough to grasp. Mainly because I am not too familiar with the transition and transform css properties. First time using transition-timing-function as well. This was a good refresher on these properties and hoping to use them soon.

**TODO**: Fix issue where seconds tries to rewind back 360 degrees when it hits 60 seconds. This is probably happening for minutes and hands as well.

### Day 3: July 25, 2018

**Today's Progress**: CSS Variables

**Thoughts:** Implemented a widget that allows a user to change the blur, padding, and background color of an image with the help of Css Variables. A few new html concepts that I haven't really worked with before were the input type of color. If you add an input type="color", the website will provide a color picker based on your OS system. Pretty neat. Also learned more about the "data-" custom attribute and how we can use Javascript to get the "data-" attributes set on an html element by calling [element].dataset. Dataset is an object that returns the "data-" attributes as objects. Example is this.dataset.sizing. We are also able to set the css property by calling [element].style.setProperty([name], [value]).

**TODO**: Make the image more responsive. Currently when you add big value padding to the image, it will not stay within its container. Also would be nice to add an image upload file and edit this image. Another idea would be to allow a user to save this image to their computer.

### Day 4: July 26, 2018

**Today's Progress**: Array Cardio

**Thoughts:** Today we worked on using array helper methods. We used the sort, map, reduce, and filter functions that I'm pretty comfortable with. The one reminder was to return either a 1 or -1 on the sort function. It was fun going to wikipedia and creating a list of data that we were interested by going into the console and accesing their page elements. This was a good refresher on the available helper methods that make code more readable.

### Day 5: July 27, 2018

**Today's Progress**: Flex Panel Gallery

**Thoughts:** This was a really fun exercise to work on! We implemented an accordion panel galery using flexbox. I was able to practice more with flex-grow as well as transitions and transform properties. We used the transform: translateY() to move p elements in an out of the page. We used flex-grow to increase the width of a div.

TODO: One cool thing to try is to try to do something similar without using javascript and use something like focus. This however, takes away the ability to have more than one panel open.

### Day 6: July 28, 2018

**Today's Progress**: Type Ahead

**Thoughts:** Today we implemented a search form that provides suggestions based on text input change. We practiced regex expressions to filter fetched data and we also used template literals to create list elements for each filtered data.

TODO: Change the suggestion list based on closest location using the Geolocation API.

### Day 7: July 29, 2018

**Today's Progress**: Array Cardio Day 2

**Thoughts:** Today we practiced using more array helper methods. Some, every, find, and findIndex. THe last question asked us to remove an element from the array. I immediately thought of 3 solutions. One was to use splice, but that would alter the data. Another, would be to use filter which returns a new array without the element we want. The third was to use the slice along with the rest operator to create a new array without having the index we are trying to remove. I was so excited to have thought about different solutions.
