import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import UserCard from "../components/UserCard/UserCard";
import services from "../services";
import './User.css'
import Pagination from "../components/Pagination";
const User = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [userData, setuserData] = useState([])
    const pageCalledFun = (a) => {
         let offset = (a - 1) * 10
        let data = "maxRecords=20&view=Grid%20view&offset=" + offset
        services.getUser(data, (res) => {
             setuserData(res.records)
        })

    }
    useEffect(() => {
        let data = "maxRecords=10&view=Grid%20view&offset=0"
        services.getUser(data, (res) => {
             setuserData(res.records)
        })

    }, [])

    return <div className="container userpage">
        <div className="row">
            {
                userData.map((m, i) => {
                    return <div key={i} className="col-md-4 mt-3 mb-2"> <UserCard data={m} /> </div>
                })
            }
        </div >
        <Pagination pageCalled={pageCalledFun} />
    </div>
}
export default User;