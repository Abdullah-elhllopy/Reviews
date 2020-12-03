var result = {
   0 : {scr : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg" , author : 'sara jones' , job : 'ux designer' ,
   info : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?'
   },
   1 : {scr : 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg' , author :'susan smith' , job :'web developer' , 
    info : 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'  
   }, 

   2 : {scr : 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg' , author :'peter jones' , job :'intern' ,
    info : 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.' 
   },
   
   3 : {scr : 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg' , author :'bill anderson' , job :'the boss' , 
   info : 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.' 
   }

}
var DomString = {
    image : '#person-img',
    author : '#author' ,
    job : '#job',
    info : '#info'          
}

var image = document.querySelector(DomString.image);
var author = document.querySelector(DomString.author);
var job = document.querySelector(DomString.job)
var info = document.querySelector(DomString.info);

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const btns = document.querySelectorAll('#test')
// set starting item
var currentItem = 0;
btns.forEach(function(btn) {
    btn.addEventListener('click' , (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.value == "next-btn"){
            currentItem ++       
            if(currentItem > 3){
                currentItem = 0
            } 
        }
        else if(styles.value == "prev-btn"){
            currentItem --       
            if(currentItem < 0){
                currentItem = 3
            } 
        }
        showPerson(currentItem)   
    })
})
randomBtn.addEventListener('click',()=>{
    var dice = Math.floor(Math.random()*4)
    showPerson(dice)
})
function showPerson(person){
    let item = result[person]
    author.textContent = item.author    
    job.textContent = item.job 
    info.textContent = item.info   
    image.src= item.scr
}

