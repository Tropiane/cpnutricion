import { Request, Response } from "express";
import formService from "./form.service";
import formInterface from "./form.interface";

class formController {
    private service = new formService();
    async getForms(req: Request, res: Response) {
        try {
            const forms = await this.service.getForms();
            res.json(forms);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    
    async createForm(req: Request<{}, {}, formInterface>, res: Response) {
        try {
            const form = req.body;
            
           return (await this.service.createForm(form), res.redirect("http://localhost:5173/"));
            
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}

export default formController;