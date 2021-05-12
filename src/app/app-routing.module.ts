import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomePageComponent } from './home-page/home-page.component';
import { LoreComponent } from './lore/lore.component';
import { SystemComponent } from './system/system.component';
import { CharacterComponent } from './character/character.component';
import { ColoursOfMagicComponent } from './colours-of-magic/colours-of-magic.component';
import { MoreRulesComponent } from './more-rules/more-rules.component';

import { HistoryComponent } from './lore/history/history.component';
import { ReligionComponent } from './lore/religion/religion.component';
import { RacesComponent } from './lore/races/races.component';
import { MagicLoreComponent } from './lore/magic-lore/magic-lore.component';
import { GeographyComponent } from './lore/geography/geography.component';
import { CitadelleComponent } from './lore/citadelle/citadelle.component';
import { ProfessionsComponent } from './lore/professions/professions.component';
import { LanguagesComponent } from './lore/languages/languages.component';

import { WeaponsComponent } from './system/weapons/weapons.component';
import { ArmorsComponent } from './system/armors/armors.component';
import { GaugesComponent } from './system/gauges/gauges.component';
import { AttackingComponent } from './system/attacking/attacking.component';
import { CombatComponent } from './system/combat/combat.component';
import { MagicSystemComponent } from './system/magic-system/magic-system.component';
import { HealingComponent } from './system/healing/healing.component';
import { StatesComponent } from './system/states/states.component';
import { SystemExplanationComponent } from './system/system-explanation/system-explanation.component';

import { CreationComponent } from './character/creation/creation.component';
import { MagicCharacterComponent } from './character/magic-character/magic-character.component';
import { StatsComponent } from './character/stats/stats.component';
import { SkillsComponent } from './character/skills/skills.component';
import { KnowledgeComponent } from './character/knowledge/knowledge.component';
import { DyingComponent } from './character/dying/dying.component';

import { TheElvenTimeComponent } from './lore/history/the-elven-time/the-elven-time.component';
import { TheElvenWarComponent } from './lore/history/the-elven-war/the-elven-war.component';
import { TheEmergenceComponent } from './lore/history/the-emergence/the-emergence.component';
import { TheLyuneCivilWarComponent } from './lore/history/the-lyune-civil-war/the-lyune-civil-war.component';
import { TheDarkElvesStabilisationComponent } from './lore/history/the-dark-elves-stabilisation/the-dark-elves-stabilisation.component';
import { TheNewWarComponent } from './lore/history/the-new-war/the-new-war.component';

import { NekaliComponent } from './lore/races/nekali/nekali.component';
import { FlyhnComponent } from './lore/races/flyhn/flyhn.component';
import { WoodElfComponent } from './lore/races/wood-elf/wood-elf.component';
import { EtrekComponent } from './lore/races/etrek/etrek.component';
import { DarkElfComponent } from './lore/races/dark-elf/dark-elf.component';
import { LyuneComponent } from './lore/races/lyune/lyune.component';

import { MagicSystemExplanationComponent } from './system/magic-system/magic-system-explanation/magic-system-explanation.component';
import { MagicCreationComponent } from './system/magic-system/magic-creation/magic-creation.component';
import { MagicManipulationComponent } from './system/magic-system/magic-manipulation/magic-manipulation.component';
import { MagicVisionComponent } from './system/magic-system/magic-vision/magic-vision.component';
import { MagicBallparksComponent } from './system/magic-system/magic-ballparks/magic-ballparks.component';
import { MagicGroupComponent } from './system/magic-system/magic-group/magic-group.component';

import { SkillsAttackComponent } from './character/skills/skills-attack/skills-attack.component';
import { SkillsDefenseComponent } from './character/skills/skills-defense/skills-defense.component';
import { SkillsMagicComponent } from './character/skills/skills-magic/skills-magic.component';

import { MagicElementalComponent } from './lore/magic-lore/magic-elemental/magic-elemental.component';
import { MagicRunicComponent } from './lore/magic-lore/magic-runic/magic-runic.component';
import { MetalComponent } from './lore/magic-lore/metal/metal.component';
import { MagicColoursComponent } from './lore/magic-lore/magic-colours/magic-colours.component';

import { MagicUsesComponent } from './colours-of-magic/magic-uses/magic-uses.component';
import { MindMagicComponent } from './colours-of-magic/mind-magic/mind-magic.component';
import { PurificationMagicComponent } from './colours-of-magic/purification-magic/purification-magic.component';

import { ActionFlowchartComponent } from './more-rules/action-flowchart/action-flowchart.component';

import { HittingComponent } from './system/attacking/hitting/hitting.component';
import { DamagesComponent } from './system/attacking/damages/damages.component';
import { TargetingComponent } from './system/attacking/targeting/targeting.component';

