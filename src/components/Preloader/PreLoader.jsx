import css from './PreLoader.module.css';

// Маленький спінер завантаження
export const PreLoader = () => {
  return (
    // <div className="spinner-grow" role="status">
    //   <span className="visually-hidden">Loading...</span>
    // </div>

    <div className={css.preloaderContainer}>
      <div class="spinner-grow spinner-grow-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
