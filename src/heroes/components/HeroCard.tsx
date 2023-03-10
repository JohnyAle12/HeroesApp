import { Link } from 'react-router-dom'

type Hero = {
    id: string
    superhero: string
    publisher: string
    alter_ego: string
    first_appearance: string
    characters: string
}
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}: Hero) => {

    const urlImages = `/src/assets/heroes/${id}.jpg`;
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="card">
                <div className="row">
                    <div className="col-4">
                        <img src={urlImages} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {superhero}
                            </h5>
                            <p className="card-text">{alter_ego}</p>
                            { (alter_ego !== characters) && (
                                <p className="card-text">{characters}</p>
                            )}
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`} >Más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
