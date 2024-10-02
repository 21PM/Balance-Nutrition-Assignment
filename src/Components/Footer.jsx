import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#003D3F] text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">BRN</h1>
          <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur. Laoreet amet platea tellus sed urna. Nulla morbi quis sed ultrices justo.
          </p>
          <p className="mt-2">+91 3764 78249</p>
          <p className="mt-2">info@balancenutrition.in</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mb-4 md:mb-0">
          <div>
            <h3 className="font-bold mb-2">Programs</h3>
            <ul>
              <li>Beat PCOS</li>
              <li>Body Transformation</li>
              <li>Plateau Breaker</li>
              <li>Podhan</li>
              <li>Reform Intermittent</li>
              <li>RnIU</li>
              <li>Weight Loss-Pro</li>
              <li>Weight Loss+</li>
              <li>Cleanse Plan</li>
              <li>Active</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">About Balance</h3>
            <ul>
              <li>About Us</li>
              <li>Our Journey</li>
              <li>Meet Khyati</li>
              <li>How We Work</li>
              <li>E-Kit</li>
              <li>Work With Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Health Reads</h3>
            <ul>
              <li>Khyati's Article</li>
              <li>Superfoods</li>
              <li>Women's Health</li>
              <li>Diabetes</li>
              <li>Clinical reads</li>
              <li>Pregnancy and weight loss</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Partnership</h3>
            <ul>
              <li>Franchises</li>
              <li>Corporate Wellness</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Help & Legal</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Privacy Policy</li>
              <li>FAQs</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-4 pt-4 text-center">
        <p>&copy; 2014 - 2023. www.balancenutrition.in</p>
      </div>
    </footer>
  );
};

export default Footer;
