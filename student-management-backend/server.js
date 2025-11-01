import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

mongoose.connect("mongodb+srv://mahmadimran1122_db_user:85pw2A8GsbLKDFE2@cluster1.7a0elul.mongodb.net/?appName=Cluster1")

const app = express();

app.use(cors(
  {
    origin:["https://school-management-frontend"],
    method: ["POST","GET","PUT",DELETE],
    credentials: true  
  }
));
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Student Management Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
