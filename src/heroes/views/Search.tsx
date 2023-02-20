import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import queryString from 'query-string';
import { getHeroByName } from '../helpers/getHero';
import { useMemo } from 'react';

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  let querySearch = q?.toString() ?? '';
    
  const { searchName, onInputChange} = useForm({
    searchName: querySearch
  });

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(searchName.trim().length <=1 ) return;

    navigate(`?q=${searchName.toLowerCase().trim()}`);
  }

  const onClearSearch = () => {
    navigate('/search');
  }

  const heroes = useMemo( () => getHeroByName(querySearch), [q]);

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form aria-label="searchForm" onSubmit={onSearchSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchName"
              placeholder="Search a hero"
              autoComplete="off"
              value={searchName}
              onChange={onInputChange}
            />
            <button className="btn btn-success mt-1">
              Search
            </button>
            <button type="button" className="btn btn-primary mt-1 ml-3" onClick={onClearSearch}>
              Clear
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>

          { (!querySearch) && (
            <div className="alert alert-primary">Search a hero</div>
          ) }

          { (heroes.length < 1 && querySearch) && (
            <div aria-label="alert-danger" className="alert alert-danger">No hero with <strong>"{querySearch}"</strong> word</div>
          ) }

          { heroes.map( hero => (
            <HeroCard key={hero.id} { ...hero } />
          )) }

        </div>
      </div>
    </>
  )
}
