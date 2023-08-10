import { Router } from "express";
import { indexExample } from "../controllers/index.controller.js";

const router = Router()
router.get("/ping", indexExample);
export default router