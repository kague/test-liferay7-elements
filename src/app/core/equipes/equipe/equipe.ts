import { Joueur } from '../../joueurs/joueur/joueur';

export class Equipe {
  id: number;
  nom: string;
  logo: string;
  joueurs: Joueur[] = [];
}
