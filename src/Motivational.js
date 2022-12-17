import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";


const quotes = [
  {
    quote:
      "When you have a dream, you've got to grab it and never let go.",
    cite: "Carol Burnett"
  },
  {
    quote:
      "Nothing is impossible. The word itself says 'I'm possible!'",
    cite: "Audrey Hepburn"
  },
  {
    quote: "There is nothing impossible to they who will try.",
    cite: "Alexander the Great"
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot.",
    cite: "Michael Altshuler"
  },
  {
    quote:
      "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    cite: "Nicole Kidman"
  },
  
  {
    quote:
      "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris",
    cite: "Larry Wall"
  }
];

function Quotes() {

  const [index, setIndex] = useState();

  const generate = () => {

  const index = Math.floor(Math.random() * quotes.length);
  
    setIndex(index);
  };
  return (
    <div className="App">
      

      <p>{quotes[index] && quotes[index].quote}</p>
      <p>{quotes[index] && quotes[index].cite}</p>

      <button onClick={generate}>Generate Motivational Quote</button>
    </div>
  );
}
export default Quotes;