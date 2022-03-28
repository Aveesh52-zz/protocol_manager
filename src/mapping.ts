import { BigInt } from "@graphprotocol/graph-ts"
import {
  UpdateInterval
} from "../generated/nft3/nft3"
import { UpdateIntervalEntity } from "../generated/schema"

export function handleRewardPaid(event: UpdateInterval): void {
   
  let entity = UpdateIntervalEntity.load(event.transaction.from.toHex())
  if (!entity) {
    entity = new UpdateIntervalEntity(event.transaction.from.toHex())

  }
 // let entitybalanceEntity = new Balance(event.transaction.hash.toHex());
  entity.creatorCuratorReward = event.params.creatorCuratorReward
  entity.ethLpReward = event.params.ethLpReward
  entity.intervalRewards = event.params.intervalRewards
  entity.polyLpReward = event.params.polyLpReward
  entity.teamReward = event.params.teamReward
  entity.treasuryReward = event.params.treasuryReward
  entity.witnessReward = event.params.witnessReward
  entity.save()
}