// Write your code here
import './index.css'
import {FaChevronCircleLeft} from 'react-icons/fa'
import {FaChevronCircleRight} from 'react-icons/fa'

const PlanetItem = props => {
  const {activeId, onClickingLeftButton, planetsList, onClickingRightButton} =
    props
  const eachPlanet = planetsList.filter(each => {
    if (each.id === activeId) {
      return true
    }
    return false
  })

  const clickingLeftButton = () => {
    onClickingLeftButton(eachPlanet[0].id)
  }

  const clickingRightButton = () => {
    onClickingRightButton(eachPlanet[0].id)
  }

  return (
    <div className="planets-container">
      <button onClick={clickingLeftButton} className="onclick-buttons">
        <FaChevronCircleLeft className="left-button-style" />
      </button>
      <div className="planets-details-container">
        <h1 className="planets-heading">PLANETS</h1>
        <img
          src={eachPlanet[0].imageUrl}
          alt={`planet ${eachPlanet[0].name}`}
          className="planets-image"
        />
        <h1 className="each-planet-name-heading">{eachPlanet[0].name}</h1>
        <p className="description-para">{eachPlanet[0].description}</p>
      </div>
      <button onClick={clickingRightButton} className="onclick-buttons">
        <FaChevronCircleRight className="right-button-style" />
      </button>
    </div>
  )
}

export default PlanetItem
