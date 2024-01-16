import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-skills-attack',
  templateUrl: './skills-attack.component.html',
  styleUrls: ['./skills-attack.component.css']
})
export class SkillsAttackComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  ngOnInit(): void {
  }

  depths = [0,1,2,3,4] ;

  skills = [
    {
      "depth": 0,
      "name_list": ["nothing", "Armes de dextérité", "Armes de force"],
      "skill_list": {
        "nothing": {},
        "Armes de dextérité": {
          "hover_text": "Permet d'utiliser certaines armes avec sa Dextérité.",
          "details_text": "Débloque l'utilisation avec sa Dextérité des armes à distances et des armes non-contondantes à 1H.\
                           La moitié (arrondi bas) de la Force peut être ajoutée aux dégâts quand l'attaque est avec la Dex.",
          "category": "ATK",
          "header": "true",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-green",
        },
        "Armes de force": {
          "hover_text": "Permet d'utiliser certaines armes avec sa Force.",
          "details_text": "Débloque l'utilisation avec sa Force des armes de mêlée.\
                           La moitié (arrondi bas) de la Dextérité peut être ajoutée au toucher quand l'attaque est avec sa Force.",
          "category": "ATK",
          "header": "true",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-red",
        },
      },
    },
    {
      "depth": 1,
      "name_list": ["Viser", "Dual Wield", "Duéliste", "Cleave"],
      "skill_list": {
        "Viser": {
          "hover_text": "Debloque l'action Viser.",
          "details_text": "(1) Viser coûte 1 PA, peut être utilisé jusqu'à 3 fois par tour, et apporte un +1 au toucher (par PA consommé, max +3)\
                               à la prochaine attaque avec une arme à distance. Requiert concentration. \
                           (2) Ne requiert plus la concentration, n'est plus limité à 3 fois par tour, et peut s'accumuler au delà de +3.",
          "category": "ATK",
          "header": "false",
          "type": "Action",
          "levels": "2",
          "colour": "btn-lightgreen",
        },
        "Dual Wield": {
          "hover_text": "Améliore les attaques off hand.",
          "details_text": "(1) Débloque les attaques moyennes avec l'arme off-hand.\
                               L'attaque off-hand coûte 1PA de moins (min 1PA) que normalement si elle suit une attaque avec l'arme de la main principale. \
                           (2) Gagne +1 esquive tant qu'une arme est dans chaque main. Une fois par tour, l'attaque off hand coûte 0PA.",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightorange",
        },
        "Duéliste": {
          "hover_text": "Spécialisation dans l'attaque à 1H.",
          "details_text": "(1) Gagne un +1 au toucher tant que l'arme équippée est tenue à 1H. \
                           (2) Gagne un +1 d'esquive tant qu'une main est vide.",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightorange",
        },
        "Cleave": {
          "hover_text": "Débloque l'action Cleave.",
          "details_text": "Consomme 4PA pour faire une attaque lourde, et vise 3 cases consécutives within reach.\
                           Un jet d'attaque et de dégâts pour l'ensemble des cibles.\
                           Utilisable tel quel une fois par combat, les utilisations suivantes nécessitent de consommer 1 point d'énergie supplémentaire.",
          "category": "ATK",
          "header": "false",
          "type": "Action",
          "levels": "1",
          "colour": "btn-lightred",
        },
      },
    },
    {
      "depth": 2,
      "name_list": ["Sniper", "Distraction", "Parer", "Charge"],
      "skill_list": {
        "Sniper": {
          "hover_text": "Atténue les malus liés au couvert et aux lignes de vue.",
          "details_text": "Les -1 et -2 sont annulés, et les -3 deviennent des -1. \
                           Débloque aussi l'option de tirer en cloche. Cf règles pour tirer en cloche.",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-lightgreen",
        },
        "Distraction": {
          "hover_text": "Distrait les ennemis et gagne des avantages contre les ennemis occupés.",
          "details_text": "(1) Si touche, ennemi est distrait (-2 esquive pour un tour global). \
                           (2) Gagne +1 au toucher contre ennemis occupés. \
                           (3) Gagne +2 au toucher contre ennemis occupés (remplace niveau 2), et ne provoque plus d'opportunité pour les ennemis occupés.",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "3",
          "colour": "btn-lightorange",
        },
        "Parer": {
          "hover_text": "Débloque la réaction Parer et la réaction Contre-Attaque.",
          "details_text": "(1) Débloque la réaction Parer : 1PR pour gagner +1 esquive pour un tour de créature. \
                           (2) Parer devient 1PR pour gagner +2 esquive pour un tour de créature. \
                           (3) Contre-attaque : débloque le trigger 'après avoir esquivé une attaque'. Cette opportunité ne peut être utilisée que pour attaquer. \
                               La réaction attaque coûte 1PR de moins (min 0PR) si l'attaque a été parée.",
          "category": "ATK",
          "header": "false",
          "type": "Réaction",
          "levels": "3",
          "colour": "btn-lightorange",
        },
        "Charge": {
          "hover_text": "Débloque l'action Charger.",
          "details_text": "(1) Débloque l'action Charger. Se déplace jusqu'à 3 cases avant d'attaquer. Coûte les mêmes PA que l'attaque seule. \
                               Si 2 cases ou plus ont été traversées et que l'attaque touche, l'ennemi trébuche (donc continuation). \
                               Utilisable tel quel une fois par tour, les utilisations suivantes nécessitent de consommer 1 point d'énergie supplémentaire.\
                           (2) Si 2+ cases traversées, gagne +3/+1 à l'attaque chargée et +2 au touché de la continuation.",
          "category": "ATK",
          "header": "false",
          "type": "Action",
          "levels": "2",
          "colour": "btn-lightred",
        },
      },
    },
    {
      "depth": 3,
      "name_list": ["Double flèche", "Angle mort", "Frontliner", "Mage Slayer"],
      "skill_list": {
        "Double flèche": {
          "hover_text": "Débloque l'action Double flèche.",
          "details_text": "(1) Débloque l'option de tirer deux flèches en même temps. Un lancé, -2 au toucher, doit viser deux créatures différentes dans un angle de 90°. \
                           (2) Le malus de -2 au toucher disparaît pour toucher deux créatures différentes, et devient un -1 pour viser deux fois la même créature.",
          "category": "ATK",
          "header": "false",
          "type": "Action",
          "levels": "2",
          "colour": "btn-lightgreen",
        },
        "Angle mort": {
          "hover_text": "Gagne des avantages contre les ennemis occupés.",
          "details_text": "Gagne +1 au dégât contre les ennemis occupés et +3 au touché si caché par un quelconque couvert.",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-lightorange",
        },
        "Frontliner": {
          "hover_text": "Déclenche moins d'opportunité.",
          "details_text": "(1) Les attaques mêlées ne déclenchent plus d'opportunités des ennemis au contact, et les attaques en réactions gagnent un +2 au toucher. \
                           (2) Une fois par tour, après avoir effectué une attaque, gagne 1PA de mouvement qui ne déclenche pas d'opportunité.",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightorange",
        },
        "Mage Slayer": {
          "hover_text": "Spécialisation contre les mages.",
          "details_text": "Au contact d'un ennemi qui lance un sort, l'opportunité d'attaquer est gagnée avant que le sort finisse (au lieu d'après). \
                           Si l'attaque touche et fait des dégâts, le sort est perturbé et le mage perd autant de dés que de dégâts subis.",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-lightred",
        },
      },
    },
    {
      "depth": 4,
      "name_list": ["Critique étendu", "Aggressif", "Présences", "Fort"],
      "skill_list": {
        "Critique étendu": {
          "hover_text": "Permet de faire plus de coups critiques.",
          "details_text": "Si le jet d'attaque est supérieur à l'esquive de 5 ou plus, alors l'attaque est comptée comme un coup critique (et donc ignore la resistance naturelle).",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-lightgreen",
        },
        "Aggressif": {
          "hover_text": "Gagne des PA pour attaquer.",
          "details_text": "(1) Chaque tour, gagne 1PA utilisable uniquement pour attaquer avec une arme. \
                           (2) Débloque l'action Surge. Coûte 0PA et 2 d'énergie, gagne 4PA. \
                           (3) Le coût de Surge passe à 1 d'énergie. Une fois par jour, peut utiliser Surge gratuitement.",
          "category": "ATK",
          "header": "false",
          "type": "Action",
          "levels": "3",
          "colour": "btn-lightorange",
        },
        "Présences": {
          "hover_text": "Débloque les Présences.",
          "details_text": "(1) Débloque les actions Présence Imposante et Présence Discrète. Ces actions sont activable au début d'un combat et sont mutuellement exclusives. \
                              Présence Imposante : tout ennemi attaquant qqn d'autre que la Présence Imposante prend un -1 au toucher. \
                              Présence Discrète : tout ennemi attaquant la Présence Discrète prend un -2 au toucher. \
                           (2) Débloque l'action Inspiration. \
                              Coûte 0PA. Activable une fois par tour. Cible un allié (autre que soi-même) et lui donne +1 au toucher pour un tour global. \
                           (3) Gagne le passif Vengeance. \
                              Présence Imposante : gagne un +3/+1 contre les ennemis ayant attaqué la Présence Imposante. \
                              Présence Discrète : gagne un +3/+1 contre les ennemis ayant attaqué quelqu'un d'autre que la Présence Discrète.",
          "category": "ATK",
          "header": "false",
          "type": "Action & Passif",
          "levels": "3",
          "colour": "btn-lightorange",
        },
        "Fort": {
          "hover_text": "Fait plus de dégâts.",
          "details_text": "(1) Gagne +1 de dégâts sur attaques de mêlées. Si touche mais dégâts = 0, alors dégâts = 1. Si l'attaque fait 5 dégâts ou plus, alors continuation.\
                           (2) Peut efficacement tenir à 1H une arme à 2H.",
          "category": "ATK",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightred",
        },
      },
    },
  ];

  public give_skill(depth: number, skill_name: string) {
    return this.skills[depth].skill_list[skill_name] ;
  }


}
