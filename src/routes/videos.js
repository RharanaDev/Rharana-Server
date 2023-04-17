const express = require("express");
const router = express.Router();
const Video = require("../models/video");

//Database related with VideoClubbing

router.get("/videos", async (req,res)=>{
    const videos = await Video.find();
    res.json(videos);
});

router.get("/video/:id", async (req,res)=>{
    const video = await Video.findById(req.params.id);
    res.json(video);
});

router.post("/videos", async (req,res)=>{
    const {title, description, path, imgPath} = req.body;
    const video = new Video({title, description, path, imgPath})
    await video.save();
    res.json({status: "Video Information Created"});
});

router.put("/videos/:id", async (req,res)=>{
    const {title, description, path, imgPath} = req.body;
    const newVideo = {title, description, path, imgPath};
    await Video.findByIdAndUpdate(req.params.id, newVideo);
    res.json({status: "Video Information Updated"});
});

router.delete("/videos/:id", async (req,res)=>{
    await Video.findByIdAndDelete(req.params.id);
    res.json({status: "Video Information Deleted"});
});

module.exports = router;