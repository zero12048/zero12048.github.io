let left = document.querySelector('.button-left')
let right = document.querySelector('.button-right')
let min = document.querySelectorAll('.min')
let images = document.querySelector('.images')

let index = 0
let time 

 function position() {
    images.style.left = (index * -100) + "%"
 }
 function add() {
     if(index >= min.length-1){
         index = 0
     }else{
         index++
     }
 }
 function desc() {
    
     if(index <1){
         index = min.length-1
     }else{
         index--
     }
 }
 function timer() {
     time = setInterval(()=>{
         check_move()
         index++
         desc()
         add()
         check_add()
         position()
     },3000)
 }
 function check_move() {
    min[index].classList.remove("min-active")
 }
 function check_add(){
    min[index].classList.add("min-active")
 }
 left.addEventListener('click',()=>{
     check_move()
     desc()
     position()
     check_add()
     clearInterval(time)()
 })
 right.addEventListener('click',()=>{
     check_move()
     add()
     position()
     check_add()
     clearInterval(time)
     timer()
 })
 for(let i = 0;i<min.length;i++){
     min[i].addEventListener('click',()=>{
        check_move()
        index = i
        position()
        check_add()
        clearInterval(time)
        timer()
          
     })
     
 }
 
 timer()