const form1= document.querySelector('form')

form1.addEventListener('submit',function(e){
    e.preventDefault()
    const height=
    parseInt(document.querySelector('#height').value)

    const weight=
    parseInt(document.querySelector('#weight').value)

    const results=
    document.querySelector('#results');
if(height==='' || height<0 || isNaN(height))
{
results.innerHTML= `PLease Give a valid ${height}`
}


if(weight==='' || weight<0 || isNaN(weight))
{
results.innerHTML= `PLease Give a valid ${weight}`
}

else 
{
  const bmi=  (weight/
((height*height)/10000)).toFixed(2);
//Showing the result

if(bmi<18.6){
   results.innerHTML=`<span> ${bmi} <br>You are Underweight</span>` 
}

else if(bmi>=18.6 && bmi<=24.9){
    results.innerHTML=`<span> ${bmi} <br>You are in Normal Range</span>` 
 }
 
 else if(bmi>24.9){
    results.innerHTML=`<span> ${bmi} <br>You are Overweight</span>` 
 }
 
}

})