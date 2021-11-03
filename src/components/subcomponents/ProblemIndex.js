import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

import '../../styles/ProblemIndex.css'


function createData(props) {

    let HashMap = {
        "A": 0,
        "B": 0,
        "C": 0,
        "D": 0,
        "E": 0,
        "F": 0,
        "B1": 0,
        "C1": 0,
        "D1": 0,
        "E1": 0,
    }

    let NamesHashmap = {

    }

    props.map((element) => {

            if(!NamesHashmap.hasOwnProperty(element.problem.name))
            {
                HashMap[element.problem.index] += 1
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
                label: "Number of Problems Solved based on Level",
                data: TagsData,
                backgroundColor: '#009879',
                borderColor: '#009879',
                borderWidth: 1,
            },
        ],
    }


}


function ProblemIndex({ props }) {

    const data = createData(props)
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16,
                        family : "roboto",
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

export default ProblemIndex
