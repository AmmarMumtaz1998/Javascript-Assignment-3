// Q.1                                                                done
  function alphabet(){
    var inp =  document.getElementById("luc").value;
    var ans;
    if(inp==inp.toUpperCase()){
       ans = document.write("You entered a uppercase character.");
    }else if(inp==inp.toLowerCase()){
        ans = document.write("You entered a lowercase character.");
    }else{
        ans = document.write("You entered both upper and lowercase character.");
    }
    inp.innerHTML = ans;
    return out;
  }

// Q.2                                                                 done
  function weekNum(){
    var num =  document.getElementById("wnum");
    var newNum = num.value;
    var number;
        if(newNum==1){
          number = document.write("Today is Monday.")
        }else if(newNum==2){
          number = document.write("Today is Tuesday.")
        }else if(newNum==3){
          number = document.write("Today is Wednesday.")
        }else if(newNum==4){
          number = document.write("Today is Thursday.")
        }else if(newNum==5){
          number = document.write("Today is Friday.")
        }else if(newNum==6){
          number = document.write("Today is Saturday.")
        }else if(newNum==7){
          number = document.write("Today is Sunday.")
        }else{
          number = document.write("Please Enter a valid weekday.");
        }
        newNum.innerHTML = number;
  }

// Q.3                                                             done
    function monthDay(){
        var months = document.getElementById("month").value;
        if(months==1 || months==3 || months==5 || months==7 || months==8 || months==10 || months==12){
            document.write("There are 31 Days In this Month.");
        }else if(months==2){
            document.write("There are 28 or 29 Days in this Month.");
        }else if(months==4||6||9||11){
            document.write("There are 30 Days in this Month.");
        }
    }

// Q.4   
     function notesCounter(){
        var notes = [5000, 1000, 500, 100, 50, 20 ,10, 5, 2, 1];
        var amount = document.getElementById('notes').value;
        var notesAmount = 0;
        
        for(var i = 0; i < 10; i++ ){
            notesAmount = amount % notes[i];
        }
        return notesAmount;
    }

// Q.5                                                          done
    function angleChecker(){
      var inpAngle1 = document.getElementById('angle1').value;
      var angle1 = parseInt(inpAngle1);
      var inpAngle2 = document.getElementById('angle2').value;
      var angle2 = parseInt(inpAngle2);
      var inpAngle3 = document.getElementById('angle3').value;
      var angle3 = parseInt(inpAngle3);
      var sum = angle1 + angle2 + angle3;
      if( sum === 180){
        document.write(' oh Yes! it is a valid triangle.');
      }else{
        document.write(' No, it is not a valid triangle.');
      }
      return sum;
    }

    // Q.6                                                       done
    function sideChecker(){
      var inpSide1 = document.getElementById('side1').value;
      var side1 = parseInt(inpSide1);
      var inpSide2 = document.getElementById('side2').value;
      var side2 = parseInt(inpSide2);
      var inpSide3 = document.getElementById('side3').value;
      var side3 = parseInt(inpSide3);
      if( side1 + side2 >= side3 || side1 + side3 >= side2 ||side2 + side3 >= side1 ){
        document.write('oh yes! it is a triangle.');
      }else{
        document.write('No, it is not a triangle.');
      }
    }
    // Q.7                                                       done
    function sidesChecker(){
      var inpSides1 = document.getElementById('sides1').value;
      var sides1 = parseInt(inpSides1);
      var inpSides2 = document.getElementById('sides2').value;
      var sides2 = parseInt(inpSides2);
      var inpSides3 = document.getElementById('sides3').value;
      var sides3 = parseInt(inpSides3);
      if( sides1 == sides2 && sides2 == sides3){
        document.write('It is an equilateral triangle.');
      }else if( sides1 == sides2 || sides1 == sides3 || sides2 == sides3){
        document.write('It is an isosceles triangle.');
      }else {
        document.write('It is an scalene triangle.');
      }
    }

