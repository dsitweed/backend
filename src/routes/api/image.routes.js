import { Router } from "express";
import multer from "multer";
import { prisma } from "../../config/db.js";
import { NOT_FOUND } from "../../constants/message.js";
import imageController from "../../controllers/image.controller.js";

const upload = multer();

const imageRouter = Router();

imageRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const image = await imageController.getById(id);
  if (image) {
    res.writeHead(200, {
      "Content-Type": image.contentType,
      "Content-Length": image.buffer.length,
    });
    res.end(image.buffer);
  } else {
    res.json({
      message: NOT_FOUND,
    });
  }
});

imageRouter.post("/upload", upload.array("pictures", 10), async (req, res) => {
  const arr = [];
  for (let index = 0; index < req.files.length; index++) {
    const file = req.files[index];
    if (file) {
      const imageId = await imageController.create(file, req.accountId);
      arr.push(imageId);
    }
  }
  res.json({ images: arr });
});

export default imageRouter;
