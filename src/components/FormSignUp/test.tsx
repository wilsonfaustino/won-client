import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    // check user field
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    // check email field
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    // check password field
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    // check confirm password field
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
    // check button rendering
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render suggestion text', () => {
    renderWithTheme(<FormSignUp />)
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
  })
  it('should render the link to Sign In', () => {
    renderWithTheme(<FormSignUp />)
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })
})
