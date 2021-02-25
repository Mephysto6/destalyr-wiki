import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomePageComponent } from './home-page/home-page.component';
import { LoreComponent } from './lore/lore.component';
import { SystemComponent } from './system/system.component';
import { CharacterComponent } from './character/character.component';

import { HistoryComponent } from './lore/history/history.component';
import { ReligionComponent } from './lore/religion/religion.component';
import { RacesComponent } from './lore/races/races.component';
import { MagicLoreComponent } from './lore/magic-lore/magic-lore.component';
import { GeographyComponent } from './lore/geography/geography.component';
import { CitadelleComponent } from './lore/citadelle/citadelle.component';

import { WeaponsComponent } from './system/weapons/weapons.component';
import { ArmorsComponent } from './system/armors/armors.component';
import { GaugesComponent } from './system/gauges/gauges.component';
import { AttackingComponent } from './system/attacking/attacking.component';
import { CombatComponent } from './system/combat/combat.component';
import { MagicSystemComponent } from './system/magic-system/magic-system.component';
import { HealingComponent } from './system/healing/healing.component';
import { StatesComponent } from './system/states/states.component';

import { CreationComponent } from './character/creation/creation.component';
import { MagicCharacterComponent } from './character/magic-character/magic-character.component';
import { StatsComponent } from './character/stats/stats.component';
import { SkillsComponent } from './character/skills/skills.component';
import { KnowledgeComponent } from './character/knowledge/knowledge.component';

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

import { MagicCreationComponent } from './system/magic-system/magic-creation/magic-creation.component';
import { MagicManipulationComponent } from './system/magic-system/magic-manipulation/magic-manipulation.component';
import { MagicBallparksComponent } from './system/magic-system/magic-ballparks/magic-ballparks.component';
import { MagicGroupComponent } from './system/magic-system/magic-group/magic-group.component';

import { SkillsAttackComponent } from './character/skills/skills-attack/skills-attack.component';
import { SkillsDefenseComponent } from './character/skills/skills-defense/skills-defense.component';
import { SkillsMagicComponent } from './character/skills/skills-magic/skills-magic.component';

import { MagicElementalComponent } from './lore/magic-lore//magic-elemental/magic-elemental.component';
import { MagicRunicComponent } from './lore/magic-lore//magic-runic/magic-runic.component';
import { MagicUsesComponent } from './lore/magic-lore//magic-uses/magic-uses.component';


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
          { path: 'uses', component: MagicUsesComponent },
        ]
      },
      { path: 'geography', component: GeographyComponent },
      { path: 'citadelle', component: CitadelleComponent },
    ]
  },
  {
    path: 'system',
    component: SystemComponent,
    children: [
      { path: 'weapons', component: WeaponsComponent },
      { path: 'armors', component: ArmorsComponent },
      { path: 'gauges', component: GaugesComponent },
      { path: 'attacking', component: AttackingComponent },
      { path: 'combat', component: CombatComponent },
      {
        path: 'magic',
        component: MagicSystemComponent,
        children: [
          { path: 'creation', component: MagicCreationComponent },
          { path: 'manipulation', component: MagicManipulationComponent },
          { path: 'ballparks', component: MagicBallparksComponent },
          { path: 'group', component: MagicGroupComponent },
        ]
      },
      { path: 'healing', component: HealingComponent },
      { path: 'states', component: StatesComponent },
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
    ]
  },
  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
