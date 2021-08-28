import app, { connectDatabase } from "./app"

const port = process.env.PORT || 4000

connectDatabase().then(() => {
  console.log("Connected with database.")

  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
  })
}).catch((err) => {
  console.log(err)
})