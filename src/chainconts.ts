export enum SwapNames {
  'SLIME' = 'SLIME',
  'PCS' = 'PCS',
}

export const SwapRouters = {
  [SwapNames.SLIME]: '0x34766241a5DF0483545A52AB1DBd5eC88E251dD3',
  [SwapNames.PCS]: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
}

export const Factories = {
  [SwapNames.SLIME]: '0xCBe7425662BF0edf164aBf12c881Ced6fdafE75E',
  [SwapNames.PCS]: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
}

export const InitCodeHashes = {
  [SwapNames.SLIME]: '0x38c95dba910d38745f4ee36ee83420a1adf1c4a243f9827f9410022dd44648c6',
  [SwapNames.PCS]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
}
