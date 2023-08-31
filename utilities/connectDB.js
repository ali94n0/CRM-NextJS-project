import mongoose from "mongoose";

export default async function ConnectDB(props) {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  }
  await mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(console.log("connect to DB"));
}
