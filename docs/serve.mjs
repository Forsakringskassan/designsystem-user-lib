import express from "express";

const defaultPort = 8080;
const port = process.env.HTTP_PORT
    ? parseInt(process.env.HTTP_PORT, 10)
    : defaultPort;
const folders = process.argv.slice(2);

/* eslint-disable-next-line sonarjs/x-powered-by -- for internal testing only */
const app = express();

for (const folder of folders) {
    app.use("/", express.static(folder));
}

const server = app.listen(port, "::", () => {
    const addr = server.address();
    /* eslint-disable-next-line no-console -- expected to log */
    console.log(`Server started at http://localhost:${addr.port}`);
});
