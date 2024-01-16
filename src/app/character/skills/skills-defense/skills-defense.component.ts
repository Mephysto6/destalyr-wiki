import { Component, OnInit } from '@angular/core';
import { PageLanguageService } from "../../../page-language.service";

@Component({
  selector: 'app-skills-defense',
  templateUrl: './skills-defense.component.html',
  styleUrls: ['./skills-defense.component.css']
})
export class SkillsDefenseComponent implements OnInit {

  constructor(public langue: PageLanguageService) {
  }
  ngOnInit(): void {
  }

  depths = [0,1,2,3] ;

  skills = [
    {
      "depth": 0,
      "name_list": ["nothing", "nothing", "Armures légères"],
      "skill_list": {
        "nothing": {},
        "Armures légères": {
          "hover_text": "Permet d'utiliser les armures légères.",
          "details_text": "Débloque l'utilisation d'armure légères.",
          "category": "DEF",
          "header": "true",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-blue",
        },
      },
    },
    {
      "depth": 1,
      "name_list": ["nothing", "Armures lourdes", "Mouvement", "Esquive Snowball"],
      "skill_list": {
        "nothing": {},
        "Armures lourdes": {
          "hover_text": "Permet d'utiliser les armures lourdes.",
          "details_text": "Débloque l'utilisation d'armure lourdes.",
          "category": "DEF",
          "header": "true",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-teal",
        },
        "Mouvement": {
          "hover_text": "Gagne 1 PA de mouvement.",
          "details_text": "Au début de son tour, gagne 1PA qui ne peut être utilisé que pour le mouvement.\
                           Débloque aussi l'action Sprinter, utilisable une fois par tour qui permet de se déplacer de 3 cases.\
                           Le PA additionel de mouvement peut être consommé pour gagner un +1 d'esquive pour un tour global.",
          "category": "DEF",
          "header": "false",
          "type": "Action & Passif",
          "levels": "1",
          "colour": "btn-lightblue",
        },
        "Esquive Snowball": {
          "hover_text": "Gagne des bénéfices à réussir une esquive.",
          "details_text": "Si le jet d'esquive est supérieur à l'attaque de 5 ou plus, alors gagne +2 PR par tour global, et +1 esquive cumulable.",
          "category": "DEF",
          "header": "false",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-lightblue",
        },
      },
    },
    {
      "depth": 2,
      "name_list": ["Bloquer", "Défense", "Echange", "Dodge"],
      "skill_list": {
        "Bloquer": {
          "hover_text": "Utiliser son bouclier pour gagner de la défense.",
          "details_text": "(1) (requiert bouclier) Débloque la réaction Bloquer. 1 PR pour gagner +1 défense pour un tour de créature.\
                           (2) Gagne un +1 de défense tant qu'un bouclier est équipé.",
          "category": "DEF",
          "header": "false",
          "type": "Réaction & Passif",
          "levels": "2",
          "colour": "btn-lightteal",
        },
        "Défense": {
          "hover_text": "Une action pour gagner de la défense.",
          "details_text": "(1) Débloque l'action Défendre. 2PA pour gagner +1 esquive et +1 défense pour un tour global.\
                           (2) Le coût devient 1PA.",
          "category": "DEF",
          "header": "false",
          "type": "Action",
          "levels": "2",
          "colour": "btn-lightteal",
        },
        "Echange": {
          "hover_text": "Prendre une attaque à la place d'un allié.",
          "details_text": "Débloque la réaction Echanger. 2PR pour échanger de place physiquement avec un allié (consentant) ciblé par une attaque (mêlée, distance ou magique).\
                           Le jet d'esquive est considéré comme un 1 au d12. Utilisable une fois par tour de créature.\
                           Impossible à utiliser si l'attaque englobe les 2 créatures qui veulent échanger.",
          "category": "DEF",
          "header": "false",
          "type": "Réaction",
          "levels": "1",
          "colour": "btn-lightblue",
        },
        "Dodge": {
          "hover_text": "Plus d'esquive.",
          "details_text": "(1) Débloque l'action Dodge. 2PA pour gagner +2 esquive pour un tour global.\
                           (2) Gagne un +1 esquive tant que le personnage ne porte pas d'armure lourde.",
          "category": "DEF",
          "header": "false",
          "type": "Action & Passif",
          "levels": "2",
          "colour": "btn-lightblue",
        },
      },
    },
    {
      "depth": 3,
      "name_list": ["nothing", "Résilient", "Armure contre magie", "Réactivité"],
      "skill_list": {
        "Résilient": {
          "hover_text": "Résister à la douleur.",
          "details_text": "Augmente le maximum de douleur de 2.",
          "category": "DEF",
          "header": "false",
          "type": "Passif",
          "levels": "1",
          "colour": "btn-lightteal",
        },
        "Armure contre magie": {
          "hover_text": "Gagner de la défense contre la magie.",
          "details_text": " Certains points de l'armure portée s'ajoutent au calcul de la défense face aux dégâts magiques.\
                            On ne peut pas ajouter plus de points que la quantité de défense donnée par l'armure.\
                            (1) Jusqu'à 2 points d'armure sont ajoutés à la défense magique.\
                            (2) Jusqu'à 4 points.",
          "category": "DEF",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightblue",
        },
        "Réactivité": {
          "hover_text": "Regagne des PA si tous les PR ne sont pas consommé.",
          "details_text": "(1) Si le tour commence avec 2PR (ou plus), gagne 1PA.\
                           (2) Gagne un nouveau trigger permanent au choix\
                            (cf système > combat > préparer une action ).",
          "category": "DEF",
          "header": "false",
          "type": "Passif",
          "levels": "2",
          "colour": "btn-lightblue",
        },
      },
    },

  ];

  public give_skill(depth: number, skill_name: string) {
    return this.skills[depth].skill_list[skill_name] ;
  }

}
