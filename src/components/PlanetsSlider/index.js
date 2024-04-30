// Write your code here

import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import {Component} from 'react'
import './index.css'


class PlanetsSlider extends Component {
  state = {activeId: this.props.planetsList[0].id}

  onClickingLeftButton = id => {
    let count = 0
    let match = false
    const {planetsList} = this.props
    planetsList.forEach(each => {
      if (each.id !== id && match === false) {
        count = count + 1
      } else {
        match = true
      }
    })
    this.setState({activeId: planetsList[count - 1].id})
  }

  onClickingRightButton = id => {
    let count = 0
    let match = false
    const {planetsList} = this.props
    planetsList.forEach(each => {
      if (each.id !== id && match === false) {
        count = count + 1
      } else {
        match = true
      }
    })
    console.log(planetsList[count])
    this.setState({activeId: planetsList[count+1].id})
  }

  render() {
    const {planetsList} = this.props
    const {activeId} = this.state
    const settings = {
      dots: true,
      slidesToShow: 1,
      slideToScroll: 1,
    }
    return (
      <div className="planet-slider-bg-container" data-testid="planets">
        <Slider {...settings}>
          <PlanetItem
            activeId={activeId}
            onClickingLeftButton={this.onClickingLeftButton}
            planetsList={planetsList}
            onClickingRightButton={this.onClickingRightButton}
          />
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
