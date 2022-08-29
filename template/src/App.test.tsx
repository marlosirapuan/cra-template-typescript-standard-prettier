import { render } from '@testing-library/react'
import { App } from 'App'

test('render welcome text', () => {
  const { getByText } = render(<App />)
  const textElement = getByText(/Welcome/i)
  expect(textElement).toBeInTheDocument()
})
