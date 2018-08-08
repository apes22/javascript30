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

### Day 8: July 29, 2018

**Today's Progress**: Fun with HTML5 Canvas

**Thoughts:** Today we implemented a webapp that let's a user draw in a canvas by holding down the mouse and moving it around the page. Most of the concepts were very new. For example, mousemove, mousedown, mouseup, and mouseout event listeners were new to me, but now I know they are available. The properties for the context of the canvas to actually draw on the canvas is also something newish to me. Methods like beginPath(), moveTo(), lineTo(), and stroke() are things that I probably will have to google search to remember how to draw on a canvas as well as strokeStyle involving hue. Overall, this was a neat little exercise that showed how we can use the html5 canvas tag to draw on a webpage.

### Day 9: July 30, 2018

**Today's Progress**: Dev Tools Domination

**Thoughts:** Today we practiced using different methods for the console that will help us troubleshoot our application. console.time was a new one for me. This method gives the time of how long an action takes to complete. I have used the rest of the methods that Wes shared with us.

### Day 10: July 30, 2018

**Today's Progress**: Hold Shift and Check Checkboxes

**Thoughts:** We implemented the way Google inbox handles selecting multiple elements when a user holds down the shift button. Even though I wasn't able to figure out on my own initially, I knew that we needed a way of saving the last checked element. I was however, able to optimize the solution by creating one single click event listener on the parent div which was the inbox container instead of creating event listeners for each checkbox.

### Day 11: August 1, 2018

**Today's Progress**: Key Sequence Detection

**Thoughts:** We implemented a way to add items to the windows when a user correctly inputs the correct secret code (magic word). We use the "keyup" event listener on the window to listen for key releases and save the recet pressed keys on an array. We only saved the number of recent presses that matched the length of the magic word so the array didn't take up unecessary space. This was a really short, but fun exercise.

### Day 12: August 7, 2018

**Today's Progress**: Custom Video Player

**Thoughts:** In this exercise, we implemented the controls for the HTML5 video tag. The video tag, by default, gives you controls, but we wanted to create our own custom controls. Through this example, we implemented the start/pause, skip back/forward, volume, and playback speed functionalities. I learned about the video methods like pause(), play(), playbackRate(), volume(). I also learned about some of its properties like currentTIme and duration. It was relatively easy exericse. However, if you don't know the video properties and available methods, then it'll take more time to come up with a solution.

**TODO**: Add a fullscreen button and the functionality to make the video fullscreen when button is clicked.

### Day 13: August 8, 2018

**Today's Progress**: Slide in on Scroll

**Thoughts:** This exercise was a tough one because I didn't know some of the properties for the windows dom element as well as image elements. Now I know that we have available the scrollTop, height, innerHeight, and scrollY properties to help figure out where we are currently at the page. I might need to come back to this exercise.

**TODO**: Use the Intersection Observer API to implement this. The IntersectionObserver API lets you register a callback function which is executed whenever an element being monitored enters or exits another element, or the viewport.

### Day 14: August 8, 2018

**Today's Progress**: JS Reference VS Copy

**Thoughts:** I loved this exercise! I know the different ways to copy an object. For an array, we can use slice, Array.from(), concat, and spread operator. For other objects, we can use the spread operator or the Object.assign method. A nice refresher!

### Day 15: August 8, 2018

**Today's Progress**: Locale Storage

**Thoughts:** Woo! I finally get to work with local storage! We saved our list items inside an array and assigned it to our local storage as a key/value pair. With the help of JSON.parse and JSON.stringify, we ar eable to save our data as strings in local storage and parse it back as object to use it in our javascript code. Looking forward to using this on upcoming projects.

TODO: Create a clear all, check all, and uncheck all buttons.
