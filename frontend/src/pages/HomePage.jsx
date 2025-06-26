import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import toast from 'react-hot-toast';
import RateLimitedUI from '../components/RateLimitedUI';
import Notecard from './Notecard';
import api from '../lib/axios';

const HomePage = () => {
    const [isRateLimited,setIsRateLimited]=useState(false);
    const[notes,setNotes]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const fetchNotes=async()=>{
            try {
                const res=await api.get("/notes")
                console.log(res.data)
                setNotes(res.data);
                setIsRateLimited(false);




            } catch (error) {
                console.log("error in fetching the data");
                if(error.response?.status===429){
                    setIsRateLimited(true);
                }
                else{
                    toast.error("Failed to load Notes");
                }
                
            }
            finally{
                setLoading(false);
            }
        }
        fetchNotes();
    },[])
  return (
    <div className='min-h-screen'>
        <Navbar/>
        {isRateLimited && <RateLimitedUI />}

        <div className='max-u-7xl mx-auto p-4 mt-6'>
            {loading && <div className='text-center text-primary py-10'>Loading....</div>}
            {notes.length>0 && !isRateLimited &&(
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {notes.map((note)=>(
                        <Notecard key={note._id} note={note}/>
                    ))}
                </div>

            )}
        </div>
    </div>
  )
}

export default HomePage
