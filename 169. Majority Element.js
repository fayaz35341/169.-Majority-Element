/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    majorityElement(arr) {
        // code here
        // let n_map=new Map()
        // let n= arr.length
        // for (let i=0;i<n;i++){
        //     n_map.set(arr[i], (n_map.get(arr[i]) || 0)+1)
        // }
        // for  (let [key,val] of  n_map){
        //     if (val>(n/2)) {
        //         return key
        //     }
        // }
        // return -1
        
        let c=0
        let el; //el=null
        for (let i=0;i<arr.length;i++){
            if (c===0){
                c=1
                el=arr[i]
            }
            else if (arr[i]===el){
                c++
            }
            else{
                c--
            }
        }
        let c1=0
        for (let i=0;i<arr.length;i++){
            if (arr[i]===el){
                c1++
            }
        }
        if (c1>arr.length/2) {
            return el
        }
        return -1
    }

   // for (let i=0;i<nums.length;i++){
   //      if (c===0){
   //          c=1
   //          el=nums[i]
   //      }
   //      else if (el===nums[i]){
   //          c++
   //      }
   //      else if (el != nums[i]){
   //          c--
   //      }
   //  }
   //  return el
}
