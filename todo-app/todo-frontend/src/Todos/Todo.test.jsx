import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Test whether the Todo component renders content',
    done: false
  }

  render(<Todo todo={todo} deleteTodo={() => 0} completeTodo={() => 0} />)

  const elementText = screen.getByText('Test whether the Todo component renders content')
  const elementCompletion = screen.getByText('This todo is not done')

  expect(elementText).toBeDefined()
  expect(elementCompletion).toBeDefined()
})