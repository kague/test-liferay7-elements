import { Equipe } from '../../equipes/equipe/equipe';

export class Joueur {
  id: number;
  surnom: string;
  equipes: Equipe[] = [];
}
