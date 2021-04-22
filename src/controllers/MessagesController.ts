import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController { 
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;

    const messagesService = new MessagesService();

    try {
      const message = await messagesService.create({
        admin_id,
        text,
        user_id
      });
  
      return response.json(message);
    } catch(err) {
      console.log('Error: ', err);
      return response.status(400).json({
        message: "Erro ao salvar a mensagem"
      });
    }
  }

  async showByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const messagesService = new MessagesService();

    try {
      const list = await messagesService.listByUser(id);

      return response.json(list);
    } catch(err) {
      console.log('Error: ', err);
      return response.status(400).json({
        message: "Erro ao buscar as mensagens"
      });
    }
  }
}

export { MessagesController };