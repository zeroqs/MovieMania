import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Greeting', () => {
  test('Should return a greeting message, Hello Kim', () => {
    render(<Button name="Kim" />)

    const greetMsg = screen.queryByText(/Kim/i)

    expect(greetMsg).toBeDefined()
  })
})
