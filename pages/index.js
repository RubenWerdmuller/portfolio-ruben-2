import styles from '../styles/containers.module.css';

export default () => {
  return (
    <div className="background-container">
      <div className="content-container">
        <p>Ruben Werdmuller</p>
        <div className="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50%" cy="50%" r="50%" fill="#032EFF" />
          </svg>
        </div>
        <p>Creative team lead & developer</p>
      </div>

      <style jsx>{`
        .background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, white 50%, #eee 50%);
        }

        .content-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: black; /* Set the desired text color */
        }

        .svg-container {
          height: 200px;
          margin-top: 10vh; /* Adjust as needed */
          margin-bottom: 10vh; /* Adjust as needed */
        }
      `}</style>
    </div>
  );
};
