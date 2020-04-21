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

*/