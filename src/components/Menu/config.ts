import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'SlimeV2 Home',
    icon: 'HomeIcon',
    href: 'https://app.slime.finance/',
  },
  {
    label: 'SlimeV1 Home',
    icon: 'HomeIcon',
    href: 'https://v1.slime.finance/',
  },
  {
    label: 'Swap SlimeV1 to SlimeV2',
    icon: 'TradeIcon',
    href: 'https://v1.slime.finance/swap',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.slime.finance#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.slime.finance#/pool',
      },
    ],
  },
  {
    label: 'V2 Farms',
    icon: 'FarmIcon',
    href: 'https://app.slime.finance/farms',
  },
  {
    label: 'V1 Farms',
    icon: 'FarmIcon',
    href: 'https://v1.slime.finance/farms',
  },

  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },

   // {
  //   label: 'NFT',
   //  icon: 'NftIcon',
   // href: '/nft',
   // },
  {
    label: 'Info',
    icon: 'BlogIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: "Overview",
        href: "https://info.slime.finance/home",
        external:true
      },
      {
        label: "Tokens",
        href: "https://info.slime.finance/tokens",
        external:true
      },
      {
        label: "Pairs",
        href: "https://info.slime.finance/pairs",
        external:true
      },
      {
        label: "Accounts",
        href: "https://info.slime.finance/accounts",
        external:true
      },
      {
        label: "Token",
        href: "https://info.slime.finance/token/0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1",
        external:true
      },
      {
        label: "Blog",
        href: "https://medium.com/@SlimeFinance",
        external:true
      },
      {
        label: "Docs",
        href: "http://docs.slime.finance/",
        external:true
      },
      {
        label: "Github",
        href: "https://github.com/slime-fi/",
        external:true
      },
      {
        label: "Treasury fund report",
        href: "https://slime.finance/reports/buybacks.html",  external:true
      },



    ],
  },
  {
    label: 'Listings',
    icon: 'InfoIcon',
    items: [

      {
        label: "CoinMarketCap",
        href: "https://coinmarketcap.com/currencies/slime-finance/",
        external:true
      },
      {
        label: "CoinGecko",
        href: "https://www.coingecko.com/en/coins/slime-finance",
        external:true
      },
      {
        label: "BSCscan",
        href: "https://bscscan.com/token/0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1",
        external:true
      },
      {
        label: "DappRadar",
        href: "https://dappradar.com/binance-smart-chain/defi/slime-finance",
        external:true
      }

    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },

]

export default config

