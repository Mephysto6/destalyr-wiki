import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";
import { SkillButtonComponent } from '../skill-button/skill-button.component';

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

  public hovertext(skill_name: string) {
    if (skill_name == "Armes de dextérité") {
      return "Permet d'utiliser certaines armes avec sa Dextérité."
    }
    if (skill_name == "Armes de force") {
      return "Permet d'utiliser certaines armes avec sa Force."
    }
    // depth : 1
    if (skill_name == "Viser") {
      return "Debloque l'action Viser."
    }
    if (skill_name == "Dual Wield") {
      return "Améliore les attaques off hand."
    }
    if (skill_name == "Duéliste") {
      return "Spécialisation dans l'attaque à 1H."
    }
    if (skill_name == "Cleave") {
      return "Débloque l'action Cleave."
    }
    // depth : 2
    if (skill_name == "Sniper") {
      return "Atténue les malus liés au couvert et aux lignes de vue."
    }
    if (skill_name == "Distraction") {
      return "Distrait les ennemis et gagne des avantages contre les ennemis occupés"
    }
    if (skill_name == "Parer") {
      return "Débloque la réaction Parer et la réaction Contre-Attaque"
    }
    if (skill_name == "Charge") {
      return "Débloque l'action charger."
    }
    // depth : 3
    if (skill_name == "Double flèche") {
      return "Débloque l'action Double flèche."
    }
    if (skill_name == "Angle mort") {
      return "Gagne des avantages contre les ennemis occupés"
    }
    if (skill_name == "Frontliner") {
      return "Déclanche moins d'opportunité."
    }
    if (skill_name == "Mage Slayer") {
      return "Spécialisation contre les mages."
    }
    // depth : 4
    if (skill_name == "Critique étendu") {
      return "Permet de faire plus de coups critiques."
    }
    if (skill_name == "Aggressif") {
      return "Gagne des PA pour attaquer."
    }
    if (skill_name == "Présence") {
      return "Débloque les Présences."
    }
    if (skill_name == "Fort") {
      return "Fait plus de dégâts."
    }
  }

  public details(skill_name: string) {
    if (skill_name == "Armes de dextérité") {
      return "Débloque l'utilisation avec sa Dextérité des armes à distances et des armes non-contondantes à 1H. La moitié (arrondi bas) de la Force peut être ajoutée aux dégâts quand l'attaque est avec la Dex."
    }
    if (skill_name == "Armes de force") {
      return "Débloque l'utilisation avec sa Force des armes de mêlée. La moitié (arrondi bas) de la Dextérité peut être ajoutée au toucher quand l'attaque est avec sa Force."
    }
    // depth : 1
    if (skill_name == "Viser") {
      return "(1) Viser coûte 1 PA, peut être utilisé jusqu'à 3 fois par tour, et apporte un +1 au toucher (par PA consommé, max +3) à la prochaine attaque avec une arme à distance. Requiert concentration. \
              (2) Ne requiert plus la concentration, n'est plus limité à 3 fois par tour, et peut s'accumuler au delà de +3. "
    }
    if (skill_name == "Dual Wield") {
      return "(1) Débloque les attaques moyennes avec l'arme off-hand. L'attaque off-hand coûte 1PA de moins (min 1PA) que normalement si elle suit une attaque avec l'arme de la main principale. \
              (2) Gagne +1 esquive permanent avec une arme dans chaque main. Une fois par tour, l'attaque off hand coûte 0PA."
    }
    if (skill_name == "Duéliste") {
      return "(1) Si seulement une des deux mains porte une arme, alors gagne un +1 au toucher. \
              (2) Si une arme dans une main et l'autre est vide, alors gagne un +1 esquive permanent."
    }
    if (skill_name == "Cleave") {
      return "Consomme 4PA pour faire une attaque lourde, et vise 3 cases consécutives within reach.\
              Un jet d'attaque et de dégâts pour l'ensemble des cibles.\
              Utilisable tel quel une fois par combat, les utilisations suivantes nécessitent de prendre 1 fatigue supplémentaire."
    }
    // depth : 2
    if (skill_name == "Sniper") {
      return "Les -1 et -2 sont annulés, et les -3 deviennent des -1. \
              Débloque aussi l'option de tirer en cloche. Cf règles pour tirer en cloche."
    }
    if (skill_name == "Distraction") {
      return "(1) Si touche, ennemi est distrait (-2 esquive pour un tour global). \
              (2) Gagne +1 au toucher contre ennemis occupés. \
              (3) Gagne +2 au toucher contre ennemis occupés (remplace niveau 2), et ne provoque plus d'opportunité pour les ennemis occupés."
    }
    if (skill_name == "Parer") {
      return "(1) Débloque la réaction Parer : 1PR pour gagner +1 esquive pour un tour de créature. \
              (2) Parer devient 1PR pour gagner +2 esquive pour un tour de créature. \
              (3) Contre-attaque : débloque le trigger 'après avoir esquivé une attaque'. cette opportunité ne peut être utilisée que pour attaquer. \
                  La réaction attaque coûte 1PR de moins (min 0PR) si l'esquive a été parée."
    }
    if (skill_name == "Charge") {
      return "(1) Débloque l'action charger. Se déplace jusqu'à 3 cases avant d'attaquer. Coûte même PA que l'attaque seule. \
                  Si 2 cases ou plus ont été traversées et que l'attaque touche, l'énnemis trébuche (donc continuation). \
                  Utilisable tel quel une fois par tour, les utilisations suivantes nécessitent de prendre 1 fatigue supplémentaire.\
              (2) Si 2+ cases traversées, gagne +3/+1 à l'attaque chargée et +2 au touché de la continuation."
    }
    // depth : 3
    if (skill_name == "Double flèche") {
      return "(1) Débloque l'option de tirer deux flèches en même temps. Un lancé, -2 au toucher, doit viser deux créatures différentes dans un angle de 90°. \
              (2) Le malus de -2 au toucher disparaît pour toucher deux créatures différentes, et devient un -1 pour viser deux fois la même créature."
    }
    if (skill_name == "Angle mort") {
      return "Gagne +1 au dégât contre les ennemis occupés et +3 au touché si caché par un quelconque couvert"
    }
    if (skill_name == "Frontliner") {
      return "(1) Les attaques mêlées ne déclanchent plus d'opportunités des ennemis au contact, et les attaques en réactions gagnent un +2 au toucher. \
              (2) Une fois par tour, après avoir effectué une attaque, gagne 1PA de mouvement qui ne déclanche pas d'opportunité."
    }
    if (skill_name == "Mage Slayer") {
      return "Au contact d'un ennemi qui lance un sort, l'opportunité d'attaquer est gagnée avant que le sort finnisse (au lieu d'après). \
              Si l'attaque touche et fait des dégâts, le sort est perturbé et le mage perd autant de dés que de dégâts subis."
    }
    // depth : 4
    if (skill_name == "Critique étendu") {
      return "Si le jet d'attaque est supérieur à l'esquive de 5 ou plus, alors l'attaque est comptée comme un coup critique (et donc ignore la resistance naturelle)."
    }
    if (skill_name == "Aggressif") {
      return "(1) Chaque tour, gagne 1PA utilisable uniquement pour attaquer avec une arme. \
              (2) Débloque l'action Surge. Coûte 0PA et 2 fatigue, gagne 4PA. \
              (3) Le coût de Surge passe à 1 fatigue. Une fois par jour, peut utiliser Surge gratuitement. "
    }
    if (skill_name == "Présence") {
      return "(1) Débloque les actions Présence Imposante et Présence Discrète. Ces actions sont activable au début d'un combat et sont mutuellement exclusives. \
                    Présence Imposante : tout ennemis attaquant qqn d'autre que la Présence Imposante prend un -1 au toucher. \
                    Présence Discrète : tout ennemis attaquant la Présence Discrète prend un -2 au toucher. \
              (2) Débloque l'action Inspiration. \
                    Coûte 0PA. Activable une fois par tour. Cible un allié (autre que soi-même) et lui donne +1 au toucher pour un tour global. \
              (3) Gagne le passif Vengeance. \
                    Présence Imposante : gagne un +3/+1 contre les ennemis ayant attaqué la Présence Imposante. \
                    Présence Discrète : gagne un +3/+1 contre les ennemis ayant attaqué quelqu'un d'autre que la Présence Discrète."
    }
    if (skill_name == "Fort") {
      return " Gagne +1 de dégâts sur attaques de mêlées. Si touche mais dégâts = 0, alors dégâts = 1. Si l'attaque fait 5 dégâts ou plus, alors continuation."
    }
  }

  public show_skill(skill_name: string) {

  }
}
