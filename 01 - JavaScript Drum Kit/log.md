# 30 Days of Javascript - Log

### Day 1: July 24, 2018

**Today's Progress**:  Implemented Javascript Drum Kit

**Thoughts:** On my first day, I took it easy and first watched the video on how Wes implemented the Drumk Kit. This helped me get 
familiarized with the course layout. There were alot of new concepts that I hadn't learned before like the ability to add my own 
attributes to html tags by simplying adding "data-" and the name of the new attribute. This allowed us to set key values to our key divs.
These custom attributes can be shared between different html tags. In this exercise, we added the same data-key value to the key div as well
as the corresponding audio html tag. I also learned about the "keydown" and "transitionend" event listeners and ways of doing a query selector 
on an html tag based on its attribute value (e.g. document.querySelector(`audio[data-key="${e.keyCode}"]`). One important reminder is that in 
order for css transforms to work on elements, we need to first set a transition value to that element. Wow I learned so much from this small exercise!