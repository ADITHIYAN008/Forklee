import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", () => {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("Get request sent successfully");
      else console.log("Get request failed with status code:", res.statusCode);
    })
    .on("error", (err) => {
      console.error("Error making GET request:", err);
    });
});

export default job;
