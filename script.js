let myarr=[
    {'question':'My best friend?',
    'options':[{'option':' Hasan','class':'true'},{'option':'Joe','class':'true'},{'option':'Ali OZ','class':'true'} ,{'option':'Abdo','class':'true'}] },  {'question':'Best hobbie?',
    'options':[{'option':'chess','class':'true'},{'option':'Fitness','class':'false'},{'option':'coding','class':'false'} ,{'option':'BasketBall','class':'false'}] },
    {'question':'Where I live?',
    'options':[{'option':'Rayak','class':'false'},{'option':'Terboul','class':'false'},{'option':'Ali al nahri','class':'true'},{'option':'Tamnin','class':'false'} ] },
    {'question':'Favorite subject?',
    'options':[{'option':'Math','class':'false'},{'option':'Physics','class':'false'},{'option':'economics','class':'true'} ] },
    {'question':'I have ...',
    'options':[{'option':'3 brothers','class':'false'},{'option':'2 sisters','class':'false'},{'option':    'a brother and a sister','class':'true'} ] },
      {'question':'Favorite food',
    'options':[{'option':'meat','class':'false'},{'option':'grapes','class':'false'},{'option':'corn','class':'true'},{'option':'melon','class':'false'} ] },
      {'question':'My birthday',
    'options':[{'option':'25/11','class':'false'},{'option':'7/6','class':'false'},{'option':'27/10','class':'true'} ,{'option':'13/3','class':'false'}] }, 
    {'question':'I weight',
    'options':[{'option':'50kg','class':'false'},{'option':'65kg','class':'false'},{'option':'60kg','class':'true'},{'option':'70kg','class':'false'} ] },
   {'question':'Nickname',
    'options':[{'option':'bou ali','class':'false'},{'option':'hassoun','class':'true'},{'option':'mo5tar','class':'false'},{'option':'taba3 kel chi','class':'false'}] }
  
  ]
myarr=myarr.sort((elem1,elem2)=>{
    return Math.random()-0.5
  })
  
  
myarr.forEach((elem)=>{
  elem['options']=elem['options'].sort((a,b)=>{
    return Math.random()-0.5
  })
})
 function getquestions(){
  return myarr
}

const start=document.querySelector('.start')
const quiz=document.querySelector('.container')
const question=document.querySelector('.question')
const awnsers=document.querySelector('.awnsers')
const next=document.querySelector('.next')
const restart=document.querySelector('.restart')
let options=Array.from(document.querySelectorAll('.awnsers div'));

let index=0

start.addEventListener('click',()=>{
  start.classList.add('hide')
  quiz.classList.add('show')
  setup()
})

function setup(){
let  array=getquestions()[0]
question.textContent=array['question']
array['options'].forEach((elem,index)=>{
  let element=document.createElement('div')
  element.textContent=elem['option']
  element.classList.add(elem['class'])
  element.addEventListener('click',()=>{
    control(event)
  })
  awnsers.appendChild(element)
})
}

function control(){
 options=Array.from(document.querySelectorAll('.awnsers div'));

 if(!next.classList.contains('show') || !restart.classList.contains('show')){
   if(event.target.classList.contains('true')){
     options.forEach((elemo)=>{
       if(elemo.classList.contains('true')){
         elemo.classList.add('green')
       }
       if(elemo.classList.contains('false')){
         elemo.classList.add('red')
       }
     })
     if(index!=getquestions().length-1){
       next.classList.add('show')
       next.classList.add('green')
     }
     else{
       restart.classList.add('show')
       restart.classList.add('green')
     }
     document.body.classList.add('green')
   }
   else{
     options.forEach((elemo)=>{
       if(elemo.classList.contains('true')){
         elemo.classList.add('orange')
       }
       if(elemo.classList.contains('false')){
         elemo.classList.add('red')
       }
     })
     if(index!=getquestions().length-1){
       next.classList.add('show')
       next.classList.add('red')
     }
     else{
       restart.classList.add('show')
       restart.classList.add('red')
     }
     document.body.classList.add('red')
   }
 }
}
next.addEventListener('click',()=>{
  nextquest()
})

function nextquest(){
  if(true){
    if(index<getquestions().length-1){
      document.body.classList.remove('green')
      next.classList.remove('green')
      next.classList.remove('red')
      document.body.classList.remove('red')
      next.classList.remove('show')
      index+=1
      awnsers.innerHTML=''
      let  array=getquestions()[index]
      question.textContent=array['question']
      array['options'].forEach((elem,index)=>{
      let element=document.createElement('div')
      element.textContent=elem['option']
      element.classList.add(elem['class'])
      element.addEventListener('click',()=>{
      control(event)
        })
      awnsers.appendChild(element)
      })
    }
    
  }
}

restart.addEventListener('click',()=>{
  window.location='./'
})
