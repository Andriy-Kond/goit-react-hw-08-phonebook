const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div>
      <h1 style={styles.title}>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};

export default Home;
