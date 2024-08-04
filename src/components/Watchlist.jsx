import React from 'react';
import "../styles.css";
import { Moviecard } from './Moviecard';

export const Watchlist = ({ movies, watchlist, toggleWatchlist }) => {
  return (
    <div>
        <h1 className='title'>Your watchlist</h1>
        <div className="watchlist">
            {
                watchlist.map((id) => {
                    const movie = movies.find(movie => movie.id === id);
                    return (
                        <Moviecard 
                            key={id} 
                            movie={movie} 
                            toggleWatchlist={toggleWatchlist} 
                            iswatchlisted={true}
                        />
                    );
                })
            }
        </div>
    </div>
  );
}

