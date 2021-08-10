import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    console.log(q);

    const [formValues, handleInputChange, reset] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

   const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    const handleSearch = (evt) => {
        evt.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>

            <h1> Search Screen </h1>
            <hr />

            <div className="row">

                <div className="col-4">

                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search Hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <div className="d-grid gap-2 mt-2">
                            <button type="submit" className="btn btn-outline-primary"> Search </button>
                        </div>

                    </form>

                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        (q === '') &&
                        <div className="alert alert-info"> Search a hero </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger"> { q } not found, try another search </div>
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