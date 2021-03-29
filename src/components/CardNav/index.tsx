import React from 'react'
import styled from 'styled-components'
import { useSwapRouter } from 'hooks'
import { SwapRouters, SwapNames } from 'chainconts'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => {
  const { swapRouter, toggleSwap } = useSwapRouter()
  const onClick = () => toggleSwap()
  return (
    <>
      <StyledNav>
        <ButtonMenu
          activeIndex={swapRouter === SwapRouters[SwapNames.SLIME] ? 0 : 1}
          size="sm"
          variant="subtle"
          onClick={onClick}
        >
          <ButtonMenuItem as="button">Slime Swap</ButtonMenuItem>
          <ButtonMenuItem as="button">Pancake Swap</ButtonMenuItem>
        </ButtonMenu>
      </StyledNav>
      <StyledNav>
        <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
          <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
            <TranslatedText translationId={8}>Swap</TranslatedText>
          </ButtonMenuItem>
          <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
            <TranslatedText translationId={74}>Liquidity</TranslatedText>
          </ButtonMenuItem>
          <ButtonMenuItem
            id="pool-nav-link"
            as="a"
            href="https://www.binance.org/en/panama"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bridge
          </ButtonMenuItem>
        </ButtonMenu>
      </StyledNav>
    </>
  )
}

export default Nav
