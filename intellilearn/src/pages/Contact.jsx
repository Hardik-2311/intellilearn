import React from "react";
import Layout from "../layout/Layout";
import ContactInputBox from "../components/contact/ContactInputBox";
import ContactTextArea from "../components/contact/ContactTextArea";
import { AiFillHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="container mx-auto w-[90%]">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-[#22B286]">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase  sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-[#22B286]/5 text-[#22B286] sm:h-[70px] sm:max-w-[70px]">
                    <AiFillHome size={32} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold ">
                      Our Location
                    </h4>
                    <p className="text-base">
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-[#22B286]/5 text-[#22B286] sm:h-[70px] sm:max-w-[70px]">
                    <AiOutlinePhone size={32} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold ">
                      Phone Number
                    </h4>
                    <p className="text-base">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-[#22B286]/5 text-[#22B286] sm:h-[70px] sm:max-w-[70px]">
                    <AiOutlineMail size={32} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold ">
                      Email Address
                    </h4>
                    <p className="text-base">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-[#22B286] bg-[#22B286] p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
