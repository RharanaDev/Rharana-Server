const router = require('express').Router();
const processStreamPath = require('../lib/streamPath');
const fs = require("fs");

router.get("/stream/:path?", function (req, res) {
    let range = req.headers.range;
    if (!range) {
        range = "bytes=0-";
    }
    const videoPath = processStreamPath(req.params.path);
    console.log(videoPath.absolutePath);
    const videoSize = fs.statSync(videoPath.absolutePath).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/webm",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath.absolutePath, { start, end });
    videoStream.pipe(res);
});

module.exports = router;