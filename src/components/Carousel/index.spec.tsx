import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Carousel } from '@/components/Carousel'

describe('Carousel component', () => {
  it('Should render properly the list of elements', () => {

    render(<Carousel />)
    const header = screen.getByRole('heading')
    const expected = 'Title'

    expect(header).toHaveTextContent(expected)
  })
})