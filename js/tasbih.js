const allahuakbar= document.getElementById('allahuakbar-number');
const alhamdulillah= document.getElementById('alhamdulillah-number');
const subhanAllah= document.getElementById('subhanallah-number');

let allahuakbarInitialValue = 0;
let alhamdulillahInitialValue = 0;
let subhanAllahInitialValue = 0;

document.getElementById('allahuakber-increment-button').addEventListener('click', function(){
    if(allahuakbarInitialValue===34){
        return alert ('your count is finished')
    }
    allahuakbar.innerText= allahuakbarInitialValue+=1;
    
})

document.getElementById('allahuakbar-decrement-button').addEventListener('click', function(){
    if(allahuakbarInitialValue===0){
        return alert ("you don't count negative number" )
    }
    allahuakbar.innerText= allahuakbarInitialValue-=1;
})

document.getElementById('alhamdulillah-increment-button').addEventListener('click', function(){
    if(alhamdulillahInitialValue===33){
        return alert ('your count is finished')
    }
     alhamdulillah.innerText= alhamdulillahInitialValue+=1;
})

document.getElementById('alhamdulillah-decrement-button').addEventListener('click', function(){
    if(alhamdulillahInitialValue===0){
        return alert ("you don't count negative number" )
    }
    alhamdulillah.innerText= alhamdulillahInitialValue-=1;
})
document.getElementById('subhanallah-increment-button').addEventListener('click', function(){
    if(subhanAllahInitialValue===33){
        return alert ('your count is finished');
    }
    subhanAllah.innerText= subhanAllahInitialValue+=1;
})

document.getElementById('subhanallah-decrement-button').addEventListener('click', function(){
    if(subhanAllahInitialValue===0){
        return alert ("you don't count negative number" )
    }
    subhanAllah.innerText= subhanAllahInitialValue-=1;
})

document.getElementById('reset-button').addEventListener('click', function(){
    allahuakbar.innerText = 0;
    allahuakbarInitialValue = 0;
    alhamdulillah.innerText = 0;
    alhamdulillahInitialValue = 0;
    subhanAllah.innerText = 0;
    subhanAllahInitialValue = 0;
})