function nextLargerElement(arr, n){
        let ans=[];
        let stack=[];
        for (var i=n-1; i>=0;i--)
        {
            if (i == n - 1)
            {
                ans.push(-1);
                stack.push(arr[i]);
                continue
            }
            else
            {
                while (stack.length > 0 &&  arr[i]>=stack[stack.length-1] )
                {
                    stack.pop();
                }
                if (stack.length==0)
                {  
                    ans.push(-1);
                }
                else if (arr[i]<stack[stack.length-1])
                {
                    ans.push(stack[stack.length-1]);
                }
                stack.push(arr[i]); 
            }
        }
        ans.reverse(); 
        return ans
}
    
arr = [3, 1, 2, 4, 0, 7]
n = arr.length
console.log(nextLargerElement(arr, n));