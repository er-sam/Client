export const quote =[
{    id : 1,
    text : "The problem with digital books is that you can always find what you are looking for but you need to go to a bookstore to find what you weren't looking for.",
    author : "Paul Krugman"
},
{
    id : 2,
    text : "“The problem with digital books is that you can always find what you are looking for but you need to go to a bookstore to find what you weren't looking for.”",
    author : "Paul Krugman"
},
{
    id : 3,
    text : "“A good bookshop is not just about selling books from shelves, but reaching out into the world and making a difference.”",
    author : "David Almond"
},
{
    id : 4,
    text : "“A good bookshop is not just about selling books from shelves, but reaching out into the world and making a difference.”",
    author : " David Almond"
}
]



export const getRandomData=(array)=>{
    const d =array[Math.floor(Math.random() * array.length)];
    return d
    console.log("d",d);
}