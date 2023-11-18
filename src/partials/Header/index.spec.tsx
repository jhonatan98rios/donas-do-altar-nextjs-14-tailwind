import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from '@/partials/Header'

describe('Header component', () => {
  it('Should render properly the header', () => {

    render(<Header />)
    const header = screen.getByRole('heading')
    const expected = 'Title'

    expect(header).toHaveTextContent(expected)
  })
})