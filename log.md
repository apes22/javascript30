# 30 Days of Javascript - Log

### Day 1: July 23, 2018

**Today's Progress**: Implemented Javascript Drum Kit

**Thoughts:** On my first day, I took it easy and first watched the video on how Wes implemented the Drumk Kit. This helped me get
familiarized with the course layout. There were alot of new concepts that I hadn't learned before like the ability to add my own
attributes to html tags by simply adding "data-" and the name of the new attribute. This allowed us to set key values to our key divs.
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

**Thoughts:** This was a really fun exercise to work on! We implemented an accordion panel gallery using flexbox. I was able to practice more with flex-grow as well as transitions and transform properties. We used the transform: translateY() to move p elements in an out of the page. We used flex-grow to increase the width of a div.

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

**Thoughts:** We implemented a way to add items to the windows when a user correctly inputs the correct secret code (magic word). We use the "keyup" event listener on the window to listen for key releases and save the recent pressed keys on an array. We only saved the number of recent presses that matched the length of the magic word so the array didn't take up unecessary space. This was a really short, but fun exercise.

### Day 12: August 7, 2018

**Today's Progress**: Custom Video Player

**Thoughts:** In this exercise, we implemented the controls for the HTML5 video tag. The video tag, by default, gives you controls, but we wanted to create our own custom controls. Through this example, we implemented the start/pause, skip back/forward, volume, and playback speed functionalities. I learned about the video methods like pause(), play(), playbackRate(), volume(). I also learned about some of its properties like currentTime and duration. It was relatively easy exericse. However, if you don't know the video properties and available methods, then it'll take more time to come up with a solution.

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

**Thoughts:** Woo! I finally get to work with local storage! We saved our list items inside an array and assigned it to our local storage as a key/value pair. With the help of JSON.parse and JSON.stringify, we are able to save our data as strings in local storage and parse it back as object to use it in our javascript code. Looking forward to using this on upcoming projects.

TODO: Create a clear all, check all, and uncheck all buttons.

### Day 16: August 10, 2018

**Today's Progress**: Mouse Move Shadow

**Thoughts:** This exercise was a toughy! I still don't quite understand the offsetLeft and offsetTop for an element. I want to come back and mess with the offset values. I did learn how we can style an element's text shadow for an element using javascript.

### Day 17: August 10, 2018

**Today's Progress**: Sort Without Articles

**Thoughts:** I loved this exercise! The goal of this exercise was to sort an array of band names in alphabetical order without using the first article word. I came up with two solutions. The first was using the includes array method to check if the first word of the string contained an article. If it did, then we would use the slice method to remove the first word of the string. The second solution was using the string replace method to remove the first word of the band name if it was an article. Even though I didn't come up with the optimal regex expression, I still got halfways there and made my solution work. Next time a similar problem comes up, I'll be able to remember the regex expresion used to get the first word of a string.

### Day 18: August 11, 2018

**Today's Progress**: Adding Up Times with Reduce

**Thoughts:** I loved this exercise! The goal of this exercise was to sort an array of band names in alphabetical order without using the first article word. I came up with two solutions. The first was using the includes array method to check if the first word of the string contained an article. If it did, then we would use the slice method to remove the first word of the string. The second solution was using the string replace method to remove the first word of the band name if it was an article. Even though I didn't come up with the optimal regex expression, I still got halfways there and made my solution work. Next time a similar problem comes up, I'll be able to remember the regex expresion used to get the first word of a string.

### Day 19: August 15, 2018

**Today's Progress**: Event Capture, Propagation, Bubbling and Once.

**Thoughts:** This exercise helped me visualize how event bubbling and capturing work. Event Delagation is when an event handler is added to a parent element and the listener wil trigger anytime the event is triggered on the descendants. Event Bubbling is a method for how events in the events DOM API are propagated. In bubbling, the event is first captured and handled by the innermost element and then propagated to the outer elements In Event Capture, the event is first captured and handled by the outermost element and then propagated to the inner elements. Once is a way of removing an event listener afer an event has been triggered.

### Day 20: August 16, 2018

**Today's Progress**: Sticky Nav

**Thoughts:** In this exercise, we implemented a sticky nav when the nav reaches the top of the window. This was my first time using the fixed position. We used the window.scrollY value and offsetTop of the navigation element to figure out when the navigation actually got to top of the window. We added a fixed-nav class to the nav element to update the position from relative to fixed. We also used the offsetHeight value of the nav element to add top padding to the body to account for the fact that the nav no longer is taking up space.

### Day 21: August 18 2018

**Today's Progress**: Follow Along Link Highlighter

**Thoughts:** In this exercise, we implemented the functionality of highlighting links when on hover. We actually added an event listener on mouseenter for each link. The trick to getting the highlight element, which is an absolute span, to sit right behind the link element, was to make the highlight element the same size of the link element. We did this by getting the height and width of the link element using the getBoundingClientRect(). We also translated the position of the highlight to be the same as the link element by setting the transform to translate to where the link element is positioned. Again we got this getting by the top and left values from the object returned from getBoundingClientRect(). To take an account that the top and left are not always from the top of the window, we added window.scrollY to the top value and window.scrollX to the left value. This was a really fun exercise and excited to use this type of solution in the future.

### Day 22: August 20 2018

**Today's Progress**: Stripe Follow Along Nav

