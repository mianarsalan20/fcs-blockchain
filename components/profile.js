import React from "react";

const profile = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="w-full md:w-2/3 lg:w-1/3 border-l border-r">
        <div>
          <img src="https://pbs.twimg.com/profile_banners/607109926/1622322022/1500x500" />
        </div>

        <div className="flex justify-between">
          <div className="rounded-full border-4 border-white inline-block -mt-16 w-32 ml-3">
            <img
              className="w-32 rounded-full"
              src="https://pbs.twimg.com/profile_images/1367267802940375042/H4JDd6aC_400x400.jpg"
            />
          </div>

          <div>
            <button className="rounded-full px-3 py-2 mt-3 mr-3 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="ml-3">
          <p className="font-bold text-lg">Josh W</p>
          <p className="text-gray-500">@welfordian</p>
        </div>

        <div className="px-3 mt-3">
          <p>
            DHIS2. Debian. React. Vue. Gatsby. PWAs. ES6. Node. Electron.
            Tailwind. Working with a UK charity to bring EMRs to the Developing
            World.
          </p>
        </div>

        <div className="flex mt-3 border-b">
          <div className="px-8 hover:bg-blue-50 justify-center border-b-4 border-blue-400 text-blue-400 py-5 cursor-pointer transition">
            <p className="text-center font-bold">Tweets</p>
          </div>

          <div className="flex-1 px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
            <p className="text-center font-bold">Tweets & replies</p>
          </div>

          <div className="px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
            <p className="text-center font-bold">Media</p>
          </div>

          <div className="px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
            <p className="text-center font-bold">Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
