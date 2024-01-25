import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// global
import { HomePageComponent } from './home-page/home-page.component';
import { LoreComponent } from './lore/lore.component';
import { SystemComponent } from './system/system.component';
import { CharacterComponent } from './character/character.component';
import { ColoursOfMagicComponent } from './colours-of-magic/colours-of-magic.component';
import { MoreRulesComponent } from './more-rules/more-rules.component';

// lore
import { HistoryComponent } from './lore/history/history.component';
import { ReligionComponent } from './lore/religion/religion.component';
import { RacesComponent } from './lore/races/races.component';
import { MagicLoreComponent } from './lore/magic-lore/magic-lore.component';
import { GeographyComponent } from './lore/geography/geography.component';
import { LanguagesComponent } from './lore/languages/languages.component';
import { FaunaFloraComponent } from './lore/fauna-flora/fauna-flora.component';
import { LivingComponent } from './lore/living/living.component';

// system
import { WeaponsComponent } from './system/weapons/weapons.component';
import { ArmorsComponent } from './system/armors/armors.component';
import { GaugesComponent } from './system/gauges/gauges.component';
import { AttackingComponent } from './system/attacking/attacking.component';
import { CombatComponent } from './system/combat/combat.component';
import { MagicSystemComponent } from './system/magic-system/magic-system.component';
import { OtherRollsComponent } from './system/other-rolls/other-rolls.component';
import { HealingComponent } from './system/healing/healing.component';
import { StatesComponent } from './system/states/states.component';
import { SystemExplanationComponent } from './system/system-explanation/system-explanation.component';

// character
import { CreationComponent } from './character/creation/creation.component';
import { MagicCharacterComponent } from './character/magic-character/magic-character.component';
import { StatsComponent } from './character/stats/stats.component';
import { SkillsComponent } from './character/skills/skills.component';
import { KnowledgeComponent } from './character/knowledge/knowledge.component';
import { DyingComponent } from './character/dying/dying.component';

// lore/history
import { TheElvenTimeComponent } from './lore/history/the-elven-time/the-elven-time.component';
import { TheElvenWarComponent } from './lore/history/the-elven-war/the-elven-war.component';
import { TheEmergenceComponent } from './lore/history/the-emergence/the-emergence.component';
import { TheLyuneCivilWarComponent } from './lore/history/the-lyune-civil-war/the-lyune-civil-war.component';
import { TheDarkElvesStabilisationComponent } from './lore/history/the-dark-elves-stabilisation/the-dark-elves-stabilisation.component';
import { TheNewWarComponent } from './lore/history/the-new-war/the-new-war.component';

// lore/races
import { NekaliComponent } from './lore/races/nekali/nekali.component';
import { FlyhnComponent } from './lore/races/flyhn/flyhn.component';
import { WoodElfComponent } from './lore/races/wood-elf/wood-elf.component';
import { EtrekComponent } from './lore/races/etrek/etrek.component';
import { DarkElfComponent } from './lore/races/dark-elf/dark-elf.component';
import { LyuneComponent } from './lore/races/lyune/lyune.component';

// lore/magic
import { MagicElementalComponent } from './lore/magic-lore/magic-elemental/magic-elemental.component';
import { MagicRunicComponent } from './lore/magic-lore/magic-runic/magic-runic.component';
import { MetalComponent } from './lore/magic-lore/metal/metal.component';
import { MagicColoursComponent } from './lore/magic-lore/magic-colours/magic-colours.component';

// lore/living
import { CitadelleComponent } from './lore/living/citadelle/citadelle.component';
import { ProfessionsComponent } from './lore/living/professions/professions.component';
import { EconomyComponent } from './lore/living/economy/economy.component';

// system/magic
import { MagicSystemExplanationComponent } from './system/magic-system/magic-system-explanation/magic-system-explanation.component';
import { MagicCreationComponent } from './system/magic-system/magic-creation/magic-creation.component';
import { MagicManipulationComponent } from './system/magic-system/magic-manipulation/magic-manipulation.component';
import { MagicConcentrationComponent } from './system/magic-system/magic-concentration/magic-concentration.component';
import { MagicVisionComponent } from './system/magic-system/magic-vision/magic-vision.component';
import { MagicBallparksComponent } from './system/magic-system/magic-ballparks/magic-ballparks.component';
import { MagicGroupComponent } from './system/magic-system/magic-group/magic-group.component';
import { MagicConjurationComponent } from './system/magic-system/magic-conjuration/magic-conjuration.component';
import { MagicBuffsComponent } from './system/magic-system/magic-buffs/magic-buffs.component';

