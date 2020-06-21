import React from 'react';
import Grid from '@material-ui/core/Grid';
import Row from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import Card from '../Card/card';
import Loader from './Modal/loader';

const styles = {
    movieColumn: {
        marginBottom: 20
    }
}
const MovieList = ({ movies, isLoading }) => {
    const movieColumns = movies ? movies.map(movie => (
        <Grid style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
            <Card movie={movie} />
        </Grid>
    )) : null;

    return (
        <Row>
            <Button>Add Movie</Button>
            {movieColumns}
            <Loader isLoading={isLoading} />
        </Row>
    );
}


export default MovieList;