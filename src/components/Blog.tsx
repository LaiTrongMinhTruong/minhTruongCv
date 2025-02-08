const Blog = () => {
  return (
    <div className="absolute left-1/3 right-0 bg-white rounded-2xl overflow-y-scroll p-4 h-full">
      <h3 className="my-4 font-medium text-xl text-green-500">Blog</h3>
      <div className="flex flex-row flex-wrap gap-4 justify-evenly">
        <div className="w-2/5 flex flex-col gap-2 justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img src="/src/assets/blog01.png" alt="" />
            <div className="absolute w-full h-full bg-opacity-60 opacity-0 hover:opacity-100 bg-black z-10 flex justify-center items-center">
              <button className="text-green-500 font-medium text-xl tracking-wider border-2 border-green-500 px-2 rounded-xl">
                View Blog
              </button>
            </div>
          </div>
          <p className="border border-green-500 px-2 w-fit rounded-lg text-green-500 font-light text-sm tracking-wider">
            April 20 2020
          </p>
          <p className="font-medium text-gray-800 tracking-wide text-center">
            AI and the Future of Automation: Opportunities and Challenges
          </p>
          <p className="font-light text-base tracking-wide text-center">
            Discover how artificial intelligence is transforming the automation
            industry, from manufacturing to customer service, and the challenges
            we need to overcome.
          </p>
        </div>
        <div className="w-2/5 flex flex-col gap-2 justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img src="/src/assets/blog02.png" alt="" />
            <div className="absolute w-full h-full bg-opacity-60 opacity-0 hover:opacity-100 bg-black z-10 flex justify-center items-center">
              <button className="text-green-500 font-medium text-xl tracking-wider border-2 border-green-500 px-2 rounded-xl">
                View Blog
              </button>
            </div>
          </div>
          <p className="border border-green-500 px-2 w-fit rounded-lg text-green-500 font-light text-sm tracking-wider">
            April 20 2020
          </p>
          <p className="font-medium text-gray-800 tracking-wide text-center">
            Blockchain: The Technology Behind Bitcoin and Beyond
          </p>
          <p className="font-light text-base tracking-wide text-center">
            Description: Learn about blockchain technology, how it works, and
            its potential applications in areas such as finance, healthcare, and
            supply chain management.
          </p>
        </div>
        <div className="w-2/5 flex flex-col gap-2 justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img src="/src/assets/blog03.png" alt="" />
            <div className="absolute w-full h-full bg-opacity-60 opacity-0 hover:opacity-100 bg-black z-10 flex justify-center items-center">
              <button className="text-green-500 font-medium text-xl tracking-wider border-2 border-green-500 px-2 rounded-xl">
                View Blog
              </button>
            </div>
          </div>
          <p className="border border-green-500 px-2 w-fit rounded-lg text-green-500 font-light text-sm tracking-wider">
            April 20 2020
          </p>
          <p className="font-medium text-gray-800 tracking-wide text-center">
            Machine Learning and Its Applications in Data Analytics
          </p>
          <p className="font-light text-base tracking-wide text-center">
            Description: This article will introduce machine learning, how it is
            used to analyze big data, and the benefits it brings to businesses.
          </p>
        </div>
        <div className="w-2/5 flex flex-col gap-2 justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img src="/src/assets/blog04.png" alt="" />
            <div className="absolute w-full h-full bg-opacity-60 opacity-0 hover:opacity-100 bg-black z-10 flex justify-center items-center">
              <button className="text-green-500 font-medium text-xl tracking-wider border-2 border-green-500 px-2 rounded-xl">
                View Blog
              </button>
            </div>
          </div>
          <p className="border border-green-500 px-2 w-fit rounded-lg text-green-500 font-light text-sm tracking-wider">
            April 20 2020
          </p>
          <p className="font-medium text-gray-800 tracking-wide text-center">
            Information Security in the Digital Age: What You Need to Know
          </p>
          <p className="font-light text-base tracking-wide text-center">
            Description: Learn about common cybersecurity threats and effective
            information security measures in the digital age.
          </p>
        </div>
        <div className="w-2/5 flex flex-col gap-2 justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img src="/src/assets/blog05.png" alt="" />
            <div className="absolute w-full h-full bg-opacity-60 opacity-0 hover:opacity-100 bg-black z-10 flex justify-center items-center">
              <button className="text-green-500 font-medium text-xl tracking-wider border-2 border-green-500 px-2 rounded-xl">
                View Blog
              </button>
            </div>
          </div>
          <p className="border border-green-500 px-2 w-fit rounded-lg text-green-500 font-light text-sm tracking-wider">
            April 20 2020
          </p>
          <p className="font-medium text-gray-800 tracking-wide text-center">
            IoT: Connecting Things and the Future of Technology
          </p>
          <p className="font-light text-base tracking-wide text-center">
            Explore how the Internet of Things (IoT) is connecting devices and
            changing the way we live, work, and interact with the world around
            us.
          </p>
        </div>
        <div className="w-2/5 flex flex-col gap-2 justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img src="/src/assets/blog06.png" alt="" />
            <div className="absolute w-full h-full bg-opacity-60 opacity-0 hover:opacity-100 bg-black z-10 flex justify-center items-center">
              <button className="text-green-500 font-medium text-xl tracking-wider border-2 border-green-500 px-2 rounded-xl">
                View Blog
              </button>
            </div>
          </div>
          <p className="border border-green-500 px-2 w-fit rounded-lg text-green-500 font-light text-sm tracking-wider">
            April 20 2020
          </p>
          <p className="font-medium text-gray-800 tracking-wide text-center">
            AI in Healthcare: How Artificial Intelligence is Saving Lives
          </p>
          <p className="font-light text-base tracking-wide text-center">
            This article will delve into how AI is being used in healthcare,
            from disease diagnosis to drug development, and its huge potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
