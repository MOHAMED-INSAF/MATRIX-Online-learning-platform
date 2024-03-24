"use client";

const AboutUsPage = () => {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-6">
      <div className="flex flex-col space-y-6 max-w-md mx-auto">
        <div className="text-secondary">
          <div className="mb-7">
            <h4 className="font-semibold text-4xl text-white mb-4">About Us</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         
            <div className="bg-gray-800 rounded-lg p-4">
              <img src="/insaf.jpg" alt="insaf" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h5 className="text-xl font-semibold text-white mb-2">M.A.M.Insaf</h5>
              <p className="text-gray-400">Project Leader</p>
              <p className="text-gray-300 mt-2"></p>
            </div>
          
            <div className="bg-gray-800 rounded-lg p-4">
              <img src="/amar.jpg" alt="amar" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h5 className="text-xl font-semibold text-white mb-2">A.S.A.Basheerdeen</h5>
              <p className="text-gray-400">Lead Developer</p>
              <p className="text-gray-300 mt-2"></p>
            </div>
           
            <div className="bg-gray-800 rounded-lg p-4">
              <img src="/siva.jpg" alt="siva" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h5 className="text-xl font-semibold text-white mb-2">T.Sivavarunan</h5>
              <p className="text-gray-400">UI/UX Designer</p>
              <p className="text-gray-300 mt-2"></p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <img src="/natasha.jpg" alt="natasha" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h5 className="text-xl font-semibold text-white mb-2">Natasha Shehani A. Hameed</h5>
              <p className="text-gray-400">Project Manager</p>
              <p className="text-gray-300 mt-2"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
