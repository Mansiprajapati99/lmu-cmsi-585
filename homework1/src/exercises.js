
// *********************************************  1   **********************************************************
export function change(value)
{
  if(value < 0)
  {
    throw new RangeError('Non Negative')//for negative value
  } 
  let totalCount = [];
  [25,10,5,1].forEach(coin => {
    totalCount.push(Math.floor(value/coin));//given value is devide by coin amount(i.e 25 ,10...)
    value %= coin;//module them
  });
  return totalCount;
};

// *********************************************  2    **********************************************************

export function stretched(x)
{   var FinalString = "";
    var newString = x.replace(/\s+/g, '');  //\s match white space,+ token,g search full string.
    console.log(newString);
    for(let i = 0 ; i < newString.length ; i++)
  {
    var tmp =newString[i];//find index
      //console.log(i);
    var findvalue = tmp.charAt(0) // find value
     // console.log(findvalue);
    FinalString += findvalue.repeat(i+1); 
  }
  return(FinalString);
}


// *********************************************  3   **********************************************************

export function scramble(x){
    var letter = x.split('');// split string to letter
      var count = letter.length; // count length
      for(let i = 0 ; i < count ; i++)
      {
        var j = Math.floor(Math.random() * count);// getting random value
        var tmp = letter[i]; // swaping values
        letter[i]=letter[j];
        letter[j]=tmp;
        x= letter.join("");
      }
      return(x);   
  }

// *********************************************  6    **********************************************************


export function say(args)
{   
    const arr = [];
    function finalString(fullString){
        if(fullString === undefined){
            return arr.join(' ');//collect all words
        }
       arr.push(fullString);//Getting full string
       return finalString;
    }
    return finalString(args);//go to function
}
  
  
  // *********************************************  4    **********************************************************
 
  
  export function powers(value,maxVal,callback){
    for(let i = 1 ; i <= maxVal; i = i*value)
    {
      callback(i);//applying callback to self function
      
    }
  }
  

  // *********************************************  7   **********************************************************
 

 export  function interleave(a,...theArgs)
{
    let firstArray = a;
    let restArgs = theArgs;
    let finalStr = [];//present final ans
    let i=0;;
    let j=0;
    for(i =0;i<firstArray.length && i < restArgs.length ; i++)//getting all
    {
        finalStr[j++] = firstArray[i];
        finalStr[j++] = restArgs[i];

    }
    if(firstArray.length == i)//first array
    {
      while(i < restArgs.length)
      {
        finalStr[j++] = restArgs[i];
        i++;
      }
    }else{
      while(i < firstArray.length)//second array
      {
        finalStr[j++] = firstArray[i];
        i++;
      }
    }
    return finalStr;
}



// *********************************************  5    **********************************************************
 

export function* powersGenerator(value,maxVal)
{
  for(let i =1; i <= maxVal ; i *= value)//find power
  {
    yield i;
    //console.log(i)
  }
}
const p = powersGenerator(2, 7);
p.next();
p.next();
p.next();
p.next();

// *********************************************  8    **********************************************************
 

export function makeCryptoFunctions(key,args,vector)
{   
    function e(data){
    if(data != undefined)
    {
    let crypto = require('crypto');
    let mykey = crypto.createCipheriv(args, key, vector);//pass key,args,vector
    let mystr = mykey.update(data, 'utf8', 'hex');//pass string in data
    mystr += mykey.final('hex');
    return mystr;// get hex string
    }
  }
    function d(data){
    if(data != undefined)
    {
    let crypto = require('crypto');
    let mynewkey = crypto.createDecipheriv(args, key, vector);
    let mynewstr = mynewkey.update(data, 'hex', 'utf8');//pass hex string
    mynewstr += mynewkey.final('utf8');
    return mynewstr;// get string
    }
  }
    return (e,d);
}


// *********************************************    9    **********************************************************
import fetch from 'node-fetch';//import node fetch
export async function pokemonSprites(getVal) {
  const url = `https://pokeapi.co/api/v2/pokemon/${getVal}/`;
  const res = await fetch(url);
  const pokemon = await res.json();
  return await pokemon.sprites;
}



