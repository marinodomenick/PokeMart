import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="welcome">Welcome to our home page!</h2>
      <h3>Thank you to our sponsors</h3>
      {/* https://www.youtube.com/watch?v=EE-xtCF3T94 */}
      <div className="imgs">
      <img
      className="smolivGardenImg" 
      style={{
        width: 500,
        height: 250
      }}
      src="https://preview.redd.it/52uqh3zfsp591.png?auto=webp&s=be4bd23dfdc93233b7f6a2410a7e044cb6910b3f"/>
      <div className="teamGalactic">
        <h4>Reject team rocket!</h4>
        <h4>Join team Galactic!</h4>
      <img src="http://images4.fanpop.com/image/photos/24000000/team-galactic-pokemon-villians-24004182-256-190.gif"/>
        <h6>(We pay minimum wage.)</h6>
      </div>
      <img
      className="slowpokeTails" 
      style={{
        width: 300
      }} 
      src="https://external-preview.redd.it/B7DItpahhE4t9hj1HVwlJ5Kkyo3bXGrfshNrzRrLAI8.jpg?auto=webp&s=a590e2c3a3b3102a42a23ee6370e5e0a25818a94"/>
    </div>
    </div>
  );
};

export default Home;
