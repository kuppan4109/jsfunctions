//display function
function display(name)
{
  return('My name is '+`${name}`);
  
}
let res1=display('kuppan');
console.log(res1)
//output:My name is kuppan
//addition
function addition(n1,n2)
{
  return n1+n2
}
let res2=addition(10,5)
console.log(res2)
//output:15
//subraction
function subraction(n1,n2)
{
  return n1-n2
  }
let res3=subraction(10,5)
console.log(res3)
//output:5
//multipication
function multipication(n1,n2)
{
  
  return n1*n2
  }
let res4=multipication(10,5)
console.log(res4)
//output:50
//division
function division(n1,n2)
{
  return n1/n2
  }
let res5=division(10,5)
console.log(res5)
//output:2
//modulo
function modulo(n1,n2)
{
  return n1%n2
  }
let res6=modulo(10,5)
console.log(res6)
//output:
//power
function power(n1,n2)
{
  return n1**n2
  }
let res6=power(10,5)
console.log(res6)
//output:100000
//comparestring
function comparestring(n1,n2)
{
 return(n1==n2)
}
let res7=comparestring('hello','hello')
console.log(res7)
//output:true
//comaprenumber
function comparenumber(n1,n2)
{
  return(n1==n2)
}
let res7=comparenumber(10,5)
console.log(res7)
//output:false
//comparevalues
function comaprevalues(n1,n2)
{
  return(n1===n2?'BOTH ARE SAME' :'BOTH ARE NOT SAME')
}
let res8=comaprevalues(1,'1')
console.log(res8)
//output:BOTH ARE NOT SAME
//isPrime
function isPrime(num) {
    if(num % 2 === 0) return 'Composite Number';
  return 'prime number';
}
let res9=isPrime(5)
console.log(res9)
//output:prime number
//check vowels
function isVowel(char)
{
  if(char.includes('a','e','i','o','u'))
  {
    return('Vowel')
  }
  else{
    return('Not vowel')
  }
}
let res10=isVowel('p')
console.log(res10)
//output:not vowels
//GradeFinder
function gradeFinder(mark)
{
if (mark <= 60)
{
console.log("Grade : F");      
} 
else if (mark <= 70)
{
console.log("Grade : D"); 
 } 
else if (mark <= 80) 
 {
console.log("Grade : C"); 
 }
 else if (mark <= 90) {
console.log("Grade : B"); 
}
else if (mark <=100) 
{
console.log("Grade : A"); 
}
}
let res11=gradeFinder(90)
console.log(res11)
//output:Grade:B 