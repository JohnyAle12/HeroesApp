import { useMemo } from 'react';
import { getHero } from '../helpers/getHero';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }: { publisher:string }) => {

    const heroes = useMemo( () => getHero(publisher), [publisher]);
    return (
        <div className="row">
            { heroes.map((heroe) => (
                <HeroCard key={ heroe.id } { ...heroe } />
            )) }
        </div>
    )
}
