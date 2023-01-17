import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  return (
    <div className="bg-primary-300">
      {/* Contact */}
      <div className="border-b border-white/15 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px]">
          <section className="px-5 py-10 flex flex-col items-center text-center sm:px-10">
            <SubHead color="text-white" style="mb-[18px] sm:w-9/12 md:w-9/12 lg:w-6/12">
              We can take care of the installation
            </SubHead>
            <Paragraph
              color="text-white/70"
              fontSize="text-sm"
              style="mb-[30px] sm:w-7/12 lg:w-5/12"
            >
              Don’t want to deal with technical stuff? Let us fire up Uvodo for
              you, so you can spend your time selling right away.
            </Paragraph>
            <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit">CONTACT US</MainButton>
          </section>
        </div>

        {/* Eclipse */}
        <img className="hidden lg:block absolute top-1/4 -left-28" src="/eclipse-1.svg" alt="eclipse" />
        <img className="hidden lg:block absolute top-[20%] -right-24" src="/eclipse-2.svg" alt="eclipse" />
      </div>
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">
          <div className="lg:col-span-1">
            <img
              className="w-[125px] h-auto mb-10 lg:mb-0"
              src="shopify-footer.png"
              alt="shopify-footer"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Features</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a href="#">Find a Patner</a>
                <a href="#">Become a Patner</a>
                <a href="#">Affiliates</a>
                <a href="#">Patner Offers</a>
                <a href="#">Store Examples</a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Company</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a href="#">Leaders</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">Awards</a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Resources</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a href="#">Overview</a>
                <a href="#">Articles</a>
                <a href="#">Webinars</a>
                <a href="#">Events</a>
                <a href="#">Ecommerce</a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Get Help</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a href="#">Shopify Company</a>
                <a href="#">Knowledge Base</a>
                <a href="#">Videos Contact</a>
                <a href="#">Tech Support</a>
                <a href="#">API Documentation</a>
              </div>
            </div>
          </div>
          <div className="text-center lg:col-span-3 md:flex justify-between items-center">
            <div className="flex items-center justify-center gap-4 mb-4 order-2">
              <a href="https://instagram.com/ragilsg_164" target="_blank">
                <img
                  className="w-8 h-auto object-cover"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="https://github.com/pujiragil" target="_blank">
                <img
                  className="w-8 h-auto object-cover"
                  src="/github.svg"
                  alt="github"
                />
              </a>
              <a href="https://t.me/Ragilsg" target="_blank">
                <img
                  className="w-8 h-auto object-cover"
                  src="/telegram.svg"
                  alt="telegram"
                />
              </a>
              <a href="https://linkedin.com/in/pujiragil" target="_blank">
                <img
                  className="w-8 h-auto object-cover"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <p className="font-body text-white font-medium order-1">
              © 2022 Shopify by{" "}
              <a
                className="italic underline"
                href="https://instagram.com/ragilsg_164"
                target="_blank"
              >
                Puji Ragil
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
