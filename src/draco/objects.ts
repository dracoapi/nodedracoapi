import Serializer from './serializer';
import Deserializer from './deserializer';
import * as long from 'long';

export class AuthData {
    authType: number;
    profileId: string;
    tokenId: string;

    public constructor(init?: Partial<AuthData>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.authType);
        serializer.writeUtf8String(this.profileId);
        serializer.writeDynamicObject(this.tokenId);
    }
    deserialize(deserializer: Deserializer) {
        this.authType = deserializer.readByte();
        this.profileId = deserializer.readUtf8String();
        this.tokenId = deserializer.readDynamicObject();
    }
}

export class BuffConfig {
    durationMs: long;
    type: number;
    valuePercent: number;

    public constructor(init?: Partial<BuffConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt64(this.durationMs);
        serializer.writeByte(this.type);
        serializer.writeInt32(this.valuePercent);
    }
    deserialize(deserializer: Deserializer) {
        this.durationMs = deserializer.readInt64();
        this.type = deserializer.readByte();
        this.valuePercent = deserializer.readInt32();
    }
}

export class FActiveObject {
    allianceType: number;
    arenaId: string;
    combinedName: number;
    coords: GeoCoords;
    creatureAlias: string;
    creatureCp: number;
    creatureName: number;
    level: number;
    lost: boolean;
    timeLeft: number;
    weaklyBonus: number;

    public constructor(init?: Partial<FActiveObject>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.allianceType);
        serializer.writeUtf8String(this.arenaId);
        serializer.writeInt32(this.combinedName);
        serializer.writeStaticObject(this.coords);
        serializer.writeDynamicObject(this.creatureAlias);
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureName);
        serializer.writeInt32(this.level);
        serializer.writeBoolean(this.lost);
        serializer.writeFloat(this.timeLeft);
        serializer.writeInt32(this.weaklyBonus);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceType = deserializer.readDynamicObject();
        this.arenaId = deserializer.readUtf8String();
        this.combinedName = deserializer.readInt32();
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.creatureAlias = deserializer.readDynamicObject();
        this.creatureCp = deserializer.readInt32();
        this.creatureName = deserializer.readByte();
        this.level = deserializer.readInt32();
        this.lost = deserializer.readBoolean();
        this.timeLeft = deserializer.readFloat();
        this.weaklyBonus = deserializer.readInt32();
    }
}

export class FActiveObjectsUpdate {
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

    public constructor(init?: Partial<FActiveObjectsUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.arenaQuantity);
        serializer.writeInt32(this.coins);
        serializer.writeInt32(this.dust);
        serializer.writeInt32(this.libraryPoints);
        serializer.writeInt32(this.libraryQuantity);
        serializer.writeInt32(this.libraryRequired);
        serializer.writeFloat(this.libraryTotalCooldown);
        serializer.writeInt32(this.libraryWaitCooldown);
        serializer.writeStaticObject(this.loot);
        serializer.writeStaticList(this.objectList, true);
        serializer.writeFloat(this.timeToNextTributeCollection);
        serializer.writeFloat(this.tributeCooldown);
    }
    deserialize(deserializer: Deserializer) {
        this.arenaQuantity = deserializer.readInt32();
        this.coins = deserializer.readInt32();
        this.dust = deserializer.readInt32();
        this.libraryPoints = deserializer.readInt32();
        this.libraryQuantity = deserializer.readInt32();
        this.libraryRequired = deserializer.readInt32();
        this.libraryTotalCooldown = deserializer.readFloat();
        this.libraryWaitCooldown = deserializer.readInt32();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.objectList = deserializer.readStaticList('FActiveObject', true);
        this.timeToNextTributeCollection = deserializer.readFloat();
        this.tributeCooldown = deserializer.readFloat();
    }
}

export class FAllianceChooseRequest {
    bonus: number;
    oneOption: boolean;
    recommendedType: number;

    public constructor(init?: Partial<FAllianceChooseRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.bonus);
        serializer.writeBoolean(this.oneOption);
        serializer.writeDynamicObject(this.recommendedType);
    }
    deserialize(deserializer: Deserializer) {
        this.bonus = deserializer.readInt32();
        this.oneOption = deserializer.readBoolean();
        this.recommendedType = deserializer.readDynamicObject();
    }
}

export class FAltar {
    ownerId: string;
    sharedWithEmptyPassword: boolean;

    public constructor(init?: Partial<FAltar>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.ownerId);
        serializer.writeBoolean(this.sharedWithEmptyPassword);
    }
    deserialize(deserializer: Deserializer) {
        this.ownerId = deserializer.readUtf8String();
        this.sharedWithEmptyPassword = deserializer.readBoolean();
    }
}

export class FAltarDetails {
    buildingId: string;
    coords: GeoCoords;
    ownerId: string;
    recipeName: number;
    runeOwnerNames: Map<number, number>; // Map
    runeOwners: Map<number, number>; // Map

    public constructor(init?: Partial<FAltarDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.buildingId);
        serializer.writeStaticObject(this.coords);
        serializer.writeUtf8String(this.ownerId);
        serializer.writeByte(this.recipeName);
        serializer.writeStaticMap(this.runeOwnerNames, true, true);
        serializer.writeStaticMap(this.runeOwners, true, true);
    }
    deserialize(deserializer: Deserializer) {
        this.buildingId = deserializer.readUtf8String();
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.ownerId = deserializer.readUtf8String();
        this.recipeName = deserializer.readByte();
        this.runeOwnerNames = deserializer.readStaticMap('int', 'string', true, true);
        this.runeOwners = deserializer.readStaticMap('int', 'string', true, true);
    }
}

export class FArena {
    allianceType: number;
    combinedName: number;
    protectionTtl: number;

    public constructor(init?: Partial<FArena>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.allianceType);
        serializer.writeInt32(this.combinedName);
        serializer.writeFloat(this.protectionTtl);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceType = deserializer.readDynamicObject();
        this.combinedName = deserializer.readInt32();
        this.protectionTtl = deserializer.readFloat();
    }
}

export class FArenaBattleResult {
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

    public constructor(init?: Partial<FArenaBattleResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.allyArena);
        serializer.writeInt32(this.combinedName);
        serializer.writeInt32(this.creaturesDefeated);
        serializer.writeInt32(this.currentPrestige);
        serializer.writeInt32(this.level);
        serializer.writeStaticObject(this.loot);
        serializer.writeInt32(this.nextLevelPrestige);
        serializer.writeInt32(this.prestigeBonusKillAll);
        serializer.writeInt32(this.prestigeBonusKillStronger);
        serializer.writeInt32(this.prestigeChange);
        serializer.writeInt32(this.prestigeEarned);
        serializer.writeFloat(this.resultScreenDelay);
        serializer.writeInt32(this.userExpBonusKillAll);
        serializer.writeInt32(this.userExpBonusKillStronger);
        serializer.writeInt32(this.userExpGained);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer: Deserializer) {
        this.allyArena = deserializer.readBoolean();
        this.combinedName = deserializer.readInt32();
        this.creaturesDefeated = deserializer.readInt32();
        this.currentPrestige = deserializer.readInt32();
        this.level = deserializer.readInt32();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.nextLevelPrestige = deserializer.readInt32();
        this.prestigeBonusKillAll = deserializer.readInt32();
        this.prestigeBonusKillStronger = deserializer.readInt32();
        this.prestigeChange = deserializer.readInt32();
        this.prestigeEarned = deserializer.readInt32();
        this.resultScreenDelay = deserializer.readFloat();
        this.userExpBonusKillAll = deserializer.readInt32();
        this.userExpBonusKillStronger = deserializer.readInt32();
        this.userExpGained = deserializer.readInt32();
        this.victory = deserializer.readBoolean();
    }
}

export class FArenaDetails {
    allianceChooseRequest: FAllianceChooseRequest;
    buildingType: number;
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
    ownerAlliance: number;
    protectionRemainingTime: number;
    restrictedForAllianceToCapture: number;
    restrictedForAllianceToCaptureRemainingTime: number;

    public constructor(init?: Partial<FArenaDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.allianceChooseRequest);
        serializer.writeByte(this.buildingType);
        serializer.writeBoolean(this.canAddDefender);
        serializer.writeBoolean(this.canAttack);
        serializer.writeBoolean(this.capturableGeoPointsLimitReached);
        serializer.writeInt32(this.combinedName);
        serializer.writeStaticObject(this.coords);
        serializer.writeInt32(this.currentExp);
        serializer.writeStaticList(this.defenders, true);
        serializer.writeBoolean(this.hasRemoteBuildingControlAction);
        serializer.writeUtf8String(this.id);
        serializer.writeInt32(this.level);
        serializer.writeBoolean(this.libraryBlocked);
        serializer.writeInt32(this.minUseLevel);
        serializer.writeInt32(this.nextLevelExp);
        serializer.writeDynamicObject(this.ownerAlliance);
        serializer.writeFloat(this.protectionRemainingTime);
        serializer.writeDynamicObject(this.restrictedForAllianceToCapture);
        serializer.writeFloat(this.restrictedForAllianceToCaptureRemainingTime);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceChooseRequest = deserializer.readDynamicObject();
        this.buildingType = deserializer.readByte();
        this.canAddDefender = deserializer.readBoolean();
        this.canAttack = deserializer.readBoolean();
        this.capturableGeoPointsLimitReached = deserializer.readBoolean();
        this.combinedName = deserializer.readInt32();
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.currentExp = deserializer.readInt32();
        this.defenders = deserializer.readStaticList('FDefenderDetails', true);
        this.hasRemoteBuildingControlAction = deserializer.readBoolean();
        this.id = deserializer.readUtf8String();
        this.level = deserializer.readInt32();
        this.libraryBlocked = deserializer.readBoolean();
        this.minUseLevel = deserializer.readInt32();
        this.nextLevelExp = deserializer.readInt32();
        this.ownerAlliance = deserializer.readDynamicObject();
        this.protectionRemainingTime = deserializer.readFloat();
        this.restrictedForAllianceToCapture = deserializer.readDynamicObject();
        this.restrictedForAllianceToCaptureRemainingTime = deserializer.readFloat();
    }
}

