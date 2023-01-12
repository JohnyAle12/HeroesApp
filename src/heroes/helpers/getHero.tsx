import { heroes } from "../data/heroes";

export const getHero = (publisher: string) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`The publisher ${publisher} is not available`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher);
}

export const getHeroById = (id?: string) => {
    return heroes.filter( heroe => heroe.id === id);
}