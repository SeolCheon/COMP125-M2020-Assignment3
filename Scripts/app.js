"use strict";
//IIFE - Immediately Invoked Function Expressions.
/*File name : app.js
  Author's name : Seol Cheon
  Student number : 301113120
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

            //error message for length of firstname
            let errorMessage = document.getElementById("errorMessage");
            
            //validate first name
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
            //validaete last name
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
            

            //the things that are gonna happen when submit button clicked
            let submitButton =document.getElementById("submitButton")        
            submitButton.addEventListener("click",(event) =>
            {   
                  
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


    //function for loading footer
    function loadFooter()
    {
        console.info("Footer Loading...");

        //creates the XHR object
        let XHR = new XMLHttpRequest();

        //configures the message
        XHR.open("GET", "./Views/partials/footer.html");

        //Executes the request
        XHR.send();
        //register the readystate event 
        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let footer = document.getElementsByTagName("footer")[0];

                let footerData = XHR.responseText;

                footer.innerHTML = footerData;  //put contents in footer.html to every footer tags
            }
        });
    }
    //function for loading paragraphs from json using ajax
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

                let dataFile = JSON.parse(XHR.responseText);//json file data parsing
                
                let Paragraphs = dataFile.paragraphs;  //assign those as Paragraphs               

                let paragraphList = [];   //make new array paragraphList                 

                for (const paragraph of Paragraphs) 
                {
                    let paras = new objects.Paragraph(); //make new object                    
                    paras.setParagraph(paragraph); //implement setParagraph method from paragraph.js file
                    paragraphList.push(paras); //push elements in array                    
                }
                console.log(paragraphList);
               
                
                let aboutJumbo = document.getElementsByClassName("aboutjumbotron"); //get every elements whose tag name is img and assign it as an image                    
                let para1 = document.createElement('p'); //create element p                          
                para1.innerHTML =paragraphList[0];   //configure p with array element 

                let projectJumbo = document.getElementsByClassName("projectjumbotron");
                let para2 = document.createElement('p');  
                para2.innerHTML =paragraphList[1]+paragraphList[2]+paragraphList[3];
                                    
                console.log(aboutJumbo[0])

                if(aboutJumbo[0]!=null)                   
                {
                    aboutJumbo[0].appendChild(para1);                        
                } 
                else{projectJumbo[0].appendChild(para2);}
                
                if(projectJumbo[0]!=null)                   
                {
                    projectJumbo[0].appendChild(para2);                        
                } 
                else{
                aboutJumbo[0].appendChild(para1);}                  
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
        //implement functions
        
        
        
        
        
         
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



