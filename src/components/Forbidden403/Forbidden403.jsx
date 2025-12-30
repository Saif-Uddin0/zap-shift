import Lottie from "lottie-react";
import forbiddenAnimation from "../../assets/lottie/forbidden.json";
import { Link, useNavigate } from "react-router-dom";

const Forbidden403 = () => {

    const navigate =useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      
      <div className="max-w-md text-center bg-base-100 rounded-2xl shadow-lg p-8">
        
        <Lottie
          animationData={forbiddenAnimation}
          loop={true}
          className="h-64 mx-auto"
        />

        <h1 className="text-4xl font-bold text-error mt-4">
          403 Forbidden
        </h1>

        <p className="text-gray-500 mt-2">
          You don’t have permission to access this page.
        </p>

        <div className="flex items-center justify-center gap-3">
            
          <button onClick={() =>navigate(-1)} className="btn btn-primary text-base-100 px-8 inline-block mt-6">
            Back
          </button>
        
        <Link to="/" className="inline-block mt-6">
          <button className="btn btn-secondary text-base-300 px-8">
            Go Back Home
          </button>
        </Link>
        </div>

      </div>
    </div>
  );
};

export default Forbidden403;
