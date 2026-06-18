import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { toast } from "react-toastify";



const Form = ({ get, setMyFunc }) => {

  const [isEditing, setisEditing] = useState({ id: null, state: false })


  const edit = () => (id, res) => {
    setisEditing({ id: id, state: !isEditing.state })

    setForm({
      websiteUrl: res.websiteUrl,
      username: res.username,
      password: res.password
    })
  }


  useEffect(() => {

    setMyFunc(edit)

  }, [])



  const [form, setForm] = useState({
    websiteUrl: "",
    username: "",
    password: ""
  })


  const handleChange = (e) => setForm({
    ...form,
    [e.target.name]: e.target.value
  })

  const saveData = async (updatedForm) => {


    let response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedForm)
    })

    let result = await response.json()
    if (result.message === "Password saved successfully!") {
      toast(result.message)
    }
    else {
      toast.error(result.message)
    }



    setForm({
      websiteUrl: "",
      username: "",
      password: ""
    })
  }

  const [showpassword, setShowpassword] = useState(false)
  const [changeicon, setChangeicon] = useState("show.png")

  const showPassword = () => {
    setShowpassword(!showpassword)
    showpassword ? setChangeicon("show.png") : setChangeicon("hide.png")

  }


  const editData = async (updatedForm) => {


    let response = await fetch("http://localhost:3000/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: isEditing.id,
        data: updatedForm

      })
    })

    let result = await response.json()
    if (result.message === "Updated successfully!") {
      toast(result.message)
    }
    else {
      toast.error(result.message)
    }
    setisEditing({ ...isEditing, state: !isEditing.state })



    setForm({
      websiteUrl: "",
      username: "",
      password: ""
    })
  }





  const handleData = async () => {
    var updatedForm
    if (!form.password || !form.username || !form.websiteUrl) {
      return toast.error("All fields are required")

    }

    if (!form.websiteUrl.startsWith("http")) {

      updatedForm = {
        ...form, websiteUrl: `https://${form.websiteUrl}`
      }

      setForm(updatedForm)
    }
    else {
      updatedForm = { ...form }
      setForm(updatedForm)

    }


    isEditing.state ? await editData(updatedForm) : await saveData(updatedForm)
    await get()


  }


  return (<>
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Store all your passwords at one place</h1>

        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto sm:px-0 items-center ">
          <div className='w-full lg:w-[70vw] flex flex-col gap-5 justify-center items-center sm:p-5'>
            <div className="relative sm:mb-0 flex-grow w-full">
              <label htmlFor="websiteUrl" className="leading-7 text-sm text-gray-400">Website URL</label>
              <input value={form.websiteUrl} onChange={handleChange} type="text" id="websiteUrl" name="websiteUrl" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className='flex flex-col md:flex-row gap-5 w-full'>
              <div className="relative sm:mb-0 flex-grow w-full">
                <label htmlFor="username" className="leading-7 text-sm text-gray-400">Username</label>
                <input value={form.username} onChange={handleChange} type="text" id="username" name="username" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative sm:mb-0 flex-grow w-full">
                <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>

                <input type={showpassword ? "text" : "password"} value={form.password} onChange={handleChange} id="password" name="password" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button onClick={showPassword} className='hover:cursor-pointer relative sm: bottom-8 ax:left-11/12 left-10/12'> <img src={`${changeicon}`} alt="" width={25} height={18} /></button>

              </div>

            </div>
            {
              isEditing.state ? <button className="px-10 hover:cursor-pointer text-white bg-green-500 border-0 focus:outline-none hover:bg-green-600 rounded text-lg  p-3 px-3 w-fit mt-5" onClick={handleData}>Edit</button> :
                <button className="px-10 hover:cursor-pointer text-white bg-green-500 border-0 focus:outline-none hover:bg-green-600 rounded text-lg  p-3 px-3 w-fit mt-5" onClick={handleData}>Save</button>
            }

          </div>
        </div>
      </div>
    </section>
  </>

  )
}

export default Form
