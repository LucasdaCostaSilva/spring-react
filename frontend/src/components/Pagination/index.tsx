import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

interface props {
  pagina: number;
  total: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ pagina, total, setCurrentPage }: props) {

  const handlePageChange = (newNumber: number) => {
    setCurrentPage(newNumber);
  }

  const isFirst = (): boolean => {
    return pagina === 0;
  }

  const isLast = (): boolean => {
    return pagina === total - 1;
  }

  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={isFirst()} onClick={() => handlePageChange(pagina - 1)} >
          <Arrow />
        </button>
        <p>{`${pagina + 1} de ${total}`}</p>
        <button className="dsmovie-pagination-button" disabled={isLast()} onClick={() => handlePageChange(pagina + 1)} >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
