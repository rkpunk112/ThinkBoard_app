import React from 'react'
import { PenSquareIcon,Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'
import toast from 'react-hot-toast'
import api from '../lib/axios'


const Notecard = ({note}) => {

    const handleDelete=async(e,id)=>{
        e.preventDefault();

        if(!window.confirm("Are you sure wnat to delete this Note ?")) return;
        try {
            await api.delete(`/notes/${id}`);
            toast.success("Note is Deleted SucessFully!");

        } catch (error) {
            console.log("error in HandleDelete",error);
            toast.error("Failed to delete the Node");
            
        }
    }
  return (
    <Link to={`/note/${note._id}`}
    className='card bg-base100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'
    >
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                {formatDate(new Date(note.createdAt))}
                </span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4'/>
                    <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>handleDelete(e,note._id)}>
                        <Trash2Icon className='size-4'></Trash2Icon>
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Notecard
