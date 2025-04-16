import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./src/routes/auth.route";

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running ✅ on http://localhost:${PORT}`);
});
