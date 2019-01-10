/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

/*** Oscar first Proyect
 * First Start with arrays of objects, this part is not hard, but have to read a few.
 * I read some web pages, videos & team tree house videos documentations.
 *  I was stuck in the return quotes[total], Lee and jennifer gaves a hand, I break it! of course the code.
 * ***/
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
        year:"" ,
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
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.


     /***
      * Oscar second part
      * At the beginning I started with some codes errors, after that I went to the "Slack Chat" I asked for some advices,
      * in this part took my a few time because I need to recap some information that I not remember, Array, loops, conditional
      *  and objects, help in the slack channel and other examples from chat colegues.
      * in this part
      * 1- call a function 
      * 2- how to stored the variable 
      * 3- conditionals
      * it is a quite practice but its help a lot to recap of this last classes, really helps a lot to learn.
      
***/ function getRandomQuote(quotes){
   let total= Math.floor(Math.random() * quotes.length);
   return quotes[total];
}

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable. 
   - use the properties of the quote object stored in the variable to
     create your HTML string.
  
      - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 


***/function printQuote(){
       
  getRandomQuote(quotes);
       let newLink = getRandomQuote(quotes);
       
       txt = '<p class ="quote">'+ newLink.quote + '</P>'  +  '<p class="source">' + newLink.source +   '<span class="citation">' + newLink.citation +'</span>'+ '<span class="year">' + newLink.year +'</span>' + '</p>';
       if(newLink){
       quote = "<p class ='quote'>" + newLink.quote + "</P>";
       source= "<p class ='source'>" + newLink.source + "</P>";
       citation = "<span class='citation'>" + newLink.citation + "</span>";
       year = "<span class='year'>" + newLink.year +"</span>";
       }  
      
        
                document.getElementById('quote-box').innerHTML = txt;
    
}
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false)

// Remember to delete the comments that came with this file, and replace them with your own code comments.//