// system/attacking
import { HittingComponent } from './system/attacking/hitting/hitting.component';
import { DamagesComponent } from './system/attacking/damages/damages.component';
import { TargetingComponent } from './system/attacking/targeting/targeting.component';

// character/skills
import { SkillsAttackComponent } from './character/skills/skills-attack/skills-attack.component';
import { SkillsDefenseComponent } from './character/skills/skills-defense/skills-defense.component';
import { SkillsMagicComponent } from './character/skills/skills-magic/skills-magic.component';
import { SkillsExplanationComponent } from './character/skills/skills-explanation/skills-explanation.component';

// colours/uses
import { MagicUsesComponent } from './colours-of-magic/magic-uses/magic-uses.component';
import { MagicUsesFireComponent } from './colours-of-magic/magic-uses/magic-pure/magic-uses-fire/magic-uses-fire.component';
import { MagicUsesAirComponent } from './colours-of-magic/magic-uses/magic-pure/magic-uses-air/magic-uses-air.component';
import { MagicUsesLightComponent } from './colours-of-magic/magic-uses/magic-pure/magic-uses-light/magic-uses-light.component';
import { MagicUsesNatureComponent } from './colours-of-magic/magic-uses/magic-pure/magic-uses-nature/magic-uses-nature.component';
import { MagicUsesWaterComponent } from './colours-of-magic/magic-uses/magic-pure/magic-uses-water/magic-uses-water.component';
import { MagicUsesShadowComponent } from './colours-of-magic/magic-uses/magic-pure/magic-uses-shadow/magic-uses-shadow.component';

import { MagicUsesExplosionComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-explosion/magic-uses-explosion.component';
import { MagicUsesThunderComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-thunder/magic-uses-thunder.component';
import { MagicUsesPurificationComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-purification/magic-uses-purification.component';
import { MagicUsesGrowthComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-growth/magic-uses-growth.component';
import { MagicUsesAnimalComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-animal/magic-uses-animal.component';
import { MagicUsesEarthComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-earth/magic-uses-earth.component';
import { MagicUsesIceComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-ice/magic-uses-ice.component';
import { MagicUsesFirewaterComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-firewater/magic-uses-firewater.component';
import { MagicUsesIllusionComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-illusion/magic-uses-illusion.component';
import { MagicUsesMindComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-mind/magic-uses-mind.component';
import { MagicUsesTentaclesComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-tentacles/magic-uses-tentacles.component';
import { MagicUsesSoulComponent } from './colours-of-magic/magic-uses/magic-combined/magic-uses-soul/magic-uses-soul.component';

import { MindMagicComponent } from './colours-of-magic/mind-magic/mind-magic.component';
import { PurificationMagicComponent } from './colours-of-magic/purification-magic/purification-magic.component';

// colours/mind
import { MindReadingComponent } from './colours-of-magic/mind-magic/mind-reading/mind-reading.component';
import { MindSlowingComponent } from './colours-of-magic/mind-magic/mind-slowing/mind-slowing.component';
import { MindHallucinatingComponent } from './colours-of-magic/mind-magic/mind-hallucinating/mind-hallucinating.component';
import { MindBoostingComponent } from './colours-of-magic/mind-magic/mind-boosting/mind-boosting.component';
import { MindSuggestingComponent } from './colours-of-magic/mind-magic/mind-suggesting/mind-suggesting.component';

// more
import { ActionFlowchartComponent } from './more-rules/action-flowchart/action-flowchart.component';
import { DestinyComponent } from './more-rules/destiny/destiny.component';
import { CheatSheetComponent } from './more-rules/cheat-sheet/cheat-sheet.component';

// search
import { CompendiumComponent } from './compendium/compendium.component';

// secret pages
import { SercretPagesComponent } from './sercret-pages/sercret-pages.component';
import { SercretFlyhnsComponent } from './sercret-pages/sercret-flyhns/sercret-flyhns.component';
import { SercretSylvansComponent } from './sercret-pages/sercret-sylvans/sercret-sylvans.component';
import { SercretDarkElvesComponent } from './sercret-pages/sercret-dark-elves/sercret-dark-elves.component';
import { SercretNekaliComponent } from './sercret-pages/sercret-nekali/sercret-nekali.component';
import { SercretLyunesComponent } from './sercret-pages/sercret-lyunes/sercret-lyunes.component';
import { SercretEtreksComponent } from './sercret-pages/sercret-etreks/sercret-etreks.component';
import { SercretRunesComponent } from './sercret-pages/sercret-runes/sercret-runes.component';
import { SercretSoulStonesComponent } from './sercret-pages/sercret-soul-stones/sercret-soul-stones.component';
import { BloodRulesComponent } from './sercret-pages/blood-rules/blood-rules.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomePageComponent },

  { path: 'compendium', component: CompendiumComponent },

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
      { path: 'languages', component: LanguagesComponent },
      { path: 'fauna-flora', component: FaunaFloraComponent },
      {
        path: 'living',
        component: LivingComponent,
        children: [
          { path: 'education', component: CitadelleComponent },
          { path: 'professions', component: ProfessionsComponent },
          { path: 'economy', component: EconomyComponent },
        ]
      },
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
          { path: 'concentration', component: MagicConcentrationComponent },
          { path: 'vision', component: MagicVisionComponent },
          { path: 'ballparks', component: MagicBallparksComponent },
          { path: 'group', component: MagicGroupComponent },
          { path: 'conjuration', component: MagicConjurationComponent },
          { path: 'buffs', component: MagicBuffsComponent },
        ]
      },
      { path: 'other-rolls', component: OtherRollsComponent },
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
          { path: 'explanation', component: SkillsExplanationComponent },
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
      { path: 'air', component: MagicUsesAirComponent },
      { path: 'fire', component: MagicUsesFireComponent },
      { path: 'light', component: MagicUsesLightComponent },
      { path: 'nature', component: MagicUsesNatureComponent },
      { path: 'shadow', component: MagicUsesShadowComponent },
      { path: 'water', component: MagicUsesWaterComponent },
      { path: 'animal', component: MagicUsesAnimalComponent },
      { path: 'earth', component: MagicUsesEarthComponent },
      { path: 'explosion', component: MagicUsesExplosionComponent },
      { path: 'firewater', component: MagicUsesFirewaterComponent },
      { path: 'growth', component: MagicUsesGrowthComponent },
      { path: 'ice', component: MagicUsesIceComponent },
      { path: 'illusion', component: MagicUsesIllusionComponent },
      { path: 'mind', component: MagicUsesMindComponent },
      { path: 'purification', component: MagicUsesPurificationComponent },
      { path: 'soul', component: MagicUsesSoulComponent },
      { path: 'tentacles', component: MagicUsesTentaclesComponent },
      { path: 'thunder', component: MagicUsesThunderComponent },
      {
        path: 'mind',
        component: MindMagicComponent,
        children: [
          { path: 'reading', component: MindReadingComponent },
          { path: 'slowing', component: MindSlowingComponent },
          { path: 'hallucinating', component: MindHallucinatingComponent },
          { path: 'boosting', component: MindBoostingComponent },
          { path: 'suggesting', component: MindSuggestingComponent },
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
      { path: 'destiny', component: DestinyComponent },
      { path: 'cheat-sheet', component: CheatSheetComponent },
    ]
  },
  {
    path: 'secret-pages',
    component: SercretPagesComponent,
    children: [
      { path: '5Wug0Bk6', component: SercretFlyhnsComponent },
      { path: 'uRi8C110', component: SercretSylvansComponent },
      { path: 'dL1226sF', component: SercretDarkElvesComponent },
      { path: '97gB9txO', component: SercretNekaliComponent },
      { path: '2REco0Q8', component: SercretLyunesComponent },
      { path: 'nZX7X17s', component: SercretEtreksComponent },
      { path: 'ne12V72t', component: SercretRunesComponent },
      { path: '3X5Ju928', component: SercretSoulStonesComponent },
      { path: 'r8t2VuC5', component: BloodRulesComponent },
    ]
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
