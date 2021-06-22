"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filmsController_1 = __importDefault(require("../../controllers/filmsController"));
class PeliculasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', filmsController_1.default.list);
        this.router.get('/:id', filmsController_1.default.getOne);
        this.router.post('/', filmsController_1.default.create);
        this.router.put('/:id', filmsController_1.default.update);
        this.router.delete('/:id', filmsController_1.default.delete);
    }
}
const peliculasRoutes = new PeliculasRoutes();
exports.default = peliculasRoutes.router;
