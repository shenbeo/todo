import React, {  useState } from 'react'
import banner from "../assets/img/banner01.jpg"
import Loader from './Loader';


function Layer() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
// const [job, setJob] = useState('');
// const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState();


// const handleSubmit = () =>{
//   setJobs(prev => [...prev, job])
//   setJob('')
//   setLoading(true);
//   setTimeout(() => {
//     setLoading(false);
//   }, 220);
//   console.log(jobs);
// }

function addItem(){

  if(!newItem){
    alert("Enter an item")
    return;
  }

  const item = {
    id: Math.floor(Math.random()*1000),
    value: newItem
  }
  setItems(oldItems => [...oldItems, item])
  setNewItem("")
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
  console.log(items);

}


function deleteItem (id){
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 220);
}

return (
    <div className='flex relative'>
        <img className=' h-screen w-[100%] object-cover ' src={banner} alt="" />

{/* =============================nhập dữ liệu */}
        <div className='flex flex-col absolute h-[100vh] items-center pt-[200px] w-[100%] text-xl'>

          <div>
                <input type="text" placeholder='Enter an item.....' className='outline-none w-[450px] shadow-2xl px-8 py-4 rounded-l-3xl'
                    value={newItem} 
                    onChange={(e)=>setNewItem(e.target.value)}
                    
                />
                
  
                <button className='bg-black duration-500 text-white rounded-r-3xl px-8 py-4 hover:bg-[#cccccc3d]'  
                    onClick={()=>addItem()}
                    // onClick={handleSubmit}
                    >
                    Add
                </button>
          </div>
{/* =============================end nhập dữ liệu */}

{/* =============================render dữ liệu */}
{loading ? <Loader/> :
              <div className='overflow-y-auto  h-[320px] mt-[40px]'>
                <ul className='w-[380px] bg-[#03030341] rounded-lg  text-[#393737] '>
                    {items.map((item)=>
                          {
                            return(
                              <li key={item.id} className='hover:bg-[#25252584] hover:rounded-lg flex items-center justify-between text-white w-[100%] p-4 cursor-pointer duration-700'>
                                {item.value}
                                
                                <button onClick={()=>deleteItem(item.id)} className='bg-black rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-[#cccccc75] font-medium hover:text-black'><p className='mb-1'>x</p></button>
                              </li>
                            )
                          }
                    )}
                </ul>
              </div>
}
{/* =========================end render dữ liệu */}
        </div>
    </div>
  )
}

export default Layer