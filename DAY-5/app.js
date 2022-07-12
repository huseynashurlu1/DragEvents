/*

TAB MENU

let buttons = document.querySelectorAll('.buttons button');
let content = document.querySelectorAll('.tab-content div');
// console.log(buttons);

for(let btn of buttons) {

    btn.addEventListener('click',function() {
        let active = document.querySelector('.active');
        active.classList.remove('active');
        this.classList.add('active')

        let id = this.id;
        for(let div of content) {
            if(div.getAttribute('id') === id) {
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }
        }
        
    })
}
*/


// SIDEBAR MENU
/*
let menu = document.querySelector('#menu');
let sidebar = document.querySelector('#sidebar');
let close = document.querySelector('#close');

close.addEventListener('click',function() {
    sidebar.classList.remove('menu-active');
})

menu.addEventListener('click',function() {
    sidebar.classList.add('menu-active');
})
*/



// CUSTOM SLIDER
/*
let mySlider = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.png'
]

let img = document.querySelector('.slider img');
let slide = 0
img.src = mySlider[slide]


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click',function() {
    slide++;
    if(slide > mySlider.length - 1) {
        slide = 0;
    }
    img.src = mySlider[slide]
})

prev.addEventListener('click',function() {
    slide--;
    if(slide === -1) {
        slide = mySlider.length - 1
    }
    img.src = mySlider[slide];
})

function AutoPlay() {
    slide++;
    if(slide > mySlider.length - 1) {
        slide = 0;
    }
    img.src = mySlider[slide]
}

setInterval(() => {
    AutoPlay();
}, 2000);
*/


// AOS.init();





// $('.your-class').slick({
//     dots: false,
//     arrows: false,
//     pauseOnHover: false,
//     infinite: true,
//     speed: 1000,
//     autoplay:true,
//     autoplaySpeed: 1500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });


// let box = document.querySelector('#first');

// box.addEventListener('dragstart',function() {
//     console.log('Drag started');
// })


// box.addEventListener('drag',function() {
//     console.log('Drag continues');
// })

// box.addEventListener('dragend',function() {
//     console.log('Drag ended');
// })


// let bottom_div = document.querySelector('.bottom');
// let icon = document.querySelector('.bottom i');


// bottom_div.addEventListener('dragenter',function() {
//     this.style.border = '5px dashed red'
//     icon.style.opacity = '1'
// })

// bottom_div.addEventListener('dragleave',function() {
//     icon.style.opacity = '0'
//     this.style.border = '5px solid red'
// })


let dropArea = document.querySelector('#DropArea');
let dragItem = document.querySelectorAll('#DragArea .box');


dropArea.addEventListener('dragover',function(e) {
    e.preventDefault();
    this.style.border = '3px dashed red'
})



dropArea.addEventListener('dragleave',function() {
    this.style.border = '3px solid red'
})


for(let i=0;i<dragItem.length;i++) {
    dragItem[i].addEventListener('dragstart',function(e) {
       e.dataTransfer.setData('param',this.id)
    })
}

dropArea.addEventListener('drop',function(e) {
    let index = e.dataTransfer.getData('param');
    let div = document.getElementById(index)
    dropArea.appendChild(div)
})
