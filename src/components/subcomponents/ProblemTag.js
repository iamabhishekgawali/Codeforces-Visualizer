
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import '../../styles/ProblemIndex.css'
import { Bar } from 'react-chartjs-2'



function GetParsedData(ParseData) {
    let Hashmap = {

    }

    let NamesHashmap = {

    }

    ParseData.map((element) => {
        let Temp = element.problem.tags

        for (let i = 0; i < Temp.length; i++) {

            if (!NamesHashmap.hasOwnProperty(element.problem.name)) {

                if (Hashmap.hasOwnProperty(Temp[i])) {
                    Hashmap[Temp[i]] += 1
                }
                else {
                    Hashmap[Temp[i]] = 1
                }

                NamesHashmap[element.problem.name] = 1
            }
        }
    })

    let Label = []
    let Data = []

    for (let property in Hashmap) {
        Label.push(property)
        Data.push(Hashmap[property])
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

function ProblemTag({ props }) {

    console.log(props)

    let data = GetParsedData(props);


    const options = {
        mantainAspectRatio : false,
        aspectRatio: 1.5,
        layout: {

        },
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
        <div className="DoughNaut">
            <h3>Problems based on Tags</h3>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default ProblemTag
