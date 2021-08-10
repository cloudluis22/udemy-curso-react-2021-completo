import React from 'react'
import { Link } from 'react-router-dom';

const heroImgs = require.context('../../assets/heroes', true);

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters
}) => {

    return (
        <div className="card mb-5 ms-5 pe-1 " style={ { maxWidth: 350 } }>
            <img className="card-img-top mt-3 rounded mx-auto d-block" src={ heroImgs(`./${id}.jpg`).default } alt="hero" style={ { maxWidth: 250, maxHeight: 300 } } />
            <div className="card-body">
                <h4 className="card-title"> {superhero} </h4>
                <h5 className="card-subtitle text-muted"> {alter_ego} </h5>

                {/* <p className="card-text mt-4"> <b> First Appearance: </b> {first_appearance} </p>
                {
                    (alter_ego !== characters) &&
                        <p className="card-text"> <b> Characters: </b> {characters} </p>
                } */}

                <Link to={`./hero/${id}`}>
                    ...Más
                </Link>

            </div>
        </div>
    )
}
