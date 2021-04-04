/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = 'Sadhan';
const job = 'Trainer';
const birthYear = 1993;
const year = 2037;

const sadhan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

const sadhanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(sadhan);
console.log(sadhanNew);
console.log(`Just a regular string...`);

console.log('This is a \n\
multiline \n\
string...');

console.log(`This is also a
multiline
multiline
string...`);
*/

/*

const country = 'Bangladesh';
let population = 160;
const continent = 'Asia';

console.log(country, population, continent);

const isIsland = true;
const language = 'Bangla';

console.log(`Type of 'country' is ${typeof(country)}.`);

console.log(`Type of 'population' is ${typeof(population)}.`);

console.log(`Type of 'continent' is ${typeof(continent)}.`);

console.log(`Type of 'isIsland' is ${typeof(isIsland)}.`);

console.log(`Type of 'language' is ${typeof(language)}.`);

*/
/*
const age = 17;

let year;

if(age >= 18){
    console.log(`Sara is eligible for license.`);
}else{
    year = 18 - age;
    console.log(`Sara is not eligible for license.`);
}

console.log(`She have to wait another ${year} year.`);
const age = 15;

if (age >= 18) {
    console.log('Sara can start for a driving license 🚗');
} else {
    yearsLeft = 18 - age;
    console.log(`Sara is young enough. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2005;

let century;

if (birthYear >= 2000) {
    century = 21;
} else {
    century = 20;
}

console.log(century);

*/

/*

const massMark = 78; // in kg
const heightMark = 1.69; // in m
const massJohn = 92; // in kg
const heightJohn = 1.95; // in m

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

*/

/*
const massMark = 95; // in kg
const heightMark = 1.88; // in m
const massJohn = 85; // in kg
const heightJohn = 1.76; // in m

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
*/

// const markHigherBMI = BMIMark > BMIJohn;

/*
console.log(markHigherBMI);

// console.log(markHigherBMI);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI is higher than John's!`);
}else{
    console.log(`John's BMI is higher than Mark's!`);
}

console.log(`Mark's
BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
*/

// Type conversion

/*

const inputYear = '1993';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Sadhan'));
console.log(typeof NaN);
console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old.');
console.log('I am ' + '23' + ' years old.');
console.log('I am ' + String(23) + ' years old.');
console.log('23' - '10' - 4);
console.log('23' + '10' + 4);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '12');

let n = '1' + 1;
n = n - 1;
console.log(n);

*/


// Type Conversion

/*

const birthYear = '1993';
console.log(Number(birthYear) + 18, birthYear);
console.log(birthYear + 18);

console.log(Number('Sadhan'));
console.log(typeof (Number('Sadhan')));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion

console.log('I am ' + 23 + ' years old.');
console.log('I am ' + String(23) + ' years old.');

*/

// 5 Falsy Values: 0, '', NaN, undefined, null

/*

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sadhan'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`Yey, height is defined!`);
} else {
    console.log(`Height is not defined!`);
}

*/

