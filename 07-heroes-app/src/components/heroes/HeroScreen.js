import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById';

const heroImgs = require.context('../../assets/heroes', true);

export const HeroScreen = ({history}) => {

    const { heroId } = useParams();

    const hero = useMemo( () => getHeroById(heroId), [heroId] );

    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {

        if (history.length <= 2) {
            if (publisher === 'DC Comics') {
                history.push('/dc');
            }
            else {
                history.push('/');
            }
        }
        else {
            history.goBack();
        }

    }

    return (
        <div className="row mt-5">

            <div className="col-4 animate__animated animate__fadeInLeftBig">
                <img className="img-thumbnail" src={ heroImgs(`./${id}.jpg`).default } alt={superhero} />
            </div>

            <div className="col-8">
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b> First Appearance: </b> {first_appearance} </li>
                    <li className="list-group-item"> <b> Alter Ego: </b> {alter_ego} </li>
                </ul>

                <h5 className="mt-3 ms-4"> Characters: </h5>
                <p className="ms-4"> {characters} </p>

                <button className="btn btn-outline-info ms-4" onClick={ handleReturn }> Return </button>
            </div>

        </div>
    )
}
