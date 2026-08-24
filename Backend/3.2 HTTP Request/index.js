import express from "express"

const app = express();

app.get('/', (req, res) =>
{
    console.log('METHOD:', req.method);
    console.log('URL:', req.url);
    console.log('HTTP VERSION:', req.httpVersion);
    console.log('HEADERS:', req.headers);
    console.log('RAW HEADERS:', req.rawHeaders);

    res.send("<h1>Hello World!!!</h1>");
});

app.get('/about', (req, res) =>
{
    res.send("<h1>About Me</h1>");
});

app.listen(3000, () => {
    console.log("running on port 3000")
});