export class FArenaWithBattleUpdate {
    arenaWithBattle: Set<string>;

    public constructor(init?: Partial<FArenaWithBattleUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticHashSet(this.arenaWithBattle, true);
    }
    deserialize(deserializer: Deserializer) {
        this.arenaWithBattle = deserializer.readStaticHashSet('string', true);
    }
}

export class FArtifactsUpdate {
    artifacts: number[];
    artifactsBagSize: number;
    artifactsSlots: number;
    hasDeposit: boolean;
    putOn: number[];

    public constructor(init?: Partial<FArtifactsUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.artifacts, true);
        serializer.writeInt32(this.artifactsBagSize);
        serializer.writeInt32(this.artifactsSlots);
        serializer.writeBoolean(this.hasDeposit);
        serializer.writeStaticList(this.putOn, true);
    }
    deserialize(deserializer: Deserializer) {
        this.artifacts = deserializer.readStaticList('ArtifactName', true);
        this.artifactsBagSize = deserializer.readInt32();
        this.artifactsSlots = deserializer.readInt32();
        this.hasDeposit = deserializer.readBoolean();
        this.putOn = deserializer.readStaticList('ArtifactName', true);
    }
}

export class FAttackArenaRequest {
    buildingRequest: FBuildingRequest;
    coords: GeoCoords;
    selectedCreatures: string[];

    public constructor(init?: Partial<FAttackArenaRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.buildingRequest);
        serializer.writeStaticObject(this.coords);
        serializer.writeStaticList(this.selectedCreatures, true);
    }
    deserialize(deserializer: Deserializer) {
        this.buildingRequest = deserializer.readStaticObject('FBuildingRequest') as FBuildingRequest;
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.selectedCreatures = deserializer.readStaticList('string', true);
    }
}

export class FAuthData {
    config: FConfig;
    info: FUserInfo;

    public constructor(init?: Partial<FAuthData>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.config);
        serializer.writeStaticObject(this.info);
    }
    deserialize(deserializer: Deserializer) {
        this.config = deserializer.readStaticObject('FConfig') as FConfig;
        this.info = deserializer.readStaticObject('FUserInfo') as FUserInfo;
    }
}

export class FAvaUpdate {
    activationRadius: number;
    activationRadiusIncreased: boolean;
    activationRadiusIncreasedLeftTime: long;
    alliance: number;
    altarCoords: GeoCoords;
    buddy: FBuddy;
    buffs: FBuff[];
    candies: Map<number, number>; // Map
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
    recipes: number[];
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

    public constructor(init?: Partial<FAvaUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDouble(this.activationRadius);
        serializer.writeBoolean(this.activationRadiusIncreased);
        serializer.writeInt64(this.activationRadiusIncreasedLeftTime);
        serializer.writeDynamicObject(this.alliance);
        serializer.writeDynamicObject(this.altarCoords);
        serializer.writeDynamicObject(this.buddy);
        serializer.writeStaticList(this.buffs, true);
        serializer.writeStaticMap(this.candies, true, true);
        serializer.writeInt32(this.coins);
        serializer.writeInt32(this.creatureStorageSize);
        serializer.writeInt32(this.currentExperience);
        serializer.writeInt64(this.doubleDropDuration);
        serializer.writeInt64(this.doubleDropLeftTime);
        serializer.writeDynamicObject(this.dungeonId);
        serializer.writeInt32(this.dust);
        serializer.writeFloat(this.exp);
        serializer.writeInt64(this.experienceBoosterDuration);
        serializer.writeInt64(this.experienceBoosterLeftTime);
        serializer.writeInt64(this.incenseDuration);
        serializer.writeInt64(this.incenseLeftTime);
        serializer.writeBoolean(this.isArtifactsBagFull);
        serializer.writeBoolean(this.isBagFull);
        serializer.writeBoolean(this.isEggBagFull);
        serializer.writeInt32(this.level);
        serializer.writeInt32(this.nextLevelExperience);
        serializer.writeStaticList(this.recipes, true);
        serializer.writeInt64(this.registerDate);
        serializer.writeInt32(this.scoutChargesLeft);
        serializer.writeFloat(this.scoutRadius);
        serializer.writeInt32(this.slugLeftTime);
        serializer.writeInt64(this.stopFieldDuration);
        serializer.writeInt64(this.stopFieldLeftTime);
        serializer.writeDynamicObject(this.superVisionCenter);
        serializer.writeInt64(this.superVisionDuration);
        serializer.writeInt64(this.superVisionLeftTime);
        serializer.writeInt32(this.totalDistance);
    }
    deserialize(deserializer: Deserializer) {
        this.activationRadius = deserializer.readDouble();
        this.activationRadiusIncreased = deserializer.readBoolean();
        this.activationRadiusIncreasedLeftTime = deserializer.readInt64();
        this.alliance = deserializer.readDynamicObject();
        this.altarCoords = deserializer.readDynamicObject();
        this.buddy = deserializer.readDynamicObject();
        this.buffs = deserializer.readStaticList('FBuff', true);
        this.candies = deserializer.readStaticMap('CreatureType', 'int', true, true);
        this.coins = deserializer.readInt32();
        this.creatureStorageSize = deserializer.readInt32();
        this.currentExperience = deserializer.readInt32();
        this.doubleDropDuration = deserializer.readInt64();
        this.doubleDropLeftTime = deserializer.readInt64();
        this.dungeonId = deserializer.readDynamicObject();
        this.dust = deserializer.readInt32();
        this.exp = deserializer.readFloat();
        this.experienceBoosterDuration = deserializer.readInt64();
        this.experienceBoosterLeftTime = deserializer.readInt64();
        this.incenseDuration = deserializer.readInt64();
        this.incenseLeftTime = deserializer.readInt64();
        this.isArtifactsBagFull = deserializer.readBoolean();
        this.isBagFull = deserializer.readBoolean();
        this.isEggBagFull = deserializer.readBoolean();
        this.level = deserializer.readInt32();
        this.nextLevelExperience = deserializer.readInt32();
        this.recipes = deserializer.readStaticList('RecipeType', true);
        this.registerDate = deserializer.readInt64();
        this.scoutChargesLeft = deserializer.readInt32();
        this.scoutRadius = deserializer.readFloat();
        this.slugLeftTime = deserializer.readInt32();
        this.stopFieldDuration = deserializer.readInt64();
        this.stopFieldLeftTime = deserializer.readInt64();
        this.superVisionCenter = deserializer.readDynamicObject();
        this.superVisionDuration = deserializer.readInt64();
        this.superVisionLeftTime = deserializer.readInt64();
        this.totalDistance = deserializer.readInt32();
    }
}

export class FBagItem {
    count: number;
    removable: boolean;
    stack: boolean;
    type: number;

    public constructor(init?: Partial<FBagItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.count);
        serializer.writeBoolean(this.removable);
        serializer.writeBoolean(this.stack);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.count = deserializer.readInt32();
        this.removable = deserializer.readBoolean();
        this.stack = deserializer.readBoolean();
        this.type = deserializer.readByte();
    }
}

export class FBagUpdate {
    allowedItemsSize: number;
    incenseGenMonstersGroupName: string;
    items: FBagItem[];
    lockedRunes: Map<number, number>; // Map

    public constructor(init?: Partial<FBagUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.allowedItemsSize);
        serializer.writeUtf8String(this.incenseGenMonstersGroupName);
        serializer.writeStaticList(this.items, true);
        serializer.writeStaticMap(this.lockedRunes, true, true);
    }
    deserialize(deserializer: Deserializer) {
        this.allowedItemsSize = deserializer.readInt32();
        this.incenseGenMonstersGroupName = deserializer.readUtf8String();
        this.items = deserializer.readStaticList('FBagItem', true);
        this.lockedRunes = deserializer.readStaticMap('ItemType', 'int', true, true);
    }
}

export class FBaseItemUpdate {

    public constructor(init?: Partial<FBaseItemUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
    }
    deserialize(deserializer: Deserializer) {
    }
}

export class FBaseLootItem {
    qty: number;

    public constructor(init?: Partial<FBaseLootItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
    }
}

export class FBuddy {
    alias: string;
    candyType: number;
    creature: number;
    currentWalked: number;
    distanceForCandies: number;
    id: string;
    totalCandies: number;
    totalWalked: number;

    public constructor(init?: Partial<FBuddy>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.alias);
        serializer.writeByte(this.candyType);
        serializer.writeByte(this.creature);
        serializer.writeInt32(this.currentWalked);
        serializer.writeInt32(this.distanceForCandies);
        serializer.writeUtf8String(this.id);
        serializer.writeInt32(this.totalCandies);
        serializer.writeInt32(this.totalWalked);
    }
    deserialize(deserializer: Deserializer) {
        this.alias = deserializer.readDynamicObject();
        this.candyType = deserializer.readByte();
        this.creature = deserializer.readByte();
        this.currentWalked = deserializer.readInt32();
        this.distanceForCandies = deserializer.readInt32();
        this.id = deserializer.readUtf8String();
        this.totalCandies = deserializer.readInt32();
        this.totalWalked = deserializer.readInt32();
    }
}

export class FBuff {
    buffType: number;
    duration: long;
    timeLeft: long;
    valuePercent: number;

    public constructor(init?: Partial<FBuff>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.buffType);
        serializer.writeInt64(this.duration);
        serializer.writeInt64(this.timeLeft);
        serializer.writeInt32(this.valuePercent);
    }
    deserialize(deserializer: Deserializer) {
        this.buffType = deserializer.readByte();
        this.duration = deserializer.readInt64();
        this.timeLeft = deserializer.readInt64();
        this.valuePercent = deserializer.readInt32();
    }
}

export class FBuilding {
    altar: FAltar;
    arena: FArena;
    available: boolean;
    casted: boolean;
    coords: GeoCoords;
    dungeonId: string;
    expirationTime: long;
    id: string;
    pitstop: FPitstop;
    type: number;

