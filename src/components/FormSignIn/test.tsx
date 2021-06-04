import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    // check email field
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    // check password field
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    // check button rendering
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })
  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)
    // check password link
    expect(
      screen.getByRole('link', { name: /forgot your password/i })
    ).toBeInTheDocument()
  })
  it('should render the sign up sugestion', () => {
    renderWithTheme(<FormSignIn />)
    // check for sign up text
    expect(screen.getByText(/have an account/i)).toBeInTheDocument()
    // check for sign up link
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