import { MindReadingComponent } from './colours-of-magic/mind-magic/mind-reading/mind-reading.component';
import { MindSlowingComponent } from './colours-of-magic/mind-magic/mind-slowing/mind-slowing.component';
import { MindHallucinatingComponent } from './colours-of-magic/mind-magic/mind-hallucinating/mind-hallucinating.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomePageComponent },
  {
    path: 'lore',
    component: LoreComponent,
    children: [
      {
        path: 'history',
        component: HistoryComponent,
        children: [
          { path: 'the-elven-time', component: TheElvenTimeComponent },
          { path: 'the-elven-war', component: TheElvenWarComponent },
          { path: 'the-emergence', component: TheEmergenceComponent },
          { path: 'the-lyune-civil-war', component: TheLyuneCivilWarComponent },
          { path: 'the-dark-elves-stabilisation', component: TheDarkElvesStabilisationComponent },
          { path: 'the-new-war', component: TheNewWarComponent },
        ]
      },
      { path: 'religion', component: ReligionComponent },
      {
        path: 'races',
        component: RacesComponent,
        children: [
          { path: 'nekali', component: NekaliComponent },
          { path: 'flyhn', component: FlyhnComponent },
          { path: 'wood-elf', component: WoodElfComponent },
          { path: 'etrek', component: EtrekComponent },
          { path: 'dark-elf', component: DarkElfComponent },
          { path: 'lyune', component: LyuneComponent },
        ]
      },
      {
        path: 'magic',
        component: MagicLoreComponent,
        children: [
          { path: 'elemental', component: MagicElementalComponent },
          { path: 'runic', component: MagicRunicComponent },
          { path: 'materials', component: MetalComponent },
          { path: 'colours', component: MagicColoursComponent },
        ]
      },
      { path: 'geography', component: GeographyComponent },
      { path: 'citadelle', component: CitadelleComponent },
      { path: 'professions', component: ProfessionsComponent },
      { path: 'languages', component: LanguagesComponent },
    ]
  },
  {
    path: 'system',
    component: SystemComponent,
    children: [
      { path: 'weapons', component: WeaponsComponent },
      { path: 'armors', component: ArmorsComponent },
      { path: 'gauges', component: GaugesComponent },
      { 
        path: 'attacking',
        component: AttackingComponent,
        children: [
          { path: 'hitting', component: HittingComponent },
          { path: 'damages', component: DamagesComponent },
          { path: 'targeting', component: TargetingComponent },
        ]
      },
      { path: 'combat', component: CombatComponent },
      {
        path: 'magic',
        component: MagicSystemComponent,
        children: [
          { path: 'explanation', component: MagicSystemExplanationComponent },
          { path: 'creation', component: MagicCreationComponent },
          { path: 'manipulation', component: MagicManipulationComponent },
          { path: 'vision', component: MagicVisionComponent },
          { path: 'ballparks', component: MagicBallparksComponent },
          { path: 'group', component: MagicGroupComponent },
        ]
      },
      { path: 'healing', component: HealingComponent },
      { path: 'states', component: StatesComponent },
      { path: 'explanation', component: SystemExplanationComponent },
    ]
  },
  {
    path: 'character',
    component: CharacterComponent,
    children: [
      { path: 'creation', component: CreationComponent },
      { path: 'magic', component: MagicCharacterComponent },
      { path: 'stats', component: StatsComponent },
      {
        path: 'skills',
        component: SkillsComponent,
        children: [
          { path: 'attack', component: SkillsAttackComponent },
          { path: 'defense', component: SkillsDefenseComponent },
          { path: 'magic', component: SkillsMagicComponent },
        ]
      },
      { path: 'knowledge', component: KnowledgeComponent },
      { path: 'dying', component: DyingComponent },
    ]
  },
  {
    path: 'colours-of-magic',
    component: ColoursOfMagicComponent,
    children: [
      { path: 'uses', component: MagicUsesComponent },
      {
        path: 'mind',
        component: MindMagicComponent,
        children: [
          { path: 'reading', component: MindReadingComponent },
          { path: 'slowing', component: MindSlowingComponent },
          { path: 'hallucinating', component: MindHallucinatingComponent },
        ]
      },
      { path: 'purification', component: PurificationMagicComponent },
    ]
  },
  {
    path: 'more-rules',
    component: MoreRulesComponent,
    children: [
      { path: 'action-flowchart', component: ActionFlowchartComponent },
      { path: 'mind-magic', component: MindMagicComponent },
      { path: 'purification-magic', component: PurificationMagicComponent },
    ]
  },
  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
