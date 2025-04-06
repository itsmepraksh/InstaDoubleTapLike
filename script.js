let heart = document.querySelector('.like .heart')
let likecount = document.querySelector('.post-dets h5:nth-of-type(2)')
let like = document.querySelector('.comments i')

var postImg = document.querySelector('.post-img');
var love = document.querySelector('.post-img i')

let flag =0
let flag2 =0

postImg.addEventListener('dblclick', function() {
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    love.style.opacity = 0.8;
    if(flag==0){
        heart.style.color = "red"
        likecount.textContent = "70 LIKES"
        flag+=1
    } 
     

    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },800)
})

heart.addEventListener('click',function(){ 
    
    if(flag==0){
        heart.style.color = "red"
        likecount.textContent = "70 LIKES"
        flag+=1
    }else{
        heart.style.color = "black"
        likecount.textContent = "69 LIKES" 
        flag-=1
    }
})



like.addEventListener('click',function(){
    if(flag2==0){
        like.style.color = "red"
        flag2+=1
    }else{
        like.style.color = "black"
        flag2-=1
    }
})