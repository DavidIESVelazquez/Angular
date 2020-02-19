import { Owner } from "./owner";
import { Visit } from "./visit";
import { PetType } from "./pet-type";

export interface Pet {
  id: number;
  name: string;
  birthDate: Date;
  type: PetType;
  owner: Owner;
  visits: Visit[];
}
