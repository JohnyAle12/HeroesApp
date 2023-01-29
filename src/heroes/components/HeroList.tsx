import { useMemo } from 'react';
import { getHero } from '../helpers/getHero';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }: { publisher:string }) => {

    const heroes = useMemo( () => getHero(publisher), [publisher]);
    return (
        <div className="row">
            { heroes.map((heroe) => (
                <div key={ heroe.id } className="col-4 mt-3">
                    <HeroCard key={ heroe.id } { ...heroe } />
                </div>
            )) }
        </div>
    )
}