    public constructor(init?: Partial<FBuilding>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.altar);
        serializer.writeDynamicObject(this.arena);
        serializer.writeBoolean(this.available);
        serializer.writeBoolean(this.casted);
        serializer.writeStaticObject(this.coords);
        serializer.writeDynamicObject(this.dungeonId);
        serializer.writeInt64(this.expirationTime);
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.pitstop);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.altar = deserializer.readDynamicObject();
        this.arena = deserializer.readDynamicObject();
        this.available = deserializer.readBoolean();
        this.casted = deserializer.readBoolean();
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.dungeonId = deserializer.readDynamicObject();
        this.expirationTime = deserializer.readInt64();
        this.id = deserializer.readUtf8String();
        this.pitstop = deserializer.readDynamicObject();
        this.type = deserializer.readByte();
    }
}

export class FBuildingRequest {
    coords: GeoCoords;
    dungeonId: string;
    id: string;

    public constructor(init?: Partial<FBuildingRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords);
        serializer.writeDynamicObject(this.dungeonId);
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.dungeonId = deserializer.readDynamicObject();
        this.id = deserializer.readUtf8String();
    }
}

export class FBuildingUpdate {
    tileBuildings: Map<FTile, FTile>; // Map

    public constructor(init?: Partial<FBuildingUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.tileBuildings, true, true);
    }
    deserialize(deserializer: Deserializer) {
        this.tileBuildings = deserializer.readStaticMap('FTile', 'FTileState', true, true);
    }
}

export class FCatchCreatureResult {
    avaUpdate: FAvaUpdate;
    ballType: number;
    candies: number;
    candyType: number;
    catchChance: number;
    catching: FCatchingConfig;
    caught: boolean;
    creadex: FCreadex;
    creature: number;
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

    public constructor(init?: Partial<FCatchCreatureResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.avaUpdate);
        serializer.writeDynamicObject(this.ballType);
        serializer.writeInt32(this.candies);
        serializer.writeDynamicObject(this.candyType);
        serializer.writeFloat(this.catchChance);
        serializer.writeDynamicObject(this.catching);
        serializer.writeBoolean(this.caught);
        serializer.writeDynamicObject(this.creadex);
        serializer.writeDynamicObject(this.creature);
        serializer.writeInt32(this.dust);
        serializer.writeInt32(this.expAccurate);
        serializer.writeInt32(this.expCreatureExisting);
        serializer.writeInt32(this.expCreatureNew);
        serializer.writeInt32(this.expSpin);
        serializer.writeStaticObject(this.levelUpLoot);
        serializer.writeStaticObject(this.loot);
        serializer.writeBoolean(this.runAway);
        serializer.writeInt32(this.streakDust);
        serializer.writeDynamicObject(this.userCreature);
    }
    deserialize(deserializer: Deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate') as FAvaUpdate;
        this.ballType = deserializer.readDynamicObject();
        this.candies = deserializer.readInt32();
        this.candyType = deserializer.readDynamicObject();
        this.catchChance = deserializer.readFloat();
        this.catching = deserializer.readDynamicObject();
        this.caught = deserializer.readBoolean();
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readDynamicObject();
        this.dust = deserializer.readInt32();
        this.expAccurate = deserializer.readInt32();
        this.expCreatureExisting = deserializer.readInt32();
        this.expCreatureNew = deserializer.readInt32();
        this.expSpin = deserializer.readInt32();
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.runAway = deserializer.readBoolean();
        this.streakDust = deserializer.readInt32();
        this.userCreature = deserializer.readDynamicObject();
    }
}

export class FCatchingConfig {
    catchChances: Map<number, number>; // Map
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

    public constructor(init?: Partial<FCatchingConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.catchChances, true, true);
        serializer.writeFloat(this.chanceToAttack);
        serializer.writeFloat(this.chanceToJump);
        serializer.writeFloat(this.distance);
        serializer.writeFloat(this.endCamPosDistance);
        serializer.writeFloat(this.endCamPosHeight);
        serializer.writeFloat(this.flyTime);
        serializer.writeFloat(this.height);
        serializer.writeFloat(this.lookAtHeight);
        serializer.writeFloat(this.maxDistance);
        serializer.writeFloat(this.maxHeight);
        serializer.writeFloat(this.moveCheckCooldownSeconds);
        serializer.writeFloat(this.offsetDistance);
        serializer.writeFloat(this.offsetHeight);
        serializer.writeFloat(this.scale);
        serializer.writeFloat(this.scaleCollider);
        serializer.writeFloat(this.sightRadiusDecreaseTimeSeconds);
        serializer.writeFloat(this.sightRadiusMax);
        serializer.writeFloat(this.sightRadiusMin);
        serializer.writeFloat(this.startCamPosDistance);
        serializer.writeFloat(this.startCamPosHeight);
    }
    deserialize(deserializer: Deserializer) {
        this.catchChances = deserializer.readStaticMap('ItemType', 'float', true, true);
        this.chanceToAttack = deserializer.readFloat();
        this.chanceToJump = deserializer.readFloat();
        this.distance = deserializer.readFloat();
        this.endCamPosDistance = deserializer.readFloat();
        this.endCamPosHeight = deserializer.readFloat();
        this.flyTime = deserializer.readFloat();
        this.height = deserializer.readFloat();
        this.lookAtHeight = deserializer.readFloat();
        this.maxDistance = deserializer.readFloat();
        this.maxHeight = deserializer.readFloat();
        this.moveCheckCooldownSeconds = deserializer.readFloat();
        this.offsetDistance = deserializer.readFloat();
        this.offsetHeight = deserializer.readFloat();
        this.scale = deserializer.readFloat();
        this.scaleCollider = deserializer.readFloat();
        this.sightRadiusDecreaseTimeSeconds = deserializer.readFloat();
        this.sightRadiusMax = deserializer.readFloat();
        this.sightRadiusMin = deserializer.readFloat();
        this.startCamPosDistance = deserializer.readFloat();
        this.startCamPosHeight = deserializer.readFloat();
    }
}

export class FCatchingCreature {
    aggressive: boolean;
    candyType: number;
    catching: FCatchingConfig;
    cp: number;
    element: number;
    feedFoodType: number;
    feedLeftTime: number;
    id: string;
    isCreatureStorageFull: boolean;
    items: Map<number, number>; // Map
    name: number;
    quality: number;

    public constructor(init?: Partial<FCatchingCreature>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.aggressive);
        serializer.writeByte(this.candyType);
        serializer.writeDynamicObject(this.catching);
        serializer.writeInt32(this.cp);
        serializer.writeByte(this.element);
        serializer.writeDynamicObject(this.feedFoodType);
        serializer.writeInt32(this.feedLeftTime);
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.isCreatureStorageFull);
        serializer.writeStaticMap(this.items, true, true);
        serializer.writeByte(this.name);
        serializer.writeFloat(this.quality);
    }
    deserialize(deserializer: Deserializer) {
        this.aggressive = deserializer.readBoolean();
        this.candyType = deserializer.readByte();
        this.catching = deserializer.readDynamicObject();
        this.cp = deserializer.readInt32();
        this.element = deserializer.readByte();
        this.feedFoodType = deserializer.readDynamicObject();
        this.feedLeftTime = deserializer.readInt32();
        this.id = deserializer.readUtf8String();
        this.isCreatureStorageFull = deserializer.readBoolean();
        this.items = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.name = deserializer.readByte();
        this.quality = deserializer.readFloat();
    }
}

export class FChest {
    coords: GeoCoords;
    id: string;

    public constructor(init?: Partial<FChest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords);
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.id = deserializer.readUtf8String();
    }
}

export class FChestUpdate {
    chests: FChest[];

    public constructor(init?: Partial<FChestUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.chests, true);
    }
    deserialize(deserializer: Deserializer) {
        this.chests = deserializer.readStaticList('FChest', true);
    }
}

export class FClientInfo {
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

    public constructor(init?: Partial<FClientInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.deviceModel);
        serializer.writeDynamicObject(this.googleAdvertisingId);
        serializer.writeBoolean(this.googleTrackingEnabled);
        serializer.writeDynamicObject(this.iOsAdvertisingIdentifier);
        serializer.writeBoolean(this.iOsAdvertisingTrackingEnabled);
        serializer.writeDynamicObject(this.iOsVendorIdentifier);
        serializer.writeUtf8String(this.language);
        serializer.writeUtf8String(this.platform);
        serializer.writeUtf8String(this.platformVersion);
        serializer.writeUtf8String(this.revision);
        serializer.writeInt32(this.screenHeight);
        serializer.writeInt32(this.screenWidth);
    }
    deserialize(deserializer: Deserializer) {
        this.deviceModel = deserializer.readUtf8String();
        this.googleAdvertisingId = deserializer.readDynamicObject();
        this.googleTrackingEnabled = deserializer.readBoolean();
        this.iOsAdvertisingIdentifier = deserializer.readDynamicObject();
        this.iOsAdvertisingTrackingEnabled = deserializer.readBoolean();
        this.iOsVendorIdentifier = deserializer.readDynamicObject();
        this.language = deserializer.readUtf8String();
        this.platform = deserializer.readUtf8String();
        this.platformVersion = deserializer.readUtf8String();
        this.revision = deserializer.readUtf8String();
        this.screenHeight = deserializer.readInt32();
        this.screenWidth = deserializer.readInt32();
    }
}

export class FClientRequest {
    coords: GeoCoords;
    currentUtcOffsetSeconds: number;
    time: long;

    public constructor(init?: Partial<FClientRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords);
        serializer.writeInt32(this.currentUtcOffsetSeconds);
        serializer.writeInt64(this.time);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.currentUtcOffsetSeconds = deserializer.readInt32();
        this.time = deserializer.readInt64();
    }
}

export class FConfig {
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
    catchPopup: Map<number, number>; // SortedMap
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
    runes: Map<number, number>; // Map
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