**Thoughts:** In this exercise, we implemented the follow along nav background functionality that Stripe has on their website. This was a continuation of exercise 22, which was the follow along link higlighter functionality. This exercise already had alot of the css we needed, so we mainly had to implement the event handlers on mouseleave and enter for each nav link in the site. The hardest issue for me here was debugging a syntax error when setting the value of the width of an element using string literal. I had one extra space afer the numerical value an the px suffix. This threw me off for a while and finally realized my issue when I compared with the solution. Next time, I will be console logging the values of the literals instead.

### Day 23: August 20 2018

**Today's Progress**: Click and Drag

**Thoughts:** This exercise was probably the hardest so far. I had to look at the solution because I did not know where to start with setting up my flags and which event listeners I needed to use. So I am going to give it a shot at explaining the solution here! So we want to be able to keep a reference of when the mouse is actually being held down. When we trigger a mouseleave and mouseup on the slider, we want to set our flag of isDown to false. However, when trigger a mousedown on the slider, we want to set this flag to true and also save our current startX (which is equal to e.pageX - the sliders offsetLeft) and the offsetLeft (which is the slider's scrollLeft value). When a mousemove is triggered, here is when we try to actually change the scroll x value in the page. I.e. drag our page to where want to move it to. If the down flag is true, then we want to figure out our scrollLeft value (scrollLeft - walk) for our slider by using the saved startX and scrollLeft values generated in function called by the mousedown handler. (x = e.pageX - the slider's offsetLeft and walk is equal to (x-startX) \* 3. In all these 4 event listeners we want to add or remove the active class from our slider, accordingly.

TODO: Come back and try to implement again.

### Day 24: August 21 2018

**Today's Progress**: Geolocation

**Thoughts:** I'm sad I couldn't get the simulator to run the Location. However, I think this has to do with the security vulnerability when running on local host. I tried running the app on my phone, but it still was not allowing to share the location with my app. This is my first time opening up xCode to run a simulator. I also couldn't get the inspector to run on Safari for my simulator. It was nice to know about the watchPosition method on the window's geolocation object. Will come in handy one day.

TODO: Get inspector to run on Safari for a simulator on XCode. Get the location to work on the Simulator.

### Day 25: August 29 2018

**Today's Progress**: Video Speed Controller

**Thoughts:** I almost implemented this all on my own! The goal of this exercise was to add functionality to the custom speed bar to update the video's playback rate. I was able to add an event handler when a user clicks and drags the mouse on the speed bar. I used the event's pageY, the speed's offsetTop, and offsetHeight to get the current percentage of the speed bar. Getting the playbackRate was pretty straightforward. We used our max and min to get the actual value instead of it being a decimal.

### Day 26: August 29 2018

**Today's Progress**: Native Speech Recognition

**Thoughts:** This exercise was so cool! I didn't realize how easy it was to use speechRecognition on the browser. We practiced setting a recognition object and adding event listeners that get the speech result as well as starting the recognition up again when someone pauses from speaking. It was definitely a good practice run and excited to use this functionality in the future.

TODO: Create a react app that gets the weather for you when you ask for it. "Maribel Get the Weather for {City and State}";

### Day 27: September 2, 2018

**Today's Progress**: Speech Synthesis

**Thoughts:** This exercise was also a cool one! The SpeechSynthesisUtterance API for modern browsers gives you the ability to set a voice so that it speaks the contents from the browser. So it's basically the opposite of speechRecognition. We set an event lisenter on the the speechSynthesis object for whenever the voices changed, which is usually once the voices supported by the browser have fully loaded. There were a few important methods for the speechSynthesis object that we had to know in order to make this app work. We had to know the cancel() and speak() method. Other than that regular event handlers for the buttons and dropdown options were set to update the voices and get the voice to stop/start speaking. This will be a cool API to work with in the future;

### Day 28: September 3, 2018

**Today's Progress**: Countdown Timer

**Thoughts:** Even though I had already done this before, it still took me a lot of effort to get this countdown timer completed. The main difference between this solution and my previous implementation is that we don't keep track of the seconds left. We actually use Date.now() to keep track of the current time in seconds. Other than the implementation was similar to what I have done in the past.

### Day 29: September 4, 2018

**Today's Progress**: Wack A Mole

**Thoughts:** This one was an easy exercise! We used the setTimeout method to implemenet the peep method which moves the mole up and down its container. There was not much new to learn from this besides first time using the parentNode.classList object for each mole.

### Day 30: September 5, 2018

**Today's Progress**: Unreal Webcam Fun

**Thoughts:** This is the only exercise I didn't try to implement. I watched the tutorial, but didn't think this is something I will be doing anytime soon. A very interesting topic though!

###FINAL THOUGHT

Wow! I didn't think these exercises were going to be as challenging as they were. I learned so much from every single exercise. There were some ccs properties like transition and transform that I hardly use, but definitely got some practice with in this challenge. I also learned about the window's location properties like offsetTop, offsetLeft, offsetHeight, offsetWidth, etc. We used so many of the array helper methods in this challenge that I will definitely be using for my upcoming projects. There were a few other browser APIs that I didn't know about like SpeechRecognition and SpeechSynthesisUtterance APIs. These were really fun to work with and excited to possibly use in the future. One thing that the challenge could improve on (or something that I can do on my free time) is to create a single event handler on a div instead of creating separate event handlers for list of elements. This will helps save memory and helps us work with event delegation and the two methods for how events in the events DOM API are propagated.
