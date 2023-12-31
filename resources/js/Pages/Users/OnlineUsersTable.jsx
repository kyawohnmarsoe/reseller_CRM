import React,{useState,useEffect} from 'react'
import {instance} from '../../api/instance'
import OnlineUsersTableRow from './OnlineUsersTableRow'
import Alert from '../../Components/DaisyUI/Alert'

export default function OnlineUsersTable() {
   const [onlineUsersData,setOnlineUsersData] = useState({users:[],errMessage:'',loading:true})
   const {users,errMessage,loading} = onlineUsersData

    useEffect(()=>{
       instance.get('/user/filter/WillBeDisabledIn2Days/10/10')
        .then(res => {
            setOnlineUsersData({users:res.data.value.itemsList,errMessage:'',loading:false}) 
            // console.log(res.data.value.itemsList[0].customer.customerFullName)
            console.log(res.data.value.itemsList[0])
        })
        .catch(err => {
          setOnlineUsersData({users:[],errMessage:err.message,loading:false})
          console.log(err)
        })
    },[])

  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Username</th>
        <th>Customer Name</th>
        <th>Accounting Info</th>
        <th>Expiration Date</th>
        <th>Account Info</th>
        <th>Online Status</th>
        <th>Others</th>
      </tr>
    </thead>

    <tbody>
          {
                loading && <span className="loading loading-spinner loading-lg"></span>
            }
            
           {
               users.length ? users.map(user => <OnlineUsersTableRow user={user} key={user.userIndex}/>) 
                : <tr><td>No Data Found</td></tr>
           }

           {
                errMessage && <tr><td>{errMessage}</td></tr>
           }
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Username</th>
        <th>Customer Name</th>
        <th>Accounting Info</th>
        <th>Expiration Date</th>
        <th>Account Info</th>
        <th>Online Status</th>
        <th>Others</th>
      </tr>
    </tfoot>
    
  </table>
</div>
  )
}
