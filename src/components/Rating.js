import React from 'react'
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react'

import '../styles/Rating.css'
import '../styles/UserInfoStyle.css'

function Rating({ props }) {

    function setParsedData(ParsedData) {

        let NumberofContest = ParsedData.length
        let MaximumRank = 50000
        let MinimumRank = 0
        let MaxRankName = -1
        let MinRankName = -1
        let MaxUp = -1
        let MinUp = 0

        const Labels = ParsedData.map((element, index) => {
            return index + 1
        })

        const newRating = ParsedData.map((element) => {

            if (element.rank < MaximumRank) {
                MaximumRank = element.rank
                MaxRankName = element.contestName
            }

            if (MinimumRank == 0 || element.rank > MinimumRank) {
                MinimumRank = element.rank
                MinRankName = element.contestName
            }

            MaxUp = Math.max(element.newRating - element.oldRating, MaxUp)
            MinUp = Math.min(element.newRating - element.oldRating, MinUp)

            console.log(element.newRating - element.oldRating)
            if (MinUp < 0) {
                console.log("Yes")
            }

            return element.newRating
        })

        console.log(MaxRankName)
        console.log(MaximumRank)

        SetData([{
            labels: Labels,
            datasets: [
                {
                    label: 'New Rating',
                    data: newRating,
                    fill: false,
                    backgroundColor: '#4b9c8c',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                },
            ],
        },
        {
            NumberofContest: NumberofContest,
            BestContest: MaxRankName,
            BestRank: MaximumRank,
            WorstContest: MinRankName,
            WorstRank: MinimumRank,
            MaxUp: MaxUp,
            Minup: MinUp
        }
        ]
        )
    }

    async function fetchAPI() {
        try {
            const response = await fetch(`https://codeforces.com/api/user.rating?handle=${props}`, {
                method: 'GET'
            })
                .then(function (response) { return response.json(); })
            console.log(response.result)
            setParsedData(response.result)
        }
        catch {

        }
    }

    const [data, SetData] = useState([{}, {}])

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16,
                        family: "roboto",
                    }
                }
            }
        }
    };

    useEffect(() => {
        fetchAPI()
    }, [props])


    const Temp = data[0]
    const Ratingtable = data[1]


    return (
        <div className="Rating">

            <div class="RatingChart" >
                <h3>Rating</h3>
                <Line data={data[0]} options={options} ></Line>
            </div>

            <div className="ContestTable">
                <div className="UserInfo" >
                    <table class="content-table">
                        <thead>
                            <tr>
                                <th>Contest</th>
                                <th>Values</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Number of Contest</td>
                                <td>{Ratingtable.NumberofContest}</td>
                            </tr>
                            <tr>
                                <td>Best Contest</td>
                                <td>{Ratingtable.BestContest}</td>
                            </tr>
                            <tr>
                                <td>Best Rank</td>
                                <td>{Ratingtable.BestRank}</td>
                            </tr>
                            <tr>
                                <td>Worst Contest</td>
                                <td>{Ratingtable.WorstContest}</td>
                            </tr>
                            <tr>
                                <td>Worst Rank </td>
                                <td>{Ratingtable.WorstRank}</td>
                            </tr>
                            <tr>
                                <td>Max Up</td>
                                <td>{Ratingtable.MaxUp}</td>
                            </tr>
                            <tr>
                                <td>Max Down</td>
                                <td>{Ratingtable.Minup}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )
            </div>
        </div>
    )
}

export default Rating
