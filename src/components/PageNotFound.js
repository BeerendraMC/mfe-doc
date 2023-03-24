import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center p-4">
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
