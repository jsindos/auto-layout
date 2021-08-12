import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

import './style.css'

const App = () => {
  return (
    <div className='container'>
      <Hug>
        Hug contents
      </Hug>
      <div className='container__box--fillVertical'>
        Fixed width, fill vertically
      </div>
      <div className='container__box--fillHorizontal'>
        Fixed height, fill horizontally
      </div>
      <div className='container__box--fillHorizontalAndVertical'>
        Fill vertical & horizontal
      </div>
    </div>
  )
}

const Hug = styled.div`
  padding: 16px;
  background-color: #FF8577;
`

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
