class Solution:
    def majorityElement(self, arr):
        #code here

        # n_map={}
        # for num in arr:
        #     n_map[num]=n_map.get (num,0)+1
        # for key,val in n_map.items():
        #     if val>len(arr)//2:
        #         return key
        # return "-1"
        
        c=0
        el=None
        for i in range(len(arr)):
            if c==0 :
                c=1
                el=arr[i]
            elif arr[i]==el :
                c+=1
            else:
                c-=1
        c1=0
        for i in range(len(arr)):
            if arr[i]==el :
                c1+=1
        if c1>(len(arr)//2) :
            return el
        return "-1" 
        
        # for i in arr:
        #     if c==0:
        #         c=1
        #         el=i
        #     elif el==i:
        #         c+=1
        #     elif el != i:
        #         c-=1
        # return el 
