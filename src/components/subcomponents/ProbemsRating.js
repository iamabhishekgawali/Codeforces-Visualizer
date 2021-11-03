import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import '../../styles/ProblemIndex.css'

function createData(props) {

    let HashMap = {
            "800" : 0,
            "900" : 0,
            "1000" : 0,
            "1200" : 0,
            "1300" : 0,
            "1400" : 0,
            "1500" : 0,
            "1600" : 0,
            "1700" : 0,
            "1800" : 0,
            "1900" : 0,
            "2000" : 0,
            "2200" : 0,
            "2300" : 0,
            "2400" : 0,
            "2500" : 0,
            "2600" : 0,
            "2700" : 0,
            "2900" : 0,
            "3000" : 0,
    }
    
    let NamesHashmap = {

    }

    props.map((element) => {

            if(HashMap.hasOwnProperty(element.problem.rating) && !NamesHashmap.hasOwnProperty(element.problem.name))
            {
                HashMap[element.problem.rating] += 1
                NamesHashmap[element.problem.name] = 1
            }
    })

    let labels = []
    let TagsData = []

    for (const property in HashMap) {
        labels.push(property);
        TagsData.push(HashMap[property])
    }

    return {
        labels: labels,
        datasets: [
            {
                label: "Number of Problems Solved based on Rating",
                data: TagsData,
                backgroundColor: '#009879',
                borderColor: '#009879',
                borderWidth: 1,
            },
        ],
    }
}


function ProblemsRating({ props }) {

    const data = createData(props)
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        fontsSize : 100
                    },
                },
                
            ],
        },

        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16
                    }
                }
            }
        }
    };

    return (
        <div class = "IndexProblem">
            <Bar data={data} options={options} ></Bar>
        </div>
    )
}

export default ProblemsRating
