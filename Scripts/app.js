//IIFE - Immediately Invoked Function Expressions.
(function(){
    function Start()
    {
        console.log("App Started...");
        let title = document.title;
        console.log(`The title of the page is ${title}`);

        title = title.toLowerCase();

        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) {

            let anchorString =anchor.getAttribute("href")
            anchorString = anchorString.substr(0,anchorString.length -5);
            
            if((title==="about")&&(anchorString==="index")||(title===anchorString))
            {
                anchor.className="nav-link active";
            }            
        }
        //step 1 hook into the spot {element} on the page
        let jumbotron = document.getElementsByClassName("jumbotron")[0];
        //step 2 create a new element
        let neweParagraph = document.createElement("p");
        //step 3 configure the new element
        neweParagraph.textContent =title;
        //step 4 attach the new element
        jumbotron.appendChild(neweParagraph);

        
    }

    window.addEventListener("load", Start);

})();