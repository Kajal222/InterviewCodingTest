import React, { useEffect, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import LineChart from './LineChart';
import './UserCard.css'
import LogsData from './LogsData'
const _ = require("lodash");

const UserCard = ({ data }) => {
    let graphData = [
        {
            label: "2005",
            value: "89.45"
        },
        {
            label: "2006",
            value: "89.87"
        },
        {
            label: "2007",
            value: "89.64"
        },
        {
            label: "2008",
            value: "90.13"
        },
        {
            label: "2009",
            value: "90.67"
        },
        {
            label: "2005",
            value: "89.45"
        },
        {
            label: "2006",
            value: "89.87"
        },
        {
            label: "2007",
            value: "89.64"
        },
        {
            label: "2008",
            value: "90.13"
        },
        {
            label: "2009",
            value: "90.67"
        },
    ]
    const [impressions, setimpressions] = useState(0)
    const [convesions, setconvesions] = useState(0)
    const [revenue, setrevenue] = useState(0)
    const [dataGraph, setDataGraph] = useState([])
    useEffect(() => {

        LogsData.getUser((sad) => {
            let impressionsArr = sad.filter(f => f.user_id === data.fields.Id && f.type === "impression")
            setimpressions(impressionsArr.length)

            let conversionsArr = sad.filter(f => f.user_id === data.fields.Id && f.type === "conversion")
            setconvesions(conversionsArr.length)
            let grouped_data = _.groupBy(conversionsArr, 'time')
            let grpD = []
 
            Object.keys(grouped_data).forEach(element => {
                 grpD.push({
                    label: element.split(' ')[0],
                    value: grouped_data[element].length
                })
            });
            setDataGraph(grpD)
             let revenueAmt = sad.filter(f => f.user_id === data.fields.Id).reduce((curr, next) => {
                return { revenue: curr.revenue + next.revenue }
            })
            setrevenue(revenueAmt.revenue)
        })
    }, [])

    return <Card>
        <CardBody>
            {data.fields.avatar == ''
                ? <img className='userImage' src={data.fields.avatar} alt="Card image cap" />
                : <span className='userImagePlaceholder'>{data.fields.Name[0]}</span>
            }

            <CardTitle>{data.fields.Name}</CardTitle>
            <CardSubtitle>{data.fields.occupation}</CardSubtitle>
        </CardBody>
        <CardBody>
            <CardText>
                <div className='cardDetail'>
                    <div className='cardGraph'>
                        <LineChart graphData={dataGraph} />
                    </div>
                    <div className='cardDescription'>
                        <div className='descriptionValue redText'>{impressions}</div>
                        <div className='descriptionContent'>impressions</div>
                        <div className='descriptionValue blueText'>{convesions}</div>
                        <div className='descriptionContent'>convesions</div>
                        <div className="revenueValue">$ {revenue.toFixed(3)}</div>
                    </div>
                </div>
            </CardText>
        </CardBody>
    </Card>
}
export default UserCard;