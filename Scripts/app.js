"use strict";
//IIFE - Immediately Invoked Function Expressions.
/*File name : app.js
  Author's name : Seol Cheon
  Web site name : SC Inc.
  file description: a text file containin JavaScript code that is used to execute */
(function(){
    //highlight the active page nav list 
    function highlightActiveLink() 
    {
        let title = document.title;
        //show which page you are on
        console.log(`The title of the page is ${title}`);
        //make navigation lists where you are on active 
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
    //add texts in about me page
    function addParagraphsToAboutmeJumbotron() {
        //step 1 hook into the spot {element} on the page
        let aboutjumbotron = document.getElementById("aboutMeJumbotron");
        
        if (aboutjumbotron) //if jumbotron exists
        {       
            let newDiv = document.createElement("div");
            newDiv.innerText =//textContent, innerText,innerHTML
                `                    
                    My personal mission in life
                    is to learn English, French, Spanish
                    is to join Google and learn how to run a  company
                    is to make AI that can be friend with human
                    is to run my own AI business          
                `;
            aboutjumbotron.appendChild(newDiv);

            return true;
        }return false;        
       
    } 

    function addParagraphsAfterimage() {        
        let profilephoto = document.getElementsByName("profile")
        if (profilephoto) //if jumbotron exists
        {
            let experiment = document.createElement("div");            
            experiment.innerHTML =
                `                
                    I like to draw pictures about my culture!
                    I'm from Korea and I think there's so many amazing architectures
                    in my country. And I really want to promote those!
                    But It is a bit hard to travel to Korea everytime you want to see works.
                    So Finally, I want to build website for digital art gallery 
                    where there are a lot of beautiful picutres of korean cultures that I draw.     
                    FYI, a picture above is my work!           
                    
                `; 
            //attach new div
            profilephoto.appendChild(experiment);
            return true;
        }return false;
    }


    //add texts in projects page
    function addParagraphsToProjectsJumbotron() {        
        let projectsjumbotron = document.getElementById("projectJumbotron");
        
        if (projectsjumbotron) //if jumbotron exists
        {
            //create a list
            let list1 = document.createElement("li");
            //step 3 configure the new element
            list1.textContent =
                `
                Building a Korean Digital Art Gallery.
                    
                `;
            //attatch list
            projectsjumbotron.appendChild(list1);

            //create div element
            let firstParagraph = document.createElement("div");            
            firstParagraph.innerHTML =
                `                
                    I like to draw pictures about my culture!
                    I'm from Korea and I think there's so many amazing architectures
                    in my country. And I really want to promote those!
                    But It is a bit hard to travel to Korea everytime you want to see works.
                    So Finally, I want to build website for digital art gallery 
                    where there are a lot of beautiful picutres of korean cultures that I draw.     
                    FYI, a picture above is my work!           
                    
                `; 
            //attach new div
            projectsjumbotron.appendChild(firstParagraph);
            //create hr element to put empty line
            let line = document.createElement("hr");                    
            projectsjumbotron.appendChild(line);

            //create a list
            let list2 = document.createElement("li");
            //configure element
            list2.textContent =
                `
                Making a language learning App.
                `; 
            //attatch the element    
            projectsjumbotron.appendChild(list2);   
            //create the div element        
            let secondParagraph = document.createElement("div");
            //configure the div element
            secondParagraph.innerHTML =
                `
                I like to learn langauge with language learning App.
                I want to make the App with AI.
                Not only can this AI translate what people says with their language,
                Also this AI can recognize user's voice and analyze the accent and pronunciation
                and It will give feedback to users so they can fix their langauge speaking. 
                I'll charge of analyzing speaking patterns.               
    
                `;         
            //attatch the element   
            projectsjumbotron.appendChild(secondParagraph);
            //create hr element
            let line2 = document.createElement("hr"); 
            //attatch hr element                   
            projectsjumbotron.appendChild(line2);
            //create li element
            let list3 = document.createElement("li");  
            //configure it         
            list3.textContent =
                `
                Making a YouTube channel!
                    
                `; 
            // attach the new element
            projectsjumbotron.appendChild(list3);

            //create new element div
            let thirdParagraph = document.createElement("div");
            //configure
            thirdParagraph.innerHTML =
                `
                I like to share my ideas and knowledge with people.
                I think becoming a youtuber will help me improve my English
                and learn skills for buiding websites using language!
                The reason why I think like this is I believe that only after I teach people 
                with my knowledge, that knowledge is real mine now.
                So My last project that I haven't started yet eagerly is to become a Youtuber! 
                                   
    
                `; 
            //attatch element div               
            projectsjumbotron.appendChild(thirdParagraph);
 
            return true;
        }return false;        
       
    } 


    //validations in contact page
    function validateForm()
    {        
        let contactForm = document.forms[0];
        if(contactForm)
        {
            //turn validation off
            contactForm.noValidate = true;
           

 

            let errorMessage = document.getElementById("errorMessage");
            //error message for length of firstname
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
            //error message for length of lasname
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
            {   //prevent it from submitting when you click
               
                var input = document.getElementById('lastName');
                console.log(`your last name is: `,input.value);
               
                console.log("Submit Button Clicked");
                event.preventDefault();
            })
            return true;
        }        
        return false;
    }
    
    //when page loaded it happens
    function Start()
    {
        console.log("App Started...");

        let title = highlightActiveLink();
        //check if sucessfully paragraphs added in about me page
         let success =addParagraphsToAboutmeJumbotron(); 
        if(success)
        {
        console.log("successfully added paragraphs to index.html jumbotron");
        }
        else
        {
        console.log("content not added to index.html jumbotron - does not exist"); 
        } 

        //check if sucessfully paragraphs added in projects page
        let success1 =addParagraphsToProjectsJumbotron(); 
        if(success1)
        {
        console.log("successfully added paragraphs to projects.html jumbotron");
        }
        else
        {
        console.log("content not added to projects.html jumbotron - does not exist"); 
        }
        //check if sucessfully form validated
        let formValidated =validateForm();
        if(formValidated)
        {
        console.log("successfully validated form");
        }
        else
        {
        console.log("form not validated -does not exist"); 
        }

        let formValidated1 =addParagraphsAfterimage();
        if(formValidated1)
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



