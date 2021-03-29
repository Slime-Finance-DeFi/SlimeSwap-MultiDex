import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://slime.finance/',
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
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://slime.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://slime.finance/pools',
  },
  {
    label: 'Launch Pools',
    icon: 'IfoIcon', 
    href: 'https://slime.finance/launch',
  
  },
  {
    label: 'Slimy Lottery',
    icon: 'TicketIcon',
    href: 'https://slime.finance/lotto',
 },
  {
    label: "Automatic Launchpool Maker (Coming soon)",
    href: "https://docs.slime.finance/roadmap/automatic-launchpool-maker",
    icon: 'SunIcon', 
  },
   
 //  {
//    label: 'Roulette',
  //   icon: 'TicketIcon',
 //    href: '/roulette',
 //  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: 'https://slime.finance/slime-friends',
  },
  {
    label: "Certik Audit (In-Progress) ",
    href: "https://certik.org/projects/slime-finance",
    icon: 'CertikIcon',
    external:true
    
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
 
