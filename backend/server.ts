import { app } from "./src";
import { connectDb } from "./src/db/db";

connectDb();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});