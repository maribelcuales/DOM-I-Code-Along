/////////   DOM    ///////////
// (Instructor: Christina Gorton)

// DOM (Document Object Model) 
// an object based representation of our HTML Document 
// an attempt to convert the structure and content of our HTML document into an object model that can be used various programs 
// can use the DOM with all kinds of languages and not just JS 

// All that's happening in a webpage (hover effects, drop down menus, like, etc.) are happening with the DOM  

// What we can do with it? 
// 1. ADD content to an HTML document
// 2. DELETE content from an HTML document 
// 3. CHANGE content on an HTML document 


// DOM - Document Object Model 
/* 
- Document: The Document is the webpage 
- Object: 
    - Objects are just elements
    - the DOM makes every element on our HTML page an object 
    <head></head> is an object 
    <body></body> is an object 
    <nav></nav> is an object 
    <h1></h1> is an object 

- Model: 
    - Tree-like structure - everything is branching off from one another
    - The model is a Data structure 
    - Example: 
                HTML
          _______|_______
          |              |
         HEAD           BODY
          |            __|__
        TITLE          |    |
                      NAV  DIV
                       |    |
                      UL    P
                    ___|___
                    |  |  |
                   LI  LI LI  

- Nodes: 
    - Everything that we can change in the document is a node:
      - Elements 
      - Text with elements
      - HTML attributes


/////   DOM selectors /////
- Selectors used to grab elements or nodes in the DOM 
  - getElementById()
  - getElementsByClassName()
  - getElementsByTagName()
  - querySelector()
  - querySelectorAll()

- Because we're using the DOM and were grabbing things in the Document, we're going to use Document. 
*/


/////   getElementById()    /////
//  - a single selector 
//  - grabs an element on our page that has an ID 
//  - any valid ID will work (no need for # CSS selector, just ID name) 

//- e.g
const logoTitle = document.getElementById('logo-title');
// console.log(logoTitle); 


/////   querySelector()   /////
//  - a single selector
//  - Any valid CSS selector will work but you MUST use the selector for the argument
//  - it goes through and queries the DOM searching for whatever you put inside (any valid CSS Selectors) 
//  - Note: Be careful to mention that it finds the FIRST matching selection.  This can be an issue of developers forget and have multiple class names. 

//  - e.g 
const firstTitle = document.querySelector(".card-title"); 
// console.log(firstTitle);   


/////   getElementsByTagName()    /////
// - return a multiple selections in the form of a HTMLCollection
// - use a for loop to loop through an html collection
// - You can target specific elements by using the array-like syntax of a HTMLCollection

//- e.g
const links = document.getElementsByTagName('a');
// console.log(links);


/////   getElementsByClassName()    /////
// - return a multiple selections in the form of a HTMLCollection
// - use a for loop to loop through an html collection
// - You can target specific elements by using the array-like syntax of a HTMLCollection

// - e.g 
const menuItems = document.getElementsByClassName('menu-item');
// console.log(menuItems);


////    querySelectorAll()    /////
// - return a multiple selections in the form of a NodeList instead of an html collection  
// - since it's a node list, we can use forEach to loop through the node list 

// - e.g
const cardTitle = document.querySelectorAll('.card-title');
console.log(cardTitle); 

cardTitle.forEach(element => {
  console.log(element);
  element.style.color = "blue"; 
  // style is a method that you can use on the DOM that would style your elements just like you would in css 
  // Note: if in JS, use camelCase (e.g backgroundColor instead of background-color in CSS)
})

// (Using getElementsByClassName() which returns an HTML collection)

const cardTitles = document.getElementsByClassName('card-title');  // returns an html collection 

console.log(cardTitles); 

for (let i = 0; i < cardTitles.length; i++) {  // use for loop to loop over the html collection; 
  cardTitles[i].style.color = 'pink'; // give it this styling 
}

// this, however, is more code so it is better to use querySelectorAll() instead 
