import Customer from "@/models/customer";
import ConnectDB from "@/utilities/connectDB";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "connect to DB failed",
    });
    return;
  }

  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.name || !data.lastName || !data.email) {
      res.status(406).json({
        status: "failed",
        message: "invalid data",
      });
    }
    try {
      const customer = await Customer.create(data);
      res.status(201).json({
        status: "success",
        message: "data created successfully",
        data: customer,
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "creating data failed",
      });
    }
  }
}
