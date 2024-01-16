import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-skills-magic',
  templateUrl: './skills-magic.component.html',
  styleUrls: ['./skills-magic.component.css']
})
export class SkillsMagicComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  ngOnInit(): void {
  }

  depths = [0,1,2,3,4,5] ;
  skills = [
    {
      "depth": 0,
      "name_list": ["nothing", "Méditation", "nothing"],
      "skill_list": {
        "Méditation": {
          "hover_text": "Débloque la méditation.",
          "details_text": "Méditer une heure (au lieu de se reposer une heure) redonne 1 point d'énergie\
                          et 2 points d'énergie temporaire (au lieu de 2 points d'énergie).\
                          La méditation rapide permet d'obtenir 1 point d'énergie temporaire en 10 minutes.\
                          La méditation rapide ne peut être faite qu'une fois par heure.",
          "category": "MAG",
          "header": "true",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-purple",
        },
      },
    },
    {
      "depth": 1,
      "name_list": ["Concentrations", "Infatiguable", "Perturbation"],
      "skill_list": {
        "Concentrations": {
          "hover_text": "Permet de garder une manipulation active sur la durée.",
          "details_text": "(1) Débloque la possibilité de garder des sorts actifs sur plusieurs tours.\
                          (2) Diminue le coût des concentrations en énergie (chaque concentration coûte comme étant un niveau de moins).\
                          (3) Diminue le coût des concentrations en PA (la première concentration ne coûte pas de PA à maintenir).",
          "category": "MAG",
          "header": "false",
          "type": "Passif",
          "levels": "3",
          "colour": "btn-lightpurple",
        },
        "Infatiguable": {
          "hover_text": "Résister à la fatigue.",
          "details_text": "(1) Ignore tous les malus de magie liés à l'état fatigué (ne change pas les malus aux d12 et dégâts).\
                          (2) Augmente le maximum d'énergie de 2. En plus, les malus de fatigue aux d12 sont ignorés. \
                          (3) Augmente le maximum d'énergie temporaire de 2.",
          "category": "MAG",
          "header": "false",
          "type": "Passif",
          "levels": "3",
          "colour": "btn-lightpurple",
        },
        "Perturbation": {
          "hover_text": "Perturbe les mages ennemis et affaiblis leurs sorts, voire les annule.",
          "details_text": "(1) Débloque la réaction Perturber. Coûte 1PR, déclenchable quand un mage visible lance un sort. \
                              La victime de la perturbation lance un jet de sensitivité, et le perturbant lance un 1d12. \
                              Si le perturbant possède une magie en commun avec le sort lancé, alors il peut ajouter sa sensitivité aussi. \
                              La victime perd la moitié (arrondie bas) de la différence des jets (attaquant - défenseur, min 0) en nombre de d4 de son lancé de sort. \
                              Si ça lui fait passer sous les 4 dés minimum, alors le sort est perdu (le PA consommés mais sans effet).\
                              (si le sort est une magie pure, alors posséder cette magie pure en majeure ou mineure permet d'ajouter sa sensitivité en tant qu'attaquant. \
                              si le sort est une magie combinée, alors posséder cette magie combinée ou une des deux magie pures liées permet aussi d'ajouter sa sensitivité)\
                          (2) après une perturbation réussie, les dés perdus de la victime sont gagnés pour la prochaine manipulation\
                              (et ne comptent pas dans la puissance du sort pour le calcul du coût en énergie) \
                          (3) le perturbant peut maintenant ajouter sa sensitivité quel que soit l'élément du sort,\
                              et peut ajouter sa spécialisation dans les éléments qu'il/elle possède.",
          "category": "MAG",
          "header": "false",
          "type": "Réaction",
          "levels": "3",
          "colour": "btn-lightpurple",
        },
      },
    },
    {
      "depth": 2,
      "name_list": ["Infusion", "Régularité", "Warcaster"],
      "skill_list": {
        "Infusion": {
          "hover_text": "Permet d'infuser un élément dans un objet ou une personne.",
          "details_text": "(1) Débloque l'action Infuser (objet).\
                          (2) Débloque l'action Buffer (créature).",
          "category": "MAG",
          "header": "false",
          "type": "Action",
          "levels": "2",
          "colour": "btn-lightpurple",
        },
        "Régularité": {
          "hover_text": "Gagne de la régularité dans les lancés de magie.",
          "details_text": "(1) Ignore les crit 1 aux lancés de magie. Permet de relancer un jet de toucher magique pour 1PR ou 1PA ou 1 d'énergie, utilisable une fois par tour.\
                           (2) Le relancer du toucher n'est plus limité à une fois par tour. En plus, si le d12 du lancé affiche moins que 5, alors il peut être compté comme un 5.",
          "category": "MAG",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightpurple",
        },
        "Warcaster": {
          "hover_text": "Spécialise dans le combat magique au corps à corps.",
          "details_text": "(1) Permet de lancer des sorts au contact comme des attaque mêlées (et donc éviter les réactions de la cible).\
                           (2) Heavy armour caster : atténue les restrictions d'armures lourdes sur la magie (10 -> 15, 15 -> 20)",
          "category": "MAG",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightpurple",
        },
      },
    },
    {
      "depth": 3,
      "name_list": ["Conjuration", "Mastermind", "Réaction Magie"],
      "skill_list": {
        "Conjuration": {
          "hover_text": "Permet de  conjurer un élémentaire.",
          "details_text": "(1) Débloque l'action Conjurer. Choisir un élément pur possédé et invoque une créature de pure magie. (cf le tableau Conjuration).\
                           (2) Renforce les liens entre la source et l'élémentaire : la source peut voir et lancer des sorts à travers l'élémentaire.",
          "category": "MAG",
          "header": "false",
          "type": "Action",
          "levels": "2",
          "colour": "btn-lightpurple",
        },
        "Mastermind": {
          "hover_text": "Gagne plus de dés pour les manipulations.",
          "details_text": "(1) Gagne 1d1 à toute manipulation (qui ne compte pas dans le calcul de la puissance). Une fois par tour, peut dépenser 1PR pour gagner un autre 1d1.\
                           (2) Permet de consommer 1 d'énergie pour gagner 2d4 pour une manipulation. Cumulable. (ces dés comptent dans le calcul de la puissance).\
                           (3) Les extra dés (de cette compétence) ne comptent plus dans le calcul de la puissance, seuls ceux de la sensitivité comptent.",
          "category": "MAG",
          "header": "false",
          "type": "Passif",
          "levels": "3",
          "colour": "btn-lightpurple",
        },
        "Réaction Magie": {
          "hover_text": "Débloque la réaction Magie.",
          "details_text": "(1) Débloque la réaction Magie. Coûte 3PR.\
                           (2) La réaction Magie coûte 2PR. Gagne un trigger au choix permanent pour la magie (cf système > combat > préparer une action).",
          "category": "MAG",
          "header": "false",
          "type": "Réaction",
          "levels": "2",
          "colour": "btn-lightpurple",
        },
      },
    },
    {
      "depth": 4,
      "name_list": ["Créateur", "Effets de bord", "Détermination"],
      "skill_list": {
        "Créateur": {
          "hover_text": "Réduit le coût de création.",
          "details_text": "Réduit le coût de la création d'élément intangible (de 1) et le coût de garder sous contrôle un élément tangible (de 1 niveau).",
          "category": "MAG",
          "header": "false",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-lightpurple",
        },
        "Effets de bord": {
          "hover_text": "Permet de faire des dégâts quand une attaque magique rate.",
          "details_text": "(1) Débloque la réaction Effets de bord. \
                              Coûte 1PR, limité à une fois par tour global, déclenchable après qu'une créature esquive une attaque magique lancée par ce personnage. \
                              La victime reçoit une attaque magie dont les dégât sont calculés par Précision + Taille (au lieu de Efficacité + Taille).\
                           (2) La réaction n'est plus limitée à une fois par tour.",
          "category": "MAG",
          "header": "false",
          "type": "Réaction",
          "levels": "2",
          "colour": "btn-lightpurple",
        },
        "Détermination": {
          "hover_text": "Relancer des dés de magie.",
          "details_text": "(1) Une fois par manip, permet de relancer un dé.\
                           (2) Une fois par manip, permet de relancer autant de dés que voulu. (en plus du niveau 1).",
          "category": "MAG",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightpurple",
        },
      },
    },
    {
      "depth": 5,
      "name_list": ["nothing", "Supériorité", "nothing"],
      "skill_list": {
        "Supériorité": {
          "hover_text": "Gagne plus de dé à toute manipulation.",
          "details_text": "(1) Gagne 1d6 à toute manip.\
                           (2) Gagne 2d2 à toute manip.",
          "category": "MAG",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightpurple",
        },
      },
    },
  ];

  public give_skill(depth: number, skill_name: string) {
    return this.skills[depth].skill_list[skill_name] ;
  }

}
