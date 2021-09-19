import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroeById';

export const HeroScreen = ({history}) => {
  const {heroeId} = useParams()
  console.log(heroeId);
  const hero = getHeroById(heroeId);
  console.log(hero);
  if (!hero) {
    return <Redirect to="/" />
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    }
    history.goBack()
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img className="img-thumbnail animate__animated animate__fadeInLeft" alt={superhero} src={`../assets/heroes/${heroeId}.jpg`}></img>
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>First appearence:</b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button onClick={handleReturn} className="btn btn-outline-info">
          Return
        </button>
      </div>
    </div>
  )
}
