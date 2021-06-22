"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PeliculasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Peliculas'));
    }
}
const peliculasRoutes = new PeliculasRoutes();
exports.default = peliculasRoutes.router;
