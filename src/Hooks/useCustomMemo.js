import { useRef } from "react"

export const useCustomeMemo = (cb, dependencyArr) => {
    const ref = useRef({
        memoizedValue:null,
        lastDependencyArr:[]
    });


    if(!checkArrEqual(dependencyArr, ref.current.lastDependencyArr)) {
        const value = cb();
        ref.current.memoizedValue = value;
        ref.current.lastDependencyArr = dependencyArr;
    }

    return ref.current.memoizedValue;

}

const checkArrEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}