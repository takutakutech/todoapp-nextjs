import React from 'react'

const AddTask = () => {
  return (
    <form className="mb-4 space-y-3">
        <input type="text" className="w-full border px-4 py-2 rounded-lg"/>
        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:scale-95 duration-200">
            AddTask
        </button>
    </form>
  )
};

export default AddTask;