    public constructor(init?: Partial<FConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeFloat(this.aggressiveChanceToAttack);
        serializer.writeFloat(this.aggressiveChanceToJump);
        serializer.writeFloat(this.aggressiveChancesCooldownTime);
        serializer.writeInt32(this.altarAvailableFromLevel);
        serializer.writeFloat(this.angularDrag);
        serializer.writeStaticArray(this.arenaLayerLevels, true);
        serializer.writeStaticArray(this.arenaLevelsThreshold, true);
        serializer.writeInt32(this.avatarMoveMaxDistanceRun);
        serializer.writeInt32(this.avatarMoveRunSpeed);
        serializer.writeFloat(this.ballCurve);
        serializer.writeInt32(this.battlesEnhancedLimitPrice);
        serializer.writeInt32(this.buildingsVisionRadius);
        serializer.writeFloat(this.cameraFieldOfView);
        serializer.writeStaticMap(this.catchPopup, true, true);
        serializer.writeStaticArray(this.congratulationLayerLevels, true);
        serializer.writeInt32(this.creaturesDelayVisibility);
        serializer.writeInt32(this.dailyQuestAvailableFromLevel);
        serializer.writeInt32(this.defenderBaseAttackBeforeChargedMax);
        serializer.writeInt32(this.defenderBaseAttackBeforeChargedMin);
        serializer.writeFloat(this.delayForCheckMaxSpeedToPlay);
        serializer.writeFloat(this.delayToDisableGameBecauseOfLowGPSAccuracy);
        serializer.writeFloat(this.desiredGpsAccuracy);
        serializer.writeFloat(this.distanceToLoadTiles);
        serializer.writeFloat(this.distanceToUnloadTiles);
        serializer.writeBoolean(this.dummy);
        serializer.writeInt32(this.encounterDelaySinceStartup);
        serializer.writeFloat(this.fogEndDistance);
        serializer.writeFloat(this.fogStartDistance);
        serializer.writeFloat(this.goOrbitDistance);
        serializer.writeFloat(this.goOrbitDistanceMax);
        serializer.writeFloat(this.goOrbitDistanceMin);
        serializer.writeFloat(this.goOrbitHeightMaxLimit);
        serializer.writeFloat(this.goOrbitHeightMinLimit);
        serializer.writeFloat(this.goOrbitOffsetMax);
        serializer.writeFloat(this.goOrbitOffsetMin);
        serializer.writeFloat(this.highSpeedDurationRequiredForWarning);
        serializer.writeUtf8String(this.mapServer);
        serializer.writeInt32(this.mapVersion);
        serializer.writeInt32(this.maxAngularVelocity);
        serializer.writeFloat(this.maxClientPauseDuration);
        serializer.writeFloat(this.maxSpeedForUse);
        serializer.writeInt32(this.maxSpeedToPlay);
        serializer.writeFloat(this.monsterLevelPerUserLevel);
        serializer.writeInt32(this.monsterMaxLevel);
        serializer.writeInt32(this.personalizationPrice);
        serializer.writeStaticObject(this.potionConfig);
        serializer.writeDouble(this.radarVisionRadius);
        serializer.writeStaticMap(this.runes, true, true);
        serializer.writeInt64(this.serverTime);
        serializer.writeFloat(this.spinGain);
        serializer.writeFloat(this.superVisionEffectInterval);
        serializer.writeInt32(this.superVisionRadius);
        serializer.writeFloat(this.timeLimitPerDefender);
        serializer.writeInt32(this.updateRequestCooldownSeconds);
        serializer.writeInt32(this.updateRequestIgnoreWorseAccuracyCooldownSeconds);
        serializer.writeInt32(this.updateRequestMinimalDistance);
        serializer.writeInt32(this.updateRequestPeriodSeconds);
        serializer.writeInt32(this.weeklyQuestAvailableFromLevel);
        serializer.writeInt32(this.wizardAvailableFromLevel);
        serializer.writeInt32(this.wizardEnhanceCount);
        serializer.writeFloat(this.xVelocityFactor);
        serializer.writeFloat(this.xVelocityFactorSpin);
        serializer.writeFloat(this.yVelocityFactor);
    }
    deserialize(deserializer: Deserializer) {
        this.aggressiveChanceToAttack = deserializer.readFloat();
        this.aggressiveChanceToJump = deserializer.readFloat();
        this.aggressiveChancesCooldownTime = deserializer.readFloat();
        this.altarAvailableFromLevel = deserializer.readInt32();
        this.angularDrag = deserializer.readFloat();
        this.arenaLayerLevels = deserializer.readStaticArray('int', true);
        this.arenaLevelsThreshold = deserializer.readStaticArray('int', true);
        this.avatarMoveMaxDistanceRun = deserializer.readInt32();
        this.avatarMoveRunSpeed = deserializer.readInt32();
        this.ballCurve = deserializer.readFloat();
        this.battlesEnhancedLimitPrice = deserializer.readInt32();
        this.buildingsVisionRadius = deserializer.readInt32();
        this.cameraFieldOfView = deserializer.readFloat();
        this.catchPopup = deserializer.readStaticMap('float', 'string', true, true);
        this.congratulationLayerLevels = deserializer.readStaticArray('int', true);
        this.creaturesDelayVisibility = deserializer.readInt32();
        this.dailyQuestAvailableFromLevel = deserializer.readInt32();
        this.defenderBaseAttackBeforeChargedMax = deserializer.readInt32();
        this.defenderBaseAttackBeforeChargedMin = deserializer.readInt32();
        this.delayForCheckMaxSpeedToPlay = deserializer.readFloat();
        this.delayToDisableGameBecauseOfLowGPSAccuracy = deserializer.readFloat();
        this.desiredGpsAccuracy = deserializer.readFloat();
        this.distanceToLoadTiles = deserializer.readFloat();
        this.distanceToUnloadTiles = deserializer.readFloat();
        this.dummy = deserializer.readBoolean();
        this.encounterDelaySinceStartup = deserializer.readInt32();
        this.fogEndDistance = deserializer.readFloat();
        this.fogStartDistance = deserializer.readFloat();
        this.goOrbitDistance = deserializer.readFloat();
        this.goOrbitDistanceMax = deserializer.readFloat();
        this.goOrbitDistanceMin = deserializer.readFloat();
        this.goOrbitHeightMaxLimit = deserializer.readFloat();
        this.goOrbitHeightMinLimit = deserializer.readFloat();
        this.goOrbitOffsetMax = deserializer.readFloat();
        this.goOrbitOffsetMin = deserializer.readFloat();
        this.highSpeedDurationRequiredForWarning = deserializer.readFloat();
        this.mapServer = deserializer.readUtf8String();
        this.mapVersion = deserializer.readInt32();
        this.maxAngularVelocity = deserializer.readInt32();
        this.maxClientPauseDuration = deserializer.readFloat();
        this.maxSpeedForUse = deserializer.readFloat();
        this.maxSpeedToPlay = deserializer.readInt32();
        this.monsterLevelPerUserLevel = deserializer.readFloat();
        this.monsterMaxLevel = deserializer.readInt32();
        this.personalizationPrice = deserializer.readInt32();
        this.potionConfig = deserializer.readStaticObject('PotionConfig') as PotionConfig;
        this.radarVisionRadius = deserializer.readDouble();
        this.runes = deserializer.readStaticMap('RecipeType', 'List<object>', true, true);
        this.serverTime = deserializer.readInt64();
        this.spinGain = deserializer.readFloat();
        this.superVisionEffectInterval = deserializer.readFloat();
        this.superVisionRadius = deserializer.readInt32();
        this.timeLimitPerDefender = deserializer.readFloat();
        this.updateRequestCooldownSeconds = deserializer.readInt32();
        this.updateRequestIgnoreWorseAccuracyCooldownSeconds = deserializer.readInt32();
        this.updateRequestMinimalDistance = deserializer.readInt32();
        this.updateRequestPeriodSeconds = deserializer.readInt32();
        this.weeklyQuestAvailableFromLevel = deserializer.readInt32();
        this.wizardAvailableFromLevel = deserializer.readInt32();
        this.wizardEnhanceCount = deserializer.readInt32();
        this.xVelocityFactor = deserializer.readFloat();
        this.xVelocityFactorSpin = deserializer.readFloat();
        this.yVelocityFactor = deserializer.readFloat();
    }
}

export class FCreadex {
    entries: FCreadexEntry[];

    public constructor(init?: Partial<FCreadex>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.entries, true);
    }
    deserialize(deserializer: Deserializer) {
        this.entries = deserializer.readStaticList('FCreadexEntry', true);
    }
}

export class FCreadexChain {
    caught: boolean;
    creature: number;
    seen: boolean;

    public constructor(init?: Partial<FCreadexChain>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.caught);
        serializer.writeByte(this.creature);
        serializer.writeBoolean(this.seen);
    }
    deserialize(deserializer: Deserializer) {
        this.caught = deserializer.readBoolean();
        this.creature = deserializer.readByte();
        this.seen = deserializer.readBoolean();
    }
}

export class FCreadexEntry {
    caughtQuantity: number;
    chain: FCreadexChain[];
    element: number;
    name: number;
    seen: boolean;
    tier: number;

    public constructor(init?: Partial<FCreadexEntry>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.caughtQuantity);
        serializer.writeStaticList(this.chain, true);
        serializer.writeByte(this.element);
        serializer.writeByte(this.name);
        serializer.writeBoolean(this.seen);
        serializer.writeInt32(this.tier);
    }
    deserialize(deserializer: Deserializer) {
        this.caughtQuantity = deserializer.readInt32();
        this.chain = deserializer.readStaticList('FCreadexChain', true);
        this.element = deserializer.readByte();
        this.name = deserializer.readByte();
        this.seen = deserializer.readBoolean();
        this.tier = deserializer.readInt32();
    }
}

export class FCreatureRequest {
    id: string;
    veryFirst: boolean;

    public constructor(init?: Partial<FCreatureRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.veryFirst);
    }
    deserialize(deserializer: Deserializer) {
        this.id = deserializer.readUtf8String();
        this.veryFirst = deserializer.readBoolean();
    }
}

export class FCreatureUpdate {
    inRadar: FWildCreature[];
    wilds: FWildCreature[];

    public constructor(init?: Partial<FCreatureUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.inRadar, true);
        serializer.writeStaticList(this.wilds, true);
    }
    deserialize(deserializer: Deserializer) {
        this.inRadar = deserializer.readStaticList('FWildCreature', true);
        this.wilds = deserializer.readStaticList('FWildCreature', true);
    }
}

