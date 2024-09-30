import Navbar from '../components/Navbar';
import image from '../assets/images/blogging.png';
import './Home.css';
import Footer from '../components/Footer';
import Content from '../components/Content';


const Home = () => {
    return ( 
        <div className="home">
            < Content />
            <div className="containerr">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Welcome to WeBlogs</h1>
          <p className="lead">
            This section contains some introductory text that explains the features and purpose of the website.
          </p>
          <a className="cust-btn btn btn-lg" href="#" role="button">
            Explore
          </a>
          <a className="cust-btn btn btn-lg mx-5" href="#" role="button">
            Create
          </a>
        </div>
        <div className="col-md-3 ms-auto">
          <img 
            src={image}
            alt="Placeholder" 
            className="img-fluid" 
          />
          
        </div>
      </div>
    </div>
  
        </div>
     );
}
 
export default Home;