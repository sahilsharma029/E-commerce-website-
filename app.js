const wrapper = document.querySelector(".slider-wrapper");
// wrapper.style.transform = "translateX(-400vw)";
const menuitem = document.querySelectorAll(".menu-item");
const product = [
    {
        id:1,
        title: "Air Force",
        price: 119,
        colors:[
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],

    },
    {
        id:2,
        title:"Air Jordan", 
        price:149,
        colors:[
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title:"Blazer", 
        price:179,
        colors:[
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title:"Crater", 
        price:109,
        colors:[
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id:5,
        title:"Hippie", 
        price:109,
        colors:[
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "green",
                img: "./img/hippie2.png",
            },
        ],
    },
]

let choosenproduct = product[0];

const  currenproductimg = document.querySelector(".product-img");
const  currenproducttitle = document.querySelector(".product-title");
const  currenproductprice = document.querySelector(".product-price");
const  currenproductcolors = document.querySelectorAll(".color");
const  currenproductsizes = document.querySelectorAll(".size");

menuitem.forEach((item,index) =>{
    item.addEventListener("click",()=>{
        // change current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // change choosen product
        choosenproduct = product[index];
        // change text of current product
        currenproducttitle.textContent = choosenproduct.title;
        currenproductprice.textContent = "$"+choosenproduct.price;
        currenproductimg.src = choosenproduct.colors[0].img;
        // change product color
        currenproductcolors.forEach((color,index)=>{
            color.style.backgroundColor = choosenproduct.colors[index].code;
        })
    })
})

currenproductcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currenproductimg.src = choosenproduct.colors[index].img;
    })
})

currenproductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currenproductsizes.forEach((size)=>{
            size.style.backgroundColor = "white";
        size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

const productbutton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click",()=>{
    payment.style.display = "flex";
})
close.addEventListener("click",()=>{
    payment.style.display = "none";
})