export class FDailyQuest {
    count: number;
    elementType: number;
    id: string;
    nextDailyQuestIn: number;
    pitstopPath: IdAndCoords[];
    progress: number;
    type: number;

    public constructor(init?: Partial<FDailyQuest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.count);
        serializer.writeDynamicObject(this.elementType);
        serializer.writeDynamicObject(this.id);
        serializer.writeInt32(this.nextDailyQuestIn);
        serializer.writeStaticList(this.pitstopPath, true);
        serializer.writeInt32(this.progress);
        serializer.writeDynamicObject(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.count = deserializer.readInt32();
        this.elementType = deserializer.readDynamicObject();
        this.id = deserializer.readDynamicObject();
        this.nextDailyQuestIn = deserializer.readInt32();
        this.pitstopPath = deserializer.readStaticList('IdAndCoords', true);
        this.progress = deserializer.readInt32();
        this.type = deserializer.readDynamicObject();
    }
}

export class FDefenderDetails {
    allianceType: number;
    creatureAlias: string;
    creatureCp: number;
    creatureName: number;
    elementType: number;
    ownerLevel: number;
    ownerName: string;
    userAppearance: number;

    public constructor(init?: Partial<FDefenderDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.allianceType);
        serializer.writeDynamicObject(this.creatureAlias);
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureName);
        serializer.writeByte(this.elementType);
        serializer.writeInt32(this.ownerLevel);
        serializer.writeUtf8String(this.ownerName);
        serializer.writeInt32(this.userAppearance);
    }
    deserialize(deserializer: Deserializer) {
        this.allianceType = deserializer.readByte();
        this.creatureAlias = deserializer.readDynamicObject();
        this.creatureCp = deserializer.readInt32();
        this.creatureName = deserializer.readByte();
        this.elementType = deserializer.readByte();
        this.ownerLevel = deserializer.readInt32();
        this.ownerName = deserializer.readUtf8String();
        this.userAppearance = deserializer.readInt32();
    }
}

export class FDepositInfo {
    depositAmount: number;
    duration: number;
    isOnUser: boolean;
    leftTime: long;
    percent: number;

    public constructor(init?: Partial<FDepositInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.depositAmount);
        serializer.writeInt32(this.duration);
        serializer.writeBoolean(this.isOnUser);
        serializer.writeInt64(this.leftTime);
        serializer.writeFloat(this.percent);
    }
    deserialize(deserializer: Deserializer) {
        this.depositAmount = deserializer.readInt32();
        this.duration = deserializer.readInt32();
        this.isOnUser = deserializer.readBoolean();
        this.leftTime = deserializer.readInt64();
        this.percent = deserializer.readFloat();
    }
}

export class FDungeonUpdate {
    coords: GeoCoords;
    rotation: number;
    size: number;
    type: number;

    public constructor(init?: Partial<FDungeonUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords);
        serializer.writeFloat(this.rotation);
        serializer.writeInt32(this.size);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.rotation = deserializer.readFloat();
        this.size = deserializer.readInt32();
        this.type = deserializer.readByte();
    }
}

export class FEgg {
    eggType: number;
    id: string;
    incubatorId: string;
    isEggForRoost: boolean;
    isHatching: boolean;
    passedDistance: number;
    totalDistance: number;
    totalIncubationTime: long;

    public constructor(init?: Partial<FEgg>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.eggType);
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.incubatorId);
        serializer.writeBoolean(this.isEggForRoost);
        serializer.writeBoolean(this.isHatching);
        serializer.writeFloat(this.passedDistance);
        serializer.writeFloat(this.totalDistance);
        serializer.writeInt64(this.totalIncubationTime);
    }
    deserialize(deserializer: Deserializer) {
        this.eggType = deserializer.readByte();
        this.id = deserializer.readUtf8String();
        this.incubatorId = deserializer.readDynamicObject();
        this.isEggForRoost = deserializer.readBoolean();
        this.isHatching = deserializer.readBoolean();
        this.passedDistance = deserializer.readFloat();
        this.totalDistance = deserializer.readFloat();
        this.totalIncubationTime = deserializer.readInt64();
    }
}

export class FEncounterBattleResult {
    loot: FLoot;
    resultScreenDelay: number;
    victory: boolean;

    public constructor(init?: Partial<FEncounterBattleResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.loot);
        serializer.writeFloat(this.resultScreenDelay);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer: Deserializer) {
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.resultScreenDelay = deserializer.readFloat();
        this.victory = deserializer.readBoolean();
    }
}

export class FEncounterDetails {
    coords: GeoCoords;
    creatureCp: number;
    creatureElementType: number;
    creatureName: number;
    id: string;
    level: number;

    public constructor(init?: Partial<FEncounterDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords);
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureElementType);
        serializer.writeByte(this.creatureName);
        serializer.writeUtf8String(this.id);
        serializer.writeInt32(this.level);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.creatureCp = deserializer.readInt32();
        this.creatureElementType = deserializer.readByte();
        this.creatureName = deserializer.readByte();
        this.id = deserializer.readUtf8String();
        this.level = deserializer.readInt32();
    }
}

export class FEncounterUpdate {
    attacker: FFightCreature;
    defender: FFightCreature;

    public constructor(init?: Partial<FEncounterUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.attacker);
        serializer.writeStaticObject(this.defender);
    }
    deserialize(deserializer: Deserializer) {
        this.attacker = deserializer.readStaticObject('FFightCreature') as FFightCreature;
        this.defender = deserializer.readStaticObject('FFightCreature') as FFightCreature;
    }
}

export class FFeedMonsterResult {
    feedLiveTime: long;

    public constructor(init?: Partial<FFeedMonsterResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt64(this.feedLiveTime);
    }
    deserialize(deserializer: Deserializer) {
        this.feedLiveTime = deserializer.readInt64();
    }
}

export class FFightCreature {
    alias: string;
    attacker: boolean;
    baseCp: number;
    chargedSkill: string;
    chargedSkillAim: boolean;
    chargedSkillAngle: number;
    chargedSkillDps: number;
    chargedSkillQuality: number;
    chargedSkillSpeed: number;
    chargedSkillTtl: number;
    cp: number;
    decreasedDmgTo: number;
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
    increasedDmgTo: number;
    mainSkill: string;
    mainSkillAim: boolean;
    mainSkillAngle: number;
    mainSkillDps: number;
    mainSkillQuality: number;
    mainSkillSpeed: number;
    mainSkillTtl: number;
    maxEnergy: number;
    name: number;
    rightElementAttackCoef: number;
    scale: number;
    specAttackCoef: number;
    startCamPosDistance: number;
    startCamPosHeight: number;
    totalHp: number;
    type: number;
    wrongElementAttackCoef: number;

    public constructor(init?: Partial<FFightCreature>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.alias);
        serializer.writeBoolean(this.attacker);
        serializer.writeInt32(this.baseCp);
        serializer.writeUtf8String(this.chargedSkill);
        serializer.writeBoolean(this.chargedSkillAim);
        serializer.writeInt32(this.chargedSkillAngle);
        serializer.writeFloat(this.chargedSkillDps);
        serializer.writeByte(this.chargedSkillQuality);
        serializer.writeFloat(this.chargedSkillSpeed);
        serializer.writeFloat(this.chargedSkillTtl);
        serializer.writeInt32(this.cp);
        serializer.writeByte(this.decreasedDmgTo);
        serializer.writeFloat(this.distance);
        serializer.writeFloat(this.dodgeAngle);
        serializer.writeFloat(this.dodgeDamageRatio);
        serializer.writeFloat(this.dodgeMoveTime);
        serializer.writeInt32(this.energySegments);
        serializer.writeFloat(this.height);
        serializer.writeFloat(this.holdTimeForChargedSkill);
        serializer.writeFloat(this.hp);
        serializer.writeUtf8String(this.id);
        serializer.writeFloat(this.incomingEnergyOnAttack);
        serializer.writeByte(this.increasedDmgTo);
        serializer.writeUtf8String(this.mainSkill);
        serializer.writeBoolean(this.mainSkillAim);
        serializer.writeInt32(this.mainSkillAngle);
        serializer.writeFloat(this.mainSkillDps);
        serializer.writeByte(this.mainSkillQuality);
        serializer.writeFloat(this.mainSkillSpeed);
        serializer.writeFloat(this.mainSkillTtl);
        serializer.writeFloat(this.maxEnergy);
        serializer.writeByte(this.name);
        serializer.writeFloat(this.rightElementAttackCoef);
        serializer.writeFloat(this.scale);
        serializer.writeFloat(this.specAttackCoef);
        serializer.writeFloat(this.startCamPosDistance);
        serializer.writeFloat(this.startCamPosHeight);
        serializer.writeFloat(this.totalHp);
        serializer.writeByte(this.type);
        serializer.writeFloat(this.wrongElementAttackCoef);
    }
    deserialize(deserializer: Deserializer) {
        this.alias = deserializer.readDynamicObject();
        this.attacker = deserializer.readBoolean();
        this.baseCp = deserializer.readInt32();
        this.chargedSkill = deserializer.readUtf8String();
        this.chargedSkillAim = deserializer.readBoolean();
        this.chargedSkillAngle = deserializer.readInt32();
        this.chargedSkillDps = deserializer.readFloat();
        this.chargedSkillQuality = deserializer.readByte();
        this.chargedSkillSpeed = deserializer.readFloat();
        this.chargedSkillTtl = deserializer.readFloat();
        this.cp = deserializer.readInt32();
        this.decreasedDmgTo = deserializer.readByte();
        this.distance = deserializer.readFloat();
        this.dodgeAngle = deserializer.readFloat();
        this.dodgeDamageRatio = deserializer.readFloat();
        this.dodgeMoveTime = deserializer.readFloat();
        this.energySegments = deserializer.readInt32();
        this.height = deserializer.readFloat();
        this.holdTimeForChargedSkill = deserializer.readFloat();
        this.hp = deserializer.readFloat();
        this.id = deserializer.readUtf8String();
        this.incomingEnergyOnAttack = deserializer.readFloat();
        this.increasedDmgTo = deserializer.readByte();
        this.mainSkill = deserializer.readUtf8String();
        this.mainSkillAim = deserializer.readBoolean();
        this.mainSkillAngle = deserializer.readInt32();
        this.mainSkillDps = deserializer.readFloat();
        this.mainSkillQuality = deserializer.readByte();
        this.mainSkillSpeed = deserializer.readFloat();
        this.mainSkillTtl = deserializer.readFloat();
        this.maxEnergy = deserializer.readFloat();
        this.name = deserializer.readByte();
        this.rightElementAttackCoef = deserializer.readFloat();
        this.scale = deserializer.readFloat();
        this.specAttackCoef = deserializer.readFloat();
        this.startCamPosDistance = deserializer.readFloat();
        this.startCamPosHeight = deserializer.readFloat();
        this.totalHp = deserializer.readFloat();
        this.type = deserializer.readByte();
        this.wrongElementAttackCoef = deserializer.readFloat();
    }
}

