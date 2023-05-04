// ^ Варіант з модулем css
import css from './Container.module.css';

// ^ Варіант з вбудованими стилями
// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',

//     flexDirection: 'column',
//     padding: '20px',
//     paddingTop: '0px',

//     justifyContent: 'space-between',
//   },

//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export const Container = ({ children }) => {
  return (
    <>
      {/* // ^ Варіант з модулем css */}
      <div className={css.container}>{children}</div>

      {/* // ^ Варіант з вбудованими стилями */}
      {/* <div styles={styles.container}>{children}</div> */}
    </>
  );
};