/*
 console.log("Hello World I am learning JavaScript.");
 console.log("I am "  + String(23)  + " years old");
 console.log(String(23)); // type coercion


 console.log('23', 23); 
 console.log(Number('23')+23);
 console.log('23'-'10'-4);


 console.log (Number('NBICT'));

 console.log(typeof(true));

 console.log(typeof NaN);

 console.log('23'+'10'+4);

 console.log('23'*'2');
 //

console.log('Hello world I am learning Javascript')
console.log('I am ' + String(23) + ' years old ');
console.log(String(23));
console.log('23',23);
console.log(Number('23')+23);
console.log('23'-'10'-4);
console.log(Number('NBICT'));
console.log(typeof('true'));
console.log(typeof(True));
console.log(typeof NaN);
console.log('23'+'10'+'4');
console.log(23*2); //  new program         
console.log(Boolean(true));
let myName;
console.log(myName);
console.log(Boolean(myName));
console.log(Boolean({}));
console.log(Boolean(''));

const money=0;
if(money){
    console.log('Do not spend it all');
}
else{
    console.log('You should get a job');
}


const age =18;
if(age!==18)console.log('You are not adult enough');


const password = Number(prompt('Enter Password:'));
if(password===123){
    console.log('Welcom!  sadhon!!');
}
else if (password===456){
    console.log("welcome to motin")
}
else if (password===789){
    console.log("Welcome to sofiul");
}
else{
    console.log('Wrong password');
}
console.log(typeof(4));
*/




 /*
let MotinsWeightinkg =Number(prompt("Enter Motins Weight"));
let Motinsheightincm =Number(prompt("Enter motins height"));

let SaifulsWeightinkg =Number(prompt('Saifuls Weight'));
let Saifulsheightincm =Number(prompt("Saifuls height"));


let MotinsBMI =(MotinsWeightinkg /(Motinsheightincm*Motinsheightincm));
let SaifulsBMI =( SaifulsWeightinkg /( Saifulsheightincm*Saifulsheightincm));

console.log(`Motins BMI ${MotinsBMI}.`);
console.log(`Saifuls BMI ${SaifulsBMI}.`);

if(MotinsBMI>SaifulsBMI)
{
    console.log(`Motin is larger`);
}
else if(MotinsBMI<SaifulsBMI)
{
    console.log(`Saiful is larger`);
}
else
{
    console.log(`Draw`);
}
*/
/*
let dophinsfirstscore=Number(prompt("Enter dolphins first score"));
let dolphinsecondscore=Number(prompt("Enter dolphins second score"));
let dolphinthirdscore=Number(prompt("Enter dolphins third score"));

let kualasfirstscore=Number(prompt("Enter kualas first score"));
let kualassecondscore=Number(prompt("Enter kualas second score"));
let kualasthirdscore=Number(prompt("Enter kualas third score"));

let dolphinaveragescore=(dophinsfirstscore+dolphinsecondscore+dolphinthirdscore)/3 ;
{
console.log(`dolphinaveragescore ${dolphinaveragescore}`);
}
let kualaaveragescore=( kualasfirstscore+kualassecondscore+kualasthirdscore)/3 ;
console.log(`kualaaveragescore ${kualaaveragescore}`);
if((dolphinaveragescore>kualaaveragescore)&&(dolphinaveragescore>=100))
{
    console.log(`dolphin is the winner`);
}
else if ((dolphinaveragescore<kualaaveragescore)&&(kualaaveragescore>=100))
{
console.log(`kuala is the winner`);
}
else if ((dolphinaveragescore===kualaaveragescore)&&(dolphinaveragescore>=100)&&(kualaaveragescore>=100))
   console.log( `it is draw`);
else
console.log(`It is no winner`);
*/

/*
const day = prompt('Enter the day');
switch(day){
      case 'monday':
          console.log('Take preparation for online classes');
          break;
      case 'tuesday':
          console.log('Take exam preparation ');
          break;
      case 'Wednesday':
      case 'thursday':
          console.log('Visiting outside');
          console.log('making video tutorial');
          break;
     case 'friday':
          console.log('Hangout with friends');
          break;
     case 'Saturday':
     case'sunday':
         console.log('office management');
         console.log('Teaching offline');
         break;
     default :
         console.log('Invalid day');
       */ 

/*
const day = prompt('Enter the day')
     if( day==='satarday')
      console.log('Take preparation for online class');
else if (day==='sunday' || day==='monday')
     { console.log('take exam preparation');
      console.log('take preparation for offline classes');}
else if (day==='tuesday')
      console.log('');
else if (day==='wednesday' || day==='thursday')
     {  console.log('going out with friends')
       console.log('making video tutorial');
     }
else if (day==='friday')    
     console.log('prepare for going to play');
     else
       console.log ('Invalid Day');
*/
/*

const day = prompt('Enter the day');

if  (day === 'monday')
        console.log('Take preparation for online classes');
else if ( day === 'tuesday')
        console.log('Take exam preparation ');
else if ( day === 'wednesday')
      { console.log('Visiting outside');
        console.log('making video tutorial');}
else if ( day === 'friday')
        console.log('Hangout with friends');
else if ( day === 'saturday' || day === 'sunday' )
      {  console.log('office management');    
        console.log('Teaching offline');}
else
        console.log('Invalid day');
 */  
 
/*
const day=prompt('enter the day') ;
switch(day){
case 'saturday':
    console.log('prepare for online class');
    break;
    case 'sunday':
    console.log('prepare for offline class');
    break;
    case 'monday':
    case 'tuesday':
    console.log('Going outdoor');
    console.log('makin video tutorial');
    break;
    case 'wednesday':
    case 'thursday' :
    console.log('Gotig to your library room');
    console.log('Going to your lab room');
case 'friday':
    console.log('make your assignment');
    default:
    console.log('Invalid Day');
    }
*/
/*
const age = 30;

age >= 18 ? console.log('I like to drink wine'): console.log ('I like to drink water');
*/
/*
 const drink = age>= 18 ?'wine':'water'
 console.log(drink);
*/
/*
 const age=30;
 if(age>=18) {
 let drink2='wine';
 console.log(drink2);}
 else
 {let drink3 = 'water';
      console.log(drink3);}
  */
 
const age=10;
let drink2;
if(age>=18)
{
 drink2='wine';
 }
else
   {
    drink2='water';
   }
   console.log(drink2);
/*
   const age=18; //conditional ternary operator //
   console.log(`l like to drink ${age>=18 ?'wine':'water'}.`);

/*  // ternary operator //
const age=30;
age>30 ? console.log("I like to drink wine"):console.log("I like to drink water");
*/