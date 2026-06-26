import React from "react";
import FeatureBtn from "./FeatureBtn";

const FeatureHero4 = () => {
  const cardsData = [
    {
      id: 1,
      title: "Calendar Element",
      description:
        "With the Calendar Element, you can book appointments or schedule events on specific dates and times.",
      image:
        "https://images04.nicepage.com/feature/6656971/calendar-element-small.jpg",
    },
    {
      id: 2,
      title: "Grid Element",
      description:
        "The Grid is a container element that you can use to place web page elements in cells.",
      image:
        "https://images04.nicepage.com/feature/446715/grid-element-small.jpg",
    },
    {
      id: 3,
      title: "Image Gallery Element",
      description:
        "Add a collection of your favorite images using the Gallery Element with styling and hover effects.",
      image:
        "https://images04.nicepage.com/feature/447743/image-gallery-element-small.jpg",
    },
    {
      id: 4,
      title: "Language Element",
      description:
        "Build multi-language websites by translating texts, menus, buttons, and other content.",
      image:
        "https://images04.nicepage.com/feature/3425260/-language-element-small.jpg",
    },
    {
      id: 5,
      title: "Grid Repeater Element",
      description:
        "Design one column and automatically repeat it across multiple columns while saving time.",
      image:
        "https://images04.nicepage.com/feature/3425260/-language-element-small.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-[80%] mx-auto flex flex-col items-center">
        <div className="w-[50vw] flex flex-col items-center text-center gap-5 mt-10">
          <h1 className="text-3xl font-serif font-bold text-black capitalize">
            Web Page Elements
          </h1>

          <p className="text-gray-600 font-serif">
            The Web Elements are the essential components of any website used
            to create the structure of a page and present content and
            information in various ways.
            <br />
            For example, you can use Text, Images, Buttons, Hyperlinks, Grid,
            Gallery, and many other elements in your web design without coding.
          </p>

          <FeatureBtn />
        </div>

        {/* Main Image */}
        <div className="w-[90%] mx-auto mt-10 flex justify-center">
          <img
            className="w-full object-cover"
            src="https://images04.nicepage.com/feature/531925/web-page-elements.jpg"
            alt="Web Page Elements"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-[90%] mx-auto mt-20 mb-10">
        <div className="w-full flex flex-nowrap justify-center items-stretch gap-4">
          {cardsData.map((item) => (
            <div
              key={item.id}
              className="w-[19%] min-h-[250px] bg-white border border-gray-200 rounded-xl p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col"
            >
              {/* Card Image */}
              <div className="w-full h-40 overflow-hidden rounded-lg bg-gray-50">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              {/* Card Title */}
              <h2 className="text-base font-serif font-bold text-gray-800 mt-4 ">
                {item.title}
              </h2>

              {/* Card Description */}
              <p className="text-sm font-serif text-gray-600 mt-3  flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureHero4;