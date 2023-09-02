import Customer from "@/models/customer";
import ConnectDB from "@/utilities/connectDB";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "internal error",
    });
    return;
  }

  const id = req.query.customerId;

  if (req.method === "DELETE") {
    try {
      await Customer.findOneAndDelete({ _id: id });
      res.status(200).json({
        status: "success",
        message: "data removed successfully",
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "deleting data failed",
      });
      return;
    }
  }
}
