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
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/function getRandomQuote(quotes){
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
***/function printQuote(getRandomQuote){
       var newLink = getRandomQuote;
       newLink =  "<p class ='quote'>" + quotes.quote + "</P>"  + "<p class='source'>" + quotes.source + "</p>" +  "<span class='citation'>" + quotes.citation +"</span>" + "<span class='year'>" + quotes.year +"</span>";
       if(newLink){
       quote = "<p class ='quote'>" + quotes.quote + "</P>";
       source= "<p class ='source'>" + quotes.source + "</P>";
       citation = "<span class='citation'>" + quotes.citation + "</span>";
       year = "<span class='year'>" + quotes.year +"</span>";
       }
    document.getElementById('quote-box').innerHTML = newLink;
    
}
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false)

// Remember to delete the comments that came with this file, and replace them with your own code comments.//