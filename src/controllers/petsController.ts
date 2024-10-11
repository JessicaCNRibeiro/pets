import { Request, Response } from "express";
import { PetsService } from "../services/petsService";

const service = new PetsService();

export const listPets =  async (req: Request, res: Response) => {
  const pets = await service.fetchPets();
  res.status(200).json(await service.fetchPets());
};

export const createPet = async(req: Request, res: Response) => {
const result = await service.createPet(req.body);
res.status(201).json(createdPet);
};

export const getPetById = async(req: Request, res:Response) => {
  const petId = parseInt(req.params.petId);
  const pet = await service

 };

export const updatePetById = async(req: Request, res: Response) => {
  const petId = parseInt(req.params.petId);
  await service.updatePet()
};

export const deletePetById = async(req: Request, res: Response) => {
  
};