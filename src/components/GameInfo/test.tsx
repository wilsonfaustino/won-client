import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Awesome game title',
  description: 'Game description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render game info', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    // heading (title)
    expect(
      screen.getByRole('heading', { name: /awesome game title/i })
    ).toBeInTheDocument()
    // description
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    //price
    expect(screen.getByText(/210,00/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    // button cart
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    // button wishlist
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