export class FFightItem {
    attackerDamageReceived: number;
    attackerId: string;
    defenderDamageReceived: number;
    defenderId: string;

    public constructor(init?: Partial<FFightItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeFloat(this.attackerDamageReceived);
        serializer.writeUtf8String(this.attackerId);
        serializer.writeFloat(this.defenderDamageReceived);
        serializer.writeUtf8String(this.defenderId);
    }
    deserialize(deserializer: Deserializer) {
        this.attackerDamageReceived = deserializer.readFloat();
        this.attackerId = deserializer.readUtf8String();
        this.defenderDamageReceived = deserializer.readFloat();
        this.defenderId = deserializer.readUtf8String();
    }
}

export class FFightRequest {
    chargedAttacksByAi: number;
    dodges: number;
    items: FFightItem[];
    leaveBattle: boolean;
    successfulDodges: number;

    public constructor(init?: Partial<FFightRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.chargedAttacksByAi);
        serializer.writeInt32(this.dodges);
        serializer.writeStaticList(this.items, true);
        serializer.writeBoolean(this.leaveBattle);
        serializer.writeInt32(this.successfulDodges);
    }
    deserialize(deserializer: Deserializer) {
        this.chargedAttacksByAi = deserializer.readInt32();
        this.dodges = deserializer.readInt32();
        this.items = deserializer.readStaticList('FFightItem', true);
        this.leaveBattle = deserializer.readBoolean();
        this.successfulDodges = deserializer.readInt32();
    }
}

export class FFightUpdate {
    attackers: FFightCreature[];
    autoChangeAttackerHpPercent: number;
    defenderNickname: string;
    defenders: FFightCreature[];
    dodgeChance: number;

    public constructor(init?: Partial<FFightUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.attackers, true);
        serializer.writeFloat(this.autoChangeAttackerHpPercent);
        serializer.writeDynamicObject(this.defenderNickname);
        serializer.writeStaticList(this.defenders, true);
        serializer.writeFloat(this.dodgeChance);
    }
    deserialize(deserializer: Deserializer) {
        this.attackers = deserializer.readStaticList('FFightCreature', true);
        this.autoChangeAttackerHpPercent = deserializer.readFloat();
        this.defenderNickname = deserializer.readDynamicObject();
        this.defenders = deserializer.readStaticList('FFightCreature', true);
        this.dodgeChance = deserializer.readFloat();
    }
}

export class FHatchedEggs {
    egg: FEgg;
    incubatorId: string;
    loot: FLoot;

    public constructor(init?: Partial<FHatchedEggs>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.egg);
        serializer.writeUtf8String(this.incubatorId);
        serializer.writeStaticObject(this.loot);
    }
    deserialize(deserializer: Deserializer) {
        this.egg = deserializer.readStaticObject('FEgg') as FEgg;
        this.incubatorId = deserializer.readUtf8String();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FHatchingResult {
    avaUpdate: FAvaUpdate;
    creadex: FCreadex;
    creature: FUserCreature;
    levelUpLoot: FLoot;
    loot: FLoot;

    public constructor(init?: Partial<FHatchingResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.avaUpdate);
        serializer.writeDynamicObject(this.creadex);
        serializer.writeStaticObject(this.creature);
        serializer.writeStaticObject(this.levelUpLoot);
        serializer.writeStaticObject(this.loot);
    }
    deserialize(deserializer: Deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate') as FAvaUpdate;
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readStaticObject('FUserCreature') as FUserCreature;
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FInAppEventUpdate {
    events: InAppEventInfo[];

    public constructor(init?: Partial<FInAppEventUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.events, true);
    }
    deserialize(deserializer: Deserializer) {
        this.events = deserializer.readStaticList('InAppEventInfo', true);
    }
}

export class FIncubator {
    eggId: string;
    incubatorId: string;
    roostBuildingId: string;
    slotIndex: number;
    usagesLeft: number;

    public constructor(init?: Partial<FIncubator>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.eggId);
        serializer.writeUtf8String(this.incubatorId);
        serializer.writeDynamicObject(this.roostBuildingId);
        serializer.writeInt32(this.slotIndex);
        serializer.writeInt32(this.usagesLeft);
    }
    deserialize(deserializer: Deserializer) {
        this.eggId = deserializer.readDynamicObject();
        this.incubatorId = deserializer.readUtf8String();
        this.roostBuildingId = deserializer.readDynamicObject();
        this.slotIndex = deserializer.readInt32();
        this.usagesLeft = deserializer.readInt32();
    }
}

export class FJournalRecord {
    date: long;
    details: Map<string, string>; // Map
    type: number;

    public constructor(init?: Partial<FJournalRecord>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt64(this.date);
        serializer.writeStaticMap(this.details, true, true);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer: Deserializer) {
        this.date = deserializer.readInt64();
        this.details = deserializer.readStaticMap('string', 'string', true, true);
        this.type = deserializer.readByte();
    }
}

export class FJournalUpdate {
    records: FJournalRecord[];

    public constructor(init?: Partial<FJournalUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.records, true);
    }
    deserialize(deserializer: Deserializer) {
        this.records = deserializer.readStaticList('FJournalRecord', true);
    }
}

export class FLoot {
    lootList: FBaseLootItem[];

    public constructor(init?: Partial<FLoot>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.lootList, false);
    }
    deserialize(deserializer: Deserializer) {
        this.lootList = deserializer.readStaticList('FBaseLootItem', false);
    }
}

export class FLootItemArtifact {
    qty: number;
    artifact: number;

    public constructor(init?: Partial<FLootItemArtifact>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.artifact);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.artifact = deserializer.readByte();
    }
}

export class FLootItemBuff {
    qty: number;
    buff: BuffConfig;

    public constructor(init?: Partial<FLootItemBuff>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeStaticObject(this.buff);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.buff = deserializer.readStaticObject('BuffConfig') as BuffConfig;
    }
}

export class FLootItemCandy {
    qty: number;
    candyType: number;

    public constructor(init?: Partial<FLootItemCandy>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.candyType);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.candyType = deserializer.readByte();
    }
}

export class FLootItemCoins {
    qty: number;

    public constructor(init?: Partial<FLootItemCoins>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
    }
}

export class FLootItemDust {
    qty: number;
    isStreak: boolean;

    public constructor(init?: Partial<FLootItemDust>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeBoolean(this.isStreak);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.isStreak = deserializer.readBoolean();
    }
}

export class FLootItemExp {
    qty: number;

    public constructor(init?: Partial<FLootItemExp>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
    }
}

export class FLootItemInstantUseItem {
    qty: number;
    item: number;

    public constructor(init?: Partial<FLootItemInstantUseItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.item);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.item = deserializer.readByte();
    }
}

export class FLootItemItem {
    qty: number;
    isStreak: boolean;
    item: number;

    public constructor(init?: Partial<FLootItemItem>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeBoolean(this.isStreak);
        serializer.writeByte(this.item);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.isStreak = deserializer.readBoolean();
        this.item = deserializer.readByte();
    }
}

export class FLootItemRecipe {
    qty: number;
    recipe: number;

    public constructor(init?: Partial<FLootItemRecipe>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.recipe);
    }
    deserialize(deserializer: Deserializer) {
        this.qty = deserializer.readInt32();
        this.recipe = deserializer.readByte();
    }
}

export class FNicknameValidationResult {
    error: number;
    suggestedNickname: string;

    public constructor(init?: Partial<FNicknameValidationResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.error);
        serializer.writeDynamicObject(this.suggestedNickname);
    }
    deserialize(deserializer: Deserializer) {
        this.error = deserializer.readDynamicObject();
        this.suggestedNickname = deserializer.readDynamicObject();
    }
}

export class FObeliskDetails {
    coords: GeoCoords;
    dailyQuest: FDailyQuest;
    fragment: FWeeklyQuestFragment;
    id: string;
    justOpened: boolean;
    weeklyQuest: FWeeklyQuest;

    public constructor(init?: Partial<FObeliskDetails>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords);
        serializer.writeDynamicObject(this.dailyQuest);
        serializer.writeDynamicObject(this.fragment);
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.justOpened);
        serializer.writeDynamicObject(this.weeklyQuest);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.dailyQuest = deserializer.readDynamicObject();
        this.fragment = deserializer.readDynamicObject();
        this.id = deserializer.readUtf8String();
        this.justOpened = deserializer.readBoolean();
        this.weeklyQuest = deserializer.readDynamicObject();
    }
}

export class FOpenChestResult {
    levelUpLoot: FLoot;
    loot: FLoot;

