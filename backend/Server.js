import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { user } from "../models/Schema.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173"
}))


mongoose.connect("mongodb://localhost:27017/passwordManager")


app.post('/', async (req, res) => {

  var updatedData

  if (!req.body.websiteUrl || !req.body.username || !req.body.password) {
    return res.send({ message: "All fields are required" })

  }

  if (typeof req.body.websiteUrl !== "string" || typeof req.body.username !== "string" || typeof req.body.password !== "string") {
    return res.send({ message: "All fields must be strings" })

  }

  if (!req.body.websiteUrl.startsWith("http")) {

    updatedData = {
      ...req.body, websiteUrl: `https://${req.body.websiteUrl}`
    }
  }
  else {
    updatedData = { ...req.body }
  }

  try {

    const User = new user(updatedData)
    await User.save()

    res.send({ message: "Password saved successfully!" })
  } catch (error) {
    res.send({ message: "Failed to save" })
  }

})

app.get('/', async (req, res) => {
  const users = await user.find()
  res.json(users)
})

app.delete('/', async (req, res) => {
  await user.deleteOne({ _id: req.body._id })
  res.send({ message: "Deleted Successfully" })
})

app.put('/', async (req, res) => {

  await user.replaceOne({ _id: req.body._id }, req.body.data)
  res.send({ message: "Updated successfully!" })

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})