import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { Pair } from 'sdk'
import { Button, CardBody, Text, Heading } from 'uikit'
import { Link } from 'react-router-dom'
import CardNav from 'components/CardNav'
import Question from 'components/QuestionHelper'
import FullPositionCard from 'components/PositionCard'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { StyledInternalLink, TYPE } from 'components/Shared'
import { LightCard } from 'components/Card'
import { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'

import { SwapRouters, SwapNames } from 'chainconts'
import { useActiveWeb3React, useSwapRouter } from 'hooks'
import { usePairs } from 'data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { Dots } from 'components/swap/styleds'
import TranslatedText from 'components/TranslatedText'
import { TranslateString } from 'utils/translateTextHelpers'
import PageHeader from 'components/PageHeader'
import AppBody from '../AppBody'

const { body: Body } = TYPE

export default function Pool() {
  const { swapName } = useSwapRouter()
  const swapFullName = swapName === "SLIME" ? 'Slime' : 'Pancake'
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()


  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(swapName, tokens), tokens })),
    [trackedTokenPairs, swapName]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens,
  ])
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )
  console.log("liquidityTokens",liquidityTokens);
  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some((V2Pair) => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  return (
    <>
      <CardNav activeIndex={1} />
      <AppBody>
        <PageHeader
          title={`Liquidity ${swapFullName}`}
          description={`Add liquidity to receive ${swapFullName} LP tokens`}
        >
          <Button id="join-pool-button" as={Link} to="/add/ETH">
            <TranslatedText translationId={100}>Add Liquidity</TranslatedText>
          </Button>
        </PageHeader>
        <AutoColumn gap="lg" justify="center">
          <CardBody>
            <AutoColumn gap="12px" style={{ width: '100%' }}>
              <RowBetween padding="0 8px">
                <Text color={theme.colors.text}>
                  <TranslatedText translationId={102}>Your Liquidity</TranslatedText>
                </Text>
                <Question
                  text={TranslateString(
                    130,
                    'When you add liquidity, you are given pool tokens that represent your share. If you don???t see a pool you joined in this list, try importing a pool below.'
                  )}
                />
              </RowBetween>

              {!account ? (
                <LightCard padding="40px">
                  <Body color={theme.colors.textDisabled} textAlign="center">
                    Connect to a wallet to view your liquidity.
                  </Body>
                </LightCard>
              ) : v2IsLoading ? (
                <LightCard padding="40px">
                  <Body color={theme.colors.textDisabled} textAlign="center">
                    <Dots>Loading</Dots>
                  </Body>
                </LightCard>
              ) : allV2PairsWithLiquidity?.length > 0 ? (
                <>
                  {allV2PairsWithLiquidity.map((v2Pair) => (
                    <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                  ))}
                </>
              ) : (
                <LightCard padding="40px">
                  <Body color={theme.colors.textDisabled} textAlign="center">
                    <TranslatedText translationId={104}>No liquidity found.</TranslatedText>
                  </Body>
                </LightCard>
              )}

              <div>
                <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  Do not see a pool you joined?{' '}
                  <StyledInternalLink id="import-pool-link" to="/find">
                    Import it.
                  </StyledInternalLink>
                </Text>
                <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  Or, if you staked your {swapFullName} LP tokens in a farm, unstake them to see them here.
                </Text>
              </div>
            </AutoColumn>
          </CardBody>
        </AutoColumn>
      </AppBody>
      <br />
      <br />
      {swapName === 'SLIME' && (
        <AppBody>
          <AutoColumn gap="lg" justify="center">
            <CardBody>
              <Heading mb="8px">Project owner? </Heading>
              <Text color={theme.colors.text}>
              SlimeSwap share Swap fee on your pair tokens to provide more sustainability to your project, <a rel="noreferrer" href="https://forms.gle/kDkrh1vkjLYFiusw9" target="_blank">contact us! https://forms.gle/kDkrh1vkjLYFiusw9</a>
              </Text>
            </CardBody>
          </AutoColumn>
        </AppBody>
      )}

<br />
      <br />
      {swapName === 'SLIME' && (
        <AppBody>
          <AutoColumn gap="lg" justify="center">
            <CardBody>
              <Heading mb="8px">SlimeV2 Conditionally Deflacionary </Heading>
              <Text color={theme.colors.text}>
              SlimeV2 token burns 2.5% on sells / add liquidity  and 0% on buys / remove liquidity!, if you sell SlimeV2 increase slippage more than 2.5%!
              </Text>
            </CardBody>
          </AutoColumn>
        </AppBody>
      )}
    </>
  )
}
