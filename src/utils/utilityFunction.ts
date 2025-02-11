import axios from "axios";

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