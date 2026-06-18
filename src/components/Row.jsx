import React from 'react'
import { toast } from "react-toastify";

const Row = ({ res, get, myFunc }) => {

  const deletepass = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this password?"
    );

    if (!confirmed) return;

    let response = await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id: id })
    })

    let result = await response.json()
    toast.error(result.message)


    await get()



  }



  return (
    <>
      <tr>
        <td className="px-4 py-3 gap-3 group">
          <div className='flex items-center gap-7'>
            <div>{res.websiteUrl}</div>
            <button className='hover:cursor-pointer opacity-0 group-hover:opacity-100'><img src="copy.png" alt="" onClick={() => { navigator.clipboard.writeText(res.websiteUrl); toast("Copied to clipboard") }} /></button>
          </div>
        </td>

        <td className="px-4 py-3 gap-3 group">
          <div className='flex items-center gap-7'>
            <div>{res.username}</div>
            <button className='hover:cursor-pointer opacity-0 group-hover:opacity-100'><img src="copy.png" alt="" onClick={() => { navigator.clipboard.writeText(res.username); toast("Copied to clipboard") }} /></button>
          </div>
        </td>

        <td className="px-4 py-3 gap-3 group">
          <div className="flex items-center gap-7 ">
            <div>{"•".repeat(res.password.length)}</div>
            <button className='hover:cursor-pointer opacity-0 group-hover:opacity-100'><img src="copy.png" alt="" onClick={() => { navigator.clipboard.writeText(res.password); toast("Copied to clipboard") }} /></button>
          </div>
        </td>
        <td className="w-30">
          <div className='flex justify-end gap-3'>

            <button className='hover:cursor-pointer'><img src="edit.png" alt="" onClick={() => myFunc(res._id, res)} /></button>
            <button className='hover:cursor-pointer'><img src="delete.png" alt="" onClick={() => deletepass(res._id)} /></button>
          </div>
        </td>
      </tr>

    </>
  )
}

export default Row