// Q.8                                                                  done
  let root1, root2;
  function quadraticRoots(){

      var inproot1 = document.getElementById('root1').value;
      var a = parseInt(inproot1);
      var inproot2 = document.getElementById('root2').value;
      var b = parseInt(inproot2);
      var inproot3 = document.getElementById('root3').value;
      var c = parseInt(inproot3);

      // calculate discriminant
      let discriminant = b * b - 4 * a * c;

      // condition for real and different roots
      if (discriminant > 0) {
          root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      document.write(`The roots of quadratic equation are ${root1} and ${root2}`);
      }
      // condition for real and equal roots
      else if (discriminant == 0) {
          root1 = root2 = -b / (2 * a);
      document.write(`The roots of quadratic equation are ${root1} and ${root2}`);
      }
      // if roots are not real
      else {
          let realPart = (-b / (2 * a)).toFixed(2);
          let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      document.write(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
      }
  }

// Q.9
function calculateProfit(){
  var costPrice = document.getElementById('cp').value;
  var cp = parseInt(costPrice);
  var sellingPrice = document.getElementById('sp').value;
  var sp = parseInt(sellingPrice);
  if( sp > cp){
    document.write('Congratulation! You earned Profit.');
  }else if( cp == sp ){
    document.write('You have neither earned any profit nor loss.');
  }else{
    document.write('Sorry! You have a loss.');
  }
}

// Q.10
function occur(){
  var text = document.getElementById('wordenter').value;   
  var chartocheck = document.getElementById('charenter').value;
  let count = 0;
  for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == chartocheck) {
          count += 1;
      }
  }
  document.getElementById('ans').innerHTML = `${count}`
}
// Q.11
function frequency() {
  var text = document.getElementById('freqinput').value;
  var freq = {};
  for (var i=0; i<text.length;i++) {
      var character = text.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }
  console.log(freq)
  document.getElementById('ans').innerHTML = `check console`
}
// Q.12
function removefirst(){
  var text = document.getElementById('removefirst').value
  var res = text.replace(text.charAt(0), "");
  document.getElementById('ans').innerHTML = `string with remove of last character is = ${res}`
}
// Q.13
function removelast(){
  var text = document.getElementById('removelast').value
  var res = text.replace(text.charAt(text.length-1), "");
  document.getElementById('ans').innerHTML = `string with remove of last character is = ${res}`
}
// Q.14
function removeall(){
  var text = document.getElementById('removeall').value
  var char = document.getElementById('chartoremove').value
  var res = text.replace(/char/g, "red");
  document.getElementById('ans').innerHTML = `all occurence is replace by '.' = ${res}`
}
// Q.15
function natural(){
  const number = document.getElementById('natinput').value

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
document.getElementById('ans').innerHTML =`Sum of natural number till ${number} is ${sum}`
}

// Q.16
function even(){
  const number = document.getElementById('eveninput').value
let sum = 0;
for (let i = 0; i <= number; i += 2) { 
    sum += i;
}
document.getElementById('ans').innerHTML =`Sum of even number till ${number} is ${sum}`
}

// Q.17
function odd(){
  const number = document.getElementById('oddinput').value
let sum = 0;
for (let i = 1; i <= number; i += 2) { 
    sum += i;
}
document.getElementById('ans').innerHTML =`Sum of even number till ${number} is ${sum}`
}

// Q.18
function table(){
const number = document.getElementById('tableinput').value;
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    document.getElementById('ans').innerHTML =`check console`;
    console.log(`${number} * ${i} = ${result}`)
}
}

// Q.19
function countnum(){
  const number = document.getElementById('countnum').value;
  const count = number.length;
  document.getElementById('ans').innerHTML =`Number of digits in ${number} is ${count}`
}

// Q.20
function displaynum(){
  const number = document.getElementById('displaynum').value;
  const count = number.length-1;
  const first = number.charAt(0);
  const last = number.charAt(count)
  document.getElementById('ans').innerHTML =`the ${number} has first digit is ${first} and last digit is ${last}`
}

// Q.21
function addnum(){
  const number = document.getElementById('addnum').value;
  const count = number.length-1;
  const first = number.charAt(0);
  const last = number.charAt(count)
  document.getElementById('ans').innerHTML =`the ${number} has first digit is ${first} and last digit is ${last} and sum is ${first + last}`
}

// Q.22
function multiplynum(){
  const number = document.getElementById('multiplynum').value;
  const count = number.length-1;
  const first = parseInt(number.charAt(0));
  const last = parseInt(number.charAt(count))
  document.getElementById('ans').innerHTML =`the ${number} has first digit is ${first} and last digit is ${last} and sum is ${first * last}`
}

// Q.25 
function count() {
	var get="Ammar Mumtaz";
	document.getElementById("count").value = get.match().length;
}


// Q.26
function remove(){
	var str=document.getElementById("remove").value;
	str=str.slice(1);
	// console.log(str);
	document.getElementById("remove").value=str.slice();
}

// Q.27
function removeLast(){
	var str=document.getElementById("removeLast").value;
	str=str.slice(0, str.length-1);
	console.log(str);
	document.getElementById("removeLast").value=str.slice(0, str.length-1);
}


// Q.36 
function removeChar(){
	let chars=document.getElementById("removeChar").value;
	let uniqueChars =[ new Set(chars)];
	document.getElementById("removeChar").value= uniqueChars;
//	console.log(uniqueChars);
}

// Q.37 
function mergeArray(){
	// document.getElementById("mergeArray").value=prompt("enter a string")
	let array1=[document.getElementById("array1").value];
	let array2=[document.getElementById("array2").value];
	let mergeArray=array1.concat(array2);
	document.getElementById("array").innerHTML=mergeArray;
	// console.log(mergeArray);
}

// Q.38

function revArray(){
let x = document.getElementById("get").value;
 // let array=['umair','Ammar'];
 // console.log(x);
let y = x.reverse();
// console.log(y);
document.getElementById("demo").innerHTML=y;
}

	
// Q.43
function sum(){
let number=document.getElementById("number").value;
let sum=0;
for(let i=1;i<=number;i++){
	sum+=i;
}
console.log(sum);
document.getElementById("sum").innerHTML="<p>Sum of Natural Number = </p>"+sum;
}
