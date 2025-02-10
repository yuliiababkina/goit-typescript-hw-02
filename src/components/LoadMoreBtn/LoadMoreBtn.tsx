import s from "./LoadMoreBtn.module.css";

type LoadMoreProps = {
  onChangePage: () => void;
};

function LoadMoreBtn({ onChangePage }: LoadMoreProps) {
  return (
    <button onClick={onChangePage} className={s.loadMoreBtn}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
