import React from 'react'
import ReactDOM from 'react-dom'
import AVAChart from '../src'

describe('Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AVAChart data={[]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
