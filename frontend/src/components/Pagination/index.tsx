import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

interface props {
  pagina: number;
  total: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ pagina, total, setCurrentPage }: props) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true} >
          <Arrow />
        </button>
        <p>{`${pagina} de ${total}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
