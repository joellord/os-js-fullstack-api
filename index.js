const app = require("express")();
const PORT = process.env.PORT || 8888;

app.get("/health", (req, res) => {
    res.send((new Date()).toString()).status(200);
});

app.get("/api/hello", (req, res) => {
    const data = {
        "message": "Hello World"
    };

    res.send(data).status(200);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));