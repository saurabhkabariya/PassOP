import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [showpass,setshowpass]=useState(false);
  const [form, setform] = useState({site:"",uname:"",pass:""});
  const [passArray, setpassArray] = useState([]);
  useEffect(() => {
    let passwords=localStorage.getItem("passwords");
    if(passwords){
      setpassArray(JSON.parse(passwords));
    }
  }, [])
  

  const showpassword=()=>{
    setshowpass(!showpass);
    
  }

  const savepassword=()=>{
    if(form.site==="" || form.uname==="" || form.pass===""){
      alert("Please fill all the fields");
      return;
    }
    setpassArray([...passArray,{...form,id:uuidv4()}]);
    localStorage.setItem("passwords",JSON.stringify([...passArray,{...form,id:uuidv4()}]))
    setform({site:"",uname:"",pass:"",id:""})
    toast("Password Saved Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const deletepassword=(id)=>{
    let c=confirm("Do you really wants to delete this password?");
    if(c){
      setpassArray(passArray.filter((item)=>item.id!==id));
      localStorage.setItem("passwords",JSON.stringify(passArray.filter((item)=>item.id!==id)))
      toast("Password Deleted Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    }
  }
  const editpassword=(id)=>{
    setform(passArray.filter((item)=>item.id===id)[0]);
    setpassArray(passArray.filter((item)=>item.id!==id));
  }

  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  const copytext=(text)=>{
    navigator.clipboard.writeText(text);
    toast(text+" Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <div className="min-h-[79.5vh]">
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    <div>
    <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    </div></div>
    <div className="bg-slat-50 text-white md:max-w-2/3 md:mycontainer w-full mx-auto pt-4">
    <div className='Logo font-bold text-5xl cursor-pointer text-center'><a className='hover:text-green-400' href='/'>
        <span className="text-green-700">
          &lt;
        </span>
        Pass<span className="text-green-400">OP</span>
        <span className="text-green-700">
          /&gt;
        </span>
        </a></div>
      <p className='text-center text-green-400 text-lg'>Your own password Manager</p>
      <div className="text-white flex flex-col p-4 gap-4 w-full justify-center">
          <input className='rounded-full border border-green-400 p-3 w-full py-2 placeholder:text-white' type="text" value={form.site} onChange={handlechange} name="site" id="" placeholder='Enter Website URL :' required />
          <div className="flex gap-2 w-full flex-col md:flex-row">
            <input className='rounded-full border border-green-400 p-3 md:w-1/2 py-2 placeholder:text-white' type="text" value={form.uname} name='uname' onChange={handlechange} placeholder='Enter Username :' required />
            <div className="relative md:w-1/2">
              <input className='rounded-full border border-green-400 p-3 w-full py-2 placeholder:text-white' type={showpass ? "text" : "password"} value={form.pass} name='pass' onChange={handlechange} placeholder='Enter Password :' required />
              <div className="eye absolute right-4 top-2 cursor-pointer" onClick={showpassword}>{ showpass===false ? <IoIosEye/> : <IoIosEyeOff/>}</div>
            </div>
          </div>
            <button className='add-btn flex gap-2 items-center justify-center py-2 px-4 text-center mx-auto bg-green-900 mt-2 hover:bg-white hover:text-green-900 rounded-full border border-green-400' onClick={savepassword}><IoIosAddCircleOutline/>Save Password</button>
      </div>
      <div className="passwords">
        <h2 className='text-4xl text-center my-4 font-bold'>Your Passwords</h2>
        <div className="passlist overflow-x-auto p-2">
        {passArray.length === 0 ? <div className='text-2xl text-center my-4 font-bold'>No Passwords To Show</div> :
        <table className="table-auto w-full rounded md:rounded-2xl overflow-hidden text-[12px] md:text-xl my-2">
          <thead className=' bg-green-900 border-b-2 border-white'>
            <tr>
              <th className='text-center p-1 md:p-2'>Site</th>
              <th className='text-center p-1 md:p-2'>Username</th>
              <th className='text-center p-1 md:p-2'>Password</th>
              <th className='text-center p-1 md:p-2'>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-green-700'>
            {passArray.map((pass,index)=>{
              return(
                <tr key={index}>
                  <td className='text-center p-1 md:p-2 border-r-1 border-white'><span className='flex items-center justify-center gap-2'><a className='hover:text-blue-200' href={pass.site} target='_blank'>{pass.site}</a> <span><FaCopy className='text-xl cursor-pointer' onClick={()=>copytext(pass.site)}/></span></span></td>
                  <td className='text-center p-1 md:p-2 border-l-1 border-r-1 border-white'><span className='flex items-center justify-center gap-2'>{pass.uname}<span><FaCopy className='text-xl cursor-pointer' onClick={()=>copytext(pass.uname)}/></span></span></td>
                  <td className='text-center p-1 md:p-2 border-l-1 border-r-1 border-white'><span className='flex items-center justify-center gap-2'>{pass.pass}<span><FaCopy className='text-xl cursor-pointer' onClick={()=>copytext(pass.pass)}/></span></span></td>
                  <td className='text-center p-1 md:p-2 border-l-1 border-white'><div className="flex gap-2 items-center justify-center mx-auto"><MdEditSquare className='text-xl md:text-3xl cursor-pointer text-blue-700 bg-green-300 rounded-md p-0.5' onClick={()=>editpassword(pass.id)}/><MdDelete className='text-xl md:text-3xl cursor-pointer text-red-700 bg-green-300 rounded-md p-0.5' onClick={()=>deletepassword(pass.id)}/></div></td>
                </tr>
              )}
            )}
            
            
          </tbody>
        </table>
        }

        </div>
      </div>
    </div>
    </div>
  )
}

export default Manager
