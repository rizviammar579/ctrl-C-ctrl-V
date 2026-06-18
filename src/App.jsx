import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Table from "./components/Table"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";


function App() {

  const [displayData, setdisplayData] = useState([])

  const get = async () => {
    const response = await fetch("http://localhost:3000")
    const result = await response.json()
    setdisplayData(result)
  }

  useEffect(() => {
    get()
  }, [])

  const [myFunc, setMyFunc] = useState(null);


  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="h-[1px] bg-gray-100"></div>
      <Form get={get} setMyFunc={setMyFunc} />
      <Table displayData={displayData} get={get} myFunc={myFunc} />
    </>
  )
}

export default App
