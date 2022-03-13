let myarr=[
    {'question':'My best friend?',
    'options':[{'option':' Hasan','class':'true'},{'option':'Joe','class':'true'},{'option':'Ali OZ','class':'true'} ,{'option':'Abdo','class':'true'}] },  {'question':'Best hobbie?',
    'options':[{'option':'chess','class':'false'},{'option':'Fitness','class':'false'},{'option':'Programming','class':'true'} ,{'option':'BasketBall','class':'false'}] },
    {'question':'Where I live?',
    'options':[{'option':'Rayak','class':'false'},{'option':'Terboul','class':'false'},{'option':'Ali al nahri','class':'true'},{'option':'Tamnin','class':'false'} ] },
    {'question':'Favorite subject?',
    'options':[{'option':'Math','class':'false'},{'option':'Physics','class':'false'},{'option':'economics','class':'true'} ] },
    {'question':'I have ...',
    'options':[{'option':'3 brothers','class':'false'},{'option':'2 sisters','class':'false'},{'option':'a brother and a sister','class':'true'} ] }
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

 if(!next.classList.contains('show')){ next.classList.add('show')}
 
 options.forEach((elem)=>{
   elem.classList.remove('green')
   elem.classList.remove('red')
 })
  if(event.target.classList.contains('true')){
    if(index==getquestions().length-1){
         document.body.classList.remove('red')
    document.body.classList.add('green')
    event.target.classList.add('green')
      next.classList.remove('show')
      restart.classList.add('show')
      restart.classList.add('green')
    }
    else{
      options.forEach((elema)=>{
      if(elema.classList.contains('true')){
        elema.classList.add('green') } })    
    next.classList.remove('red')
    document.body.classList.remove('red')
    document.body.classList.add('green')
   event.target.classList.add('green')
    next.classList.add('green')}
  }
  if(event.target.classList.contains('false')){
    if(!restart.classList.contains('show')){
    document.body.classList.remove('green')
    document.body.classList.add('red')
    event.target.classList.add('red')
    next.classList.remove('green')
    next.classList.add('red')
  }}
}
next.addEventListener('click',()=>{
  nextquest()
})

function nextquest(){
  if(next.classList.contains('green')){
    if(index<getquestions().length-1){
      document.body.classList.remove('green')
      next.classList.remove('green')
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
