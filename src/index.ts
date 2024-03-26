import "reflect-metadata";
import express, { Application } from "express";
import { notificationRouter } from "./routes/notificationRoutes";
import { categoryRouter } from "./routes/categoryRoutes";
import { AppDataSource } from "./config/ormconfig";
import cors from "cors";

const app: Application = express();
const PORT: number = 8000;

(async () => {
  const initPostgres = async () => {
    await AppDataSource.initialize();
    console.info("\x1b[34m%s\x1b[0m", "=>   MariaDB connected!");
  };

  const port = parseInt(process.env.APP_PORT as string, 10) || 5432;

  try {
    await initPostgres();
    app.listen(port, () => {
      console.info(
        "\x1b[33m%s\x1b[0m",
        `=> 🚀 Server running on the port: ${port}`
      );
    });
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", `=> ❌  Server error: ${error}`);
  }
})();

app.use(cors());
app.use(express.json());

app.use("/notifications", notificationRouter);
app.use("/categories", categoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
