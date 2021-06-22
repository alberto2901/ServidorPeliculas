import { Request, Response } from 'express';
import pool from '../database';

class FilmsController {

    public async list(req: Request, res: Response) {
        const peliculas = await pool.query('SELECT * FROM peliculas');
        res.json(peliculas);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const peliculas = await pool.query('SELECT * FROM peliculas WHERE id = ?', [id]);

        if (peliculas.length > 0) {
            return res.json(peliculas[0]);
        }

        res.status(404).json({ text: "The film doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO peliculas set ?', [req.body]);
        res.json({text: 'Pelicula guardada'})
    }

    public async createUsuario(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({text: 'Usuario guardado'})
    }

    public async update(req: Request, res: Response){
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE peliculas set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The film was Updated" });
    }

    public async delete(req: Request, res: Response){
        const { id } = req.params;
        await pool.query('DELETE FROM peliculas WHERE id = ?', [id]);
        res.json({ message: "The game was deleted" });
    }

}

const filmsController = new FilmsController();
export default filmsController;