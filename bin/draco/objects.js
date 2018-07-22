"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthData {
    constructor(init) {
        this.__type = 'AuthData';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeByte(this.authType);
        serializer.writeUtf8String(this.profileId);
        serializer.writeDynamicObject(this.tokenId, 'string');
    }
    deserialize(deserializer) {
        this.authType = deserializer.readByte();
        this.profileId = deserializer.readUtf8String();
        this.tokenId = deserializer.readDynamicObject();
    }
}
exports.AuthData = AuthData;
class BuffConfig {
    constructor(init) {
        this.__type = 'BuffConfig';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt64(this.durationMs);
        serializer.writeBoolean(this.isOffer);
        serializer.writeByte(this.type);
        serializer.writeInt32(this.valuePercent);
    }
    deserialize(deserializer) {
        this.durationMs = deserializer.readInt64();
        this.isOffer = deserializer.readBoolean();
        this.type = deserializer.readByte();
        this.valuePercent = deserializer.readInt32();
    }
}
exports.BuffConfig = BuffConfig;
class ExtraPack {
    constructor(init) {
        this.__type = 'ExtraPack';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.isOfferPrice);
        serializer.writeInt32(this.price);
        serializer.writeInt32(this.wizardBattles);
    }
    deserialize(deserializer) {
        this.isOfferPrice = deserializer.readBoolean();
        this.price = deserializer.readInt32();
        this.wizardBattles = deserializer.readInt32();
    }
}
exports.ExtraPack = ExtraPack;
class FActiveObject {
    constructor(init) {
        this.__type = 'FActiveObject';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.allianceType, 'enums.AllianceType');
        serializer.writeUtf8String(this.arenaId);
        serializer.writeInt32(this.combinedName);
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.creatureAlias, 'string');
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureName);
        serializer.writeInt32(this.level);
        serializer.writeBoolean(this.lost);
        serializer.writeFloat(this.timeLeft);
        serializer.writeInt32(this.weaklyBonus);
    }
    deserialize(deserializer) {
        this.allianceType = deserializer.readDynamicObject();
        this.arenaId = deserializer.readUtf8String();
        this.combinedName = deserializer.readInt32();
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.creatureAlias = deserializer.readDynamicObject();
        this.creatureCp = deserializer.readInt32();
        this.creatureName = deserializer.readByte();
        this.level = deserializer.readInt32();
        this.lost = deserializer.readBoolean();
        this.timeLeft = deserializer.readFloat();
        this.weaklyBonus = deserializer.readInt32();
    }
}
exports.FActiveObject = FActiveObject;
class FActiveObjectsUpdate {
    constructor(init) {
        this.__type = 'FActiveObjectsUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.arenaQuantity);
        serializer.writeInt32(this.coins);
        serializer.writeInt32(this.dust);
        serializer.writeBoolean(this.increasedTribute);
        serializer.writeInt32(this.libraryAvailableCharges);
        serializer.writeInt32(this.libraryPoints);
        serializer.writeInt32(this.libraryQuantity);
        serializer.writeInt32(this.libraryRequired);
        serializer.writeInt32(this.libraryTotalCharges);
        serializer.writeFloat(this.libraryTotalCooldown);
        serializer.writeInt32(this.libraryWaitCooldown);
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeInt32(this.maxArenas);
        serializer.writeStaticList(this.objectList, true, 'FActiveObject');
        serializer.writeFloat(this.timeToNextTributeCollection);
        serializer.writeInt32(this.totalArenas);
        serializer.writeFloat(this.tributeCooldown);
    }
    deserialize(deserializer) {
        this.arenaQuantity = deserializer.readInt32();
        this.coins = deserializer.readInt32();
        this.dust = deserializer.readInt32();
        this.increasedTribute = deserializer.readBoolean();
        this.libraryAvailableCharges = deserializer.readInt32();
        this.libraryPoints = deserializer.readInt32();
        this.libraryQuantity = deserializer.readInt32();
        this.libraryRequired = deserializer.readInt32();
        this.libraryTotalCharges = deserializer.readInt32();
        this.libraryTotalCooldown = deserializer.readFloat();
        this.libraryWaitCooldown = deserializer.readInt32();
        this.loot = deserializer.readStaticObject('FLoot');
        this.maxArenas = deserializer.readInt32();
        this.objectList = deserializer.readStaticList('FActiveObject', true);
        this.timeToNextTributeCollection = deserializer.readFloat();
        this.totalArenas = deserializer.readInt32();
        this.tributeCooldown = deserializer.readFloat();
    }
}
exports.FActiveObjectsUpdate = FActiveObjectsUpdate;
class FAllianceChooseRequest {
    constructor(init) {
        this.__type = 'FAllianceChooseRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.bonus);
        serializer.writeBoolean(this.oneOption);
        serializer.writeDynamicObject(this.recommendedType, 'enums.AllianceType');
    }
    deserialize(deserializer) {
        this.bonus = deserializer.readInt32();
        this.oneOption = deserializer.readBoolean();
        this.recommendedType = deserializer.readDynamicObject();
    }
}
exports.FAllianceChooseRequest = FAllianceChooseRequest;
class FAltar {
    constructor(init) {
        this.__type = 'FAltar';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeUtf8String(this.ownerId);
        serializer.writeBoolean(this.sharedWithEmptyPassword);
    }
    deserialize(deserializer) {
        this.ownerId = deserializer.readUtf8String();
        this.sharedWithEmptyPassword = deserializer.readBoolean();
    }
}
exports.FAltar = FAltar;
class FAltarDetails {
    constructor(init) {
        this.__type = 'FAltarDetails';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeUtf8String(this.buildingId);
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeUtf8String(this.ownerNickname);
        serializer.writeInt32(this.recipeLevel);
        serializer.writeByte(this.recipeName);
        serializer.writeStaticMap(this.runeOwnerNames, true, true, 'int', 'string');
        serializer.writeStaticMap(this.runeOwners, true, true, 'int', 'string');
    }
    deserialize(deserializer) {
        this.buildingId = deserializer.readUtf8String();
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.ownerNickname = deserializer.readUtf8String();
        this.recipeLevel = deserializer.readInt32();
        this.recipeName = deserializer.readByte();
        this.runeOwnerNames = deserializer.readStaticMap('int', 'string', true, true);
        this.runeOwners = deserializer.readStaticMap('int', 'string', true, true);
    }
}
exports.FAltarDetails = FAltarDetails;
class FArena {
    constructor(init) {
        this.__type = 'FArena';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.allianceType, 'enums.AllianceType');
        serializer.writeInt32(this.combinedName);
        serializer.writeFloat(this.protectionTtl);
    }
    deserialize(deserializer) {
        this.allianceType = deserializer.readDynamicObject();
        this.combinedName = deserializer.readInt32();
        this.protectionTtl = deserializer.readFloat();
    }
}
exports.FArena = FArena;
class FArenaBattleResult {
    constructor(init) {
        this.__type = 'FArenaBattleResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.allyArena);
        serializer.writeInt32(this.combinedName);
        serializer.writeInt32(this.creaturesDefeated);
        serializer.writeInt32(this.currentPrestige);
        serializer.writeInt32(this.level);
        serializer.writeStaticObject(this.loot, 'FLoot');
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
    deserialize(deserializer) {
        this.allyArena = deserializer.readBoolean();
        this.combinedName = deserializer.readInt32();
        this.creaturesDefeated = deserializer.readInt32();
        this.currentPrestige = deserializer.readInt32();
        this.level = deserializer.readInt32();
        this.loot = deserializer.readStaticObject('FLoot');
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
exports.FArenaBattleResult = FArenaBattleResult;
class FArenaDetails {
    constructor(init) {
        this.__type = 'FArenaDetails';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.allianceChooseRequest, 'FAllianceChooseRequest');
        serializer.writeByte(this.buildingType);
        serializer.writeBoolean(this.canAddDefender);
        serializer.writeBoolean(this.canAttack);
        serializer.writeBoolean(this.capturableGeoPointsLimitReached);
        serializer.writeInt32(this.combinedName);
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeInt32(this.currentExp);
        serializer.writeStaticList(this.defenders, true, 'FDefenderDetails');
        serializer.writeUtf8String(this.id);
        serializer.writeInt64(this.lastUpdateTime);
        serializer.writeInt32(this.level);
        serializer.writeInt32(this.libraryBlockedCooldown);
        serializer.writeInt32(this.minUseLevel);
        serializer.writeInt32(this.nextLevelExp);
        serializer.writeDynamicObject(this.ownerAlliance, 'enums.AllianceType');
        serializer.writeInt32(this.possibleDefendersCount);
        serializer.writeFloat(this.protectionRemainingTime);
        serializer.writeInt32(this.remoteBuildingControlChargesMaxCount);
        serializer.writeInt32(this.remoteBuildingControlChargesUsed);
        serializer.writeInt32(this.remoteBuildingControlCooldown);
        serializer.writeDynamicObject(this.restrictedForAllianceToCapture, 'enums.AllianceType');
        serializer.writeFloat(this.restrictedForAllianceToCaptureRemainingTime);
    }
    deserialize(deserializer) {
        this.allianceChooseRequest = deserializer.readDynamicObject();
        this.buildingType = deserializer.readByte();
        this.canAddDefender = deserializer.readBoolean();
        this.canAttack = deserializer.readBoolean();
        this.capturableGeoPointsLimitReached = deserializer.readBoolean();
        this.combinedName = deserializer.readInt32();
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.currentExp = deserializer.readInt32();
        this.defenders = deserializer.readStaticList('FDefenderDetails', true);
        this.id = deserializer.readUtf8String();
        this.lastUpdateTime = deserializer.readInt64();
        this.level = deserializer.readInt32();
        this.libraryBlockedCooldown = deserializer.readInt32();
        this.minUseLevel = deserializer.readInt32();
        this.nextLevelExp = deserializer.readInt32();
        this.ownerAlliance = deserializer.readDynamicObject();
        this.possibleDefendersCount = deserializer.readInt32();
        this.protectionRemainingTime = deserializer.readFloat();
        this.remoteBuildingControlChargesMaxCount = deserializer.readInt32();
        this.remoteBuildingControlChargesUsed = deserializer.readInt32();
        this.remoteBuildingControlCooldown = deserializer.readInt32();
        this.restrictedForAllianceToCapture = deserializer.readDynamicObject();
        this.restrictedForAllianceToCaptureRemainingTime = deserializer.readFloat();
    }
}
exports.FArenaDetails = FArenaDetails;
class FArenaWithBattleUpdate {
    constructor(init) {
        this.__type = 'FArenaWithBattleUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticHashSet(this.arenaWithBattle, true, 'string');
    }
    deserialize(deserializer) {
        this.arenaWithBattle = deserializer.readStaticHashSet('string', true);
    }
}
exports.FArenaWithBattleUpdate = FArenaWithBattleUpdate;
class FArtifactsUpdate {
    constructor(init) {
        this.__type = 'FArtifactsUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.artifacts, true, 'ArtifactName');
        serializer.writeInt32(this.artifactsBagSize);
        serializer.writeInt32(this.artifactsSlots);
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeBoolean(this.hasBonusSetFirst);
        serializer.writeBoolean(this.hasBonusSetSecond);
        serializer.writeStaticList(this.putOn, true, 'ArtifactName');
    }
    deserialize(deserializer) {
        this.artifacts = deserializer.readStaticList('ArtifactName', true);
        this.artifactsBagSize = deserializer.readInt32();
        this.artifactsSlots = deserializer.readInt32();
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate');
        this.hasBonusSetFirst = deserializer.readBoolean();
        this.hasBonusSetSecond = deserializer.readBoolean();
        this.putOn = deserializer.readStaticList('ArtifactName', true);
    }
}
exports.FArtifactsUpdate = FArtifactsUpdate;
class FAttackArenaRequest {
    constructor(init) {
        this.__type = 'FAttackArenaRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.buildingRequest, 'FBuildingRequest');
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeStaticList(this.selectedCreatures, true, 'string');
    }
    deserialize(deserializer) {
        this.buildingRequest = deserializer.readStaticObject('FBuildingRequest');
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.selectedCreatures = deserializer.readStaticList('string', true);
    }
}
exports.FAttackArenaRequest = FAttackArenaRequest;
class FAuthData {
    constructor(init) {
        this.__type = 'FAuthData';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.info, 'FUserInfo');
    }
    deserialize(deserializer) {
        this.info = deserializer.readStaticObject('FUserInfo');
    }
}
exports.FAuthData = FAuthData;
class FAvaUpdate {
    constructor(init) {
        this.__type = 'FAvaUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDouble(this.activationRadius);
        serializer.writeDynamicObject(this.alliance, 'enums.AllianceType');
        serializer.writeDynamicObject(this.altarCoords, 'GeoCoords');
        serializer.writeFloat(this.artifactDustFactor);
        serializer.writeStaticList(this.artifacts, true, 'ArtifactName');
        serializer.writeDynamicObject(this.buddy, 'FBuddy');
        serializer.writeStaticList(this.buffs, true, 'FBuff');
        serializer.writeStaticMap(this.candies, true, true, 'CreatureType', 'int');
        serializer.writeInt32(this.coins);
        serializer.writeInt32(this.creatureStorageSize);
        serializer.writeInt32(this.currentExperience);
        serializer.writeDynamicObject(this.dungeonId, 'string');
        serializer.writeInt32(this.dust);
        serializer.writeInt32(this.eggsHatchedCount);
        serializer.writeBoolean(this.emulatorCheckDisabled);
        serializer.writeFloat(this.exp);
        serializer.writeInt64(this.freshNewsDate);
        serializer.writeBoolean(this.hasUnhandledAdvices);
        serializer.writeInt64(this.incenseDuration);
        serializer.writeUtf8String(this.incenseGenMonstersGroupName);
        serializer.writeInt64(this.incenseLeftTime);
        serializer.writeBoolean(this.isArtifactsBagFull);
        serializer.writeBoolean(this.isBagFull);
        serializer.writeBoolean(this.isEggBagFull);
        serializer.writeInt32(this.level);
        serializer.writeInt32(this.monstersCaughtCount);
        serializer.writeInt32(this.nextLevelExperience);
        serializer.writeStaticMap(this.recipeLevels, true, true, 'RecipeType', 'int');
        serializer.writeInt64(this.registerDate);
        serializer.writeInt64(this.stopFieldDuration);
        serializer.writeInt64(this.stopFieldLeftTime);
        serializer.writeDynamicObject(this.superVisionCenter, 'GeoCoords');
        serializer.writeInt64(this.superVisionDuration);
        serializer.writeInt64(this.superVisionLeftTime);
        serializer.writeFloat(this.totalDistanceF);
        serializer.writeStaticList(this.wearArtifacts, true, 'ArtifactName');
    }
    deserialize(deserializer) {
        this.activationRadius = deserializer.readDouble();
        this.alliance = deserializer.readDynamicObject();
        this.altarCoords = deserializer.readDynamicObject();
        this.artifactDustFactor = deserializer.readFloat();
        this.artifacts = deserializer.readStaticList('ArtifactName', true);
        this.buddy = deserializer.readDynamicObject();
        this.buffs = deserializer.readStaticList('FBuff', true);
        this.candies = deserializer.readStaticMap('CreatureType', 'int', true, true);
        this.coins = deserializer.readInt32();
        this.creatureStorageSize = deserializer.readInt32();
        this.currentExperience = deserializer.readInt32();
        this.dungeonId = deserializer.readDynamicObject();
        this.dust = deserializer.readInt32();
        this.eggsHatchedCount = deserializer.readInt32();
        this.emulatorCheckDisabled = deserializer.readBoolean();
        this.exp = deserializer.readFloat();
        this.freshNewsDate = deserializer.readInt64();
        this.hasUnhandledAdvices = deserializer.readBoolean();
        this.incenseDuration = deserializer.readInt64();
        this.incenseGenMonstersGroupName = deserializer.readUtf8String();
        this.incenseLeftTime = deserializer.readInt64();
        this.isArtifactsBagFull = deserializer.readBoolean();
        this.isBagFull = deserializer.readBoolean();
        this.isEggBagFull = deserializer.readBoolean();
        this.level = deserializer.readInt32();
        this.monstersCaughtCount = deserializer.readInt32();
        this.nextLevelExperience = deserializer.readInt32();
        this.recipeLevels = deserializer.readStaticMap('RecipeType', 'int', true, true);
        this.registerDate = deserializer.readInt64();
        this.stopFieldDuration = deserializer.readInt64();
        this.stopFieldLeftTime = deserializer.readInt64();
        this.superVisionCenter = deserializer.readDynamicObject();
        this.superVisionDuration = deserializer.readInt64();
        this.superVisionLeftTime = deserializer.readInt64();
        this.totalDistanceF = deserializer.readFloat();
        this.wearArtifacts = deserializer.readStaticList('ArtifactName', true);
    }
}
exports.FAvaUpdate = FAvaUpdate;
class FBagItem {
    constructor(init) {
        this.__type = 'FBagItem';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.count);
        serializer.writeBoolean(this.removable);
        serializer.writeBoolean(this.stack);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer) {
        this.count = deserializer.readInt32();
        this.removable = deserializer.readBoolean();
        this.stack = deserializer.readBoolean();
        this.type = deserializer.readByte();
    }
}
exports.FBagItem = FBagItem;
class FBagUpdate {
    constructor(init) {
        this.__type = 'FBagUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.allowedItemsSize);
        serializer.writeStaticList(this.items, true, 'FBagItem');
        serializer.writeStaticMap(this.lockedRunes, true, true, 'ItemType', 'int');
    }
    deserialize(deserializer) {
        this.allowedItemsSize = deserializer.readInt32();
        this.items = deserializer.readStaticList('FBagItem', true);
        this.lockedRunes = deserializer.readStaticMap('ItemType', 'int', true, true);
    }
}
exports.FBagUpdate = FBagUpdate;
class FBaseItemUpdate {
    constructor(init) {
        this.__type = 'FBaseItemUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
    }
    deserialize(deserializer) {
    }
}
exports.FBaseItemUpdate = FBaseItemUpdate;
class FBaseLootItem {
    constructor(init) {
        this.__type = 'FBaseLootItem';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
    }
}
exports.FBaseLootItem = FBaseLootItem;
class FBaseRatingRecord {
    constructor(init) {
        this.__type = 'FBaseRatingRecord';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickName);
        serializer.writeInt32(this.place);
        serializer.writeFloat(this.score);
    }
    deserialize(deserializer) {
        this.level = deserializer.readInt32();
        this.nickName = deserializer.readUtf8String();
        this.place = deserializer.readInt32();
        this.score = deserializer.readFloat();
    }
}
exports.FBaseRatingRecord = FBaseRatingRecord;
class FBuddy {
    constructor(init) {
        this.__type = 'FBuddy';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.alias, 'string');
        serializer.writeByte(this.candyType);
        serializer.writeByte(this.creature);
        serializer.writeFloat(this.currentWalkedF);
        serializer.writeInt32(this.distanceForCandies);
        serializer.writeUtf8String(this.id);
        serializer.writeInt32(this.totalCandies);
        serializer.writeFloat(this.totalWalkedF);
    }
    deserialize(deserializer) {
        this.alias = deserializer.readDynamicObject();
        this.candyType = deserializer.readByte();
        this.creature = deserializer.readByte();
        this.currentWalkedF = deserializer.readFloat();
        this.distanceForCandies = deserializer.readInt32();
        this.id = deserializer.readUtf8String();
        this.totalCandies = deserializer.readInt32();
        this.totalWalkedF = deserializer.readFloat();
    }
}
exports.FBuddy = FBuddy;
class FBuff {
    constructor(init) {
        this.__type = 'FBuff';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeByte(this.buffType);
        serializer.writeInt64(this.duration);
        serializer.writeInt64(this.timeLeft);
        serializer.writeInt64(this.timeToActivation);
        serializer.writeInt32(this.valuePercent);
    }
    deserialize(deserializer) {
        this.buffType = deserializer.readByte();
        this.duration = deserializer.readInt64();
        this.timeLeft = deserializer.readInt64();
        this.timeToActivation = deserializer.readInt64();
        this.valuePercent = deserializer.readInt32();
    }
}
exports.FBuff = FBuff;
class FBuilding {
    constructor(init) {
        this.__type = 'FBuilding';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.altar, 'FAltar');
        serializer.writeDynamicObject(this.arena, 'FArena');
        serializer.writeBoolean(this.available);
        serializer.writeBoolean(this.casted);
        serializer.writeDynamicObject(this.contest, 'FContest');
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.dungeonId, 'string');
        serializer.writeInt64(this.expirationTime);
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.pitstop, 'FPitstop');
        serializer.writeByte(this.type);
    }
    deserialize(deserializer) {
        this.altar = deserializer.readDynamicObject();
        this.arena = deserializer.readDynamicObject();
        this.available = deserializer.readBoolean();
        this.casted = deserializer.readBoolean();
        this.contest = deserializer.readDynamicObject();
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.dungeonId = deserializer.readDynamicObject();
        this.expirationTime = deserializer.readInt64();
        this.id = deserializer.readUtf8String();
        this.pitstop = deserializer.readDynamicObject();
        this.type = deserializer.readByte();
    }
}
exports.FBuilding = FBuilding;
class FBuildingRequest {
    constructor(init) {
        this.__type = 'FBuildingRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.dungeonId, 'string');
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.dungeonId = deserializer.readDynamicObject();
        this.id = deserializer.readUtf8String();
    }
}
exports.FBuildingRequest = FBuildingRequest;
class FBuildingUpdate {
    constructor(init) {
        this.__type = 'FBuildingUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticMap(this.tileBuildings, true, true, 'FTile', 'FTileState');
    }
    deserialize(deserializer) {
        this.tileBuildings = deserializer.readStaticMap('FTile', 'FTileState', true, true);
    }
}
exports.FBuildingUpdate = FBuildingUpdate;
class FCatchCreatureResult {
    constructor(init) {
        this.__type = 'FCatchCreatureResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeDynamicObject(this.ballType, 'enums.ItemType');
        serializer.writeInt32(this.candies);
        serializer.writeDynamicObject(this.candyType, 'enums.CreatureType');
        serializer.writeFloat(this.catchChance);
        serializer.writeDynamicObject(this.catching, 'FCatchingConfig');
        serializer.writeBoolean(this.caught);
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeDynamicObject(this.creature, 'enums.CreatureType');
        serializer.writeInt32(this.dust);
        serializer.writeInt32(this.expAccurate);
        serializer.writeInt32(this.expCreatureExisting);
        serializer.writeInt32(this.expCreatureNew);
        serializer.writeInt32(this.expSpin);
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeBoolean(this.runAway);
        serializer.writeInt32(this.streakDust);
        serializer.writeDynamicObject(this.userCreature, 'FUserCreature');
    }
    deserialize(deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate');
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
        this.levelUpLoot = deserializer.readStaticObject('FLoot');
        this.loot = deserializer.readStaticObject('FLoot');
        this.runAway = deserializer.readBoolean();
        this.streakDust = deserializer.readInt32();
        this.userCreature = deserializer.readDynamicObject();
    }
}
exports.FCatchCreatureResult = FCatchCreatureResult;
class FCatchingConfig {
    constructor(init) {
        this.__type = 'FCatchingConfig';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticMap(this.catchChances, true, true, 'ItemType', 'float');
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
    deserialize(deserializer) {
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
exports.FCatchingConfig = FCatchingConfig;
class FCatchingCreature {
    constructor(init) {
        this.__type = 'FCatchingCreature';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.aggressive);
        serializer.writeByte(this.candyType);
        serializer.writeDynamicObject(this.catching, 'FCatchingConfig');
        serializer.writeInt32(this.cp);
        serializer.writeByte(this.element);
        serializer.writeDynamicObject(this.feedFoodType, 'enums.ItemType');
        serializer.writeInt32(this.feedLeftTime);
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.isCreatureStorageFull);
        serializer.writeStaticMap(this.items, true, true, 'ItemType', 'int');
        serializer.writeByte(this.name);
        serializer.writeFloat(this.quality);
    }
    deserialize(deserializer) {
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
exports.FCatchingCreature = FCatchingCreature;
class FChest {
    constructor(init) {
        this.__type = 'FChest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.id = deserializer.readUtf8String();
    }
}
exports.FChest = FChest;
class FChestUpdate {
    constructor(init) {
        this.__type = 'FChestUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.chests, true, 'FChest');
    }
    deserialize(deserializer) {
        this.chests = deserializer.readStaticList('FChest', true);
    }
}
exports.FChestUpdate = FChestUpdate;
class FClientInfo {
    constructor(init) {
        this.__type = 'FClientInfo';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeUtf8String(this.deviceModel);
        serializer.writeDynamicObject(this.googleAdvertisingId, 'string');
        serializer.writeBoolean(this.googleTrackingEnabled);
        serializer.writeDynamicObject(this.iOsAdvertisingIdentifier, 'string');
        serializer.writeBoolean(this.iOsAdvertisingTrackingEnabled);
        serializer.writeDynamicObject(this.iOsVendorIdentifier, 'string');
        serializer.writeUtf8String(this.language);
        serializer.writeUtf8String(this.platform);
        serializer.writeUtf8String(this.platformVersion);
        serializer.writeUtf8String(this.revision);
        serializer.writeInt32(this.screenHeight);
        serializer.writeInt32(this.screenWidth);
    }
    deserialize(deserializer) {
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
exports.FClientInfo = FClientInfo;
class FClientLogRecord {
    constructor(init) {
        this.__type = 'FClientLogRecord';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeUtf8String(this.clientStartTime);
        serializer.writeFloat(this.clientTime);
        serializer.writeUtf8String(this.logName);
        serializer.writeUtf8String(this.message);
    }
    deserialize(deserializer) {
        this.clientStartTime = deserializer.readUtf8String();
        this.clientTime = deserializer.readFloat();
        this.logName = deserializer.readUtf8String();
        this.message = deserializer.readUtf8String();
    }
}
exports.FClientLogRecord = FClientLogRecord;
class FClientRequest {
    constructor(init) {
        this.__type = 'FClientRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.coordsWithAccuracy, 'GeoCoordsWithAccuracy');
        serializer.writeInt32(this.currentUtcOffsetSeconds);
        serializer.writeInt64(this.time);
    }
    deserialize(deserializer) {
        this.coordsWithAccuracy = deserializer.readStaticObject('GeoCoordsWithAccuracy');
        this.currentUtcOffsetSeconds = deserializer.readInt32();
        this.time = deserializer.readInt64();
    }
}
exports.FClientRequest = FClientRequest;
class FCollectorRating {
    constructor(init) {
        this.__type = 'FCollectorRating';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.topRecords, true, 'FCollectorRatingListRecord');
    }
    deserialize(deserializer) {
        this.topRecords = deserializer.readStaticList('FCollectorRatingListRecord', true);
    }
}
exports.FCollectorRating = FCollectorRating;
class FCollectorRatingListRecord {
    constructor(init) {
        this.__type = 'FCollectorRatingListRecord';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickName);
        serializer.writeInt32(this.place);
        serializer.writeFloat(this.score);
        serializer.writeInt32(this.openCreaturesCount);
        serializer.writeInt32(this.topQualityCreaturesCount);
        serializer.writeInt32(this.topQualityPoweredupCreaturesCount);
    }
    deserialize(deserializer) {
        this.level = deserializer.readInt32();
        this.nickName = deserializer.readUtf8String();
        this.place = deserializer.readInt32();
        this.score = deserializer.readFloat();
        this.openCreaturesCount = deserializer.readInt32();
        this.topQualityCreaturesCount = deserializer.readInt32();
        this.topQualityPoweredupCreaturesCount = deserializer.readInt32();
    }
}
exports.FCollectorRatingListRecord = FCollectorRatingListRecord;
class FConfig {
    constructor(init) {
        this.__type = 'FConfig';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeFloat(this.actionInfoShowDuration);
        serializer.writeFloat(this.activeTimeAllowedInBackgroundDuration);
        serializer.writeFloat(this.aggressiveChanceToAttack);
        serializer.writeFloat(this.aggressiveChanceToJump);
        serializer.writeFloat(this.aggressiveChancesCooldownTime);
        serializer.writeInt32(this.altarAvailableFromLevel);
        serializer.writeFloat(this.angularDrag);
        serializer.writeStaticArray(this.arenaLayerLevels, true, 'int');
        serializer.writeStaticArray(this.arenaLevelsThreshold, true, 'int');
        serializer.writeStaticMap(this.artifactSellPrice, true, true, 'ArtifactName', 'int');
        serializer.writeFloat(this.avatarMoveExtrapolationMaxRunawayDistance);
        serializer.writeInt32(this.avatarMoveMaxDistanceRun);
        serializer.writeFloat(this.avatarMoveMaxMoveDuration);
        serializer.writeFloat(this.avatarMoveReturnToRealPositionDuration);
        serializer.writeFloat(this.avatarMoveReturnToRealPositionTimeout);
        serializer.writeInt32(this.avatarMoveRunSpeed);
        serializer.writeFloat(this.ballCurve);
        serializer.writeFloat(this.bottomSwipeScreenPart);
        serializer.writeStaticArray(this.buildingsVisibilityDistanceLevels, true, 'float');
        serializer.writeInt32(this.buildingsVisionRadius);
        serializer.writeFloat(this.cameraFieldOfView);
        serializer.writeStaticMap(this.catchPopup, true, true, 'float', 'string');
        serializer.writeStaticMap(this.clientTexts, true, true, 'string', 'string');
        serializer.writeBoolean(this.collectorRatingButtonVisibleToAll);
        serializer.writeStaticArray(this.congratulationLayerLevels, true, 'int');
        serializer.writeFloat(this.contestAcceptStartPeriod);
        serializer.writeInt32(this.contestAvailableFromLevel);
        serializer.writeFloat(this.contestBattleTimeout);
        serializer.writeBoolean(this.contestRatingButtonVisibleToAll);
        serializer.writeBoolean(this.contestVisibleToAll);
        serializer.writeFloat(this.contestVisionRadius);
        serializer.writeInt32(this.creaturesDelayVisibility);
        serializer.writeInt32(this.dailyQuestAvailableFromLevel);
        serializer.writeBoolean(this.defaultAugmentedRealitySwitchState);
        serializer.writeInt32(this.defenderBaseAttackBeforeChargedMax);
        serializer.writeInt32(this.defenderBaseAttackBeforeChargedMin);
        serializer.writeFloat(this.delayForCheckMaxSpeedToPlay);
        serializer.writeFloat(this.delayToDisableGameBecauseOfLowGPSAccuracy);
        serializer.writeFloat(this.desiredGpsAccuracy);
        serializer.writeFloat(this.distanceToLoadTiles);
        serializer.writeFloat(this.distanceToUnloadTiles);
        serializer.writeBoolean(this.emulatorCheckEnabled);
        serializer.writeInt32(this.encounterDelayBeforeExtraEncounter);
        serializer.writeStaticArray(this.encounterNeededActiveUserTime, true, 'int');
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
        serializer.writeBoolean(this.maintenanceEnabled);
        serializer.writeUtf8String(this.mapServer);
        serializer.writeInt32(this.mapVersion);
        serializer.writeInt32(this.maxAngularVelocity);
        serializer.writeFloat(this.maxClientPauseDuration);
        serializer.writeFloat(this.maxSpeedForUse);
        serializer.writeInt32(this.maxSpeedToPlay);
        serializer.writeBoolean(this.mentorChooseEnabled);
        serializer.writeBoolean(this.mentorshipEnabled);
        serializer.writeInt32(this.minFPS);
        serializer.writeFloat(this.minFPSMeasureDurationSec);
        serializer.writeFloat(this.monsterLevelPerUserLevel);
        serializer.writeInt32(this.monsterMaxLevel);
        serializer.writeFloat(this.newsCheckIntervalSeconds);
        serializer.writeStaticHashSet(this.notEmulatorModelHashes, true, 'Buffer');
        serializer.writeFloat(this.oppositeDodgeTimeoutSeconds);
        serializer.writeStaticMap(this.personalizationPrices, true, true, 'PersonalizedStop', 'FPrice');
        serializer.writeStaticObject(this.potionConfig, 'PotionConfig');
        serializer.writeDouble(this.radarVisionRadius);
        serializer.writeStaticMap(this.recipes, true, true, 'RecipeType', 'List<>');
        serializer.writeFloat(this.requestRetryDelay);
        serializer.writeFloat(this.screenDifferentSwipeDivision);
        serializer.writeFloat(this.spinGain);
        serializer.writeFloat(this.stopLootStreakDuration);
        serializer.writeInt32(this.stopUsageHintTillLevel);
        serializer.writeFloat(this.superVisionEffectInterval);
        serializer.writeInt32(this.superVisionRadius);
        serializer.writeFloat(this.throwSensitivity);
        serializer.writeFloat(this.timeLimitPerDefender);
        serializer.writeFloat(this.topSwipeScreenPart);
        serializer.writeInt32(this.updateRequestCooldownSeconds);
        serializer.writeInt32(this.updateRequestIgnoreWorseAccuracyCooldownSeconds);
        serializer.writeInt32(this.updateRequestMinimalDistance);
        serializer.writeInt32(this.updateRequestPeriodSeconds);
        serializer.writeInt32(this.weeklyQuestAvailableFromLevel);
        serializer.writeInt32(this.wizardAvailableFromLevel);
        serializer.writeBoolean(this.wizardRatingButtonVisibleToAll);
        serializer.writeFloat(this.worldScreenBuffDisplayMaxDurationTimeSeconds);
        serializer.writeFloat(this.xVelocityFactor);
        serializer.writeFloat(this.xVelocityFactorSpin);
        serializer.writeFloat(this.yVelocityFactor);
    }
    deserialize(deserializer) {
        this.actionInfoShowDuration = deserializer.readFloat();
        this.activeTimeAllowedInBackgroundDuration = deserializer.readFloat();
        this.aggressiveChanceToAttack = deserializer.readFloat();
        this.aggressiveChanceToJump = deserializer.readFloat();
        this.aggressiveChancesCooldownTime = deserializer.readFloat();
        this.altarAvailableFromLevel = deserializer.readInt32();
        this.angularDrag = deserializer.readFloat();
        this.arenaLayerLevels = deserializer.readStaticArray('int', true);
        this.arenaLevelsThreshold = deserializer.readStaticArray('int', true);
        this.artifactSellPrice = deserializer.readStaticMap('ArtifactName', 'int', true, true);
        this.avatarMoveExtrapolationMaxRunawayDistance = deserializer.readFloat();
        this.avatarMoveMaxDistanceRun = deserializer.readInt32();
        this.avatarMoveMaxMoveDuration = deserializer.readFloat();
        this.avatarMoveReturnToRealPositionDuration = deserializer.readFloat();
        this.avatarMoveReturnToRealPositionTimeout = deserializer.readFloat();
        this.avatarMoveRunSpeed = deserializer.readInt32();
        this.ballCurve = deserializer.readFloat();
        this.bottomSwipeScreenPart = deserializer.readFloat();
        this.buildingsVisibilityDistanceLevels = deserializer.readStaticArray('float', true);
        this.buildingsVisionRadius = deserializer.readInt32();
        this.cameraFieldOfView = deserializer.readFloat();
        this.catchPopup = deserializer.readStaticMap('float', 'string', true, true);
        this.clientTexts = deserializer.readStaticMap('string', 'string', true, true);
        this.collectorRatingButtonVisibleToAll = deserializer.readBoolean();
        this.congratulationLayerLevels = deserializer.readStaticArray('int', true);
        this.contestAcceptStartPeriod = deserializer.readFloat();
        this.contestAvailableFromLevel = deserializer.readInt32();
        this.contestBattleTimeout = deserializer.readFloat();
        this.contestRatingButtonVisibleToAll = deserializer.readBoolean();
        this.contestVisibleToAll = deserializer.readBoolean();
        this.contestVisionRadius = deserializer.readFloat();
        this.creaturesDelayVisibility = deserializer.readInt32();
        this.dailyQuestAvailableFromLevel = deserializer.readInt32();
        this.defaultAugmentedRealitySwitchState = deserializer.readBoolean();
        this.defenderBaseAttackBeforeChargedMax = deserializer.readInt32();
        this.defenderBaseAttackBeforeChargedMin = deserializer.readInt32();
        this.delayForCheckMaxSpeedToPlay = deserializer.readFloat();
        this.delayToDisableGameBecauseOfLowGPSAccuracy = deserializer.readFloat();
        this.desiredGpsAccuracy = deserializer.readFloat();
        this.distanceToLoadTiles = deserializer.readFloat();
        this.distanceToUnloadTiles = deserializer.readFloat();
        this.emulatorCheckEnabled = deserializer.readBoolean();
        this.encounterDelayBeforeExtraEncounter = deserializer.readInt32();
        this.encounterNeededActiveUserTime = deserializer.readStaticArray('int', true);
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
        this.maintenanceEnabled = deserializer.readBoolean();
        this.mapServer = deserializer.readUtf8String();
        this.mapVersion = deserializer.readInt32();
        this.maxAngularVelocity = deserializer.readInt32();
        this.maxClientPauseDuration = deserializer.readFloat();
        this.maxSpeedForUse = deserializer.readFloat();
        this.maxSpeedToPlay = deserializer.readInt32();
        this.mentorChooseEnabled = deserializer.readBoolean();
        this.mentorshipEnabled = deserializer.readBoolean();
        this.minFPS = deserializer.readInt32();
        this.minFPSMeasureDurationSec = deserializer.readFloat();
        this.monsterLevelPerUserLevel = deserializer.readFloat();
        this.monsterMaxLevel = deserializer.readInt32();
        this.newsCheckIntervalSeconds = deserializer.readFloat();
        this.notEmulatorModelHashes = deserializer.readStaticHashSet('Buffer', true);
        this.oppositeDodgeTimeoutSeconds = deserializer.readFloat();
        this.personalizationPrices = deserializer.readStaticMap('PersonalizedStop', 'FPrice', true, true);
        this.potionConfig = deserializer.readStaticObject('PotionConfig');
        this.radarVisionRadius = deserializer.readDouble();
        this.recipes = deserializer.readStaticMap('RecipeType', 'List<>', true, true);
        this.requestRetryDelay = deserializer.readFloat();
        this.screenDifferentSwipeDivision = deserializer.readFloat();
        this.spinGain = deserializer.readFloat();
        this.stopLootStreakDuration = deserializer.readFloat();
        this.stopUsageHintTillLevel = deserializer.readInt32();
        this.superVisionEffectInterval = deserializer.readFloat();
        this.superVisionRadius = deserializer.readInt32();
        this.throwSensitivity = deserializer.readFloat();
        this.timeLimitPerDefender = deserializer.readFloat();
        this.topSwipeScreenPart = deserializer.readFloat();
        this.updateRequestCooldownSeconds = deserializer.readInt32();
        this.updateRequestIgnoreWorseAccuracyCooldownSeconds = deserializer.readInt32();
        this.updateRequestMinimalDistance = deserializer.readInt32();
        this.updateRequestPeriodSeconds = deserializer.readInt32();
        this.weeklyQuestAvailableFromLevel = deserializer.readInt32();
        this.wizardAvailableFromLevel = deserializer.readInt32();
        this.wizardRatingButtonVisibleToAll = deserializer.readBoolean();
        this.worldScreenBuffDisplayMaxDurationTimeSeconds = deserializer.readFloat();
        this.xVelocityFactor = deserializer.readFloat();
        this.xVelocityFactorSpin = deserializer.readFloat();
        this.yVelocityFactor = deserializer.readFloat();
    }
}
exports.FConfig = FConfig;
class FContest {
    constructor(init) {
        this.__type = 'FContest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.emptyPassword);
        serializer.writeUtf8String(this.ownerId);
    }
    deserialize(deserializer) {
        this.emptyPassword = deserializer.readBoolean();
        this.ownerId = deserializer.readUtf8String();
    }
}
exports.FContest = FContest;
class FContestBattle {
    constructor(init) {
        this.__type = 'FContestBattle';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeFloat(this.hpPercent);
        serializer.writeBoolean(this.isMyBattle);
        serializer.writeUtf8String(this.nickname);
        serializer.writeUtf8String(this.nicknameOpponent);
        serializer.writeBoolean(this.timeout);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer) {
        this.hpPercent = deserializer.readFloat();
        this.isMyBattle = deserializer.readBoolean();
        this.nickname = deserializer.readUtf8String();
        this.nicknameOpponent = deserializer.readUtf8String();
        this.timeout = deserializer.readBoolean();
        this.victory = deserializer.readBoolean();
    }
}
exports.FContestBattle = FContestBattle;
class FContestParticipant {
    constructor(init) {
        this.__type = 'FContestParticipant';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.buffLevel, 'int');
        serializer.writeBoolean(this.isMaxLevel);
        serializer.writeBoolean(this.isMyself);
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickname);
        serializer.writeDynamicObject(this.startAccepted, 'bool');
    }
    deserialize(deserializer) {
        this.buffLevel = deserializer.readDynamicObject();
        this.isMaxLevel = deserializer.readBoolean();
        this.isMyself = deserializer.readBoolean();
        this.level = deserializer.readInt32();
        this.nickname = deserializer.readUtf8String();
        this.startAccepted = deserializer.readDynamicObject();
    }
}
exports.FContestParticipant = FContestParticipant;
class FContestRating {
    constructor(init) {
        this.__type = 'FContestRating';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.topRecords, true, 'FContestRatingListRecord');
    }
    deserialize(deserializer) {
        this.topRecords = deserializer.readStaticList('FContestRatingListRecord', true);
    }
}
exports.FContestRating = FContestRating;
class FContestRatingAward {
    constructor(init) {
        this.__type = 'FContestRatingAward';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.dust);
        serializer.writeInt32(this.month);
        serializer.writeInt32(this.place);
        serializer.writeInt32(this.runes);
    }
    deserialize(deserializer) {
        this.dust = deserializer.readInt32();
        this.month = deserializer.readInt32();
        this.place = deserializer.readInt32();
        this.runes = deserializer.readInt32();
    }
}
exports.FContestRatingAward = FContestRatingAward;
class FContestRatingListRecord {
    constructor(init) {
        this.__type = 'FContestRatingListRecord';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickName);
        serializer.writeInt32(this.place);
        serializer.writeFloat(this.score);
        serializer.writeInt32(this.awardDust);
        serializer.writeInt32(this.awardRunes);
        serializer.writeInt32(this.contestCount);
    }
    deserialize(deserializer) {
        this.level = deserializer.readInt32();
        this.nickName = deserializer.readUtf8String();
        this.place = deserializer.readInt32();
        this.score = deserializer.readFloat();
        this.awardDust = deserializer.readInt32();
        this.awardRunes = deserializer.readInt32();
        this.contestCount = deserializer.readInt32();
    }
}
exports.FContestRatingListRecord = FContestRatingListRecord;
class FContestStats {
    constructor(init) {
        this.__type = 'FContestStats';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.completed);
        serializer.writeFloat(this.gainedScore);
        serializer.writeFloat(this.hpPercentTotal);
        serializer.writeBoolean(this.isMyself);
        serializer.writeInt32(this.lostAsOpponentCount);
        serializer.writeInt32(this.lostCount);
        serializer.writeUtf8String(this.nickname);
        serializer.writeInt32(this.winAsOpponentCount);
        serializer.writeInt32(this.winCount);
    }
    deserialize(deserializer) {
        this.completed = deserializer.readBoolean();
        this.gainedScore = deserializer.readFloat();
        this.hpPercentTotal = deserializer.readFloat();
        this.isMyself = deserializer.readBoolean();
        this.lostAsOpponentCount = deserializer.readInt32();
        this.lostCount = deserializer.readInt32();
        this.nickname = deserializer.readUtf8String();
        this.winAsOpponentCount = deserializer.readInt32();
        this.winCount = deserializer.readInt32();
    }
}
exports.FContestStats = FContestStats;
class FContestUpdate {
    constructor(init) {
        this.__type = 'FContestUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.battles, true, 'FContestBattle');
        serializer.writeBoolean(this.canStart);
        serializer.writeUtf8String(this.contestId);
        serializer.writeBoolean(this.hideContestScreen);
        serializer.writeBoolean(this.isOwner);
        serializer.writeUtf8String(this.ownerNickname);
        serializer.writeStaticList(this.participantList, true, 'FContestParticipant');
        serializer.writeFloat(this.participantTtl);
        serializer.writeDynamicObject(this.pendingBattle, 'string');
        serializer.writeBoolean(this.showContestScreen);
        serializer.writeByte(this.stage);
        serializer.writeStaticList(this.stats, true, 'FContestStats');
        serializer.writeInt32(this.totalBattlesCount);
        serializer.writeInt32(this.userBattlesCount);
    }
    deserialize(deserializer) {
        this.battles = deserializer.readStaticList('FContestBattle', true);
        this.canStart = deserializer.readBoolean();
        this.contestId = deserializer.readUtf8String();
        this.hideContestScreen = deserializer.readBoolean();
        this.isOwner = deserializer.readBoolean();
        this.ownerNickname = deserializer.readUtf8String();
        this.participantList = deserializer.readStaticList('FContestParticipant', true);
        this.participantTtl = deserializer.readFloat();
        this.pendingBattle = deserializer.readDynamicObject();
        this.showContestScreen = deserializer.readBoolean();
        this.stage = deserializer.readByte();
        this.stats = deserializer.readStaticList('FContestStats', true);
        this.totalBattlesCount = deserializer.readInt32();
        this.userBattlesCount = deserializer.readInt32();
    }
}
exports.FContestUpdate = FContestUpdate;
class FCreadex {
    constructor(init) {
        this.__type = 'FCreadex';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.entries, true, 'FCreadexEntry');
    }
    deserialize(deserializer) {
        this.entries = deserializer.readStaticList('FCreadexEntry', true);
    }
}
exports.FCreadex = FCreadex;
class FCreadexChain {
    constructor(init) {
        this.__type = 'FCreadexChain';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.caught);
        serializer.writeByte(this.creature);
        serializer.writeBoolean(this.seen);
    }
    deserialize(deserializer) {
        this.caught = deserializer.readBoolean();
        this.creature = deserializer.readByte();
        this.seen = deserializer.readBoolean();
    }
}
exports.FCreadexChain = FCreadexChain;
class FCreadexEntry {
    constructor(init) {
        this.__type = 'FCreadexEntry';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.caughtQuantity);
        serializer.writeDynamicList(this.chain, true, 'FCreadexChain');
        serializer.writeByte(this.element);
        serializer.writeBoolean(this.hasGolden);
        serializer.writeByte(this.name);
        serializer.writeBoolean(this.seen);
        serializer.writeInt32(this.tier);
    }
    deserialize(deserializer) {
        this.caughtQuantity = deserializer.readInt32();
        this.chain = deserializer.readDynamicList('FCreadexChain', true);
        this.element = deserializer.readByte();
        this.hasGolden = deserializer.readBoolean();
        this.name = deserializer.readByte();
        this.seen = deserializer.readBoolean();
        this.tier = deserializer.readInt32();
    }
}
exports.FCreadexEntry = FCreadexEntry;
class FCreatureRequest {
    constructor(init) {
        this.__type = 'FCreatureRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.veryFirst);
    }
    deserialize(deserializer) {
        this.id = deserializer.readUtf8String();
        this.veryFirst = deserializer.readBoolean();
    }
}
exports.FCreatureRequest = FCreatureRequest;
class FCreatureUpdate {
    constructor(init) {
        this.__type = 'FCreatureUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.inRadar, true, 'FWildCreature');
        serializer.writeStaticList(this.wilds, true, 'FWildCreature');
    }
    deserialize(deserializer) {
        this.inRadar = deserializer.readStaticList('FWildCreature', true);
        this.wilds = deserializer.readStaticList('FWildCreature', true);
    }
}
exports.FCreatureUpdate = FCreatureUpdate;
class FDailyQuest {
    constructor(init) {
        this.__type = 'FDailyQuest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.count);
        serializer.writeDynamicObject(this.elementType, 'enums.ElementType');
        serializer.writeDynamicObject(this.id, 'string');
        serializer.writeInt32(this.nextDailyQuestIn);
        serializer.writeDynamicList(this.pitstopPath, true, 'IdAndCoords');
        serializer.writeInt32(this.progress);
        serializer.writeDynamicObject(this.type, 'enums.QuestType');
    }
    deserialize(deserializer) {
        this.count = deserializer.readInt32();
        this.elementType = deserializer.readDynamicObject();
        this.id = deserializer.readDynamicObject();
        this.nextDailyQuestIn = deserializer.readInt32();
        this.pitstopPath = deserializer.readDynamicList('IdAndCoords', true);
        this.progress = deserializer.readInt32();
        this.type = deserializer.readDynamicObject();
    }
}
exports.FDailyQuest = FDailyQuest;
class FDefenderDetails {
    constructor(init) {
        this.__type = 'FDefenderDetails';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeByte(this.allianceType);
        serializer.writeDynamicObject(this.creatureAlias, 'string');
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureName);
        serializer.writeByte(this.elementType);
        serializer.writeInt32(this.ownerLevel);
        serializer.writeUtf8String(this.ownerName);
        serializer.writeInt32(this.userAppearance);
    }
    deserialize(deserializer) {
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
exports.FDefenderDetails = FDefenderDetails;
class FDungeonUpdate {
    constructor(init) {
        this.__type = 'FDungeonUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeFloat(this.rotation);
        serializer.writeInt32(this.size);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.rotation = deserializer.readFloat();
        this.size = deserializer.readInt32();
        this.type = deserializer.readByte();
    }
}
exports.FDungeonUpdate = FDungeonUpdate;
class FEgg {
    constructor(init) {
        this.__type = 'FEgg';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeByte(this.eggType);
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.incubatorId, 'string');
        serializer.writeDynamicObject(this.incubatorType, 'enums.ItemType');
        serializer.writeBoolean(this.isEggForRoost);
        serializer.writeBoolean(this.isHatching);
        serializer.writeFloat(this.passedDistance);
        serializer.writeFloat(this.totalDistance);
        serializer.writeInt64(this.totalIncubationTime);
    }
    deserialize(deserializer) {
        this.eggType = deserializer.readByte();
        this.id = deserializer.readUtf8String();
        this.incubatorId = deserializer.readDynamicObject();
        this.incubatorType = deserializer.readDynamicObject();
        this.isEggForRoost = deserializer.readBoolean();
        this.isHatching = deserializer.readBoolean();
        this.passedDistance = deserializer.readFloat();
        this.totalDistance = deserializer.readFloat();
        this.totalIncubationTime = deserializer.readInt64();
    }
}
exports.FEgg = FEgg;
class FEncounterBattleResult {
    constructor(init) {
        this.__type = 'FEncounterBattleResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeFloat(this.resultScreenDelay);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer) {
        this.loot = deserializer.readStaticObject('FLoot');
        this.resultScreenDelay = deserializer.readFloat();
        this.victory = deserializer.readBoolean();
    }
}
exports.FEncounterBattleResult = FEncounterBattleResult;
class FEncounterDetails {
    constructor(init) {
        this.__type = 'FEncounterDetails';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeInt32(this.creatureCp);
        serializer.writeByte(this.creatureElementType);
        serializer.writeByte(this.creatureName);
        serializer.writeBoolean(this.extraEncounter);
        serializer.writeUtf8String(this.id);
        serializer.writeInt32(this.level);
    }
    deserialize(deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.creatureCp = deserializer.readInt32();
        this.creatureElementType = deserializer.readByte();
        this.creatureName = deserializer.readByte();
        this.extraEncounter = deserializer.readBoolean();
        this.id = deserializer.readUtf8String();
        this.level = deserializer.readInt32();
    }
}
exports.FEncounterDetails = FEncounterDetails;
class FEncounterUpdate {
    constructor(init) {
        this.__type = 'FEncounterUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.attacker, 'FFightCreature');
        serializer.writeStaticObject(this.defender, 'FFightCreature');
    }
    deserialize(deserializer) {
        this.attacker = deserializer.readStaticObject('FFightCreature');
        this.defender = deserializer.readStaticObject('FFightCreature');
    }
}
exports.FEncounterUpdate = FEncounterUpdate;
class FFeedMonsterResult {
    constructor(init) {
        this.__type = 'FFeedMonsterResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt64(this.feedLiveTime);
    }
    deserialize(deserializer) {
        this.feedLiveTime = deserializer.readInt64();
    }
}
exports.FFeedMonsterResult = FFeedMonsterResult;
class FFightCreature {
    constructor(init) {
        this.__type = 'FFightCreature';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.alias, 'string');
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
        serializer.writeFloat(this.resistCoef);
        serializer.writeByte(this.resistFor);
        serializer.writeFloat(this.rightElementAttackCoef);
        serializer.writeFloat(this.scale);
        serializer.writeFloat(this.specAttackCoef);
        serializer.writeFloat(this.startCamPosDistance);
        serializer.writeFloat(this.startCamPosHeight);
        serializer.writeFloat(this.totalHp);
        serializer.writeByte(this.type);
        serializer.writeFloat(this.wrongElementAttackCoef);
    }
    deserialize(deserializer) {
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
        this.resistCoef = deserializer.readFloat();
        this.resistFor = deserializer.readByte();
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
exports.FFightCreature = FFightCreature;
class FFightItem {
    constructor(init) {
        this.__type = 'FFightItem';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeFloat(this.attackerDamageReceived);
        serializer.writeUtf8String(this.attackerId);
        serializer.writeFloat(this.defenderDamageReceived);
        serializer.writeUtf8String(this.defenderId);
    }
    deserialize(deserializer) {
        this.attackerDamageReceived = deserializer.readFloat();
        this.attackerId = deserializer.readUtf8String();
        this.defenderDamageReceived = deserializer.readFloat();
        this.defenderId = deserializer.readUtf8String();
    }
}
exports.FFightItem = FFightItem;
class FFightRequest {
    constructor(init) {
        this.__type = 'FFightRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.battleId, 'string');
        serializer.writeInt32(this.chargedAttacksByAi);
        serializer.writeInt32(this.dodges);
        serializer.writeStaticList(this.items, true, 'FFightItem');
        serializer.writeBoolean(this.leaveBattle);
        serializer.writeInt32(this.successfulDodges);
        serializer.writeBoolean(this.timeout);
    }
    deserialize(deserializer) {
        this.battleId = deserializer.readDynamicObject();
        this.chargedAttacksByAi = deserializer.readInt32();
        this.dodges = deserializer.readInt32();
        this.items = deserializer.readStaticList('FFightItem', true);
        this.leaveBattle = deserializer.readBoolean();
        this.successfulDodges = deserializer.readInt32();
        this.timeout = deserializer.readBoolean();
    }
}
exports.FFightRequest = FFightRequest;
class FFightUpdate {
    constructor(init) {
        this.__type = 'FFightUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.attackers, true, 'FFightCreature');
        serializer.writeFloat(this.autoChangeAttackerHpPercent);
        serializer.writeUtf8String(this.battleId);
        serializer.writeDynamicObject(this.defenderNickname, 'string');
        serializer.writeStaticList(this.defenders, true, 'FFightCreature');
        serializer.writeFloat(this.dodgeChance);
    }
    deserialize(deserializer) {
        this.attackers = deserializer.readStaticList('FFightCreature', true);
        this.autoChangeAttackerHpPercent = deserializer.readFloat();
        this.battleId = deserializer.readUtf8String();
        this.defenderNickname = deserializer.readDynamicObject();
        this.defenders = deserializer.readStaticList('FFightCreature', true);
        this.dodgeChance = deserializer.readFloat();
    }
}
exports.FFightUpdate = FFightUpdate;
class FHatchedEggs {
    constructor(init) {
        this.__type = 'FHatchedEggs';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.egg, 'FEgg');
        serializer.writeUtf8String(this.incubatorId);
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer) {
        this.egg = deserializer.readStaticObject('FEgg');
        this.incubatorId = deserializer.readUtf8String();
        this.loot = deserializer.readStaticObject('FLoot');
    }
}
exports.FHatchedEggs = FHatchedEggs;
class FHatchingResult {
    constructor(init) {
        this.__type = 'FHatchingResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeStaticObject(this.creature, 'FUserCreature');
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate');
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readStaticObject('FUserCreature');
        this.levelUpLoot = deserializer.readStaticObject('FLoot');
        this.loot = deserializer.readStaticObject('FLoot');
    }
}
exports.FHatchingResult = FHatchingResult;
class FInAppEventUpdate {
    constructor(init) {
        this.__type = 'FInAppEventUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.events, true, 'InAppEventInfo');
    }
    deserialize(deserializer) {
        this.events = deserializer.readStaticList('InAppEventInfo', true);
    }
}
exports.FInAppEventUpdate = FInAppEventUpdate;
class FIncubator {
    constructor(init) {
        this.__type = 'FIncubator';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.eggId, 'string');
        serializer.writeUtf8String(this.incubatorId);
        serializer.writeDynamicObject(this.itemType, 'enums.ItemType');
        serializer.writeDynamicObject(this.roostBuildingId, 'string');
        serializer.writeInt32(this.slotIndex);
        serializer.writeInt32(this.usagesLeft);
    }
    deserialize(deserializer) {
        this.eggId = deserializer.readDynamicObject();
        this.incubatorId = deserializer.readUtf8String();
        this.itemType = deserializer.readDynamicObject();
        this.roostBuildingId = deserializer.readDynamicObject();
        this.slotIndex = deserializer.readInt32();
        this.usagesLeft = deserializer.readInt32();
    }
}
exports.FIncubator = FIncubator;
class FIngameNotifications {
    constructor(init) {
        this.__type = 'FIngameNotifications';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.notifications, true, 'FNotification');
    }
    deserialize(deserializer) {
        this.notifications = deserializer.readStaticList('FNotification', true);
    }
}
exports.FIngameNotifications = FIngameNotifications;
class FItemCreatureGroup {
    constructor(init) {
        this.__type = 'FItemCreatureGroup';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.active);
        serializer.writeDynamicObject(this.creature, 'enums.CreatureType');
        serializer.writeBoolean(this.isOfferPrice);
        serializer.writeStaticMap(this.items, true, true, 'ItemType', 'int');
        serializer.writeInt32(this.price);
    }
    deserialize(deserializer) {
        this.active = deserializer.readBoolean();
        this.creature = deserializer.readDynamicObject();
        this.isOfferPrice = deserializer.readBoolean();
        this.items = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.price = deserializer.readInt32();
    }
}
exports.FItemCreatureGroup = FItemCreatureGroup;
class FJournalRecord {
    constructor(init) {
        this.__type = 'FJournalRecord';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt64(this.date);
        serializer.writeStaticMap(this.details, true, true, 'string', 'string');
        serializer.writeByte(this.type);
    }
    deserialize(deserializer) {
        this.date = deserializer.readInt64();
        this.details = deserializer.readStaticMap('string', 'string', true, true);
        this.type = deserializer.readByte();
    }
}
exports.FJournalRecord = FJournalRecord;
class FJournalUpdate {
    constructor(init) {
        this.__type = 'FJournalUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.records, true, 'FJournalRecord');
    }
    deserialize(deserializer) {
        this.records = deserializer.readStaticList('FJournalRecord', true);
    }
}
exports.FJournalUpdate = FJournalUpdate;
class FLoot {
    constructor(init) {
        this.__type = 'FLoot';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.lootList, false, 'FBaseLootItem');
        serializer.writeDynamicObject(this.streakIndex, 'int');
    }
    deserialize(deserializer) {
        this.lootList = deserializer.readStaticList('FBaseLootItem', false);
        this.streakIndex = deserializer.readDynamicObject();
    }
}
exports.FLoot = FLoot;
class FLootItemArtifact {
    constructor(init) {
        this.__type = 'FLootItemArtifact';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.artifact);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
        this.artifact = deserializer.readByte();
    }
}
exports.FLootItemArtifact = FLootItemArtifact;
class FLootItemBuff {
    constructor(init) {
        this.__type = 'FLootItemBuff';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeStaticObject(this.buff, 'BuffConfig');
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
        this.buff = deserializer.readStaticObject('BuffConfig');
    }
}
exports.FLootItemBuff = FLootItemBuff;
class FLootItemCandy {
    constructor(init) {
        this.__type = 'FLootItemCandy';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.candyType);
        serializer.writeBoolean(this.fromBuddy);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
        this.candyType = deserializer.readByte();
        this.fromBuddy = deserializer.readBoolean();
    }
}
exports.FLootItemCandy = FLootItemCandy;
class FLootItemCoins {
    constructor(init) {
        this.__type = 'FLootItemCoins';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
    }
}
exports.FLootItemCoins = FLootItemCoins;
class FLootItemDust {
    constructor(init) {
        this.__type = 'FLootItemDust';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeBoolean(this.isStreak);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
        this.isStreak = deserializer.readBoolean();
    }
}
exports.FLootItemDust = FLootItemDust;
class FLootItemExp {
    constructor(init) {
        this.__type = 'FLootItemExp';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
    }
}
exports.FLootItemExp = FLootItemExp;
class FLootItemInstantUseItem {
    constructor(init) {
        this.__type = 'FLootItemInstantUseItem';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeByte(this.item);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
        this.item = deserializer.readByte();
    }
}
exports.FLootItemInstantUseItem = FLootItemInstantUseItem;
class FLootItemItem {
    constructor(init) {
        this.__type = 'FLootItemItem';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeBoolean(this.isStreak);
        serializer.writeByte(this.item);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
        this.isStreak = deserializer.readBoolean();
        this.item = deserializer.readByte();
    }
}
exports.FLootItemItem = FLootItemItem;
class FLootItemRecipe {
    constructor(init) {
        this.__type = 'FLootItemRecipe';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.qty);
        serializer.writeInt32(this.level);
        serializer.writeByte(this.recipe);
    }
    deserialize(deserializer) {
        this.qty = deserializer.readInt32();
        this.level = deserializer.readInt32();
        this.recipe = deserializer.readByte();
    }
}
exports.FLootItemRecipe = FLootItemRecipe;
class FMentorshipAwardUpdate {
    constructor(init) {
        this.__type = 'FMentorshipAwardUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeByte(this.creatureType);
        serializer.writeInt32(this.gotCandiesCount);
        serializer.writeBoolean(this.gotDragon);
        serializer.writeDynamicObject(this.userCreature, 'FUserCreature');
    }
    deserialize(deserializer) {
        this.creadex = deserializer.readDynamicObject();
        this.creatureType = deserializer.readByte();
        this.gotCandiesCount = deserializer.readInt32();
        this.gotDragon = deserializer.readBoolean();
        this.userCreature = deserializer.readDynamicObject();
    }
}
exports.FMentorshipAwardUpdate = FMentorshipAwardUpdate;
class FMentorshipInfo {
    constructor(init) {
        this.__type = 'FMentorshipInfo';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.canBeMentor);
        serializer.writeBoolean(this.canChooseMentor);
        serializer.writeBoolean(this.hasParentMentor);
        serializer.writeInt32(this.levelRequiredToBeMentor);
        serializer.writeUtf8String(this.ownMentorCode);
        serializer.writeUtf8String(this.parentMentorId);
        serializer.writeUtf8String(this.parentMentorNickname);
        serializer.writeStaticList(this.students, true, 'FStudent');
        serializer.writeBoolean(this.wasKickedByParentMentor);
    }
    deserialize(deserializer) {
        this.canBeMentor = deserializer.readBoolean();
        this.canChooseMentor = deserializer.readBoolean();
        this.hasParentMentor = deserializer.readBoolean();
        this.levelRequiredToBeMentor = deserializer.readInt32();
        this.ownMentorCode = deserializer.readUtf8String();
        this.parentMentorId = deserializer.readUtf8String();
        this.parentMentorNickname = deserializer.readUtf8String();
        this.students = deserializer.readStaticList('FStudent', true);
        this.wasKickedByParentMentor = deserializer.readBoolean();
    }
}
exports.FMentorshipInfo = FMentorshipInfo;
class FNewsArticle {
    constructor(init) {
        this.__type = 'FNewsArticle';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticHashSet(this.activeNewsIds, true, 'string');
        serializer.writeInt32(this.activeOfferCurrent);
        serializer.writeInt32(this.activeOfferTotal);
        serializer.writeUtf8String(this.body);
        serializer.writeInt64(this.freshNewsDate);
        serializer.writeUtf8String(this.id);
        serializer.writeUtf8String(this.title);
    }
    deserialize(deserializer) {
        this.activeNewsIds = deserializer.readStaticHashSet('string', true);
        this.activeOfferCurrent = deserializer.readInt32();
        this.activeOfferTotal = deserializer.readInt32();
        this.body = deserializer.readUtf8String();
        this.freshNewsDate = deserializer.readInt64();
        this.id = deserializer.readUtf8String();
        this.title = deserializer.readUtf8String();
    }
}
exports.FNewsArticle = FNewsArticle;
class FNicknameValidationResult {
    constructor(init) {
        this.__type = 'FNicknameValidationResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.error, 'enums.FNicknameValidationError');
        serializer.writeDynamicObject(this.suggestedNickname, 'string');
    }
    deserialize(deserializer) {
        this.error = deserializer.readDynamicObject();
        this.suggestedNickname = deserializer.readDynamicObject();
    }
}
exports.FNicknameValidationResult = FNicknameValidationResult;
class FNotification {
    constructor(init) {
        this.__type = 'FNotification';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeUtf8String(this.message);
        serializer.writeUtf8String(this.title);
        serializer.writeUtf8String(this.type);
    }
    deserialize(deserializer) {
        this.message = deserializer.readUtf8String();
        this.title = deserializer.readUtf8String();
        this.type = deserializer.readUtf8String();
    }
}
exports.FNotification = FNotification;
class FObeliskDetails {
    constructor(init) {
        this.__type = 'FObeliskDetails';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.dailyQuest, 'FDailyQuest');
        serializer.writeDynamicObject(this.fragment, 'FWeeklyQuestFragment');
        serializer.writeUtf8String(this.id);
        serializer.writeBoolean(this.justOpened);
        serializer.writeDynamicObject(this.weeklyQuest, 'FWeeklyQuest');
    }
    deserialize(deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.dailyQuest = deserializer.readDynamicObject();
        this.fragment = deserializer.readDynamicObject();
        this.id = deserializer.readUtf8String();
        this.justOpened = deserializer.readBoolean();
        this.weeklyQuest = deserializer.readDynamicObject();
    }
}
exports.FObeliskDetails = FObeliskDetails;
class FOpenChestResult {
    constructor(init) {
        this.__type = 'FOpenChestResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer) {
        this.levelUpLoot = deserializer.readDynamicObject();
        this.loot = deserializer.readStaticObject('FLoot');
    }
}
exports.FOpenChestResult = FOpenChestResult;
class FPickItemsResponse {
    constructor(init) {
        this.__type = 'FPickItemsResponse';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer) {
        this.levelUpLoot = deserializer.readDynamicObject();
        this.loot = deserializer.readStaticObject('FLoot');
    }
}
exports.FPickItemsResponse = FPickItemsResponse;
class FPitstop {
    constructor(init) {
        this.__type = 'FPitstop';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.cooldown);
        serializer.writeDynamicObject(this.lureBy, 'string');
        serializer.writeInt64(this.lureTimeLeft);
        serializer.writeDynamicObject(this.personalized, 'enums.PersonalizedStop');
    }
    deserialize(deserializer) {
        this.cooldown = deserializer.readBoolean();
        this.lureBy = deserializer.readDynamicObject();
        this.lureTimeLeft = deserializer.readInt64();
        this.personalized = deserializer.readDynamicObject();
    }
}
exports.FPitstop = FPitstop;
class FPrice {
    constructor(init) {
        this.__type = 'FPrice';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.isOffer);
        serializer.writeInt32(this.price);
    }
    deserialize(deserializer) {
        this.isOffer = deserializer.readBoolean();
        this.price = deserializer.readInt32();
    }
}
exports.FPrice = FPrice;
class FPurchaseResult {
    constructor(init) {
        this.__type = 'FPurchaseResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeStaticMap(this.creature, true, true, 'FUserCreature', 'bool');
    }
    deserialize(deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate');
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readStaticMap('FUserCreature', 'bool', true, true);
    }
}
exports.FPurchaseResult = FPurchaseResult;
class FQuestCompleted {
    constructor(init) {
        this.__type = 'FQuestCompleted';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.activeObjects, 'FActiveObjectsUpdate');
        serializer.writeDynamicObject(this.dailyQuest, 'FDailyQuest');
        serializer.writeDynamicObject(this.goldenEgg, 'FHatchedEggs');
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeBoolean(this.weeklyQuest);
    }
    deserialize(deserializer) {
        this.activeObjects = deserializer.readDynamicObject();
        this.dailyQuest = deserializer.readDynamicObject();
        this.goldenEgg = deserializer.readDynamicObject();
        this.levelUpLoot = deserializer.readStaticObject('FLoot');
        this.loot = deserializer.readStaticObject('FLoot');
        this.weeklyQuest = deserializer.readBoolean();
    }
}
exports.FQuestCompleted = FQuestCompleted;
class FQuestUpdate {
    constructor(init) {
        this.__type = 'FQuestUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.completed, 'FQuestCompleted');
        serializer.writeDynamicObject(this.highlightBuilding, 'IdAndCoords');
        serializer.writeDynamicList(this.path, true, 'IdAndCoords');
    }
    deserialize(deserializer) {
        this.completed = deserializer.readDynamicObject();
        this.highlightBuilding = deserializer.readDynamicObject();
        this.path = deserializer.readDynamicList('IdAndCoords', true);
    }
}
exports.FQuestUpdate = FQuestUpdate;
class FRecipeConfig {
    constructor(init) {
        this.__type = 'FRecipeConfig';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.duration);
        serializer.writeInt32(this.percent);
        serializer.writeStaticList(this.runes, true, 'ItemType');
    }
    deserialize(deserializer) {
        this.duration = deserializer.readInt32();
        this.percent = deserializer.readInt32();
        this.runes = deserializer.readStaticList('ItemType', true);
    }
}
exports.FRecipeConfig = FRecipeConfig;
class FRegistrationInfo {
    constructor(init) {
        this.__type = 'FRegistrationInfo';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeUtf8String(this.age);
        serializer.writeUtf8String(this.email);
        serializer.writeUtf8String(this.gender);
        serializer.writeUtf8String(this.regType);
        serializer.writeUtf8String(this.socialId);
    }
    deserialize(deserializer) {
        this.age = deserializer.readUtf8String();
        this.email = deserializer.readUtf8String();
        this.gender = deserializer.readUtf8String();
        this.regType = deserializer.readUtf8String();
        this.socialId = deserializer.readUtf8String();
    }
}
exports.FRegistrationInfo = FRegistrationInfo;
class FResistModifyDetails {
    constructor(init) {
        this.__type = 'FResistModifyDetails';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.matchingCreatures);
        serializer.writeFloat(this.resultResistMax);
        serializer.writeFloat(this.resultResistMin);
        serializer.writeInt32(this.tier);
    }
    deserialize(deserializer) {
        this.matchingCreatures = deserializer.readInt32();
        this.resultResistMax = deserializer.readFloat();
        this.resultResistMin = deserializer.readFloat();
        this.tier = deserializer.readInt32();
    }
}
exports.FResistModifyDetails = FResistModifyDetails;
class FResistModifyResult {
    constructor(init) {
        this.__type = 'FResistModifyResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.creature, 'FUserCreature');
        serializer.writeStaticObject(this.modifyDetails, 'FResistModifyDetails');
        serializer.writeBoolean(this.newResistValue);
    }
    deserialize(deserializer) {
        this.creature = deserializer.readStaticObject('FUserCreature');
        this.modifyDetails = deserializer.readStaticObject('FResistModifyDetails');
        this.newResistValue = deserializer.readBoolean();
    }
}
exports.FResistModifyResult = FResistModifyResult;
class FScoutRequest {
    constructor(init) {
        this.__type = 'FScoutRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.clientRequest, 'FClientRequest');
        serializer.writeStaticObject(this.scoutCoords, 'GeoCoords');
    }
    deserialize(deserializer) {
        this.clientRequest = deserializer.readStaticObject('FClientRequest');
        this.scoutCoords = deserializer.readStaticObject('GeoCoords');
    }
}
exports.FScoutRequest = FScoutRequest;
class FServiceError {
    constructor(init) {
        this.__type = 'FServiceError';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticArray(this.args, false, 'object');
        serializer.writeUtf8String(this.cause);
    }
    deserialize(deserializer) {
        this.args = deserializer.readStaticArray('object', false);
        this.cause = deserializer.readUtf8String();
    }
}
exports.FServiceError = FServiceError;
class FShopConfig {
    constructor(init) {
        this.__type = 'FShopConfig';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticMap(this.artifactsPrice, true, true, 'ArtifactName', 'FPrice');
        serializer.writeStaticObject(this.bagUpgrade, 'ProductLot');
        serializer.writeStaticMap(this.coins, true, true, 'string', 'ProductLot');
        serializer.writeStaticObject(this.creatureStorageUpgrade, 'ProductLot');
        serializer.writeStaticMap(this.creatures, true, true, 'string', 'FItemCreatureGroup');
        serializer.writeStaticMap(this.extraPacks, true, true, 'string', 'ExtraPack');
        serializer.writeStaticMap(this.marketFees, true, true, 'string', 'float');
        serializer.writeStaticList(this.products, true, 'ProductGroup');
        serializer.writeStaticList(this.saleSets, true, 'SaleSetConfig');
    }
    deserialize(deserializer) {
        this.artifactsPrice = deserializer.readStaticMap('ArtifactName', 'FPrice', true, true);
        this.bagUpgrade = deserializer.readStaticObject('ProductLot');
        this.coins = deserializer.readStaticMap('string', 'ProductLot', true, true);
        this.creatureStorageUpgrade = deserializer.readStaticObject('ProductLot');
        this.creatures = deserializer.readStaticMap('string', 'FItemCreatureGroup', true, true);
        this.extraPacks = deserializer.readStaticMap('string', 'ExtraPack', true, true);
        this.marketFees = deserializer.readStaticMap('string', 'float', true, true);
        this.products = deserializer.readStaticList('ProductGroup', true);
        this.saleSets = deserializer.readStaticList('SaleSetConfig', true);
    }
}
exports.FShopConfig = FShopConfig;
class FShopConfigRequest {
    constructor(init) {
        this.__type = 'FShopConfigRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBuffer(this.shopConfigHash);
    }
    deserialize(deserializer) {
        this.shopConfigHash = deserializer.readBuffer();
    }
}
exports.FShopConfigRequest = FShopConfigRequest;
class FSpellCastDone {
    constructor(init) {
        this.__type = 'FSpellCastDone';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.altarCoords, 'GeoCoords');
        serializer.writeByte(this.spellType);
    }
    deserialize(deserializer) {
        this.altarCoords = deserializer.readStaticObject('GeoCoords');
        this.spellType = deserializer.readByte();
    }
}
exports.FSpellCastDone = FSpellCastDone;
class FSpellEffectsUpdate {
    constructor(init) {
        this.__type = 'FSpellEffectsUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticHashSet(this.hitArenas, true, 'string');
    }
    deserialize(deserializer) {
        this.hitArenas = deserializer.readStaticHashSet('string', true);
    }
}
exports.FSpellEffectsUpdate = FSpellEffectsUpdate;
class FStartEncounterRequest {
    constructor(init) {
        this.__type = 'FStartEncounterRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeUtf8String(this.attackerId);
        serializer.writeUtf8String(this.defenderId);
    }
    deserialize(deserializer) {
        this.attackerId = deserializer.readUtf8String();
        this.defenderId = deserializer.readUtf8String();
    }
}
exports.FStartEncounterRequest = FStartEncounterRequest;
class FStudent {
    constructor(init) {
        this.__type = 'FStudent';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.allianceType, 'enums.AllianceType');
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickname);
        serializer.writeUtf8String(this.userId);
    }
    deserialize(deserializer) {
        this.allianceType = deserializer.readDynamicObject();
        this.level = deserializer.readInt32();
        this.nickname = deserializer.readUtf8String();
        this.userId = deserializer.readUtf8String();
    }
}
exports.FStudent = FStudent;
class FTile {
    constructor(init) {
        this.__type = 'FTile';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.dungeonId, 'string');
        serializer.writeStaticObject(this.tile, 'Tile');
    }
    deserialize(deserializer) {
        this.dungeonId = deserializer.readDynamicObject();
        this.tile = deserializer.readStaticObject('Tile');
    }
}
exports.FTile = FTile;
class FTileState {
    constructor(init) {
        this.__type = 'FTileState';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.buildings, true, 'FBuilding');
        serializer.writeInt64(this.time);
    }
    deserialize(deserializer) {
        this.buildings = deserializer.readStaticList('FBuilding', true);
        this.time = deserializer.readInt64();
    }
}
exports.FTileState = FTileState;
class FTips {
    constructor(init) {
        this.__type = 'FTips';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.laterAvailable);
        serializer.writeStaticList(this.messages, true, 'string');
        serializer.writeBoolean(this.nextAvailable);
    }
    deserialize(deserializer) {
        this.laterAvailable = deserializer.readBoolean();
        this.messages = deserializer.readStaticList('string', true);
        this.nextAvailable = deserializer.readBoolean();
    }
}
exports.FTips = FTips;
class FTransferMonsterToCandiesResponse {
    constructor(init) {
        this.__type = 'FTransferMonsterToCandiesResponse';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer) {
        this.loot = deserializer.readStaticObject('FLoot');
    }
}
exports.FTransferMonsterToCandiesResponse = FTransferMonsterToCandiesResponse;
class FUpdate {
    constructor(init) {
        this.__type = 'FUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.items, false, 'FBaseItemUpdate');
        serializer.writeInt64(this.serverTime);
    }
    deserialize(deserializer) {
        this.items = deserializer.readStaticList('FBaseItemUpdate', false);
        this.serverTime = deserializer.readInt64();
    }
}
exports.FUpdate = FUpdate;
class FUpdateNicknameResult {
    constructor(init) {
        this.__type = 'FUpdateNicknameResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.userInfo, 'FUserInfo');
        serializer.writeDynamicObject(this.validationResult, 'FNicknameValidationResult');
    }
    deserialize(deserializer) {
        this.userInfo = deserializer.readDynamicObject();
        this.validationResult = deserializer.readDynamicObject();
    }
}
exports.FUpdateNicknameResult = FUpdateNicknameResult;
class FUpdateRequest {
    constructor(init) {
        this.__type = 'FUpdateRequest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.blackScreen);
        serializer.writeByte(this.clientPlatform);
        serializer.writeStaticObject(this.clientRequest, 'FClientRequest');
        serializer.writeDynamicObject(this.clientScreen, 'enums.ClientScreen');
        serializer.writeBuffer(this.configCacheHash);
        serializer.writeDynamicObject(this.language, 'string');
        serializer.writeStaticMap(this.tilesCache, true, true, 'FTile', 'long');
        serializer.writeDynamicObject(this.updateBuilding, 'FBuildingRequest');
        serializer.writeInt64(this.updateBuildingIfModifiedSince);
        serializer.writeDynamicObject(this.updateBuildingType, 'enums.BuildingType');
    }
    deserialize(deserializer) {
        this.blackScreen = deserializer.readBoolean();
        this.clientPlatform = deserializer.readByte();
        this.clientRequest = deserializer.readStaticObject('FClientRequest');
        this.clientScreen = deserializer.readDynamicObject();
        this.configCacheHash = deserializer.readBuffer();
        this.language = deserializer.readDynamicObject();
        this.tilesCache = deserializer.readStaticMap('FTile', 'long', true, true);
        this.updateBuilding = deserializer.readDynamicObject();
        this.updateBuildingIfModifiedSince = deserializer.readInt64();
        this.updateBuildingType = deserializer.readDynamicObject();
    }
}
exports.FUpdateRequest = FUpdateRequest;
class FUserCreature {
    constructor(init) {
        this.__type = 'FUserCreature';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.alias, 'string');
        serializer.writeInt32(this.attackValue);
        serializer.writeInt32(this.baseCp);
        serializer.writeByte(this.candyType);
        serializer.writeInt32(this.chargedSegments);
        serializer.writeUtf8String(this.chargedSkill);
        serializer.writeFloat(this.chargedSkillDps);
        serializer.writeInt32(this.cp);
        serializer.writeInt32(this.creadexIndex);
        serializer.writeFloat(this.dps);
        serializer.writeByte(this.elementType);
        serializer.writeInt64(this.gotchaTime);
        serializer.writeInt32(this.group);
        serializer.writeBoolean(this.hasMaxResist);
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
        serializer.writeBoolean(this.permanent);
        serializer.writeStaticMap(this.possibleEvolutions, true, true, 'CreatureType', 'int');
        serializer.writeFloat(this.resist);
        serializer.writeByte(this.resistFor);
        serializer.writeInt32(this.staminaValue);
        serializer.writeInt32(this.tier);
        serializer.writeFloat(this.totalHp);
    }
    deserialize(deserializer) {
        this.alias = deserializer.readDynamicObject();
        this.attackValue = deserializer.readInt32();
        this.baseCp = deserializer.readInt32();
        this.candyType = deserializer.readByte();
        this.chargedSegments = deserializer.readInt32();
        this.chargedSkill = deserializer.readUtf8String();
        this.chargedSkillDps = deserializer.readFloat();
        this.cp = deserializer.readInt32();
        this.creadexIndex = deserializer.readInt32();
        this.dps = deserializer.readFloat();
        this.elementType = deserializer.readByte();
        this.gotchaTime = deserializer.readInt64();
        this.group = deserializer.readInt32();
        this.hasMaxResist = deserializer.readBoolean();
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
        this.permanent = deserializer.readBoolean();
        this.possibleEvolutions = deserializer.readStaticMap('CreatureType', 'int', true, true);
        this.resist = deserializer.readFloat();
        this.resistFor = deserializer.readByte();
        this.staminaValue = deserializer.readInt32();
        this.tier = deserializer.readInt32();
        this.totalHp = deserializer.readFloat();
    }
}
exports.FUserCreature = FUserCreature;
class FUserCreaturesList {
    constructor(init) {
        this.__type = 'FUserCreaturesList';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.userCreatures, true, 'FUserCreature');
    }
    deserialize(deserializer) {
        this.userCreatures = deserializer.readStaticList('FUserCreature', true);
    }
}
exports.FUserCreaturesList = FUserCreaturesList;
class FUserCreatureUpdate {
    constructor(init) {
        this.__type = 'FUserCreatureUpdate';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeDynamicObject(this.creadex, 'FCreadex');
        serializer.writeStaticObject(this.creature, 'FUserCreature');
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
    }
    deserialize(deserializer) {
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate');
        this.creadex = deserializer.readDynamicObject();
        this.creature = deserializer.readStaticObject('FUserCreature');
        this.levelUpLoot = deserializer.readStaticObject('FLoot');
        this.loot = deserializer.readStaticObject('FLoot');
    }
}
exports.FUserCreatureUpdate = FUserCreatureUpdate;
class FUserHatchingInfo {
    constructor(init) {
        this.__type = 'FUserHatchingInfo';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.eggs, true, 'FEgg');
        serializer.writeStaticList(this.incubators, true, 'FIncubator');
        serializer.writeInt32(this.max);
        serializer.writeInt32(this.maxRoost);
    }
    deserialize(deserializer) {
        this.eggs = deserializer.readStaticList('FEgg', true);
        this.incubators = deserializer.readStaticList('FIncubator', true);
        this.max = deserializer.readInt32();
        this.maxRoost = deserializer.readInt32();
    }
}
exports.FUserHatchingInfo = FUserHatchingInfo;
class FUserInfo {
    constructor(init) {
        this.__type = 'FUserInfo';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDynamicObject(this.alliance, 'enums.AllianceType');
        serializer.writeInt32(this.avatarAppearanceDetails);
        serializer.writeBoolean(this.devMode);
        serializer.writeBoolean(this.internalUser);
        serializer.writeInt32(this.newLicense);
        serializer.writeUtf8String(this.nickname);
        serializer.writeBoolean(this.sendClientLog);
        serializer.writeInt64(this.serverTime);
        serializer.writeBoolean(this.showAdvices);
        serializer.writeUtf8String(this.userId);
    }
    deserialize(deserializer) {
        this.alliance = deserializer.readDynamicObject();
        this.avatarAppearanceDetails = deserializer.readInt32();
        this.devMode = deserializer.readBoolean();
        this.internalUser = deserializer.readBoolean();
        this.newLicense = deserializer.readInt32();
        this.nickname = deserializer.readUtf8String();
        this.sendClientLog = deserializer.readBoolean();
        this.serverTime = deserializer.readInt64();
        this.showAdvices = deserializer.readBoolean();
        this.userId = deserializer.readUtf8String();
    }
}
exports.FUserInfo = FUserInfo;
class FWeeklyQuest {
    constructor(init) {
        this.__type = 'FWeeklyQuest';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.allOpen);
        serializer.writeBoolean(this.completed);
        serializer.writeInt32(this.currentFragment);
        serializer.writeStaticList(this.digFragments, true, 'int');
        serializer.writeInt32(this.extraQuestsAvailable);
        serializer.writeInt32(this.nextWeeklyQuestIn);
        serializer.writeStaticMap(this.openFragments, true, true, 'int', 'Buffer');
        serializer.writeInt32(this.shovelsAvailable);
        serializer.writeInt32(this.sideFragmentNumber);
    }
    deserialize(deserializer) {
        this.allOpen = deserializer.readBoolean();
        this.completed = deserializer.readBoolean();
        this.currentFragment = deserializer.readInt32();
        this.digFragments = deserializer.readStaticList('int', true);
        this.extraQuestsAvailable = deserializer.readInt32();
        this.nextWeeklyQuestIn = deserializer.readInt32();
        this.openFragments = deserializer.readStaticMap('int', 'Buffer', true, true);
        this.shovelsAvailable = deserializer.readInt32();
        this.sideFragmentNumber = deserializer.readInt32();
    }
}
exports.FWeeklyQuest = FWeeklyQuest;
class FWeeklyQuestFragment {
    constructor(init) {
        this.__type = 'FWeeklyQuestFragment';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBuffer(this.data);
        serializer.writeInt32(this.fragmentNumber);
    }
    deserialize(deserializer) {
        this.data = deserializer.readBuffer();
        this.fragmentNumber = deserializer.readInt32();
    }
}
exports.FWeeklyQuestFragment = FWeeklyQuestFragment;
class FWildCreature {
    constructor(init) {
        this.__type = 'FWildCreature';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.chest);
        serializer.writeDynamicObject(this.coords, 'GeoCoords');
        serializer.writeDynamicObject(this.entry, 'FCreadexEntry');
        serializer.writeUtf8String(this.id);
        serializer.writeDynamicObject(this.incenseUserId, 'string');
        serializer.writeBoolean(this.isFirstCreature);
        serializer.writeByte(this.name);
        serializer.writeDynamicObject(this.relatedBuildingId, 'string');
        serializer.writeFloat(this.scaleCollider);
        serializer.writeFloat(this.ttl);
    }
    deserialize(deserializer) {
        this.chest = deserializer.readBoolean();
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
exports.FWildCreature = FWildCreature;
class FWizardBattleInfo {
    constructor(init) {
        this.__type = 'FWizardBattleInfo';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.extraBattles);
        serializer.writeInt32(this.limit);
        serializer.writeFloat(this.timeToRefresh);
        serializer.writeInt32(this.used);
        serializer.writeInt32(this.userCoins);
    }
    deserialize(deserializer) {
        this.extraBattles = deserializer.readInt32();
        this.limit = deserializer.readInt32();
        this.timeToRefresh = deserializer.readFloat();
        this.used = deserializer.readInt32();
        this.userCoins = deserializer.readInt32();
    }
}
exports.FWizardBattleInfo = FWizardBattleInfo;
class FWizardBattleRating {
    constructor(init) {
        this.__type = 'FWizardBattleRating';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.topRecords, true, 'FWizardBattleRatingListRecord');
    }
    deserialize(deserializer) {
        this.topRecords = deserializer.readStaticList('FWizardBattleRatingListRecord', true);
    }
}
exports.FWizardBattleRating = FWizardBattleRating;
class FWizardBattleRatingListRecord {
    constructor(init) {
        this.__type = 'FWizardBattleRatingListRecord';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.level);
        serializer.writeUtf8String(this.nickName);
        serializer.writeInt32(this.place);
        serializer.writeFloat(this.score);
        serializer.writeInt32(this.battleCount);
        serializer.writeFloat(this.savedHealthRate);
        serializer.writeInt32(this.winCount);
    }
    deserialize(deserializer) {
        this.level = deserializer.readInt32();
        this.nickName = deserializer.readUtf8String();
        this.place = deserializer.readInt32();
        this.score = deserializer.readFloat();
        this.battleCount = deserializer.readInt32();
        this.savedHealthRate = deserializer.readFloat();
        this.winCount = deserializer.readInt32();
    }
}
exports.FWizardBattleRatingListRecord = FWizardBattleRatingListRecord;
class FWizardBattleResult {
    constructor(init) {
        this.__type = 'FWizardBattleResult';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticList(this.attackerHps, true, 'float');
        serializer.writeStaticList(this.attackerTypes, true, 'CreatureType');
        serializer.writeStaticObject(this.avaUpdate, 'FAvaUpdate');
        serializer.writeStaticList(this.candies, true, 'CreatureType');
        serializer.writeStaticObject(this.levelUpLoot, 'FLoot');
        serializer.writeStaticObject(this.loot, 'FLoot');
        serializer.writeFloat(this.resultScreenDelay);
        serializer.writeFloat(this.rewardPercent);
        serializer.writeBoolean(this.victory);
    }
    deserialize(deserializer) {
        this.attackerHps = deserializer.readStaticList('float', true);
        this.attackerTypes = deserializer.readStaticList('CreatureType', true);
        this.avaUpdate = deserializer.readStaticObject('FAvaUpdate');
        this.candies = deserializer.readStaticList('CreatureType', true);
        this.levelUpLoot = deserializer.readStaticObject('FLoot');
        this.loot = deserializer.readStaticObject('FLoot');
        this.resultScreenDelay = deserializer.readFloat();
        this.rewardPercent = deserializer.readFloat();
        this.victory = deserializer.readBoolean();
    }
}
exports.FWizardBattleResult = FWizardBattleResult;
class GeoCoords {
    constructor(init) {
        this.__type = 'GeoCoords';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeDouble(this.latitude);
        serializer.writeDouble(this.longitude);
    }
    deserialize(deserializer) {
        this.latitude = deserializer.readDouble();
        this.longitude = deserializer.readDouble();
    }
}
exports.GeoCoords = GeoCoords;
class GeoCoordsWithAccuracy {
    constructor(init) {
        this.__type = 'GeoCoordsWithAccuracy';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeFloat(this.horizontalAccuracy);
        serializer.writeDouble(this.latitude);
        serializer.writeDouble(this.longitude);
    }
    deserialize(deserializer) {
        this.horizontalAccuracy = deserializer.readFloat();
        this.latitude = deserializer.readDouble();
        this.longitude = deserializer.readDouble();
    }
}
exports.GeoCoordsWithAccuracy = GeoCoordsWithAccuracy;
class IdAndCoords {
    constructor(init) {
        this.__type = 'IdAndCoords';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticObject(this.coords, 'GeoCoords');
        serializer.writeUtf8String(this.id);
    }
    deserialize(deserializer) {
        this.coords = deserializer.readStaticObject('GeoCoords');
        this.id = deserializer.readUtf8String();
    }
}
exports.IdAndCoords = IdAndCoords;
class InAppEventInfo {
    constructor(init) {
        this.__type = 'InAppEventInfo';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticMap(this.eventItems, true, true, 'string', 'string');
        serializer.writeByte(this.eventType);
        serializer.writeUtf8String(this.userId);
    }
    deserialize(deserializer) {
        this.eventItems = deserializer.readStaticMap('string', 'string', true, true);
        this.eventType = deserializer.readByte();
        this.userId = deserializer.readUtf8String();
    }
}
exports.InAppEventInfo = InAppEventInfo;
class PotionConfig {
    constructor(init) {
        this.__type = 'PotionConfig';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticMap(this.heals, true, true, 'ItemType', 'int');
        serializer.writeStaticMap(this.resurrections, true, true, 'ItemType', 'float');
    }
    deserialize(deserializer) {
        this.heals = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.resurrections = deserializer.readStaticMap('ItemType', 'float', true, true);
    }
}
exports.PotionConfig = PotionConfig;
class ProductGroup {
    constructor(init) {
        this.__type = 'ProductGroup';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeByte(this.itemType);
        serializer.writeStaticList(this.productLots, true, 'ProductLot');
    }
    deserialize(deserializer) {
        this.itemType = deserializer.readByte();
        this.productLots = deserializer.readStaticList('ProductLot', true);
    }
}
exports.ProductGroup = ProductGroup;
class ProductLot {
    constructor(init) {
        this.__type = 'ProductLot';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeBoolean(this.isOfferPrice);
        serializer.writeInt32(this.price);
        serializer.writeInt32(this.qty);
    }
    deserialize(deserializer) {
        this.isOfferPrice = deserializer.readBoolean();
        this.price = deserializer.readInt32();
        this.qty = deserializer.readInt32();
    }
}
exports.ProductLot = ProductLot;
class SaleSetConfig {
    constructor(init) {
        this.__type = 'SaleSetConfig';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeStaticMap(this.items, true, true, 'ItemType', 'int');
        serializer.writeInt32(this.price);
        serializer.writeByte(this.type);
    }
    deserialize(deserializer) {
        this.items = deserializer.readStaticMap('ItemType', 'int', true, true);
        this.price = deserializer.readInt32();
        this.type = deserializer.readByte();
    }
}
exports.SaleSetConfig = SaleSetConfig;
class Tile {
    constructor(init) {
        this.__type = 'Tile';
        Object.assign(this, init);
    }
    serialize(serializer) {
        serializer.writeInt32(this.x);
        serializer.writeInt32(this.y);
        serializer.writeInt32(this.zoom);
    }
    deserialize(deserializer) {
        this.x = deserializer.readInt32();
        this.y = deserializer.readInt32();
        this.zoom = deserializer.readInt32();
    }
}
exports.Tile = Tile;
//# sourceMappingURL=objects.js.map