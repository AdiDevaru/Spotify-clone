import express from "express";
import { addSong, listSong } from "../controllers/songController.js";
import upload from "../middleware/multer.js";

const songRouter = express.Router();

// ADD NEW SONG
songRouter.post(
    "/add",
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "audio", maxCount: 1 },
    ]),
    addSong,
);

// LIST ALL SONGS
songRouter.get("/list", listSong);

export default songRouter;
