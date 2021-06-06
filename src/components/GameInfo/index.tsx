import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>
    <S.Description>{description}</S.Description>
    <Ribbon color="secondary">{`$${price}`}</Ribbon>
    <S.ButtonWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
