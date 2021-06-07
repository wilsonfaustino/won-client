import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['linux', 'mac', 'windows'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Adventure', 'Action']
}

describe('<GameDetails />', () => {
  it('should render blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })
  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
  })
  it('should render formated date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/\w{3}\s\d\d,\s\d{4}/i))
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })
  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR12" />)

    expect(screen.getByText(/1(0|2|4|6|8)\+/)).toBeInTheDocument()
  })
  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Adventure / Action')).toBeInTheDocument()
  })
})
