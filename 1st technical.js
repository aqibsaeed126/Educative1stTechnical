/*Given an array of integers, find the smallest positive integer (natural number) not part of the array. 
E.g. [1, -1, 1, 2, 3 , 7]   // -1,1,2,3,7
Ans = 4

[1, 2, 3, 4]
Ans = 5

[-1,-2,-4]

[2]

O(nlgn)
O(n)*/

Function findSmallest(arr) {
   arr = arr.sort(function(a,b) {return a-b}); // [-1,1,1,2,3,7] // nlgn
  Arr =  [ … New Set(arr)]; // [-1,1,2,3,7] // n

Let maxInArray = Math.max(...arr); //n
Let counter = 1;
 for(var i=0; i<arr.length; i++) { //n
    If (arr[i] > 0) {
        if(arr[i] === counter) {
               counter++;
        } else {
               Return counter;
       }
    }

Return counter;


}

  

}





/*Given a linked list and number a and b, we have to remove b nodes after a nodes, and keep repeating this until we reach the end. 

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10

A = 3, b = 2

1 -> 2 -> 3 -> 6 -> 7 -> 8 

*/

Class Node {
Node next;
Int data;
}
null
Node removeNodes(Node head, a, b ); // length * a* a/b

Let curr = head;
Let next = curr ? curr -> next : null;

While (next != null) {
for(let i=1; i<=a; i++) {
    if(i === a && next != null) {
         For (let j=1; j<=b; j++) {
             // remove b nodes 
               If (curr -> next != null) {
               	Curr -> next = next -> next;
                       Delete next;
                       Next = curr -> next;
               }
   
        }
    }
    If (next == null) break;
    Curr = next;
     next = next -> next;
}

}








