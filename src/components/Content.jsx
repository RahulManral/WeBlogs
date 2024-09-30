
import './Content.css';

const CenterContainer = () => {
  return (
    <div  className="custom-container p-4">
        <h1 className="heading-1">Category</h1>
        <ul className="category-style d-flex flex-wrap justify-content-center">
          <li>Agriculture</li>
          <li>Business</li>
          <li>Education</li>
          <li>Entertainment</li>
          <li>Art</li>
          <li>Investment</li>
          <li>Uncategorized</li>
          <li>Weather</li>
        </ul>
    </div>
  );
};

export default CenterContainer;
