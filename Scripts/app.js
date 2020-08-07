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
            {   
               
                var input = document.getElementById('lastName');
                console.log(`your last name is: `,input.value);
               
                console.log("Submit Button Clicked");
                event.preventDefault();//prevent it from submitting when you click
            })
            return true;
        }        
        return false;
    }


    

    function loadHeader()
    {
        console.info("Header Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Views/partials/header.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let header = document.getElementsByTagName("header")[0];

                let headerData = XHR.responseText;

                header.innerHTML = headerData;                
            }
            
        });
    }

    function loadFooter()
    {
        console.info("Footer Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Views/partials/footer.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let footer = document.getElementsByTagName("footer")[0];

                let footerData = XHR.responseText;

                footer.innerHTML = footerData;
            }
        });
    }

    function loadParagraphs()
    {
        console.info("Paragraphs loading...");

        // creates the XHR object
        let XHR = new XMLHttpRequest();

        // configures the message
        XHR.open("GET", "/Scripts/paragraphs.json");

        // Executes the request
        XHR.send();

        // register the readystate event 
        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {                

                let dataFile = JSON.parse(XHR.responseText);
                
                 let Paragraphs = dataFile.paragraphs;
                

                let paragraphList = [];                
                

                for (const paragraph of Paragraphs) 
                {
                    let paras = new objects.Paragraph();
                    paras.setParagraph(paragraph);
                    paragraphList.push(paras);
                    
                }
                 
                
                for(let i=0;i<paragraphList.length;i++)
                {
                    let image = document.getElementsByTagName("img")[i];
                    let para = document.createElement('p');
                    para.innerHTML =paragraphList[i];                    
                    if(image!=null){image.appendChild(para);}
                    console.log(paragraphList[i])

                }
            }return true;
        });return false;
    }
               
    //when page loaded it happens
    function Start()
    {
        console.log("App Started...");
        let title = highlightActiveLink();
        
        loadHeader();
        loadFooter();
        loadParagraphs();
        
        
        
        
         
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
       
    }

    window.addEventListener("load", Start);

})();



