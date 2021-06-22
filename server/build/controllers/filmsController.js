"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class FilmsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const peliculas = yield database_1.default.query('SELECT * FROM peliculas');
            res.json(peliculas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const peliculas = yield database_1.default.query('SELECT * FROM peliculas WHERE id = ?', [id]);
            if (peliculas.length > 0) {
                return res.json(peliculas[0]);
            }
            res.status(404).json({ text: "The film doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO peliculas set ?', [req.body]);
            res.json({ text: 'Pelicula guardada' });
        });
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ text: 'Pelicula guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE peliculas set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The film was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM peliculas WHERE id = ?', [id]);
            res.json({ message: "The game was deleted" });
        });
    }
}
const filmsController = new FilmsController();
exports.default = filmsController;
