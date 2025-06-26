import axios from 'axios'
import { ArrowLeftIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'



const CreatePage = () => {
  const[title,setTitle]=useState("")
  const[content,setContent]=useState("")
  const[loading,setLoading]=useState(false)

  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
      e.preventDefault();
      if(!title.trim()||!content.trim()){
        toast.error("All field are required")
        return
      }

      setLoading(true)
      try {
        await axios.post("http://localhost:5000/api/notes",{
          title,
          content
      })
       toast.success("Note Created sucessfully");
       navigate("/") 
      } catch (error) {
        toast.error("Failed to create the Note")
        
      }finally{
        setLoading(false)
      }
      
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost mb-6'>
          <ArrowLeftIcon className='size-5'/>
          Back to Notes
          </Link>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Create A New Note!</h2>
              <form onSubmit={handleSubmit}>

                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input type='text'
                  placeholder='Note Title'
                  className='input input-bordered'
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>

                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea
                  placeholder='Write Your Note Here!'
                  className='textarea textarea-bordered h-32'
                  value={content}
                  onChange={(e)=>setContent(e.target.value)}
                  />
                </div>

                <div className='card-actions justify-end'>
                  <button type="submit" className='btn btn-primary' disabled={loading}>
                    {loading?"creating...":"Create Note"}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CreatePage
