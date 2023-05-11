import React from "react";
import socialIcon from "../../assets/img/Icons/Group9969.png";
const Footer = () => {
  return (
    <div>
      <div className="w-full bg-zinc-900 text-white mt-40 py-20">
        <div className="w-4/5 m-auto">
          <div className="grid md:grid-cols-5 lg:grid-cols-6 gap-10 border-b-2 border-gray-700 pb-14">
            <div className="space-y-3 lg:col-span-2">
              <h1 className="font-semibold text-xl text-white">JobPortal</h1>
              <h1 className="text-base text-gray-400">
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </h1>
              <img className="w-40 h-10" src={socialIcon} alt="" />
            </div>
            <div className="space-y-3">
              <h1 className="font-semibold text-xl text-white">Company</h1>
              <p className="text-base text-gray-400">About Us</p>
              <p className="text-base text-gray-400">Work</p>
              <p className="text-base text-gray-400">Latest News</p>
              <p className="text-base text-gray-400">Careers</p>
            </div>
            <div className="space-y-3">
              <h1 className="font-semibold text-xl text-white">Product</h1>
              <p className="text-base text-gray-400">Prototype</p>
              <p className="text-base text-gray-400">Plans & Pricing</p>
              <p className="text-base text-gray-400">Customers</p>
              <p className="text-base text-gray-400">Integrations</p>
            </div>
            <div className="space-y-3">
              <h1 className="font-semibold text-xl text-white">Support</h1>
              <p className="text-base text-gray-400">Help Desk</p>
              <p className="text-base text-gray-400">Sales</p>
              <p className="text-base text-gray-400">Become a Partner</p>
              <p className="text-base text-gray-400">Developers</p>
            </div>
            <div className="space-y-3">
              <h1 className="font-semibold text-xl text-white">Contact</h1>
              <p className="text-base text-gray-400">524 Broadway , NYC</p>
              <p className="text-base text-gray-400">+1 777 - 978 - 5570</p>
            </div>
          </div>
          <div className="flex text-current flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between mt-14">
            <p className="text-sm text-zinc-700">
              @2023 JobPortal. All Rights Reserved
            </p>
            <p className="text-sm text-zinc-700">
              Powerd By <span className="font-bold">JobPortal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
