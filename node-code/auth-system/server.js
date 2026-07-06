import { app } from "./src/app.js";
import { connectDB } from "./src/db/connect.js";

const PORT = process.env.PORT  || 6500;

app.listen(PORT, () => {
    console.log(`server is listenin on PORT ${PORT}`);
    connectDB()
})