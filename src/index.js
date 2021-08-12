import React from 'react'
import ReactDOM from 'react-dom'

import F from '../assets/_F_ 40×60.png'
import Comment from '../assets/Comment.png'
import Like from '../assets/Like.png'
import Repost from '../assets/Repost.png'

import './style.css'

const App = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card__icon'>
          <img src={F} />
        </div>
        <div className='card__right'>
          <div className='card__title'>
            @figmadesign
          </div>
          <div className='card__text'>
            A design platform for teams who build products together.
          </div>
          <div className='card__icons'>
            <Icon img={Comment} number='1' />
            <Icon img={Repost} number='11' />
            <Icon img={Like} number='67' />
          </div>
        </div>
      </div>
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

const Icon = ({ img, number }) => {
  return (
    <div className='icon'>
      <img src={img} />
      <span className='icon__number'>{number}</span>
    </div>
  )
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
