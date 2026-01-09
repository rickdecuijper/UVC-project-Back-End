import { Router } from "express";
import { register, login, me, logout} from "../controllers/authController.ts";
import { authenticateToken } from "../middleware/authentication/authenticate.ts";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticateToken, me);
router.post('/logout', logout);

export default router;
