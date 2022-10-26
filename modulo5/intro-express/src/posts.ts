// Exercício 6

import { Post } from "./types";

/*
Resposta: É ideal mantê-los separados, para quando formos fazer manutenção no banco, não precisarmos
procurar em arquivos gigantescos de usuários.
*/

export const posts:Post[] = [
    {
        id:1,
        title:"9 TED Talks That Anyone Working in Sports Should Watch",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:5
    },
    {
        id:2,
        title:"What I Wish I Knew a Year Ago About Sports",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:4
    },
    {
        id:3,
        title:"A Beginner's Guide to Sports",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:2
    },
    {
        id:4,
        title:"The Worst Advice We've Ever Heard About Sports",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:2
    },
    {
        id:5,
        title:"Sports: Expectations vs. Reality",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:1
    },
    {
        id:6,
        title:"How Much Should You Be Spending on Sports?",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:3
    },
    {
        id:7,
        title:"Miley Cyrus and Sports: 10 Surprising Things They Have in Common",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:4
    },
    {
        id:8,
        title:"11 Ways to Completely Sabotage Your Sports",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:1
    },
    {
        id:9,
        title:"Why It's Easier to Succeed With Sports Than You Might Think",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:3
    },
    {
        id:10,
        title:"Ask Me Anything: 10 Answers to Your Questions About Sports",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus.",
        userId:5
    },
]

