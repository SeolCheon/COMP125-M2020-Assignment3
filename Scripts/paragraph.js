// IIFE module


//IIFE - Immediately Invoked Function Expressions.
/*File name : paragraph.js
  Author's name : Seol Cheon
  Student number : 301113120
  Web site name : SC Inc.
  file description: a text file containin JavaScript code that is used to execute */
  "use strict";

  let objects;
(function(objects)   //namespace
{
    class Paragraph     //class
    {
        //constructor
        constructor(para="") 
        {
            this.para = para;
            
        }
        //toString method
        toString()
        {
            let outputstring ="";
            outputstring += this.para;
            return outputstirng;
        }
       
        //setParagraph method
        setParagraph(JSON_Data)
        {
            this.para = JSON_Data.para;
            
        }


    }
    objects.Paragraph = Paragraph; 

}(objects || (objects = {})));
 