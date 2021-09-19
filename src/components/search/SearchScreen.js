import React, { useMemo } from 'react'
import queryString from "query-string";
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)
  const [{searchText}, handleInputChange, reset] = useForm({
    searchText: q
  })

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`)
  }
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr></hr>
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr></hr>
          <form onSubmit={handleSearch}>
            <input type="text" name="searchText" autoComplete="off" value={searchText} onChange={handleInputChange} placeholder="Find your hero" className="form-control"></input>
            <button type="submit" className="btn m-1 btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr></hr>
        { 
          q === '' && 
            <div className="alert alert-info">
              Search a hero
            </div>
        }
        { 
          (q !== '' && heroesFiltered.length == 0) &&
            <div className="alert alert-danger">
             There is not a hero with {q}
            </div>
        }
          { 
            heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
