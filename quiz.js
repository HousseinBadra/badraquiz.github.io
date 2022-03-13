import {getquestions} from '/question.js';

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
  window.location='/'
})
