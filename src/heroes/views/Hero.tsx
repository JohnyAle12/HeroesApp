import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers/getHero';

export const Hero = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = useMemo( () => getHeroById(id)[0], [id]);

  if(!superhero){
    return <Navigate to="/marvel" />
  }

  const urlImages = `/src/assets/heroes/${id}.jpg`;

  const onGoBack = () => {
    navigate(-1);
  }

  return (
      <div className="row mt-5">
        <div className="col-4">
          <img src={urlImages} className="img-thumbnail" alt={superhero} />
        </div>
        <div className="col-8">
        <div className="card-body">
                <h3 className="card-title">
                    {superhero}
                </h3>
                <p className="card-text">{alter_ego}</p>
                { (alter_ego !== characters) && (
                    <p className="card-text">{characters}</p>
                )}
                <p className="card-text">
                    <small className="text-muted">{first_appearance}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">{publisher}</small>
                </p>
                <button className="btn btn-primary" onClick={onGoBack}>
                  Regresar
                </button>
          </div>
        </div>
      </div>
    )
}
