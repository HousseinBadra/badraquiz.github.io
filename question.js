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
export function getquestions(){
  return myarr
}
