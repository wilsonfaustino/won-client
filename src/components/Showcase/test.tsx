import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

import highlighMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const props = {
  title: 'Awesome title',
  highlight: highlighMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render the title, the highlight and games', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: /awesome title/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highlighMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase highlight={props.highlight} games={props.games} />
    )

    screen.getByRole('heading', { name: highlighMock.title })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /awesome title/i })
    ).not.toBeInTheDocument()
  })
  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    screen.getByRole('heading', { name: /awesome title/i })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: highlighMock.title })
    ).not.toBeInTheDocument()
  })
  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    screen.getByRole('heading', { name: /awesome title/i })
    screen.getByRole('heading', { name: highlighMock.title })

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
