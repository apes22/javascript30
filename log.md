# 30 Days of Javascript - Log

### Day 1: July 24, 2018

**Today's Progress**: Implemented Javascript Drum Kit

**Thoughts:** On my first day, I took it easy and first watched the video on how Wes implemented the Drumk Kit. This helped me get
familiarized with the course layout. There were alot of new concepts that I hadn't learned before like the ability to add my own
attributes to html tags by simplying adding "data-" and the name of the new attribute. This allowed us to set key values to our key divs.
These custom attributes can be shared between different html tags. In this exercise, we added the same data-key value to the key div as well
as the corresponding audio html tag. I also learned about the "keydown" and "transitionend" event listeners and ways of doing a query selector
on an html tag based on its attribute value (e.g. document.querySelector(`audio[data-key="${e.keyCode}"]`). One important reminder is that in
order for css transforms to work on elements, we need to first set a transition value to that element. Wow I learned so much from this small exercise!

### Day 2: July 25, 2018

**Today's Progress**: Implemented Javscript and CSS Clock

**Thoughts:** This one was actually pretty tough to grasp. Mainly because I am not too familiar with the transition and transform css properties. First time using transition-timing-function as well. This was a good refresher on these properties and hoping to use them soon.

**TODO**: Fix issue where seconds tries to rewind back 360 degrees when it hits 60 seconds. This is probably happening for minutes and hands as well.

### Day 3: July 26, 2018

**Today's Progress**: CSS Variables

**Thoughts:** Implemented a widget that allows a user to change the blur, padding, and background color of an image with the help of Css Variables. A few new html concepts that I haven't really worked with before were the input type of color. If you add an input type="color", the website will provide a color picker based on your OS system. Pretty neat. Also learned more about the "data-" custom attribute and how we can use Javascript to get the "data-" attributes set on an html element by calling [element].dataset. Dataset is an object that returns the "data-" attributes as objects. Example is this.dataset.sizing. We are also able to set the css property by calling [element].style.setProperty([name], [value]).

**TODO**: Make the image more responsive. Currently when you add big value padding to the image, it will not stay within its container. Also would be nice to add an image upload file and edit this image. Another idea would be to allow a user to save this image to their computer.