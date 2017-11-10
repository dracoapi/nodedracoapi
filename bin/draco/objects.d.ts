/// <reference types="node" />
import Serializer from './serializer';
import Deserializer from './deserializer';
import * as enums from './enums';
import * as long from 'long';
export declare class AuthData {
    __type: string;
    authType: enums.AuthType;
    profileId: string;
    tokenId: string;
    constructor(init?: Partial<AuthData>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class BuffConfig {
    __type: string;
    durationMs: long;
    type: enums.BuffType;
    valuePercent: number;
    constructor(init?: Partial<BuffConfig>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FActiveObject {
    __type: string;
    allianceType: enums.AllianceType;
    arenaId: string;
    combinedName: number;
    coords: GeoCoords;
    creatureAlias: string;
    creatureCp: number;
    creatureName: enums.CreatureType;
    level: number;
    lost: boolean;
    timeLeft: number;
    weaklyBonus: number;
    constructor(init?: Partial<FActiveObject>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FActiveObjectsUpdate {
    __type: string;
    arenaQuantity: number;
    coins: number;
    dust: number;
    libraryPoints: number;
    libraryQuantity: number;
    libraryRequired: number;
    libraryTotalCooldown: number;
    libraryWaitCooldown: number;
    loot: FLoot;
    objectList: FActiveObject[];
    timeToNextTributeCollection: number;
    tributeCooldown: number;
    constructor(init?: Partial<FActiveObjectsUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FAllianceChooseRequest {
    __type: string;
    bonus: number;
    oneOption: boolean;
    recommendedType: enums.AllianceType;
    constructor(init?: Partial<FAllianceChooseRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FAltar {
    __type: string;
    ownerId: string;
    sharedWithEmptyPassword: boolean;
    constructor(init?: Partial<FAltar>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FAltarDetails {
    __type: string;
    buildingId: string;
    coords: GeoCoords;
    ownerId: string;
    recipeName: enums.RecipeType;
    runeOwnerNames: Map<number, number>;
    runeOwners: Map<number, number>;
    constructor(init?: Partial<FAltarDetails>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FArena {
    __type: string;
    allianceType: enums.AllianceType;
    combinedName: number;
    protectionTtl: number;
    constructor(init?: Partial<FArena>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FArenaBattleResult {
    __type: string;
    allyArena: boolean;
    combinedName: number;
    creaturesDefeated: number;
    currentPrestige: number;
    level: number;
    loot: FLoot;
    nextLevelPrestige: number;
    prestigeBonusKillAll: number;
    prestigeBonusKillStronger: number;
    prestigeChange: number;
    prestigeEarned: number;
    resultScreenDelay: number;
    userExpBonusKillAll: number;
    userExpBonusKillStronger: number;
    userExpGained: number;
    victory: boolean;
    constructor(init?: Partial<FArenaBattleResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FArenaDetails {
    __type: string;
    allianceChooseRequest: FAllianceChooseRequest;
    buildingType: enums.BuildingType;
    canAddDefender: boolean;
    canAttack: boolean;
    capturableGeoPointsLimitReached: boolean;
    combinedName: number;
    coords: GeoCoords;
    currentExp: number;
    defenders: FDefenderDetails[];
    hasRemoteBuildingControlAction: boolean;
    id: string;
    level: number;
    libraryBlocked: boolean;
    minUseLevel: number;
    nextLevelExp: number;
    ownerAlliance: enums.AllianceType;
    protectionRemainingTime: number;
    restrictedForAllianceToCapture: enums.AllianceType;
    restrictedForAllianceToCaptureRemainingTime: number;
    constructor(init?: Partial<FArenaDetails>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FArenaWithBattleUpdate {
    __type: string;
    arenaWithBattle: Set<string>;
    constructor(init?: Partial<FArenaWithBattleUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FArtifactsUpdate {
    __type: string;
    artifacts: enums.ArtifactName[];
    artifactsBagSize: number;
    artifactsSlots: number;
    hasDeposit: boolean;
    putOn: enums.ArtifactName[];
    constructor(init?: Partial<FArtifactsUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FAttackArenaRequest {
    __type: string;
    buildingRequest: FBuildingRequest;
    coords: GeoCoords;
    selectedCreatures: string[];
    constructor(init?: Partial<FAttackArenaRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FAuthData {
    __type: string;
    config: FConfig;
    info: FUserInfo;
    constructor(init?: Partial<FAuthData>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FAvaUpdate {
    __type: string;
    activationRadius: number;
    activationRadiusIncreased: boolean;
    activationRadiusIncreasedLeftTime: long;
    alliance: enums.AllianceType;
    altarCoords: GeoCoords;
    buddy: FBuddy;
    buffs: FBuff[];
    candies: Map<enums.CreatureType, enums.CreatureType>;
    coins: number;
    creatureStorageSize: number;
    currentExperience: number;
    doubleDropDuration: long;
    doubleDropLeftTime: long;
    dungeonId: string;
    dust: number;
    exp: number;
    experienceBoosterDuration: long;
    experienceBoosterLeftTime: long;
    incenseDuration: long;
    incenseLeftTime: long;
    isArtifactsBagFull: boolean;
    isBagFull: boolean;
    isEggBagFull: boolean;
    level: number;
    nextLevelExperience: number;
    recipes: enums.RecipeType[];
    registerDate: long;
    scoutChargesLeft: number;
    scoutRadius: number;
    slugLeftTime: number;
    stopFieldDuration: long;
    stopFieldLeftTime: long;
    superVisionCenter: GeoCoords;
    superVisionDuration: long;
    superVisionLeftTime: long;
    totalDistance: number;
    constructor(init?: Partial<FAvaUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBagItem {
    __type: string;
    count: number;
    removable: boolean;
    stack: boolean;
    type: enums.ItemType;
    constructor(init?: Partial<FBagItem>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBagUpdate {
    __type: string;
    allowedItemsSize: number;
    incenseGenMonstersGroupName: string;
    items: FBagItem[];
    lockedRunes: Map<enums.ItemType, enums.ItemType>;
    constructor(init?: Partial<FBagUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBaseItemUpdate {
    __type: string;
    constructor(init?: Partial<FBaseItemUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBaseLootItem {
    __type: string;
    qty: number;
    constructor(init?: Partial<FBaseLootItem>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBuddy {
    __type: string;
    alias: string;
    candyType: enums.CreatureType;
    creature: enums.CreatureType;
    currentWalked: number;
    distanceForCandies: number;
    id: string;
    totalCandies: number;
    totalWalked: number;
    constructor(init?: Partial<FBuddy>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBuff {
    __type: string;
    buffType: enums.BuffType;
    duration: long;
    timeLeft: long;
    valuePercent: number;
    constructor(init?: Partial<FBuff>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBuilding {
    __type: string;
    altar: FAltar;
    arena: FArena;
    available: boolean;
    casted: boolean;
    coords: GeoCoords;
    dungeonId: string;
    expirationTime: long;
    id: string;
    pitstop: FPitstop;
    type: enums.BuildingType;
    constructor(init?: Partial<FBuilding>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBuildingRequest {
    __type: string;
    coords: GeoCoords;
    dungeonId: string;
    id: string;
    constructor(init?: Partial<FBuildingRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FBuildingUpdate {
    __type: string;
    tileBuildings: Map<FTile, FTile>;
    constructor(init?: Partial<FBuildingUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FCatchCreatureResult {
    __type: string;
    avaUpdate: FAvaUpdate;
    ballType: enums.ItemType;
    candies: number;
    candyType: enums.CreatureType;
    catchChance: number;
    catching: FCatchingConfig;
    caught: boolean;
    creadex: FCreadex;
    creature: enums.CreatureType;
    dust: number;
    expAccurate: number;
    expCreatureExisting: number;
    expCreatureNew: number;
    expSpin: number;
    levelUpLoot: FLoot;
    loot: FLoot;
    runAway: boolean;
    streakDust: number;
    userCreature: FUserCreature;
    constructor(init?: Partial<FCatchCreatureResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FCatchingConfig {
    __type: string;
    catchChances: Map<enums.ItemType, enums.ItemType>;
    chanceToAttack: number;
    chanceToJump: number;
    distance: number;
    endCamPosDistance: number;
    endCamPosHeight: number;
    flyTime: number;
    height: number;
    lookAtHeight: number;
    maxDistance: number;
    maxHeight: number;
    moveCheckCooldownSeconds: number;
    offsetDistance: number;
    offsetHeight: number;
    scale: number;
    scaleCollider: number;
    sightRadiusDecreaseTimeSeconds: number;
    sightRadiusMax: number;
    sightRadiusMin: number;
    startCamPosDistance: number;
    startCamPosHeight: number;
    constructor(init?: Partial<FCatchingConfig>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FCatchingCreature {
    __type: string;
    aggressive: boolean;
    candyType: enums.CreatureType;
    catching: FCatchingConfig;
    cp: number;
    element: enums.ElementType;
    feedFoodType: enums.ItemType;
    feedLeftTime: number;
    id: string;
    isCreatureStorageFull: boolean;
    items: Map<enums.ItemType, enums.ItemType>;
    name: enums.CreatureType;
    quality: number;
    constructor(init?: Partial<FCatchingCreature>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FChest {
    __type: string;
    coords: GeoCoords;
    id: string;
    constructor(init?: Partial<FChest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FChestUpdate {
    __type: string;
    chests: FChest[];
    constructor(init?: Partial<FChestUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FClientInfo {
    __type: string;
    deviceModel: string;
    googleAdvertisingId: string;
    googleTrackingEnabled: boolean;
    iOsAdvertisingIdentifier: string;
    iOsAdvertisingTrackingEnabled: boolean;
    iOsVendorIdentifier: string;
    language: string;
    platform: string;
    platformVersion: string;
    revision: string;
    screenHeight: number;
    screenWidth: number;
    constructor(init?: Partial<FClientInfo>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FClientRequest {
    __type: string;
    coords: GeoCoords;
    currentUtcOffsetSeconds: number;
    time: long;
    constructor(init?: Partial<FClientRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FConfig {
    __type: string;
    aggressiveChanceToAttack: number;
    aggressiveChanceToJump: number;
    aggressiveChancesCooldownTime: number;
    altarAvailableFromLevel: number;
    angularDrag: number;
    arenaLayerLevels: number[];
    arenaLevelsThreshold: number[];
    avatarMoveMaxDistanceRun: number;
    avatarMoveRunSpeed: number;
    ballCurve: number;
    battlesEnhancedLimitPrice: number;
    buildingsVisionRadius: number;
    cameraFieldOfView: number;
    catchPopup: Map<number, number>;
    congratulationLayerLevels: number[];
    creaturesDelayVisibility: number;
    dailyQuestAvailableFromLevel: number;
    defenderBaseAttackBeforeChargedMax: number;
    defenderBaseAttackBeforeChargedMin: number;
    delayForCheckMaxSpeedToPlay: number;
    delayToDisableGameBecauseOfLowGPSAccuracy: number;
    desiredGpsAccuracy: number;
    distanceToLoadTiles: number;
    distanceToUnloadTiles: number;
    dummy: boolean;
    dummy2: boolean;
    encounterDelaySinceStartup: number;
    fogEndDistance: number;
    fogStartDistance: number;
    goOrbitDistance: number;
    goOrbitDistanceMax: number;
    goOrbitDistanceMin: number;
    goOrbitHeightMaxLimit: number;
    goOrbitHeightMinLimit: number;
    goOrbitOffsetMax: number;
    goOrbitOffsetMin: number;
    highSpeedDurationRequiredForWarning: number;
    mapServer: string;
    mapVersion: number;
    maxAngularVelocity: number;
    maxClientPauseDuration: number;
    maxSpeedForUse: number;
    maxSpeedToPlay: number;
    monsterLevelPerUserLevel: number;
    monsterMaxLevel: number;
    personalizationPrice: number;
    potionConfig: PotionConfig;
    radarVisionRadius: number;
    runes: Map<enums.RecipeType, enums.RecipeType>;
    serverTime: long;
    spinGain: number;
    superVisionEffectInterval: number;
    superVisionRadius: number;
    timeLimitPerDefender: number;
    updateRequestCooldownSeconds: number;
    updateRequestIgnoreWorseAccuracyCooldownSeconds: number;
    updateRequestMinimalDistance: number;
    updateRequestPeriodSeconds: number;
    weeklyQuestAvailableFromLevel: number;
    wizardAvailableFromLevel: number;
    wizardEnhanceCount: number;
    xVelocityFactor: number;
    xVelocityFactorSpin: number;
    yVelocityFactor: number;
    constructor(init?: Partial<FConfig>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FCreadex {
    __type: string;
    entries: FCreadexEntry[];
    constructor(init?: Partial<FCreadex>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FCreadexChain {
    __type: string;
    caught: boolean;
    creature: enums.CreatureType;
    seen: boolean;
    constructor(init?: Partial<FCreadexChain>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FCreadexEntry {
    __type: string;
    caughtQuantity: number;
    chain: FCreadexChain[];
    element: enums.ElementType;
    name: enums.CreatureType;
    seen: boolean;
    tier: number;
    constructor(init?: Partial<FCreadexEntry>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FCreatureRequest {
    __type: string;
    id: string;
    veryFirst: boolean;
    constructor(init?: Partial<FCreatureRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FCreatureUpdate {
    __type: string;
    inRadar: FWildCreature[];
    wilds: FWildCreature[];
    constructor(init?: Partial<FCreatureUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FDailyQuest {
    __type: string;
    count: number;
    elementType: enums.ElementType;
    id: string;
    nextDailyQuestIn: number;
    pitstopPath: IdAndCoords[];
    progress: number;
    type: enums.QuestType;
    constructor(init?: Partial<FDailyQuest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FDefenderDetails {
    __type: string;
    allianceType: enums.AllianceType;
    creatureAlias: string;
    creatureCp: number;
    creatureName: enums.CreatureType;
    elementType: enums.ElementType;
    ownerLevel: number;
    ownerName: string;
    userAppearance: number;
    constructor(init?: Partial<FDefenderDetails>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FDepositInfo {
    __type: string;
    depositAmount: number;
    duration: number;
    isOnUser: boolean;
    leftTime: long;
    percent: number;
    constructor(init?: Partial<FDepositInfo>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FDungeonUpdate {
    __type: string;
    coords: GeoCoords;
    rotation: number;
    size: number;
    type: enums.DungeonShapeType;
    constructor(init?: Partial<FDungeonUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FEgg {
    __type: string;
    eggType: enums.ItemType;
    id: string;
    incubatorId: string;
    isEggForRoost: boolean;
    isHatching: boolean;
    passedDistance: number;
    totalDistance: number;
    totalIncubationTime: long;
    constructor(init?: Partial<FEgg>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FEncounterBattleResult {
    __type: string;
    loot: FLoot;
    resultScreenDelay: number;
    victory: boolean;
    constructor(init?: Partial<FEncounterBattleResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FEncounterDetails {
    __type: string;
    coords: GeoCoords;
    creatureCp: number;
    creatureElementType: enums.ElementType;
    creatureName: enums.CreatureType;
    id: string;
    level: number;
    constructor(init?: Partial<FEncounterDetails>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FEncounterUpdate {
    __type: string;
    attacker: FFightCreature;
    defender: FFightCreature;
    constructor(init?: Partial<FEncounterUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FFeedMonsterResult {
    __type: string;
    feedLiveTime: long;
    constructor(init?: Partial<FFeedMonsterResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FFightCreature {
    __type: string;
    alias: string;
    attacker: boolean;
    baseCp: number;
    chargedSkill: string;
    chargedSkillAim: boolean;
    chargedSkillAngle: number;
    chargedSkillDps: number;
    chargedSkillQuality: enums.SkillQuality;
    chargedSkillSpeed: number;
    chargedSkillTtl: number;
    cp: number;
    decreasedDmgTo: enums.ElementType;
    distance: number;
    dodgeAngle: number;
    dodgeDamageRatio: number;
    dodgeMoveTime: number;
    energySegments: number;
    height: number;
    holdTimeForChargedSkill: number;
    hp: number;
    id: string;
    incomingEnergyOnAttack: number;
    increasedDmgTo: enums.ElementType;
    mainSkill: string;
    mainSkillAim: boolean;
    mainSkillAngle: number;
    mainSkillDps: number;
    mainSkillQuality: enums.SkillQuality;
    mainSkillSpeed: number;
    mainSkillTtl: number;
    maxEnergy: number;
    name: enums.CreatureType;
    rightElementAttackCoef: number;
    scale: number;
    specAttackCoef: number;
    startCamPosDistance: number;
    startCamPosHeight: number;
    totalHp: number;
    type: enums.ElementType;
    wrongElementAttackCoef: number;
    constructor(init?: Partial<FFightCreature>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FFightItem {
    __type: string;
    attackerDamageReceived: number;
    attackerId: string;
    defenderDamageReceived: number;
    defenderId: string;
    constructor(init?: Partial<FFightItem>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FFightRequest {
    __type: string;
    chargedAttacksByAi: number;
    dodges: number;
    items: FFightItem[];
    leaveBattle: boolean;
    successfulDodges: number;
    constructor(init?: Partial<FFightRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FFightUpdate {
    __type: string;
    attackers: FFightCreature[];
    autoChangeAttackerHpPercent: number;
    defenderNickname: string;
    defenders: FFightCreature[];
    dodgeChance: number;
    constructor(init?: Partial<FFightUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FHatchedEggs {
    __type: string;
    egg: FEgg;
    incubatorId: string;
    loot: FLoot;
    constructor(init?: Partial<FHatchedEggs>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FHatchingResult {
    __type: string;
    avaUpdate: FAvaUpdate;
    creadex: FCreadex;
    creature: FUserCreature;
    levelUpLoot: FLoot;
    loot: FLoot;
    constructor(init?: Partial<FHatchingResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FInAppEventUpdate {
    __type: string;
    events: InAppEventInfo[];
    constructor(init?: Partial<FInAppEventUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FIncubator {
    __type: string;
    eggId: string;
    incubatorId: string;
    roostBuildingId: string;
    slotIndex: number;
    usagesLeft: number;
    constructor(init?: Partial<FIncubator>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FJournalRecord {
    __type: string;
    date: long;
    details: Map<string, string>;
    type: enums.EventLogType;
    constructor(init?: Partial<FJournalRecord>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FJournalUpdate {
    __type: string;
    records: FJournalRecord[];
    constructor(init?: Partial<FJournalUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLoot {
    __type: string;
    lootList: FBaseLootItem[];
    constructor(init?: Partial<FLoot>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemArtifact {
    __type: string;
    qty: number;
    artifact: enums.ArtifactName;
    constructor(init?: Partial<FLootItemArtifact>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemBuff {
    __type: string;
    qty: number;
    buff: BuffConfig;
    constructor(init?: Partial<FLootItemBuff>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemCandy {
    __type: string;
    qty: number;
    candyType: enums.CreatureType;
    constructor(init?: Partial<FLootItemCandy>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemCoins {
    __type: string;
    qty: number;
    constructor(init?: Partial<FLootItemCoins>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemDust {
    __type: string;
    qty: number;
    isStreak: boolean;
    constructor(init?: Partial<FLootItemDust>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemExp {
    __type: string;
    qty: number;
    constructor(init?: Partial<FLootItemExp>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemInstantUseItem {
    __type: string;
    qty: number;
    item: enums.InstantUseItem;
    constructor(init?: Partial<FLootItemInstantUseItem>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemItem {
    __type: string;
    qty: number;
    isStreak: boolean;
    item: enums.ItemType;
    constructor(init?: Partial<FLootItemItem>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FLootItemRecipe {
    __type: string;
    qty: number;
    recipe: enums.RecipeType;
    constructor(init?: Partial<FLootItemRecipe>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FNicknameValidationResult {
    __type: string;
    error: enums.FNicknameValidationError;
    suggestedNickname: string;
    constructor(init?: Partial<FNicknameValidationResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FObeliskDetails {
    __type: string;
    coords: GeoCoords;
    dailyQuest: FDailyQuest;
    fragment: FWeeklyQuestFragment;
    id: string;
    justOpened: boolean;
    weeklyQuest: FWeeklyQuest;
    constructor(init?: Partial<FObeliskDetails>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FOpenChestResult {
    __type: string;
    levelUpLoot: FLoot;
    loot: FLoot;
    constructor(init?: Partial<FOpenChestResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FPickItemsResponse {
    __type: string;
    levelUpLoot: FLoot;
    loot: FLoot;
    constructor(init?: Partial<FPickItemsResponse>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FPitstop {
    __type: string;
    cooldown: boolean;
    lureBy: string;
    lureTimeLeft: long;
    personalized: enums.PersonalizedStop;
    constructor(init?: Partial<FPitstop>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FQuestCompleted {
    __type: string;
    dailyQuest: FDailyQuest;
    levelUpLoot: FLoot;
    loot: FLoot;
    weeklyQuest: boolean;
    constructor(init?: Partial<FQuestCompleted>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FQuestUpdate {
    __type: string;
    completed: FQuestCompleted;
    highlightBuilding: IdAndCoords;
    path: IdAndCoords[];
    constructor(init?: Partial<FQuestUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FRegistrationInfo {
    __type: string;
    age: string;
    email: string;
    gender: string;
    regType: string;
    socialId: string;
    constructor(init?: Partial<FRegistrationInfo>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FScoutRequest {
    __type: string;
    clientRequest: FClientRequest;
    scoutCoords: GeoCoords;
    constructor(init?: Partial<FScoutRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FServiceError {
    __type: string;
    args: object[];
    cause: string;
    constructor(init?: Partial<FServiceError>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FShopConfig {
    __type: string;
    artifacts: Map<enums.ArtifactName, enums.ArtifactName>;
    bagUpgrade: ProductLot;
    coins: Map<string, string>;
    creatureStorageUpgrade: ProductLot;
    products: ProductGroup[];
    constructor(init?: Partial<FShopConfig>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FSpellCastDone {
    __type: string;
    altarCoords: GeoCoords;
    spellType: enums.SpellType;
    constructor(init?: Partial<FSpellCastDone>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FSpellEffectsUpdate {
    __type: string;
    hitArenas: Set<string>;
    constructor(init?: Partial<FSpellEffectsUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FStartEncounterRequest {
    __type: string;
    attackerId: string;
    defenderId: string;
    constructor(init?: Partial<FStartEncounterRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FTile {
    __type: string;
    dungeonId: string;
    tile: Tile;
    constructor(init?: Partial<FTile>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FTileState {
    __type: string;
    buildings: FBuilding[];
    time: long;
    constructor(init?: Partial<FTileState>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FTransferMonsterToCandiesResponse {
    __type: string;
    loot: FLoot;
    constructor(init?: Partial<FTransferMonsterToCandiesResponse>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FUpdate {
    __type: string;
    items: FBaseItemUpdate[];
    speed: number;
    constructor(init?: Partial<FUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FUpdateNicknameResult {
    __type: string;
    userInfo: FUserInfo;
    validationResult: FNicknameValidationResult;
    constructor(init?: Partial<FUpdateNicknameResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FUpdateRequest {
    __type: string;
    blackScreen: boolean;
    clientPlatform: enums.ClientPlatform;
    clientRequest: FClientRequest;
    tilesCache: Map<FTile, FTile>;
    constructor(init?: Partial<FUpdateRequest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FUserCreature {
    __type: string;
    alias: string;
    attackValue: number;
    baseCp: number;
    candyType: enums.CreatureType;
    chargedSegments: number;
    chargedSkill: string;
    chargedSkillDps: number;
    cp: number;
    dps: number;
    elementType: enums.ElementType;
    gotchaTime: long;
    group: number;
    hp: number;
    id: string;
    improvable: boolean;
    improveCandiesCost: number;
    improveDustCost: number;
    isArenaDefender: boolean;
    isAttacker: boolean;
    isLibraryDefender: boolean;
    level: number;
    mainSkill: string;
    mainSkillDps: number;
    mainSkillEps: number;
    name: enums.CreatureType;
    possibleEvolutions: Map<enums.CreatureType, enums.CreatureType>;
    staminaValue: number;
    totalHp: number;
    constructor(init?: Partial<FUserCreature>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FUserCreaturesList {
    __type: string;
    userCreatures: FUserCreature[];
    constructor(init?: Partial<FUserCreaturesList>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FUserCreatureUpdate {
    __type: string;
    avaUpdate: FAvaUpdate;
    creadex: FCreadex;
    creature: FUserCreature;
    levelUpLoot: FLoot;
    loot: FLoot;
    constructor(init?: Partial<FUserCreatureUpdate>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FUserHatchingInfo {
    __type: string;
    eggs: FEgg[];
    incubators: FIncubator[];
    max: number;
    maxRoost: number;
    constructor(init?: Partial<FUserHatchingInfo>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FUserInfo {
    __type: string;
    alliance: enums.AllianceType;
    avatarAppearanceDetails: number;
    devMode: boolean;
    nickname: string;
    userId: string;
    constructor(init?: Partial<FUserInfo>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FWeeklyQuest {
    __type: string;
    allOpen: boolean;
    completed: boolean;
    currentFragment: number;
    digFragments: number[];
    nextWeeklyQuestIn: number;
    openFragments: Map<number, number>;
    sideFragmentNumber: number;
    constructor(init?: Partial<FWeeklyQuest>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FWeeklyQuestFragment {
    __type: string;
    data: Buffer;
    fragmentNumber: number;
    constructor(init?: Partial<FWeeklyQuestFragment>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FWildCreature {
    __type: string;
    coords: GeoCoords;
    entry: FCreadexEntry;
    id: string;
    incenseUserId: string;
    isFirstCreature: boolean;
    name: enums.CreatureType;
    relatedBuildingId: string;
    scaleCollider: number;
    ttl: number;
    constructor(init?: Partial<FWildCreature>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FWizardBattleInfo {
    __type: string;
    enhanced: boolean;
    limit: number;
    timeToRefresh: number;
    used: number;
    constructor(init?: Partial<FWizardBattleInfo>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class FWizardBattleResult {
    __type: string;
    attackerHps: number[];
    attackerTypes: enums.CreatureType[];
    creaturesDefeated: number;
    levelUpLoot: FLoot;
    loot: FLoot;
    resultScreenDelay: number;
    victory: boolean;
    constructor(init?: Partial<FWizardBattleResult>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class GeoCoords {
    __type: string;
    horizontalAccuracy: number;
    latitude: number;
    longitude: number;
    constructor(init?: Partial<GeoCoords>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class IdAndCoords {
    __type: string;
    coords: GeoCoords;
    id: string;
    constructor(init?: Partial<IdAndCoords>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class InAppEventInfo {
    __type: string;
    eventItems: Map<string, string>;
    eventType: enums.InAppEventType;
    userId: string;
    constructor(init?: Partial<InAppEventInfo>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class PotionConfig {
    __type: string;
    heals: Map<enums.ItemType, enums.ItemType>;
    resurrections: Map<enums.ItemType, enums.ItemType>;
    constructor(init?: Partial<PotionConfig>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class ProductGroup {
    __type: string;
    itemType: enums.ItemType;
    productLots: ProductLot[];
    constructor(init?: Partial<ProductGroup>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class ProductLot {
    __type: string;
    price: number;
    qty: number;
    constructor(init?: Partial<ProductLot>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
export declare class Tile {
    __type: string;
    x: number;
    y: number;
    zoom: number;
    constructor(init?: Partial<Tile>);
    serialize(serializer: Serializer): void;
    deserialize(deserializer: Deserializer): void;
}
