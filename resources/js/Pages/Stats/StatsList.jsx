import React,{useState, useEffect} from 'react';
import Stats from './Stats';
import Alert from '../../Components/DaisyUI/Alert';
import {instance} from '../../api/instance'


export default function StatsList() {
        const [statsData,setStatsData] = useState({stats:[],errMessage:'',loading:true})
        const {stats,errMessage,loading} = statsData

    useEffect(()=>{

       instance.get('/home/Dashboard')
        .then(res => {
            setStatsData({stats:res.data.value,errMessage:'',loading:false}) 
            console.log(res.data.value)
        })
        .catch(err => {
          setStatsData({stats:[],errMessage:err.message,loading:false})
          console.log(err.message)
        })

    },[])
   
    return (
        <div className='flex flex-wrap justify-center'>
            {
                loading && <span className="loading loading-spinner loading-lg"></span>
            }
            
           {
                stats.length ? stats.map(s => <Stats stats={s} key={s.sortIndex}/>) 
                : <Alert msg='No Data Found' css='alert'/>
           }

           {
                errMessage && <Alert msg={errMessage} css='alert alert-error'/>
           }
            
    </div>
    )
}
