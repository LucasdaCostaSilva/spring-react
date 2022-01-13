import { Movie } from 'App.types';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovie } from 'services/AppServices';
import './styles.css';

function Form() {

  const [movie, setMovie] = useState<Movie>();
  const { movieId } = useParams();// param from url

  useEffect(() => {
    getMovie(Number(movieId)).then(res => {
      setMovie(res.data);
    }).catch(err => {
      console.log(err);
    });
    return () => {
      setMovie(undefined);
    }
  }, [movieId]);


  return (
    <div className="dsmovie-form-container">
      <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form">
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
          </div>
        </form>
        <Link to='/'>
          <button className="btn btn-secondary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
