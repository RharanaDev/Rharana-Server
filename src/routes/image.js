const express = require("express");
const router = express.Router();
const processImagePath = require("../lib/imagePath");

router.get("/image/:path?", function (req, res) {
    const imagePath = processImagePath(req.params.path);
    res.sendFile(imagePath.absolutePath);
});

module.exports = router;