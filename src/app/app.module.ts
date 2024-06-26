import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { SkillButtonComponent } from './character/skills/skill-button/skill-button.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoreComponent,
    SystemComponent,
    CharacterComponent,
    PageNotFoundComponent,
    HistoryComponent,
    ReligionComponent,
    RacesComponent,
    MagicLoreComponent,
    GeographyComponent,
    CitadelleComponent,
    WeaponsComponent,
    ArmorsComponent,
    GaugesComponent,
    AttackingComponent,
    CombatComponent,
    MagicSystemComponent,
    HealingComponent,
    StatesComponent,
    CreationComponent,
    MagicCharacterComponent,
    StatsComponent,
    SkillsComponent,
    KnowledgeComponent,
    TheElvenTimeComponent,
    TheElvenWarComponent,
    TheEmergenceComponent,
    TheLyuneCivilWarComponent,
    TheDarkElvesStabilisationComponent,
    TheNewWarComponent,
    NekaliComponent,
    FlyhnComponent,
    WoodElfComponent,
    EtrekComponent,
    DarkElfComponent,
    LyuneComponent,
    MagicCreationComponent,
    MagicManipulationComponent,
    MagicBallparksComponent,
    MagicGroupComponent,
    MagicUsesComponent,
    SkillsAttackComponent,
    SkillsDefenseComponent,
    SkillsMagicComponent,
    MagicElementalComponent,
    MagicRunicComponent,
    SystemExplanationComponent,
    MetalComponent,
    MagicVisionComponent,
    MagicSystemExplanationComponent,
    MoreRulesComponent,
    ActionFlowchartComponent,
    MindMagicComponent,
    PurificationMagicComponent,
    MagicColoursComponent,
    ColoursOfMagicComponent,
    DyingComponent,
    HittingComponent,
    DamagesComponent,
    TargetingComponent,
    ProfessionsComponent,
    MindReadingComponent,
    MindSlowingComponent,
    MindHallucinatingComponent,
    LanguagesComponent,
    FaunaFloraComponent,
    EconomyComponent,
    SkillsExplanationComponent,
    LivingComponent,
    DestinyComponent,
    CompendiumComponent,
    MindBoostingComponent,
    CheatSheetComponent,
    MindSuggestingComponent,
    MagicConcentrationComponent,
    MagicUsesFireComponent,
    MagicUsesAirComponent,
    MagicUsesLightComponent,
    MagicUsesNatureComponent,
    MagicUsesWaterComponent,
    MagicUsesShadowComponent,
    MagicUsesExplosionComponent,
    MagicUsesThunderComponent,
    MagicUsesPurificationComponent,
    MagicUsesGrowthComponent,
    MagicUsesAnimalComponent,
    MagicUsesEarthComponent,
    MagicUsesIceComponent,
    MagicUsesFirewaterComponent,
    MagicUsesIllusionComponent,
    MagicUsesMindComponent,
    MagicUsesTentaclesComponent,
    MagicUsesSoulComponent,
    OtherRollsComponent,
    SercretPagesComponent,
    SercretSylvansComponent,
    SercretDarkElvesComponent,
    SercretFlyhnsComponent,
    SercretNekaliComponent,
    SercretLyunesComponent,
    SercretEtreksComponent,
    SercretRunesComponent,
    SercretSoulStonesComponent,
    BloodRulesComponent,
    SkillButtonComponent,
    MagicConjurationComponent,
    MagicBuffsComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [
    SkillsAttackComponent,
    SkillsDefenseComponent,
    SkillsMagicComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
