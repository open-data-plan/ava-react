import React from 'react'
import AVAChart from '@opd/ava'

const data = [
  { field1: 'a', field2: 100 },
  { field1: 'b', field2: 300 },
  { field1: 'c', field2: 800 },
]

export default () => (
  <AVAChart style={{ height: 400 }} data={data} toolbar development />
)
