import { Router } from "express";
import multer from "multer";
import { prisma } from "../../config/db.js";

const upload = multer();

const imageRouter = Router();

imageRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const image = await prisma.image.findUnique({ where: { id } });
  if (image) {
    // const buffer = Buffer.from(image.buffer, "base64");
    res.writeHead(200, {
      "Content-Type": image.contentType,
      "Content-Length": image.buffer.length,
    });
    res.end(image.buffer);
  } else {
    res.json({
      message: "Image not found",
    });
  }
});

imageRouter.post("/upload", upload.single("picture"), async (req, res) => {
  if (req.file) {
    const result = await prisma.image.create({
      data: {
        buffer: req.file.buffer,
        contentType: req.file.mimetype,
        uploaderEmail: req.email,
      },
    });
    res.json({ id: result.id });
  } else {
    res.json({ message: "Please provide a image" });
  }
});

export default imageRouter;
