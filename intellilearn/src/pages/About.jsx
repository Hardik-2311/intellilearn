import React from "react";
import Layout from "../layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 my-14 flex items-center justify-between gap-4">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-[#1A906B]">About Us</h1>
          <h3 className="text-3xl capitalize font-bold">
            <span className="text-[#FF9B26]">INTELLILEARN</span> providing the
            best opportunities to the students around the globe
          </h3>
          <p className="text-md leading-relaxed mt-4">
            Nullam interdum scelerisque ex, in ultrices justo ultricies non.
            Phasellus facilisis, dui at ullamcorper mattis, tortor ex posuere
            nunc, nec suscipit nulla nulla ut turpis. Fusce tincidunt eros vel
            accumsan scelerisque. Donec a nisi nec libero finibus interdum vitae
            nec dui.
          </p>
        </div>
        <div className="relative w-[400px] h-[330px] bg-[#F2F2F2] rounded-xl">
          <div className="absolute -top-10 -right-10">
            <img
              src="/banner2.jpg"
              alt=""
              className="w-[250px] h-[140px] rounded-xl"
            />
          </div>
          <div className="absolute top-60 -left-10 rounded-xl">
            <img
              src="/banner2.jpg"
              alt=""
              className="w-[250px] h-[140px] rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 my-14 flex items-center justify-between gap-6">
        <div className="w-1/2">
          <img src="/banner-image.jpg" alt="" />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h3>features</h3>
          <div className="flex flex-col gap-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque obcaecati vitae nihil praesentium quae.
              Consequatur voluptas iste similique blanditiis harum ratione,
              voluptate voluptates vero nesciunt consectetur quae sunt modi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              fugit pariatur tempora esse itaque vitae unde earum consequatur
              soluta, neque deleniti provident id ipsum accusamus tempore
              excepturi, enim incidunt? Mollitia.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            deleniti mollitia eligendi excepturi quisquam nesciunt aspernatur
            magni aliquam pariatur consectetur commodi cumque, libero molestias
            in? Harum repellat voluptatem perspiciatis quam!
          </p>
          <button className="bg-[#FF9B26] px-8 w-[200px] text-white py-2 rounded-full">learn more</button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
