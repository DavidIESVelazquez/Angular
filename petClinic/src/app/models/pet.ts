import { Owner } from "./owner";
import { Visit } from "./visit";
import { PetType } from "./pet-type";

export interface Pet {
  id: number;
  name: string;
  birth_date: Date;
  type_id: PetType;
  owner: Owner;
  visits: Visit[];
}
