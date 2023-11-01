import express from "express";

import { deleteUser, getAllUsers } from "../controller/user";
import { isAuthenticated, isOwner } from "../middleware";
export default(router:express.Router) => {
    router.get("/users", isAuthenticated, getAllUsers);
    router.delete("/user/:id",isAuthenticated, isOwner, deleteUser);
}