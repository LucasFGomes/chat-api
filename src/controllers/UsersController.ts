import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController { 
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    console.log('email: ', email)

    const usersService = new UsersService();

    try {
      const user = await usersService.create(email);
  
      return response.json(user);
    } catch(err) {
      console.log('err: ', err)
      return response.status(400).json({
        message: "Erro ao cadastrar o usuário"
      })
    }

  }
}

export { UsersController };