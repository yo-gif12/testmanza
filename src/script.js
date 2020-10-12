let btn1= document.getElementById('btn1');
btn1.addEventListener('click', function(){
  
    const table = [1, 5, -5, 26 , -265 , 943, 25, -19, 874, 48, 523, 3452, -334, 31 ];
    // console.log('Valeur Max dans le tableau : ' + Math.max(...table));
    var n = 0;
    for(i = 0; i<table.length; i++)
     {
     if(table[i]>table[n])
     n=i;
     }
    alert('Valeur Max dans le tableau : ' + table[n]+ '(details dans la console)');
    console.log('Valeur Max dans le tableau : ' + table[n]);

})

let btn2= document.getElementById('btn2');
btn2.addEventListener('click', function(){
  
    const randomNumber = ( max, min ) => {
        return Math.floor(Math.random() * ( max - min + 1 ) + min )
      }
      
      let numberA = randomNumber( 5, -5 ); 
      let numberB = randomNumber( 5, -5 );
      console.log( numberA, numberB );
      let sum = numberA + numberB;
      let result;
      if ( numberA === 1 || numberB === 1 || sum == 1 ) {
          result = true 
      }else{
          result = false
      }
      
      console.log( 'Un des arguments ou la somme des 2 arguments = 1 : ' + result);
alert( 'Un des arguments ou la somme des 2 arguments = 1 : ' + result + '(details dans la console)');
})


let btn3= document.getElementById('btn3');
btn3.addEventListener('click', function(){
  
    const tables = [1000];

    for (let i = 0; i < 99; i++) {
      let random = Math.round(Math.random() * 1000 + 1);
      tables.push(random);
    }
    
    let smallInterval = tables[0] - tables[1];
    let element = [tables[0], tables[1]];
    for (let i = 1; i < tables.length; i++) {
        let current = tables[i];
        let next = tables[i + 1];
        let interval = current - next;
        if (interval > 0) {
          if (interval < smallInterval) {
            smallInterval = interval;
            element = [current, next];
          }
        }
      }
    console.log('Le plus petit interval du tableau est :'+smallInterval, element, tables);
alert('Le plus petit interval du tableau est :'+smallInterval, element+ '(details dans la console)' );
})

// // EXERCICE 1
// const table = [1, 5, -5, 26 , -265 , 943, 25, -19, 874, 48, 523, 3452, -334, 31 ];
// // console.log('Valeur Max dans le tableau : ' + Math.max(...table));
// var n = 0;
// for(i = 0; i<table.length; i++)
//  {
//  if(table[i]>table[n])
//  n=i;
//  }
// console.log('Valeur Max dans le tableau : ' + table[n]);


// // EXERCICE 2
// const randomNumber = ( max, min ) => {
//   return Math.floor(Math.random() * ( max - min + 1 ) + min )
// }

// let numberA = randomNumber( 5, -5 ); 
// let numberB = randomNumber( 5, -5 );
// console.log( numberA, numberB );
// let sum = numberA + numberB;
// let result;
// if ( numberA === 1 || numberB === 1 || sum == 1 ) {
//     result = true 
// }else{
//     result = false
// }

// console.log( 'Un des arguments ou la somme des 2 arguments = 1 : ' + result );


// // EXERCICE 3
// const tables = [1000];

// for (let i = 0; i < 99; i++) {
//   let random = Math.round(Math.random() * 1000 + 1);
//   tables.push(random);
// }

// let smallInterval = tables[0] - tables[1];
// let element = [tables[0], tables[1]];
// for (let i = 1; i < tables.length; i++) {
//     let current = tables[i];
//     let next = tables[i + 1];
//     let interval = current - next;
//     if (interval > 0) {
//       if (interval < smallInterval) {
//         smallInterval = interval;
//         element = [current, next];
//       }
//     }
//   }
// console.log('Le plus petit interval du tableau est :'+smallInterval, element);