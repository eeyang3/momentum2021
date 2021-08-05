const quotes = [
  {
    quote: "Definitely…always…never do it.",
    author: "Steven",
  },
  {
    quote: "There are… different ways of being strong",
    author: "Peral",
  },
  {
    quote: "I never asked to be made!",
    author: "Amethyst",
  },
  {
    quote: "Oh no, the laws of physics!",
    author: "Connie and Steven",
  },
  {
    quote: "Tiny. My only weakness.",
    author: "Garnet",
  },
  {
    quote: "Sleep is a curse.. And yet a curse I need to live.",
    author: "Steven",
  },
  {
    quote: "Some of us are trying to protect humanity!",
    author: "Pearl",
  },
  {
    quote:
      "If you're trying to flush yourself down the toilet, it won't work. Trust me, I've Tried",
    author: "Amethyst",
  },
  {
    quote: "Aww! You're like an angry little slice of pie!",
    author: "Steven",
  },
  {
    quote: "Tiny hands. My only weakness.",
    author: "Garnet",
  },
  {
    quote: "I don't get tired, I get results.",
    author: "Pearl",
  },
  {
    quote: "It's a trap! It's an adorable trap!",
    author: "Steven",
  },
  {
    quote: "You are an experience. Make sure you're a good experience",
    author: "Garnet",
  },
  {
    quote: "Such is fate.",
    author: "Sapphire",
  },
  {
    quote: "This could either make or break my hobby.",
    author: "Jamie",
  },
  {
    quote: "I’m combining all my responsibilities into one responsibility.",
    author: "Steven",
  },
  {
    quote:
      "There are millions of possibilities for the future! But it’s up to you to choose which becomes reality.",
    author: "Garnet",
  },
  {
    quote: "If every porkchop were perfect, we wouldn’t have hot dogs.",
    author: "Greg",
  },
  {
    quote:
      "But if you’re the one protecting me… Then who’s the one protecting YOU?",
    author: "Steven",
  },
  {
    quote: "All comedy is derived from fear.",
    author: "Garnet",
  },
  {
    quote:
      "There’s an awful lot of awful things we could be thinking of, but for just one day, Let’s only think about love!",
    author: "Steven",
  },
  /* {
        quote:
        author:
    },
    {
        quote:
        author:
    },
    {
        quote:
        author:
    },
    {
        quote:
        author:
    },
    {
        quote:
        author:
    },
    {
        quote:
        author:
    },
    {
        quote:
        author:
    },*/
];

const quote = document.querySelector(".quotes");
const author = document.querySelector(".authors");
const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuotes.quote;
author.innerHTML = todayQuotes.author;
