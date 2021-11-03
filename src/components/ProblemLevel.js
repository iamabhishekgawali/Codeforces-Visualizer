
import React,{useState,useEffect} from 'react'
import ProblemsRating from './subcomponents/ProbemsRating';
import ProblemIndex from './subcomponents/ProblemIndex';
import ProblemTag from './subcomponents/ProblemTag';
import ProgrammingLanguages from './subcomponents/ProgrammingLanguages';
import Verdict from './subcomponents/Verdicr';

function ProblemLevel({props}) {

    const [data,SetData] = useState([])

    function ParsedData(ParseData)
    {
        SetData(ParseData)
    }

    async function fetchapi()
    {
        try{
            const response = await fetch(`https://codeforces.com/api/user.status?handle=${props}&from=1`, {
                method: 'GET'
            }).then(function (response) { return response.json(); })
            ParsedData(response.result)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchapi()
    },[props])

    return (
        <>
            <ProblemIndex props = {data}></ProblemIndex>
            <ProblemsRating props = {data} ></ProblemsRating>
            <ProblemTag props = {data} ></ProblemTag>
            <ProgrammingLanguages props = {data} ></ProgrammingLanguages>
            <Verdict props = {data}></Verdict>
            </>
    )
}

export default ProblemLevel
