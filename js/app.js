
// step:1 => Get all tasbih incriment button and display
const subhaAllahDisplay = document.getElementById('SubahanAllahDisplay');
const subhaAllahIncrementBtn = document.getElementById('SubahanAllahPluse');
const subhaAllahDecrementBtn = document.getElementById('SubahanAllahMinus');

// Alhamduillah button and valus get
const alhamduillahDisplay = document.getElementById('AlhamduillahDisplay');
const alhamduillahIncrementBtn = document.getElementById('alhamduillahPluse');
const  alhamduillahDecrementBtn = document.getElementById('almaduiullahMinus');

// Allahbuakbar button and valus get

const allahhuakbarDisplay = document.getElementById('AllahhuakbarDisplay');
const allahhuakbarIncrementBtn = document.getElementById('allahuakbarPluse');
const  allahhuakbarDecrementBtn = document.getElementById('allahuakbarMinus');

const resetBtn = document.getElementById('reset');

let subahanAllahInsitalValue = 0;
let alhamduillahInsitalValue = 0;
let allahhuakbarInsitalValue = 0;

// add event lister for subahanAllah

subhaAllahIncrementBtn.addEventListener('click',function(){
    if( subahanAllahInsitalValue ===33){
        return alert('SubahaAllah complite please go for next')
     }
    subahanAllahInsitalValue += 1;
    subhaAllahDisplay.innerText = subahanAllahInsitalValue;

})
subhaAllahDecrementBtn.addEventListener('click',function(){
    if( subahanAllahInsitalValue ===0){
       return alert('You can not add negative value')
    }
    
    subahanAllahInsitalValue -= 1;
    subhaAllahDisplay.innerText =  subahanAllahInsitalValue;
})


// add event lister for Alhamduiullah
alhamduillahIncrementBtn.addEventListener('click',function(){
    if(  alhamduillahInsitalValue ===33){
        return alert('Alamduillah complite please go for next')
     }
    alhamduillahInsitalValue +=1;
    alhamduillahDisplay.innerText = alhamduillahInsitalValue;
})

alhamduillahDecrementBtn.addEventListener('click',function(){
    if(alhamduillahInsitalValue===0){
        return alert('You can not add negative value')
    }
    alhamduillahInsitalValue -=1;
    alhamduillahDisplay.innerText = alhamduillahInsitalValue;
})

// add event lister for allahuakbar

allahhuakbarIncrementBtn.addEventListener('click',function(){
    if( allahhuakbarInsitalValue===33){
        return alert('complite')
    }
    allahhuakbarInsitalValue += 1;
    allahhuakbarDisplay.innerText = allahhuakbarInsitalValue;
})

allahhuakbarDecrementBtn.addEventListener('click',function(){
    if( allahhuakbarInsitalValue===0){
        return alert('You can not add negative value')
    }
    allahhuakbarInsitalValue -= 1;
    allahhuakbarDisplay.innerText = allahhuakbarInsitalValue;
})

// reset 

resetBtn.addEventListener('click',function(){
    subhaAllahDisplay.innerText =0;
    alhamduillahDisplay.innerText=0;
    allahhuakbarDisplay.innerText=0;
 subahanAllahInsitalValue = 0;
 alhamduillahInsitalValue = 0;
 allahhuakbarInsitalValue = 0;

})