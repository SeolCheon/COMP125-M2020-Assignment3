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
        let title = document.title;                             //assign document title to title             
        
        title = title.toLowerCase();                           //change the title name to all lowercase     
        console.log(`The title of the page is ${title}`);       //show which page you are on    
        
        let navAnchors = document.querySelectorAll("li a");
        
        for (const anchor of navAnchors)
        {        
            let anchorString = anchor.getAttribute("href");    
            anchorString = anchorString.substr(0, anchorString.length - 5);     //get title name without '.html'
            
            if ((title === "about") && (anchorString === "index") || (title === anchorString))
            {
                   
                    anchor.className = "nav-link active";                       //if you are on the particular page , active nav bar
            }
            
        } 
          
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
                if(firstName.value.length <2)       //if length of firstname input value is less than 2,
                {
                    firstName.focus();              //turn on focus
                    errorMessage.hidden = false;    //show errorMessage
                    errorMessage.textContent = "Please enter a valid First Name with a length of 2 or more character"   //error message
                }
                else    
                {
                    errorMessage.hidden = true;     //hide the error Message   
                }
            });
            //error message for length of lasname
            let lastName = document.getElementById("lastName");
            //validaete last name
            lastName.addEventListener("blur",(event)=>
            {
                if(lastName.value.length <2)        //if length of input value of last name is less than 2,
                {
                    lastName.focus();               //turn on focus
                    errorMessage.hidden = false;    //do not hide error message
                    errorMessage.textContent = "Please enter a valid Last Name with a length of 2 or more character"    //error message
                }
                else
                {
                    errorMessage.hidden = true;     //hide error message
                }
            });
            

            //the things that are gonna happen when submit button clicked
            let submitButton =document.getElementById("submitButton")        
            submitButton.addEventListener("click",(event) => 
            {   
                  
                console.log("Submit Button Clicked");   //show this message in console
                event.preventDefault();                 //prevent it from submitting when you click
            })
            return true;
        }        
        return false;
    }

    
    //function for showing header 
    function loadHeader()
    {
        console.info("Header Loading...");

        // creates the XHR object
        let XHR = new XMLHttpRequest();

        // configures the message
        XHR.open("GET", "./Views/partials/header.html");

        //  Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){    //register the readystate event
            if((XHR.readyState === 4) && (XHR.status === 200))  
            {
                let header = document.getElementsByTagName("header")[0];    //get elements by tag name 'header' and assign it to header

                let headerData = XHR.responseText;                          //get text from header.thml and assign it to headerData

                header.innerHTML = headerData;  //put headerData to every header tags  
                highlightActiveLink();
                
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
                let footer = document.getElementsByTagName("footer")[0];    //get elements by tag name 'footer' and assign it to footer

                let footerData = XHR.responseText;                          //get texts from footer.html and assign it to footerData

                footer.innerHTML = footerData;  
                                          //put contents in footer.html to every footer tags
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

                let dataFile = JSON.parse(XHR.responseText);    //json file data parsing
                
                let Paragraphs = dataFile.paragraphs;           //assign those to Paragraphs               

                let paragraphList = [];                         //make new array paragraphList                 

                for (const paragraph of Paragraphs) 
                {
                    let paras = new objects.Paragraph();        //make new object                    
                    paras.setParagraph(paragraph);              //implement setParagraph method from paragraph.js file
                    paragraphList.push(paras);                  //push elements in array                    
                }
                
                
                let aboutJumbo = document.getElementsByClassName("aboutjumbotron"); //get every elements whose tag name is aboutjumbotron and assign it  to an aboutJumbo                  
                let para1 = document.createElement('p'); //create element p(paragraph) and assign it to para1                        
                para1.innerHTML =paragraphList[0];   //configure p  (first paragraph in paragraph.json)

                let projectJumbo = document.getElementsByClassName("projectjumbotron"); //get every elements whose tag name is projectjumbotron and assign it  to an projectJumbo
                let para2 = document.createElement('p');    //create element p(paragraph) and assign it to para2
                para2.innerHTML =paragraphList[1]+paragraphList[2]+paragraphList[3];    //configure p ( second, third,fourth paragraph in paragraph.json)
              

                if(aboutJumbo[0]!=null)                     //if you can see jumbotron in about.html on page(if you are at about.html page)            
                {
                    aboutJumbo[0].appendChild(para1);       //append para1 to aboutJumbo 
                } 
                else                                        //if not
                {
                    projectJumbo[0].appendChild(para2);     //append para2 to projectJumbo
                    
                }   

                
                if(projectJumbo[0]!=null)                   //if you can see jumbotron in project.html on page(if you are at project.html page)       
                {
                    projectJumbo[0].appendChild(para2);     //append para2 to projectJumbo                        
                } 
                else                                        //if not
                {
                    aboutJumbo[0].appendChild(para1);       //append dpara1 to aboutJumbo               
                }    
                            
            }return true;
        });return false;
    }

               
    //when page loaded it happens
    function Start()
    {
        console.log("App Started...");

        //implement functions
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



