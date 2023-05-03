const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',

    flexDirection: 'column',
    padding: '20px',
    paddingTop: '0px',

    justifyContent: 'space-between',
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
