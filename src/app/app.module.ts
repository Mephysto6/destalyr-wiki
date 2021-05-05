import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
    ProfessionsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
