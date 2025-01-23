import 'dotenv/config'
import { env } from "process";
import { app } from "./app";

app.listen(env.PORT || 3000, () => {
  console.log('👽 Its running! ')
})