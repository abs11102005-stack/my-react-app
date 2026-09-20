import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="flex justify-between items-center gap-4 container mx-auto p-4 px-16">
           
            <div>
                
                    <div className=" gap-4 justify-between">
                            <div>
                                <h1 className="text-6xl font-extrabold">Build Your Ideal </h1>
                                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</h1>
                            </div>
                    
                            <div className="py-4">
                                  <p>Explore frontend, backend, database, and tooling options, <br />
                                compare them side by side, and put together the stack that fits your <br />
                                next project.</p>
                            </div>
                            <div className="flex gap-4 mt-4 py-4">
                                <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#FF7A45] to-[#EC4899] text-white font-semibold text-lg shadow-md hover:opacity-90 transition">
                                    Explore Technologies
                                </button>
                                <button className="px-14 py-2 rounded-xl bg-white border border-gray-200 text-slate-700 font-semibold text-lg hover:bg-gray-50 transition">
                                    Learn More
                                </button>
                            </div>
                              
                    </div>
            
                    
                

            </div>
            
            <div> <img src={banner} alt="" />  </div>
            
           
        
        </div>
    );
};

export default Banner;