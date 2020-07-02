"use strict";


//IIFE - Immediately Invoked Function Expressions.
(function(){
    function highlightActiveLink() 
    {
        let title = document.title;
    
        console.log(`The title of the page is ${title}`);
    
        title = title.toLowerCase();
    
        let navAnchors = document.querySelectorAll("li a");
    
        for (const anchor of navAnchors)
        {        
            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);
        
            if ((title === "about") && (anchorString === "index") || (title === anchorString)) {
                    anchor.className = "nav-link active";
            }
        }     
        return title;  
    }

    function addParagraphsToAboutmeJumbotron() {
        //step 1 hook into the spot {element} on the page
        let aboutjumbotron = document.getElementById("aboutMeJumbotron");
        
        if (aboutjumbotron) //if jumbotron exists
        {
            
            //step 2 create a new element
            let neweParagraph = document.createElement("p");
            
            //step 3 configure the new element
            neweParagraph.textContent =
                `
                    This is an example paragraph.
    
                    Here is the next line.
                    
                    `; //textContent, innerText,innerHTML
    
            //step 4 attach the new element
            aboutjumbotron.appendChild(neweParagraph);
    
    
            //back to step 2 - create a new element
            let newDiv = document.createElement("div");
            //step 3 - configure
            newDiv.innerHTML =
                `
                    <p id ='secondParagraph'>
                    This is the second Paragraph
                    </p>
    
                     `;
            //step 5 attath the new element
            aboutjumbotron.appendChild(newDiv);

            return true;
        }return false;        
       
    }

    function addParagraphsToProjectsJumbotron() {
        //step 1 hook into the spot {element} on the page
        let projectsjumbotron = document.getElementById("proJumbotron");
        
        if (projectsjumbotron) //if jumbotron exists
        {
            //step 2 create a new element
            let newParagraph = document.createElement("p");
            
            //step 3 configure the new element
            newParagraph.textContent =
                `
                    This is an example paragraph.
    
                    Here is the next line.
                    
                    `; //textContent, innerText,innerHTML
    
            //step 4 attach the new element
            projectsjumbotron.appendChild(newParagraph);
    
    
            //back to step 2 - create a new element
            let newDivp = document.createElement("div");
            //step 3 - configure
            newDivp.innerHTML =
                `
                    <p id ='secondParagraph'>
                    This is the second Paragraph
                    </p>
    
                     `;
            //step 5 attath the new element
            projectsjumbotron.appendChild(newDivp);

            return true;
        }return false;        
       
    }
 

   



    



    function validateForm()
    {        
        let contactForm = document.forms[0];
        if(contactForm)
        {
            //turn validation off
            contactForm.noValidate = true;

            let errorMessage = document.getElementById("errorMessage");

            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur",(event)=>
            {
                if(firstName.value.length <2)
                {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a valid First Name with a length of 2 or more character"
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur",(event)=>
            {
                if(lastName.value.length <2)
                {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a valid Last Name with a length of 2 or more character"
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            //create a "hook" or "reference" to the button element with an id of "submitButton"
            let submitButton =document.getElementById("submitButton")        
            submitButton.addEventListener("click",(event) =>
            {
                event.preventDefault();
                console.log("Submit Button Clicked")
            })
        }        
        return false;
    }
    

    function Start()
    {
        console.log("App Started...");

        let title = highlightActiveLink();
        
        let success =addParagraphsToAboutmeJumbotron(); 
        if(success)
        {
        console.log("successfully added paragraphs to jumbotron");
        }
        else
        {
        console.log("content not added to jumbotron - does not exist"); 
        }

        let success1 =addParagraphsToProjectsJumbotron(); 
        if(success1)
        {
        console.log("successfully added paragraphs to jumbotron");
        }
        else
        {
        console.log("content not added to jumbotron - does not exist"); 
        }

        let formValidated =validateForm();
        if(formValidated)
        {
        console.log("successfully validated form");
        }
        else
        {
        console.log("form not validated -does not exist"); 
        }
    }

    window.addEventListener("load", Start);

})();



