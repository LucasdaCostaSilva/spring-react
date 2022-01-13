import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg';
import './styles.css';

function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}
interface props {
  score: number;
}

function MovieStars({ score }: props) {

  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      {fills.map((fill, index) =>
        fill === 0 ? <StarEmpty key={index} /> :
          fill === 1 ? <StarFull key={index} /> :
            <StarHalf key={index} />
      )}
    </div>
  );
}

export default MovieStars;
