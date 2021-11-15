# TherapyTrails
My project is the website for a company that combines couples therapy with walking, that I made up, called: Therapy Trails.  
Start with the index.html. This is the home page.  From there you can go to the guides page via the menu. 
The main images (WILD and CITY) are links, but I haven't made these pages yet.

CSS Feature: I use flexboxes and CSS grid to make images and content a single column layout when on a smaller screen or mulitple on a desktop.  
The menu is also styled differently depending on size of screen. 

JavaScript Feature: The copyright year automatically updates, this is seen in the html.  The hamburger button is done with JavaScript as well for the menu, this is seen in site.js file

Some other features: The menu items that don't have their own pages, do jump to where the information is available on that page.  The connect section will pull up email.
Use of a link in the text.  Icon on the browser tab, along with unique titles on each tab. Use of google fonts. I also worked on trying to resize image file sizes to save space.

My media queries explained: the menu on a small screen is hamburger button, when clicked, menu items display center while larger screen has the menu words displayed left. This is for all pages.
On the guides page: the layout displays a single column stacked until the screen width is min. 602px then the layout is 2 columns stacked on 1 alternating until the screen width is min. 1024px then it is 3 columns and there is no border.