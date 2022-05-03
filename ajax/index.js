//var data = await fetch('https://raw.githubusercontent.com/priyankanick/MCU/master/data.json')
$(document).ready(api_call())

function api_call(){
$.get('https://raw.githubusercontent.com/priyankanick/MCU/master/data.json',(data,status)=>{
    console.log(typeof(data))
    data=JSON.parse(data)
for(let i=0;i<data.length;i++)
{
    $('#d1').append(data[i].title)
    
}
})
}