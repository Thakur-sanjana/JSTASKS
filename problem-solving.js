// program to print 1 to num, num To 1, -1 to -num ,-num to -1 by using while loop
// to print numbers from 1 to 10 using while loop
// num=10;
// let i=1;
// while(i<=num){
//     console.log(i);
//     i++;
// }

// to print numbers from 10 to 1 using while loop
// num=1;
// let i=10;
// while(i>=num){
//     console.log(i);
//     i--;
// }

// to print numbers from -1 to -num
// num=-10;
// let i=-1;
// while(i>=num){
//     console.log(i);
//     i--;
// }

// to print numbers from -num to -1
// num=-1;
// let i=-10;
// while(i<=num){
//     console.log(i);
//     i++;
// }

//* to print prime numbers in 1 to 10
// let num=10;
// for(i=2;i<=num;i++){
//     c=true;
//    for(j=2;j<i;j++){
//     if(i%j==0){
//         c=false;
//         break;
//     }
//    } 
//    if(c){
//     console.log(i);
//    }
// }

// 2. Write a program to find the largest prime in the given number
// input: 46537
// output: 7
// let num=46537
// max=0;
// for(n of num){
//     if(n>1){
//         c=true;
//     }
// for(i=2;i<=num;i++){
//     if(i%n==0){
//         c=false;
//         break;
//     }
//     if(c){
//         if(max<n)
//         max=n;
//     }

// }
// }
// console.log(max);

// 3.Write a program to print the sum of largest and smallest prime digits in the given number
// input: 5497351
// output: 10
// let num="5497351";
// largest=10;
// smallest=0;
// for(n of num){
//     if(n>1){
//         c=true;
//     }
//     for(i=2;i<=num;i++){
//         if(i%n==0){
//             c=false;
//         }
//         if(c){
//             if(largest<n)
//             max=n;
//          if(smallest>n)
//          max=n;
//         }
//     }
// } 
// console.log(Number(largest)+Number(smallest));

//4.Write a program to print the largest non prime digit in the given number
// input: 463482
// output: 8
// 

//* problems on duplicate numbers*//
//  let num= ("463482");
//   uni="",dup=""
//   s="";
//   for(i of num ){
//     if(!s.includes(i)){
//         s=s+i
//     }
//   }
//   console.log(s);
//    for(i of s){
//     c=0
//     for(j of num){
//         if(i==j)
//             c++
//     }
//    }
//    if(c>1)
//     dup=dup+i+"";
//  else
//  uni=uni+i+"";
 

// 1) Write a program to print the sum of smallest unique no and smallest duplicate number.
// input: 351886761
// output: 1+3 = 4
// let num="351886761";
// let dup="";
// let uni="";
// let sum="";
// s="";
// for(i of num){
//     if(!dup.includes(i)){
//         dup=dup+i;
//     }
// }
// console.log(dup);
// for(i of dup){
//     c=0;
//     for(j of num){
//         if(i==j)
//             c++
//     }
//     if(c>1){
//         s=s+i;
//     }
//     else{
//         uni=uni+i
//     }
// }
// min1=s[0]
// min2=uni[0]
// for(i of s){
//     if(i< min1){
//         min1=i;
//     }
// }
// for(i of uni){
//     if(i<min2){
//         min2=i;
//     }
// }
// console.log(Number(min1)+Number(min2));

// 2.write a program to print the sum of largest unique number and largest duplicate number
let num="2237748";
let dup="";
let uni="";
let sum="";
s="";
for(i of num){
    if(!dup.includes(i)){
        dup= dup+i
    }
}
console.log(dup);
for(i of dup){
    c=0;
    for(j of num){
   if(i==j)
    c++
    }
    if (c>1){
        s=s+i
    }
    else{
        uni=uni+i
    }
}
min1= s[0]
min2=uni[0]
for(i of s){
    if(i > min1){
        min1=i;
    }
}
for (i of uni){

    
}


//  let num='4678';
//  let max=0
//  for(i=0;i<=num.length;i++){
//      if(num[i]>max);
//      max= Number(num[i]);
//  }
// console.log(max);


