import axios from "axios";
import { exp } from "maath/dist/declarations/src/easing";

/**
 * 
 * @param arr : any type of array
 * @param times : how many replication you want to make
 * @returns : n times number of array ex [1,2,3]*3 ==> [1,2,3,1,2,3,1,2,3] 
 */
export const duplicateArr = (arr:any[], times:number) : any[]=>
    Array(times)
        .fill([...arr])
        .reduce((a, b) => a.concat(b));

export const checkInternetConn = async (url : string) : Promise<boolean> => {
    return axios.get(url).then(()=>true).catch(()=>false)
}

export const capitalizeText = (text:string) : string =>{
    return text.split(" ").map(letter=> letter.charAt(0).toUpperCase()+letter.slice(1)).join(" ")
}

export const alwaysScrollTop = () => window.scrollTo(0, 0)