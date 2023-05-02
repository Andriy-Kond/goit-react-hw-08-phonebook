const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    justifyContent: 'spaceBetween',
    flexDirection: 'column',
    margin: '20px',
  },

  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const Container = ({ children }) => {
  return (
    <>
      <div style={styles.container}>{children}</div>
    </>
  );
};
