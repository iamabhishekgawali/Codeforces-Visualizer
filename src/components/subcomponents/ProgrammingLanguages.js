import React from 'react'
import { Pie } from 'react-chartjs-2'
import '../../styles/ProblemIndex.css'


function GetParsedData(ParsedData)
{
    const Hashmap = {

    }

    const NamesHashmap = {

    }

    let Total = 0

    ParsedData.map((element)=>{
        if (!NamesHashmap.hasOwnProperty(element.problem.name)) {

            if (Hashmap.hasOwnProperty(element.programmingLanguage)) {
                Hashmap[element.programmingLanguage] += 1
            }
            else {
                Hashmap[element.programmingLanguage] = 1
            }

            NamesHashmap[element.problem.name] = 1
            Total += 1
        }
        
    })

    let Label = []
    let Data = []

    for(let property in Hashmap)
    {
        Label.push(property)
        let num = (Hashmap[property]*100)/Total
        num = num.toFixed(2)
        Data.push(num)
    }

    let backgroundColors = []

    for (let i = 0; i < Label.length; i++) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        backgroundColors.push(`rgba(${r},${g},${b},0.5)`)
    }

    const Val = {
        labels: Label,
        datasets: [
            {
                label: 'Number of problems based on Tags',
                data: Data,
                backgroundColor: backgroundColors,
                borderWidth: 0.05,
                borderColor: "grey"
            },
        ],
    };

    return Val;
}


function ProgrammingLanguages({props}) {

    let data = GetParsedData(props);
    const options = {
        aspectRatio: 1.5,
        layout: {
        },
        responsive: true,
        cutoutPercentage: 90,
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: "roboto",
                    }
                }
            }
        }
    }

    return (
        <div className = "Pie" >
            <h3>Programming Languages Used</h3>
            <Pie data = {data}  options = {options} ></Pie>
        </div>
    )
}

export default ProgrammingLanguages