    public constructor(init?: Partial<FOpenChestResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.levelUpLoot);
        serializer.writeStaticObject(this.loot);
    }
    deserialize(deserializer: Deserializer) {
        this.levelUpLoot = deserializer.readDynamicObject();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FPickItemsResponse {
    levelUpLoot: FLoot;
    loot: FLoot;

    public constructor(init?: Partial<FPickItemsResponse>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.levelUpLoot);
        serializer.writeStaticObject(this.loot);
    }
    deserialize(deserializer: Deserializer) {
        this.levelUpLoot = deserializer.readDynamicObject();
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FPitstop {
    cooldown: boolean;
    lureBy: string;
    lureTimeLeft: long;
    personalized: number;

    public constructor(init?: Partial<FPitstop>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.cooldown);
        serializer.writeDynamicObject(this.lureBy);
        serializer.writeInt64(this.lureTimeLeft);
        serializer.writeDynamicObject(this.personalized);
    }
    deserialize(deserializer: Deserializer) {
        this.cooldown = deserializer.readBoolean();
        this.lureBy = deserializer.readDynamicObject();
        this.lureTimeLeft = deserializer.readInt64();
        this.personalized = deserializer.readDynamicObject();
    }
}

export class FQuestCompleted {
    dailyQuest: FDailyQuest;
    levelUpLoot: FLoot;
    loot: FLoot;
    weeklyQuest: boolean;

    public constructor(init?: Partial<FQuestCompleted>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.dailyQuest);
        serializer.writeStaticObject(this.levelUpLoot);
        serializer.writeStaticObject(this.loot);
        serializer.writeBoolean(this.weeklyQuest);
    }
    deserialize(deserializer: Deserializer) {
        this.dailyQuest = deserializer.readDynamicObject();
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.weeklyQuest = deserializer.readBoolean();
    }
}

export class FQuestUpdate {
    completed: FQuestCompleted;
    highlightBuilding: IdAndCoords;
    path: IdAndCoords[];

    public constructor(init?: Partial<FQuestUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.completed);
        serializer.writeDynamicObject(this.highlightBuilding);
        serializer.writeStaticList(this.path, true);
    }
    deserialize(deserializer: Deserializer) {
        this.completed = deserializer.readDynamicObject();
        this.highlightBuilding = deserializer.readDynamicObject();
        this.path = deserializer.readStaticList('IdAndCoords', true);
    }
}

export class FRegistrationInfo {
    age: string;
    email: string;
    gender: string;
    regType: string;
    socialId: string;

    public constructor(init?: Partial<FRegistrationInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.age);
        serializer.writeUtf8String(this.email);
        serializer.writeUtf8String(this.gender);
        serializer.writeUtf8String(this.regType);
        serializer.writeUtf8String(this.socialId);
    }
    deserialize(deserializer: Deserializer) {
        this.age = deserializer.readUtf8String();
        this.email = deserializer.readUtf8String();
        this.gender = deserializer.readUtf8String();
        this.regType = deserializer.readUtf8String();
        this.socialId = deserializer.readUtf8String();
    }
}

export class FScoutRequest {
    clientRequest: FClientRequest;
    scoutCoords: GeoCoords;

    public constructor(init?: Partial<FScoutRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.clientRequest);
        serializer.writeStaticObject(this.scoutCoords);
    }
    deserialize(deserializer: Deserializer) {
        this.clientRequest = deserializer.readStaticObject('FClientRequest') as FClientRequest;
        this.scoutCoords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
    }
}

export class FServiceError {
    args: object[];
    cause: string;

    public constructor(init?: Partial<FServiceError>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticArray(this.args, false);
        serializer.writeUtf8String(this.cause);
    }
    deserialize(deserializer: Deserializer) {
        this.args = deserializer.readStaticArray('object', false);
        this.cause = deserializer.readUtf8String();
    }
}

export class FShopConfig {
    artifacts: Map<number, number>; // Map
    bagUpgrade: ProductLot;
    coins: Map<string, string>; // Map
    creatureStorageUpgrade: ProductLot;
    products: ProductGroup[];

    public constructor(init?: Partial<FShopConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.artifacts, true, true);
        serializer.writeStaticObject(this.bagUpgrade);
        serializer.writeStaticMap(this.coins, true, true);
        serializer.writeStaticObject(this.creatureStorageUpgrade);
        serializer.writeStaticList(this.products, true);
    }
    deserialize(deserializer: Deserializer) {
        this.artifacts = deserializer.readStaticMap('ArtifactName', 'int', true, true);
        this.bagUpgrade = deserializer.readStaticObject('ProductLot') as ProductLot;
        this.coins = deserializer.readStaticMap('string', 'ProductLot', true, true);
        this.creatureStorageUpgrade = deserializer.readStaticObject('ProductLot') as ProductLot;
        this.products = deserializer.readStaticList('ProductGroup', true);
    }
}

export class FSpellCastDone {
    altarCoords: GeoCoords;
    spellType: number;

    public constructor(init?: Partial<FSpellCastDone>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.altarCoords);
        serializer.writeByte(this.spellType);
    }
    deserialize(deserializer: Deserializer) {
        this.altarCoords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.spellType = deserializer.readByte();
    }
}

export class FSpellEffectsUpdate {
    hitArenas: Set<string>;

    public constructor(init?: Partial<FSpellEffectsUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticHashSet(this.hitArenas, true);
    }
    deserialize(deserializer: Deserializer) {
        this.hitArenas = deserializer.readStaticHashSet('string', true);
    }
}

export class FStartEncounterRequest {
    attackerId: string;
    defenderId: string;

    public constructor(init?: Partial<FStartEncounterRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeUtf8String(this.attackerId);
        serializer.writeUtf8String(this.defenderId);
    }
    deserialize(deserializer: Deserializer) {
        this.attackerId = deserializer.readUtf8String();
        this.defenderId = deserializer.readUtf8String();
    }
}

export class FTile {
    dungeonId: string;
    tile: Tile;

    public constructor(init?: Partial<FTile>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.dungeonId);
        serializer.writeStaticObject(this.tile);
    }
    deserialize(deserializer: Deserializer) {
        this.dungeonId = deserializer.readDynamicObject();
        this.tile = deserializer.readStaticObject('Tile') as Tile;
    }
}

export class FTileState {
    buildings: FBuilding[];
    time: long;

    public constructor(init?: Partial<FTileState>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.buildings, true);
        serializer.writeInt64(this.time);
    }
    deserialize(deserializer: Deserializer) {
        this.buildings = deserializer.readStaticList('FBuilding', true);
        this.time = deserializer.readInt64();
    }
}

export class FTransferMonsterToCandiesResponse {
    loot: FLoot;

    public constructor(init?: Partial<FTransferMonsterToCandiesResponse>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.loot);
    }
    deserialize(deserializer: Deserializer) {
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FUpdate {
    items: FBaseItemUpdate[];
    speed: number;

    public constructor(init?: Partial<FUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.items, false);
        serializer.writeDynamicObject(this.speed);
    }
    deserialize(deserializer: Deserializer) {
        this.items = deserializer.readStaticList('FBaseItemUpdate', false);
        this.speed = deserializer.readDynamicObject();
    }
}

export class FUpdateNicknameResult {
    userInfo: FUserInfo;
    validationResult: FNicknameValidationResult;

    public constructor(init?: Partial<FUpdateNicknameResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.userInfo);
        serializer.writeDynamicObject(this.validationResult);
    }
    deserialize(deserializer: Deserializer) {
        this.userInfo = deserializer.readDynamicObject();
        this.validationResult = deserializer.readDynamicObject();
    }
}

export class FUpdateRequest {
    blackScreen: boolean;
    clientPlatform: number;
    clientRequest: FClientRequest;
    tilesCache: Map<FTile, FTile>; // Map

    public constructor(init?: Partial<FUpdateRequest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.blackScreen);
        serializer.writeByte(this.clientPlatform);
        serializer.writeStaticObject(this.clientRequest);
        serializer.writeStaticMap(this.tilesCache, true, true);
    }
    deserialize(deserializer: Deserializer) {
        this.blackScreen = deserializer.readBoolean();
        this.clientPlatform = deserializer.readByte();
        this.clientRequest = deserializer.readStaticObject('FClientRequest') as FClientRequest;
        this.tilesCache = deserializer.readStaticMap('FTile', 'long', true, true);
    }
}

export class FUserCreature {
    alias: string;
    attackValue: number;
    baseCp: number;
    candyType: number;
    chargedSegments: number;
    chargedSkill: string;
    chargedSkillDps: number;
    cp: number;
    dps: number;
    elementType: number;
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
    name: number;
    possibleEvolutions: Map<number, number>; // Map
    staminaValue: number;
    totalHp: number;

    public constructor(init?: Partial<FUserCreature>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.alias);
        serializer.writeInt32(this.attackValue);
        serializer.writeInt32(this.baseCp);
        serializer.writeByte(this.candyType);
        serializer.writeInt32(this.chargedSegments);
        serializer.writeUtf8String(this.chargedSkill);
        serializer.writeFloat(this.chargedSkillDps);
        serializer.writeInt32(this.cp);
        serializer.writeFloat(this.dps);
        serializer.writeByte(this.elementType);
        serializer.writeInt64(this.gotchaTime);
        serializer.writeInt32(this.group);
        serializer.writeFloat(this.hp);
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.improvable);
        serializer.writeInt32(this.improveCandiesCost);
        serializer.writeInt32(this.improveDustCost);
        serializer.writeBoolean(this.isArenaDefender);
        serializer.writeBoolean(this.isAttacker);
        serializer.writeBoolean(this.isLibraryDefender);
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.mainSkill);
        serializer.writeFloat(this.mainSkillDps);
        serializer.writeFloat(this.mainSkillEps);
        serializer.writeByte(this.name);
        serializer.writeStaticMap(this.possibleEvolutions, true, true);
        serializer.writeInt32(this.staminaValue);
        serializer.writeFloat(this.totalHp);
    }
    deserialize(deserializer: Deserializer) {
        this.alias = deserializer.readDynamicObject();
        this.attackValue = deserializer.readInt32();
        this.baseCp = deserializer.readInt32();
        this.candyType = deserializer.readByte();
        this.chargedSegments = deserializer.readInt32();
        this.chargedSkill = deserializer.readUtf8String();
        this.chargedSkillDps = deserializer.readFloat();
        this.cp = deserializer.readInt32();
        this.dps = deserializer.readFloat();
        this.elementType = deserializer.readByte();
        this.gotchaTime = deserializer.readInt64();
        this.group = deserializer.readInt32();
        this.hp = deserializer.readFloat();
        this.id = deserializer.readUtf8String();
        this.improvable = deserializer.readBoolean();
        this.improveCandiesCost = deserializer.readInt32();
        this.improveDustCost = deserializer.readInt32();
        this.isArenaDefender = deserializer.readBoolean();
        this.isAttacker = deserializer.readBoolean();
        this.isLibraryDefender = deserializer.readBoolean();
        this.level = deserializer.readInt32();
        this.mainSkill = deserializer.readUtf8String();
        this.mainSkillDps = deserializer.readFloat();
        this.mainSkillEps = deserializer.readFloat();
        this.name = deserializer.readByte();
        this.possibleEvolutions = deserializer.readStaticMap('CreatureType', 'int', true, true);
        this.staminaValue = deserializer.readInt32();
        this.totalHp = deserializer.readFloat();
    }
}

