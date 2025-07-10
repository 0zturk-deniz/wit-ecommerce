import { Facebook, Instagram, Twitter } from "lucide-react";
import PageContent from "./PageContent";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] h-28 content-center">
        <PageContent>
          <div className="flex justify-between h-28 items-center border-b">
            <h1 className="text-xl text-[#252B42] font-semibold">Bandage</h1>

            <div className="flex flex-col items-center gap-2">
              <nav className="flex justify-between items-center gap-4">
                <a>
                  <Facebook color="#23A6F0" className="w-5 h-5" />
                </a>
                <a>
                  <Instagram color="#23A6F0" className="w-5 h-5" />
                </a>
                <a>
                  <Twitter color="#23A6F0" className="w-5 h-5" />
                </a>
              </nav>
            </div>
          </div>
        </PageContent>
      </div>
      <PageContent>
        <div className="flex justify-between py-14 flex-wrap gap-y-10">
          <div className="flex flex-col gap-y-4 basis-[18%]">
            <h2 className="font-semibold text-sm">Company Info</h2>
            <nav className="flex flex-col gap-y-4">
              <a className="text-xs font-semibold text-[#737373]">About Us</a>
              <a className="text-xs font-semibold text-[#737373]">Carrier</a>
              <a className="text-xs font-semibold text-[#737373]">
                We are hiring
              </a>
              <a className="text-xs font-semibold text-[#737373]">Blog</a>
            </nav>
          </div>

          <div className="flex flex-col gap-y-4 basis-[18%]">
            <h2 className="font-semibold text-sm">Legal</h2>
            <nav className="flex flex-col gap-y-4">
              <a className="text-xs font-semibold text-[#737373]">About Us</a>
              <a className="text-xs font-semibold text-[#737373]">Carrier</a>
              <a className="text-xs font-semibold text-[#737373]">
                We are hiring
              </a>
              <a className="text-xs font-semibold text-[#737373]">Blog</a>
            </nav>
          </div>

          <div className="flex flex-col gap-y-4 basis-[18%]">
            <h2 className="font-semibold text-sm">Features</h2>
            <nav className="flex flex-col gap-y-4">
              <a className="text-xs font-semibold text-[#737373]">
                Business Marketing
              </a>
              <a className="text-xs font-semibold text-[#737373]">
                User Analytic
              </a>
              <a className="text-xs font-semibold text-[#737373]">Live Chat</a>
              <a className="text-xs font-semibold text-[#737373]">
                Unlimited Support
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-y-4 basis-[18%]">
            <h2 className="font-semibold text-sm">Resources</h2>
            <nav className="flex flex-col gap-y-4">
              <a className="text-xs font-semibold text-[#737373]">
                IOS & Android
              </a>
              <a className="text-xs font-semibold text-[#737373]">
                Watch a Demo
              </a>
              <a className="text-xs font-semibold text-[#737373]">Customers</a>
              <a className="text-xs font-semibold text-[#737373]">API</a>
            </nav>
          </div>

          <div className="flex flex-col gap-y-4 basis-[25%]">
            <h2 className="font-semibold text-sm">Get in Touch</h2>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#F9F9F9] p-3 border rounded-tl rounded-bl text-[12px] w-full"
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-white p-3 rounded-tr rounded-br text-[12px] border border-[#23A6F0]"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-[#737373]">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </PageContent>

      <div className="bg-[#FAFAFA] h-16 content-center">
        <PageContent>
          <p className="text-xs text-[#737373] font-medium">
            Made With Love By Finland All Rights Reserved
          </p>
        </PageContent>
      </div>
    </div>
  );
};

export default Footer;
