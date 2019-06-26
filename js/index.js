let sortAscendingandDescending=(arr1)=>{
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i]%2===1){
            arr1[i] = arr1[i]*-1;
        }
    }
    arr1.sort(function(a, b) {
        return a > b;
      });
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i]%2===-1){
            arr1[i] = arr1[i]*-1;
        }
    }
    console.log(arr1)
}

let infinitSum= function(...arg){
    function infiniteSum2(...arg2){
        return infinitSum(...arg,...arg2);
    }
    let total = arg.reduce((total,val)=>total+val)
    infiniteSum2.toValue=()=>total;
    return infiniteSum2;
}

let maxSumContSubArray=(arr)=>{
    let ansArr=[],max_till=-9999,maxEnd=0,start=0,end=0,sTemp=0;
    if(arr.length === 0){
        return [];
    }
    for(let i = 0; i < arr.length;i++){
        maxEnd = maxEnd+arr[i];
        if(maxEnd > max_till){
            max_till=maxEnd
            start=sTemp;
            end=i;
        }
        if(maxEnd <0){
            maxEnd=0;
            sTemp=i+1;
        }
    }
    for(let i = start; i <= end;i++){
        ansArr.push(arr[i])
    }
    return ansArr;
}
let anotherCompArr=(arr1,arr2)=>{
    let len1 = arr1.length;
    let len2 = arr2.length;
    if(len1 > len2 ){
        return false;
    }
    let isPresent=1;
    for(let i = 0; i < len1; i++){
        let temp = arr1[i]*arr1[i];
        if(arr2.indexOf(temp) === -1){
            isPresent=0;
            break;
        }
    }
    return isPresent?true:false;    
}
export{
    sortAscendingandDescending,infinitSum,
    maxSumContSubArray,anotherCompArr
}