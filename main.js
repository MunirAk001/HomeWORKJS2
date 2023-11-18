
// task1
// function checkEquality(num) {
//         let d = 1;

//   for (let i = 1; i <= num; i++) {
//       for (let j = 1; j <= i; j++) {
//       if (i == j) {
//           return j
         
//       } else {
//         return "no";
        
//       }
//     }
//   }
// }

// console.log(checkEquality(123456));

///////////////////////////////////////////////////////////////




// task2

// function Pm(num) {
//   let n = num;
//   let rep = 0;
//   while (num > 0) {
//     rep = rep * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   let cnt = 0;
//   for (let index = 1; index <= n; index++) {
//     if (n % index == 0) {
//       cnt++;
//     }
//   }
//   if (rep == n && cnt < 3) {
//     console.log("Boom");
//     return;
//   }
//   console.log("there is n0 7 in the arguments");
// }
// Pm(7);

////////










// task 3
// function  yy(num){
//            let a= Math.floor((num/10)%10)
//            let b=num%10;
//     let cnt = a + b;
    
//     let s1, s2, sum;
//      if(cnt<10) return "0";
//      else {
//         s1=Math.floor((cnt/10)%10)
//         s2=cnt%10;
//         sum=s1+s2;
//         return sum ;
//      }
 
// }
// console.log(yy(34));


////////////////////////////////////////////




// task4
// function u(num) {
//     let sum=0;
//     for(let i=1;i<=num;i++){
//          sum+=i*i*i;
//     }
//     return sum;
// }
// console.log(u(9 ));





// ////////////////////////////////////





// task5
// function Task6(n){

//     let rev = ""
//     for(let i=n; i>0; i=Math.floor(i/10)){
//         rev += i%10
//     }
//     if(rev == n)return true
//     return false;
// }
// console.log(Task6(9939));

///////////////////////////////////////////


//task6

    // function mx(n)
    // {
    //     let sum = 0
    //     let max = n % 10 
    //     for(let i = n ; i > 0 ; i = Math.floor(i / 10))
    //     {

            
    //         sum = i % 10
    //         max <= sum ? max = sum : "false"

    //     }
        
    //     return max
    // }
    // console.log(mx(732));


//////////////////////////////////////



// //task 7
// function tt(n){
//      let  km =0;
//      let n1=0;
//      let  n2=1;
//    for (i=1; i<=n;i++){
//      km=  n1;
//      n1=  n2;
//      n2=   km+n1;
//    }
//     return n1;
// }

// console.log(tt(3));



//////////////////////////////////
 function ff(n){
     let sum = Math.floor(n / 10) % 10;
     
     

     for (let i = 1; i <= n; i++){
        
         if (i % 2 == 0) {
             //  console.log(sum);
             return i + i
         }
        // sum*=i;
    }
  
    return sum;
}
console.log(ff(1234));








//task10
// function ff(n){
//     let sum =1;
//     for(let i=1; i<=n; i++){
//         sum*=i;
//     }
  
//     return sum;
// }
// console.log(ff(4));













































































