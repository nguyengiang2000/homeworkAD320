/**
 * JS for blog post exercise
 * You will be writing JavaScript to add the functionality of adding a new blog post to the blog.
 
  addEntry function specification:
  - An article should be appended to the #posts container. Inside should be a third level heading followed by a paragraph. The article should have the class .post added to it
  - The third level heading text content should be the text "Date: " followed by the date submitted. The paragraph's text content should be the text "Entry: " followed by the entry submitted
    - Hint: to grab the text from a form element use .value
  - If a user double clicks on any of the blog posts, the post that was clicked should be removed from the page
  The content in #date and #entry should be cleared

 */

  "use strict";
  (function() {
  
    window.addEventListener("load", init);
  
    /**
     * sets up necessary functionality when page loads
     */
    function init() {
      qs("button").addEventListener("click", addEntry);
    }
  
    /**
     * TODO
     * adds a blog entry to the blog post page
     */
    function addEntry() {
        // create variable to store data from event
        let dateValue = id("date").value;
        let entryValue = id("entry").value;
        
        // create new variable to store new post
        let newPost = document.createElement("article");
        newPost.classList.add("post");

        // create date title
        let dateDisplay = document.createElement("h3");
        dateDisplay.textContent = "Date: " + dateValue;

        //Create the paragraph of thoughts
        let thoughts = document.createElement("p");
        thoughts.textContent = "Entry: " + entryValue;

        //Adding the date title and paragraph to the new post
        newPost.appendChild(dateDisplay);
        newPost.appendChild(thoughts);

        //Adding new posts to the #posts container
        qs("#posts").appendChild(newPost);

        // after create new post, make previous input empty again
        id("date").value = "";
        id("entry").value = "";

    }
  
    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element ID.
     * @returns {object} - DOM object associated with id.
     */
    function id(id) {
      return document.getElementById(id);
    }
  
    /**
     * Returns first element matching selector.
     * @param {string} selector - CSS query selector.
     * @returns {object} - DOM object associated selector.
     */
    function qs(selector) {
      return document.querySelector(selector);
    }
  })();