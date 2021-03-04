import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRespository } from "../repositories/UserRepository";


class UserController {
  async create(request: Request, response: Response )  {
      const {name, email} = request.body;
      
      const userRespository = getCustomRepository(UserRespository );
      
const userAlreadyExist = await userRespository.findOne({
  email
});

if(userAlreadyExist){
  return response.status(400).json({
    error: "User already exists ! "
  });
}

const user = userRespository.create({
name, 
email
})
    await userRespository.save(user);


      return response.json(user);
  }
}
export { UserController };
