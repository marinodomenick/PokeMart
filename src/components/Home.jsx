import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome to our home page!</h2>
      <h3>Thank you to our sponsors</h3>
      {/* https://www.youtube.com/watch?v=EE-xtCF3T94 */}
      <img
      className="smolivGardenImg" 
      style={{
        width: 400
      }}
      src="https://preview.redd.it/52uqh3zfsp591.png?auto=webp&s=be4bd23dfdc93233b7f6a2410a7e044cb6910b3f"/>
      <div className="teamGalactic">
        <h4>Reject team rocket!</h4>
        <h4>Join team Galactic!</h4>
      <img src="http://images4.fanpop.com/image/photos/24000000/team-galactic-pokemon-villians-24004182-256-190.gif"/>
        <h6>(We pay minimum wage.)</h6>
      </div>
    </div>
  );
};

export default Home;
