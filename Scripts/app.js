"use strict";


//IIFE - Immediately Invoked Function Expressions.
/*File name : app.js
  Author's name : Seol Cheon
  Web site name : SC Inc.
  file description: a text file containin JavaScript code that is used to execute */
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
       
            // create a new element
            let newDiv = document.createElement("div");
            //step 3 - configure a new element
            newDiv.innerText =//textContent, innerText,innerHTML
                `                    
                    My mission in life
                    is to learn English, French, Spanish
                    is to join Google and learn how to run a  company
                    is to make AI that can be friend with human
                    is to run my own AI business          
                  
                `;
            //step 5 attath the new element
            aboutjumbotron.appendChild(newDiv);

            return true;
        }return false;        
       
    }

    function addParagraphsToProjectsJumbotron() {
        //step 1 hook into the spot {element} on the page
        let projectsjumbotron = document.getElementById("projectJumbotron");
        
        if (projectsjumbotron) //if jumbotron exists
        {
            //step 2 create a new element
            let list1 = document.createElement("li");
            //step 3 configure the new element
            list1.textContent =
                `
                Building a Korean Digital Art Gallery.
                    
                `; //textContent, innerText,innerHTML          
           //step 4 attach the new element
            projectsjumbotron.appendChild(list1);


            let firstParagraph = document.createElement("div");            
            //step 3 configure the new element
            firstParagraph.innerHTML =
                `                
                    I like to draw pictures about my culture!
                    I'm from Korea and I think there's so many amazing architectures
                    in my country. And I really want to promote those!
                    But It is a bit hard to travel to Korea everytime you want to see works.
                    So Finally, I want to build website for digital art gallery 
                    where there are a lot of beautiful picutres of korean cultures that I draw.                
                    
                `; //textContent, innerText,innerHTML    
            //step 4 attach the new element
            projectsjumbotron.appendChild(firstParagraph);
    
    
            let list2 = document.createElement("li");
            //step 3 configure the new element
            list2.textContent =
                `
                Making a language learning App.
                    
                `; //textContent, innerText,innerHTML          
           //step 4 attach the new element
            projectsjumbotron.appendChild(list2);

            //back to step 2 - create a new element
            let secondParagraph = document.createElement("div");
            //step 3 - configure
            secondParagraph.innerHTML =
                `
                I like to learn langauge with language learning App.
                I want to make the App with AI.
                Not only can this AI translate what people says with their language,
                Also this AI can recognize user's voice and analyze the accent and pronunciation
                and It will give feedback to users so they can fix their langauge speaking. 
                I'll charge of analyzing speaking patterns.                   
    
                `;            
            projectsjumbotron.appendChild(secondParagraph);

            let list3 = document.createElement("li");           
            list3.textContent =
                `
                Making a language learning App.
                    
                `; //textContent, innerText,innerHTML          
           //step 4 attach the new element
            projectsjumbotron.appendChild(list3);

            let thirdParagraph = document.createElement("div");
            //step 3 - configure
            thirdParagraph.innerHTML =
                `
                I like to learn langauge with language learning App.
                I want to make the App with AI.
                Not only can this AI translate what people says with their language,
                Also this AI can recognize user's voice and analyze the accent and pronunciation
                and It will give feedback to users so they can fix their langauge speaking.                    
    
                `;            
            projectsjumbotron.appendChild(thirdParagraph);
 
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



