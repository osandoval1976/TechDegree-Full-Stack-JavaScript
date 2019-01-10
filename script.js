/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing




/*** Comments firt part.
 *  First Start with arrays of objects, array of object, content: quotes, sources, citations and the year.
 *  ****/
let quotes = [
{
        quote : "A friend may be waiting behind a stranger's face",
        source: "Maya Angelou",
        year: 2008,
        citation: "Letter to My Daughter"
        },
        {
        quote : "If the only prayer you said in your whole life was “thank you” that would suffice",
        source: "Meister Eckhart",
        year:"",
        citation:""
         },
        {
        quote : "Feeling gratitude and not expressing it is like wrapping a present and not giving it ",
        source: "William Arthur Ward",
        year: "",
        citation:""
        },
        {
        quote : "Ingratitude is the daughter of pride ",
        source: "Miguel de Cervantes",
        year: "",
        citation:""
        },
        {
        quote : "We often take for granted the very things that most deserve our gratitude. Cynthia Ozick ",
        source:  "Cynthia Ozick", 
        year: "",
        citation:""
        }
];


/***
/***
    
     /*** Comments second part
    the function : getRandomQuote(quotes); In this part of the proyect I used  the function getRandomQuote with 
 *  the parameter "quotes".
 *  finally in this part I use the return quotes[total]; to execute the function.
      
      
***/ function getRandomQuote(quotes){
   let total= Math.floor(Math.random() * quotes.length);
   return quotes[total];
}

/***
  * Comments 3rd part 
      * At the beginning I started with some codes errors, after that I went to the "Slack Chat" I asked for some advices,
      * in this part took my a few time because I need to recap some information that I not remember, Array, loops, conditional
      *  and objects, help in the slack channel and other examples from chat colegues.
      * in this part:
      * 1- call a function 
      * 2- how to stored the variable 
      * 3- conditionals: I used the if else conditional.
      * it is a quite practice but its help a lot to recap of this last classes, really helps a lot to learn.

***/function printQuote(){
      getRandomQuote(quotes);
       let newLink = getRandomQuote(quotes);
       txt = '<p class ="quote">'+ newLink.quote + '</P>'  +  '<p class="source">' + newLink.source +   '<span class="citation">' + newLink.citation +'</span>'+ '<span class="year">' + newLink.year +'</span>' + '</p>';
      //**I changed the conditional statements */
       if(newLink){
        quote = '<p class ="quote">'+ newLink.quote + '</P>';
       }else {
         sesource =  '<p class="source">' + newLink.source + '</p>';
       }   
//* the Ids or classes to make display style are applied, but I didn't notice any differences, I tested all.**/
                document.getElementById('quote-box').innerHTML = txt;
                document.getElementsByClassName('quote').innerHTML = txt;
                doocument.getElementsByClassName('source').innerHTML = txt;
                document.getElementsByClassName('citation').innerHTML = txt;
                document.getElementsByClassName('year').innerHTML = txt;
     }

                document.getElementById('loadQuote').addEventListener("click", printQuote, false)

