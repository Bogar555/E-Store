import www from '../../assets/images/footer/www.png';
import twitter from '../../assets/images/footer/twitter.png';
import insta from '../../assets/images/footer/instagram.png';
import facebook from '../../assets/images/footer/facebook.png';

export const Footer = () => (
  <footer className="bg-white text-gray-800 border-t">
    <div className="max-w-screen-xl mx-auto px-4 py-16 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm">
      {/* Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Delivery Information</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">Returns</a></li>
          <li><a href="#" className="hover:underline">Sitemap</a></li>
        </ul>
      </div>

      {/* My Account */}
      <div>
        <h3 className="text-lg font-semibold mb-4">MY ACCOUNT</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">My Account</a></li>
          <li><a href="#" className="hover:underline">Order History</a></li>
          <li><a href="#" className="hover:underline">Newsletter</a></li>
          <li><a href="#" className="hover:underline">Brands</a></li>
          <li><a href="#" className="hover:underline">Gift Vouchers</a></li>
          <li><a href="#" className="hover:underline">Affiliates</a></li>
          <li><a href="#" className="hover:underline">Specials</a></li>
        </ul>
      </div>

      {/* About Us */}
      <div>
        <h3 className="text-lg font-semibold mb-5">ABOUT US</h3>
        <p className="text-gray-600 ">
          Lorem ipsum dolor sit amet, inani persius indoctum vim id, quo an nibh nusquam.
        </p>
        <p className="text-gray-600">
          Cu movet discere cum, pri partem veritus comprehensam ea. Cum in liber movet simul.
        </p>
      </div>

      {/* Contact Info */}
      <div >
        <div className="mt-6">
        <h3 className="text-lgr font-semibold mb-3">CONTACT INFO</h3>
        <ul className="space-y-3 text-gray-700" >
          <li className="flex1 items-start gap-3" >
            <span>📍</span>
            <span>
              Acme Widgets<br />
              123 Widget Street<br />
              Acmeville, AC 12345
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span>📞</span>
            <a href="tel:1234567890" className="hover:underline" style={{fontSize:"15px"}}>123-456-7890</a>
          </li>
          <li className="flex items-center gap-2">
            <span>✉️</span>
            <a href="mailto:contact@example.com" className="hover:underline" style={{fontSize:"15px"}}>contact@example.com</a>
          </li>
        </ul> 
      </div>
      
    
     </div>
     </div>
          <h4 className="text-lg font-semibold mb-3" >CONNECT WITH US</h4>
          <div className="flex gap-4 text-gray-600">
            {/* Replace # with actual links and use SVGs or FontAwesome icons */}
            <a href="#" className="hover:text-blue-600"><img src={www} alt="www" /></a>
            <a href="#" className="hover:text-pink-600"><img src={facebook} alt="facebook" /></a>
            <a href="#" className="hover:text-blue-400"><img src={twitter} alt="twitter" /></a>
            <a href="#" className="hover:text-gray-900"><img src={insta} alt="insta" /></a>
          </div>
          
    <div className="border-t text-center py-4 text-gray-500 text-sm">
      <p className='let-1'>
        &copy; {new Date().getFullYear()} Acme Widgets. All rights reserved. ·
        <div>Terms & Conditions·
        <div>Privacy Policy</div>
        </div> 
      </p>
    </div>
  </footer>
);
