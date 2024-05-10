
const App = () => {
  return (
    <div className=" mx-2 my-2 rounded-2xl">
    <div className="pt-8 bg-gradient-to-r from-[#8b555d] to-[#810f1e] rounded-t-[30px]">
      <div>
      <div className="flex flex-row gap-6 ml-10 mt-20 relative">
        <img 
        src="/circle.png"
        alt="circle"
        className="w-12 h-12"
        />
        <h4 className="mt-2 text-[20px] text-white">Live in Move</h4>
      </div>
      <div className="flex flex-row gap-[450px]">
        <div className="ml-8 mt-7">
            <h1 className="text-white text-[55px] w-[300px] font-serif pl-4 mb-6">Get Moving To Get Healthier</h1>
            <p className="text-white text-[20px]">Make movement a part of your daily <br/>life with mini workouts and easy exercises</p>
            <button
            className="w-64 bg-pink-400 h-12 rounded-3xl ml-8 mt-7"
            >Learn More</button>
        </div>
        <div>
            <img 
            src="/abdu_great.jpg"
            alt="Gym Man"
            className="h-[500px] mb-7 rounded-[30px]"
            />
        </div>
      </div>
      </div>
    </div>
    <div className="bg-[url('/dumbel2.jpg')] bg-cover h-[450px] w-[100%] p-32 opacity-100">
    <section className="text-center block gap-5">
        <h3 className="text-[28px] m-6 font-sans text-white font-bold underline">About Live N Mode</h3>
        <p className="text-[24px] p-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             <br/>Corporis architecto vitae illo, repellendus accusamus rem, 
             <br/>libero, odit assumenda nesciunt ipsam deleniti
              <br/>impedit dicta corrupti unde vero! Natus, temporibus. Eaque, ex?</p>
    </section>
  </div>
      <div className="bg-gradient-to-r from-[#8b555d] to-[#810f1e] mt-0 h-[400px]">
      <h4 className="text-center text-[24px] pt-5 pb-5">Key Features</h4>
        <section className="flex flex-row ml-3 justify-between mr-4">
            <div>
                <img 
                src="/triceps.webp"
                alt="breath"
                className="w-72 h-72 pb-7 rounded-[20px]"
                />
            </div>
            <div>
                <img 
                src="/chest.jfif"
                alt="breath"
                className="w-72 h-72 pb-7 rounded-[20px]"
                />
            </div>
            <div>
                <img 
                src="/Abs.jpg"
                alt="breath"
                className="w-72 h-72 pb-7 rounded-[20px]"
                />
            </div>
        </section>
      </div>
      <div>
        <div className="text-center p-5 bg-[url('/dumbel.webp')] bg-cover h-96 pt-20">
            <h4 className="text-white text-[24px] italic underline mb-5">Workouts and Exercises</h4>
            <p className="text-white text-[20px]">Lorem ipsum dolor, sit amet consectetur 
                <br/>adipisicing elit. Amet eos ullam cupiditate atque! 
                <br/>Minima similique, nisi omnis illum ipsa fugiat temporibus, 
                <br/>reprehenderit beatae error delectus corporis porro perspiciatis 
            <br/>eum doloremque?
            </p>
            <button className="bg-pink-500 w-72 h-16 rounded-[30px] text-[20px] mt-5">
                LearnMore
            </button>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between pr-28 bg-gradient-to-bl from-[#8b555d] to-[#810f1e]">
            <div className="p-4">
                <img 
                src="/lifter.jfif"
                alt="lifter"
                className="h-[600px] w-[440px] rounded-[20px]"
                />
            </div>
            <div>
                <div className="bg-white h-[550px] pt-32 w-[600px] text-center mt-5 rounded-[20px]">
                    <h2 className="text-center text-[24px] italic pt-4 mb-4">Wellness Tips</h2>
                    <p className="text-[19px] text-center">Talk about this products most important feature or service. 
                        <br/>Highlighting the most popular one works, too! 
                        <br/>Talk about this product most important feature or service. 
                    <br/>Highlighting the most popular one works, too!
                    </p>
                    <button className="text-[20px] w-1/2 bg-purple-400 mt-6 h-12 rounded-[30px] hover:bg-white hover:text-green-200">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div className="pr-28 bg-gradient-to-bl from-[#8b555d] to-[#810f1e]">
            <h4 className="text-center text-[24px] italic capitalize pt-5 mb-5 text-white">Reviews</h4>
            <div className="flex flex-row justify-between p-8">
                <div className="w-[300px] text-[20px] bg-green-400 h-[400px] ml-5 p-4 rounded-[30px]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quasi minus mollitia asperiores reprehenderit labore, 
                        officia deserunt, voluptate dolor possimus facilis odio ex fuga. 
                        Architecto, inventore repellendus. Fugit numquam exercitationem sapiente?
                    </p>
                    <p className="text-cyan-800 text-end mt-8">Abdurehman Ali</p>
                </div>
                <div className="w-[300px] text-[20px] bg-green-400 h-[400px] ml-5 p-4 rounded-[30px]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quasi minus mollitia asperiores reprehenderit labore, 
                        officia deserunt, voluptate dolor possimus facilis odio ex fuga. 
                        Architecto, inventore repellendus. Fugit numquam exercitationem sapiente?
                    </p>
                    <p className="text-cyan-800 text-end mt-8">Abdurehman Ali</p>
                </div>
                <div className="w-[300px] text-[20px] bg-green-400 h-[400px] ml-5 p-4 rounded-[30px]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quasi minus mollitia asperiores reprehenderit labore, 
                        officia deserunt, voluptate dolor possimus facilis odio ex fuga. 
                        Architecto, inventore repellendus. Fugit numquam exercitationem sapiente?
                    </p>
                    <p className="text-cyan-800 text-end mt-8">Abdurehman Ali</p>
                </div>
            </div>
        </div>
      </div>
      <div className="text-center pt-7 pb-7 bg-[url('/dumbel3.jfif')] bg-cover h-80">
            <h3 className="text-[22px] text-slate-400 m-8 font-bold">About Live N Mode</h3>
            <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/> Autem ab nostrum perspiciatis error fuga
                <br/> vitae optio sit repellendus assumenda nemo repellat
                <br/> magni natus adipisci, quia quis libero. 
                <br/>Ut, molestiae maiores?
            </p>
      </div>
      <div className="flex flex-row justify-between p-5 bg-gradient-to-r from-[#DDA332] to-[#AAC323] mt-0" >
      <p>&copy; Copywrite reserved {new Date().getFullYear()}</p>
      <p>abdurehmanali611@gmail.com</p>
    </div>
    </div>
  )
}

export default App
