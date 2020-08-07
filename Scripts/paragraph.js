// IIFE module
"use strict";
let objects;
(function(objects)
{
    class Paragraph 
    {
        constructor(para="") 
        {
            this.para = para;
            
        }
       

        setParagraph(JSON_Data)
        {
            this.para = JSON_Data.para;
            
        }


    }
    objects.Paragraph = Paragraph;

}(objects || (objects = {})));
 