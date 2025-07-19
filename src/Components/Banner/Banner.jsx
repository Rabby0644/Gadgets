import bannerimg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    // <div>
    //   <div>
    //     <div className="card-body bg-purple-700 rounded-3xl right-8  ">
    //       <h2 className="text-5xl text-center  font-bold">
    //         Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
    //       </h2>
    //       <p className="text-center mt-6">
    //         Explore the latest gadgets that will take your experience to the
    //         next level. From smart devices to <br /> the coolest accessories, we
    //         have it all!
    //       </p>
    //       <div className="text-center">
    //         <button className="btn   btn-success max-w-40 font-bold text-purple-700 bg-white rounded-3xl mb-64">
    //           Shop Now
    //         </button>
    //       </div>
    //     </div>

    //     <div className="mb-96">
    //       <figure className="absolute left-1/2 transform -translate-x-1/2 -bottom-1/4 bg-white p-2 rounded-xl shadow-lg">
    //         <img className=" max-w-2xl       " src={bannerimg} alt="Shoes" />
    //       </figure>
    //     </div>
    //   </div>
    // </div>




<div className="relative overflow-hidden">
  <div className="card-body bg-purple-700 rounded-3xl px-6 py-12">
    <h2 className="text-3xl md:text-5xl text-center font-bold text-white">
      Upgrade Your Tech Accessorize with <br className="hidden md:block" /> Gadget Heaven Accessories
    </h2>
    <p className="text-center mt-6 text-white text-base md:text-lg">
      Explore the latest gadgets that will take your experience to the next level. <br className="hidden md:block" />
      From smart devices to the coolest accessories, we have it all!
    </p>
    <div className="text-center mt-6">
      <button className="btn btn-success font-bold text-purple-700 bg-white rounded-3xl px-6 py-2">
        Shop Now
      </button>
    </div>
  </div>

  <div className="relative mt-10 flex justify-center">
    <figure className="w-full max-w-md md:max-w-2xl bg-white p-2 rounded-xl shadow-lg">
      <img
        className="w-full h-auto object-contain"
        src={bannerimg}
        alt="Gadget Accessories"
      />
    </figure>
  </div>
</div>






  );
};

export default Banner;



