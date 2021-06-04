import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Big title">
        <input type="text" />
      </Auth>
    )

    // check 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    // check main heading
    expect(
      screen.getByRole('heading', { name: /all your favorite games/i })
    ).toBeInTheDocument()
    // check subtitle
    expect(
      screen.getByRole('heading', { name: /complete gaming platform/i })
    ).toBeInTheDocument()
    // check content title
    expect(
      screen.getByRole('heading', { name: /big title/i })
    ).toBeInTheDocument()
    // check children
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
