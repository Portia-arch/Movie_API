export const FAVORITE_MOVIES = 'FAVORITE_MOVIES';

export function movieList() {
    const array = JSON.parse('[' + localStorage.getItem('movies') + ']');

        return {
           type: FAVORITE_MOVIES,
           payload: array
        }
    }
