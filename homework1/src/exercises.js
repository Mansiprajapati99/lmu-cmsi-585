
// *********************************************  1   **********************************************************
export function change(x)
{
  var total = [];
  if(x < 0)
  {
    throw new RangeError("amount cannot be negative");

  }else
  {
    //console.log("Valid number for computation");
    var quarters = 0; // 25
    var dimes = 0; // 10
    var nickels = 0; // 5
    var pennies = 0; // 1
    
    while(x >= 25)
    {
      x -= 25;
      quarters ++
      
    }
    while(x >= 10)
    {
      x -= 10;
      dimes++;
    }
    while(x >= 5)
    {
      x -= 5;
      nickels++;
    }
    while(x < 5)
    {
      if(x >= 1){
        x -= 1;
        pennies++;
      }
      pennies=pennies+x // rest of amount < 1 
    }
   
  }
 total.push(quarters,dimes,nickels,pennies);
 return total;
 
  
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
        if(fullString === 0){
            return arr.join('');//collect all words
        }
       arr.push(fullString);//Getting full string
       return finalString;
    }
    return finalString(args);//go to function
};
  
  
  // *********************************************  4    **********************************************************
 
  export function powers(value,maxVal,fun){
    if(value === 1)
    {
      fun(value);//1 value go to function
    }else{
      second(value,maxVal,fun);
    }
  }
  function second(value,maxVal,fun){
    for(let i = 1 ; i <= maxVal; i = i*value)
    {
       return(i);//perform multiplication then go to function
    }
  }
  

  // *********************************************  7   **********************************************************
 

 export  function interleave(a,...theArgs)
{
    const firstArray = a;
    const restArgs = theArgs;
    const final = [...firstArray,...restArgs]
    return final;
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
    var crypto = require('crypto');
    const mykey = crypto.createCipheriv(args, key, vector);
    var mystr = mykey.update('hello there', 'utf8', 'hex')
    mystr += mykey.final('hex');
    return mystr;

    var mynewkey = crypto.createDecipheriv(args, key, vector);
    var mynewstr = mynewkey.update('b97280f15b0e11b5c84c786ea3a51562', 'hex', 'utf8')
    mynewstr += mynewkey.final('utf8');
    return mynewstr;

}


// *********************************************    9    **********************************************************

export async function pokemonSprites(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const response = await fetch(url);
  const pokemon = await response.json();
  return await pokemon.sprites;
}



