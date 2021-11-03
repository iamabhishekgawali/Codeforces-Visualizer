
import React from 'react'
import '../styles/UserInfoStyle.css'

export default function UserInfo({ props }) {

    const UserInfo = props[0]

    return (
        <div className="UserInfo" >
            <table class="content-table">
                <thead>
                    <tr>
                        <th>User Attributes</th>
                        <th>Values</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Firstname</td>
                        <td>{UserInfo.firstName}</td>
                    </tr>
                    <tr className="active-row">
                        <td>LastName</td>
                        <td>{UserInfo.lastName}</td>
                    </tr>
                    <tr>
                        <td>Maximum Rank</td>
                        <td>{UserInfo.maxRank}</td>
                    </tr>
                    <tr>
                        <td>Maximum Rating</td>
                        <td>{UserInfo.maxRating}</td>
                    </tr>

                    <tr>
                        <td>Current Rank</td>
                        <td>{UserInfo.rank}</td>
                    </tr>

                    <tr>
                        <td>Current Rating</td>
                        <td>{UserInfo.rating}</td>
                    </tr>
                    <tr>
                        <td>Organisation/University</td>
                        <td>{UserInfo.organization}</td>
                    </tr>
                    <tr>
                        <td>Maximum Rating</td>
                        <td>{UserInfo.maxRating}</td>
                    </tr>

                    <tr>
                        <td>Country</td>
                        <td>{UserInfo.country}</td>
                    </tr>

                    <tr>
                        <td>City</td>
                        <td>{UserInfo.city}</td>
                    </tr>

                    <tr>
                        <td>Handle Name</td>
                        <td>{UserInfo.handle}</td>
                    </tr>

                    <tr>
                        <td>Number of Friends</td>
                        <td>{UserInfo.friendOfCount}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
