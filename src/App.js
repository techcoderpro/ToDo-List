import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [data, setData] = useState([]);


  return (
    <div className='m-10'>
      <div className="border-2 border-slate-600/50 w-[35%] p-2 ">
        <h1>Create a task</h1>
        <input
          className="border-2 border-black pl-2"
          placeholder="Enter a task"
          value={task}
          type="text"
          onChange={function (e) {
            setTask(e.target.value);
          
          }}
        />
        <br />
        <button className="bg-green-700 py-1 px-4 rounded-md mt-2 text-white" onClick={function () {
          console.log({ task });
          setData([...data, task]);
          setTask('');
        }}>
          Submit
        </button>
      </div>

      <div className="border-2 border-slate-600/50 w-[35%] p-2 my-6 ">
        {
          data.map(function (item) {
            return (
              <div>
                <h2>{item}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default App;