export class FUserCreaturesList {
    userCreatures: FUserCreature[];

    public constructor(init?: Partial<FUserCreaturesList>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.userCreatures, true);
    }
    deserialize(deserializer: Deserializer) {
        this.userCreatures = deserializer.readStaticList('FUserCreature', true);
    }
}

export class FUserCreatureUpdate {
    avaUpdate: FAvaUpdate;
    creadex: FCreadex;
    creature: FUserCreature;
    levelUpLoot: FLoot;
    loot: FLoot;

    public constructor(init?: Partial<FUserCreatureUpdate>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.avaUpdate);
        serializer.writeDynamicObject(this.creadex);
        serializer.writeStaticObject(this.creature);
        serializer.writeStaticObject(this.levelUpLoot);
        serializer.writeStaticObject(this.loot);
    }
    deserialize(deserializer: Deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate') as FAvaUpdate;
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readStaticObject('FUserCreature') as FUserCreature;
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
    }
}

export class FUserHatchingInfo {
    eggs: FEgg[];
    incubators: FIncubator[];
    max: number;
    maxRoost: number;

    public constructor(init?: Partial<FUserHatchingInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.eggs, true);
        serializer.writeStaticList(this.incubators, true);
        serializer.writeInt32(this.max);
        serializer.writeInt32(this.maxRoost);
    }
    deserialize(deserializer: Deserializer) {
        this.eggs = deserializer.readStaticList('FEgg', true);
        this.incubators = deserializer.readStaticList('FIncubator', true);
        this.max = deserializer.readInt32();
        this.maxRoost = deserializer.readInt32();
    }
}

export class FUserInfo {
    alliance: number;
    avatarAppearanceDetails: number;
    devMode: boolean;
    nickname: string;
    userId: string;

    public constructor(init?: Partial<FUserInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.alliance);
        serializer.writeInt32(this.avatarAppearanceDetails);
        serializer.writeBoolean(this.devMode);
        serializer.writeUtf8String(this.nickname);
        serializer.writeUtf8String(this.userId);
    }
    deserialize(deserializer: Deserializer) {
        this.alliance = deserializer.readDynamicObject();
        this.avatarAppearanceDetails = deserializer.readInt32();
        this.devMode = deserializer.readBoolean();
        this.nickname = deserializer.readUtf8String();
        this.userId = deserializer.readUtf8String();
    }
}

export class FWeeklyQuest {
    allOpen: boolean;
    completed: boolean;
    currentFragment: number;
    digFragments: number[];
    nextWeeklyQuestIn: number;
    openFragments: Map<number, number>; // Map
    sideFragmentNumber: number;

    public constructor(init?: Partial<FWeeklyQuest>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.allOpen);
        serializer.writeBoolean(this.completed);
        serializer.writeInt32(this.currentFragment);
        serializer.writeStaticList(this.digFragments, true);
        serializer.writeInt32(this.nextWeeklyQuestIn);
        serializer.writeStaticMap(this.openFragments, true, true);
        serializer.writeInt32(this.sideFragmentNumber);
    }
    deserialize(deserializer: Deserializer) {
        this.allOpen = deserializer.readBoolean();
        this.completed = deserializer.readBoolean();
        this.currentFragment = deserializer.readInt32();
        this.digFragments = deserializer.readStaticList('int', true);
        this.nextWeeklyQuestIn = deserializer.readInt32();
        this.openFragments = deserializer.readStaticMap('int', 'sbyte[]', true, true);
        this.sideFragmentNumber = deserializer.readInt32();
    }
}

export class FWeeklyQuestFragment {
    data: Buffer;
    fragmentNumber: number;

    public constructor(init?: Partial<FWeeklyQuestFragment>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBuffer(this.data);
        serializer.writeInt32(this.fragmentNumber);
    }
    deserialize(deserializer: Deserializer) {
        this.data = deserializer.readBuffer();
        this.fragmentNumber = deserializer.readInt32();
    }
}

export class FWildCreature {
    coords: GeoCoords;
    entry: FCreadexEntry;
    id: string;
    incenseUserId: string;
    isFirstCreature: boolean;
    name: number;
    relatedBuildingId: string;
    scaleCollider: number;
    ttl: number;

    public constructor(init?: Partial<FWildCreature>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.coords);
        serializer.writeDynamicObject(this.entry);
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.incenseUserId);
        serializer.writeBoolean(this.isFirstCreature);
        serializer.writeByte(this.name);
        serializer.writeDynamicObject(this.relatedBuildingId);
        serializer.writeFloat(this.scaleCollider);
        serializer.writeFloat(this.ttl);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readDynamicObject();
        this.entry = deserializer.readDynamicObject();
        this.id = deserializer.readUtf8String();
        this.incenseUserId = deserializer.readDynamicObject();
        this.isFirstCreature = deserializer.readBoolean();
        this.name = deserializer.readByte();
        this.relatedBuildingId = deserializer.readDynamicObject();
        this.scaleCollider = deserializer.readFloat();
        this.ttl = deserializer.readFloat();
    }
}

export class FWizardBattleInfo {
    enhanced: boolean;
    limit: number;
    timeToRefresh: number;
    used: number;

    public constructor(init?: Partial<FWizardBattleInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeBoolean(this.enhanced);
        serializer.writeInt32(this.limit);
        serializer.writeFloat(this.timeToRefresh);
        serializer.writeInt32(this.used);
    }
    deserialize(deserializer: Deserializer) {
        this.enhanced = deserializer.readBoolean();
        this.limit = deserializer.readInt32();
        this.timeToRefresh = deserializer.readFloat();
        this.used = deserializer.readInt32();
    }
}

export class FWizardBattleResult {
    attackerHps: number[];
    attackerTypes: number[];
    creaturesDefeated: number;
    levelUpLoot: FLoot;
    loot: FLoot;
    resultScreenDelay: number;
    victory: boolean;

    public constructor(init?: Partial<FWizardBattleResult>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticList(this.attackerHps, true);
        serializer.writeStaticList(this.attackerTypes, true);
        serializer.writeInt32(this.creaturesDefeated);
        serializer.writeStaticObject(this.levelUpLoot);
        serializer.writeStaticObject(this.loot);
        serializer.writeFloat(this.resultScreenDelay);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer: Deserializer) {
        this.attackerHps = deserializer.readStaticList('float', true);
        this.attackerTypes = deserializer.readStaticList('CreatureType', true);
        this.creaturesDefeated = deserializer.readInt32();
        this.levelUpLoot = deserializer.readStaticObject('FLoot') as FLoot;
        this.loot = deserializer.readStaticObject('FLoot') as FLoot;
        this.resultScreenDelay = deserializer.readFloat();
        this.victory = deserializer.readBoolean();
    }
}

export class GeoCoords {
    horizontalAccuracy: number;
    latitude: number;
    longitude: number;

    public constructor(init?: Partial<GeoCoords>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeDynamicObject(this.horizontalAccuracy);
        serializer.writeDouble(this.latitude);
        serializer.writeDouble(this.longitude);
    }
    deserialize(deserializer: Deserializer) {
        this.horizontalAccuracy = deserializer.readDynamicObject();
        this.latitude = deserializer.readDouble();
        this.longitude = deserializer.readDouble();
    }
}

export class IdAndCoords {
    coords: GeoCoords;
    id: string;

    public constructor(init?: Partial<IdAndCoords>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticObject(this.coords);
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer: Deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords') as GeoCoords;
        this.id = deserializer.readUtf8String();
    }
}

export class InAppEventInfo {
    eventItems: Map<string, string>; // Map
    eventType: number;
    userId: string;

    public constructor(init?: Partial<InAppEventInfo>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.eventItems, true, true);
        serializer.writeByte(this.eventType);
        serializer.writeUtf8String(this.userId);
    }
    deserialize(deserializer: Deserializer) {
        this.eventItems = deserializer.readStaticMap('string', 'string', true, true);
        this.eventType = deserializer.readByte();
        this.userId = deserializer.readUtf8String();
    }
}

export class PotionConfig {
    heals: Map<number, number>; // Map
    resurrections: Map<number, number>; // Map

    public constructor(init?: Partial<PotionConfig>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeStaticMap(this.heals, true, true);
        serializer.writeStaticMap(this.resurrections, true, true);
    }
    deserialize(deserializer: Deserializer) {
        this.heals = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.resurrections = deserializer.readStaticMap('ItemType', 'float', true, true);
    }
}

export class ProductGroup {
    itemType: number;
    productLots: ProductLot[];

    public constructor(init?: Partial<ProductGroup>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeByte(this.itemType);
        serializer.writeStaticList(this.productLots, true);
    }
    deserialize(deserializer: Deserializer) {
        this.itemType = deserializer.readByte();
        this.productLots = deserializer.readStaticList('ProductLot', true);
    }
}

export class ProductLot {
    price: number;
    qty: number;

    public constructor(init?: Partial<ProductLot>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.price);
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer: Deserializer) {
        this.price = deserializer.readInt32();
        this.qty = deserializer.readInt32();
    }
}

export class Tile {
    x: number;
    y: number;
    zoom: number;

    public constructor(init?: Partial<Tile>) {
        Object.assign(this, init);
    }

    serialize(serializer: Serializer) {
        serializer.writeInt32(this.x);
        serializer.writeInt32(this.y);
        serializer.writeInt32(this.zoom);
    }
    deserialize(deserializer: Deserializer) {
        this.x = deserializer.readInt32();
        this.y = deserializer.readInt32();
        this.zoom = deserializer.readInt32();
    }
}