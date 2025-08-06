import Image from "next/image"
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"

export const metadata = {
  title:
    "Contact RJ INTERIORS & CONSTRUCTIONS | GRC & FRP Experts in Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Pimpri-Chinchwad, Patna, Vadodara, Ghaziabad, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan-Dombivli, Vasai-Virar, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi Mumbai, Allahabad, Ranchi, Howrah, Coimbatore, Jabalpur, Gwalior, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh, Solapur, Hubli-Dharwad, Tiruchirappalli, Bareilly, Mysore, Tiruppur, Gurgaon, Aligarh, Jalandhar, Bhubaneswar, Salem, Warangal, Guntur, Bhiwandi, Saharanpur, Gorakhpur, Bikaner, Amravati, Noida, Jamshedpur, Bhilai, Cuttack, Firozabad, Kochi, Nellore, Bhavnagar, Dehradun, Durgapur, Asansol, Rourkela, Nanded, Kolhapur, Ajmer, Akola, Gulbarga, Jamnagar, Ujjain, Loni, Siliguri, Jhansi, Ulhasnagar, Jammu, Sangli-Miraj & Kupwad, Mangalore, Erode, Belgaum, Ambattur, Tirunelveli, Malegaon, Gaya, Jalgaon, Udaipur, Maheshtala",
  description:
    "Contact RJ INTERIORS & CONSTRUCTIONS for premium GRC (Glass Fiber Reinforced Concrete) and FRP (Fiber Reinforced Plastic) solutions. We manufacture and install GRC Jalis, GRC Domes, GRC Columns, GRC Facades, GRC Panels, GRC Cladding, GRC Architectural Elements, FRP Domes, FRP Tanks, FRP Pipes, FRP Gratings, FRP Handrails, FRP Structures, FRP Roofing, FRP Cooling Towers across India. Serving Bangalore, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Kerala, Maharashtra, Gujarat, Rajasthan, Madhya Pradesh, Uttar Pradesh, Bihar, West Bengal, Odisha, Jharkhand, Chhattisgarh, Haryana, Punjab, Himachal Pradesh, Uttarakhand, Assam, Meghalaya, Manipur, Tripura, Mizoram, Nagaland, Arunachal Pradesh, Sikkim, Goa, Delhi NCR and all major cities in India.",
  keywords:
    "GRC Bangalore, FRP Bangalore, Glass Fiber Reinforced Concrete, Fiber Reinforced Plastic, GRC Jalis, GRC Domes, GRC Columns, GRC Facades, GRC Panels, GRC Cladding, GRC Architectural Elements, FRP Domes, FRP Tanks, FRP Pipes, FRP Gratings, FRP Handrails, FRP Structures, FRP Roofing, FRP Cooling Towers, Construction Bangalore, Interiors Bangalore, GRC Manufacturer India, FRP Manufacturer India, Architectural Elements, Decorative Concrete, Lightweight Construction, Corrosion Resistant Materials, Durable Construction Materials, Custom GRC Products, Custom FRP Products, GRC Installation, FRP Installation, Building Materials India, Construction Materials India, Precast Concrete, Composite Materials, Building Facades, Architectural Cladding, Structural Elements, Industrial Construction, Commercial Construction, Residential Construction, Heritage Restoration, Temple Construction, Modern Architecture, Sustainable Construction, Green Building Materials",
  authors: [{ name: "RJ INTERIORS & CONSTRUCTIONS" }],
  openGraph: {
    title: "Contact RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts Across India",
    description:
      "Leading manufacturer and installer of GRC & FRP products across India. Contact us for premium architectural elements, structural solutions, and custom designs.",
    url: "https://rjinteriors.in/contact",
    siteName: "RJ INTERIORS & CONSTRUCTIONS",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts",
    description: "Leading manufacturer and installer of GRC & FRP products across India",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col page-transition">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden mt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/contact-hero.png"
          alt="Contact RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get in touch with our GRC & FRP experts to discuss your architectural and construction project needs across
            India.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl font-bold mb-6">We'd Love to Hear From You</h2>
              <p className="text-gray-700 mb-10 text-lg">
                Whether you have a question about our GRC & FRP services, want to request a quote, or are ready to start
                your architectural project, we're here to help across all major cities in India.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-700">
                      #123, Industrial Area, Phase 2<br />
                      Bangalore, Karnataka 560058
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+917892142197"
                        className="block text-gray-700 hover:text-amber-600 transition-colors"
                      >
                        +91 78921 42197
                      </a>
                      <a
                        href="tel:+919845120009"
                        className="block text-gray-700 hover:text-amber-600 transition-colors"
                      >
                        +91 98451 20009
                      </a>
                      <a
                        href="tel:+919845062009"
                        className="block text-gray-700 hover:text-amber-600 transition-colors"
                      >
                        +91 98450 62009
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Addresses</h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:rjinteriors2009@gmail.com"
                        className="block text-gray-700 hover:text-amber-600 transition-colors"
                      >
                        rjinteriors2009@gmail.com
                      </a>
                      <a
                        href="mailto:grcbanglore@gmail.com"
                        className="block text-gray-700 hover:text-amber-600 transition-colors"
                      >
                        grcbanglore@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="quote-form" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Request a Free Quote</h3>
                <p className="text-gray-700 mb-6">
                  Fill out this form to get a detailed, no-obligation quote for your GRC & FRP construction project. Our
                  team will analyze your requirements and provide a comprehensive estimate.
                </p>
                <form className="bg-gray-50 p-10 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <select
                        id="city"
                        name="city"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">Select your city</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Pune">Pune</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Kanpur">Kanpur</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Indore">Indore</option>
                        <option value="Thane">Thane</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Visakhapatnam">Visakhapatnam</option>
                        <option value="Patna">Patna</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Ludhiana">Ludhiana</option>
                        <option value="Agra">Agra</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Meerut">Meerut</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Srinagar">Srinagar</option>
                        <option value="Aurangabad">Aurangabad</option>
                        <option value="Dhanbad">Dhanbad</option>
                        <option value="Amritsar">Amritsar</option>
                        <option value="Navi Mumbai">Navi Mumbai</option>
                        <option value="Allahabad">Allahabad</option>
                        <option value="Ranchi">Ranchi</option>
                        <option value="Howrah">Howrah</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Jabalpur">Jabalpur</option>
                        <option value="Gwalior">Gwalior</option>
                        <option value="Vijayawada">Vijayawada</option>
                        <option value="Jodhpur">Jodhpur</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Raipur">Raipur</option>
                        <option value="Kota">Kota</option>
                        <option value="Guwahati">Guwahati</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Solapur">Solapur</option>
                        <option value="Hubli-Dharwad">Hubli-Dharwad</option>
                        <option value="Tiruchirappalli">Tiruchirappalli</option>
                        <option value="Bareilly">Bareilly</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Tiruppur">Tiruppur</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Aligarh">Aligarh</option>
                        <option value="Jalandhar">Jalandhar</option>
                        <option value="Bhubaneswar">Bhubaneswar</option>
                        <option value="Salem">Salem</option>
                        <option value="Warangal">Warangal</option>
                        <option value="Guntur">Guntur</option>
                        <option value="Bhiwandi">Bhiwandi</option>
                        <option value="Saharanpur">Saharanpur</option>
                        <option value="Gorakhpur">Gorakhpur</option>
                        <option value="Bikaner">Bikaner</option>
                        <option value="Amravati">Amravati</option>
                        <option value="Noida">Noida</option>
                        <option value="Jamshedpur">Jamshedpur</option>
                        <option value="Bhilai">Bhilai</option>
                        <option value="Cuttack">Cuttack</option>
                        <option value="Firozabad">Firozabad</option>
                        <option value="Kochi">Kochi</option>
                        <option value="Nellore">Nellore</option>
                        <option value="Bhavnagar">Bhavnagar</option>
                        <option value="Dehradun">Dehradun</option>
                        <option value="Durgapur">Durgapur</option>
                        <option value="Asansol">Asansol</option>
                        <option value="Rourkela">Rourkela</option>
                        <option value="Nanded">Nanded</option>
                        <option value="Kolhapur">Kolhapur</option>
                        <option value="Ajmer">Ajmer</option>
                        <option value="Akola">Akola</option>
                        <option value="Gulbarga">Gulbarga</option>
                        <option value="Jamnagar">Jamnagar</option>
                        <option value="Ujjain">Ujjain</option>
                        <option value="Loni">Loni</option>
                        <option value="Siliguri">Siliguri</option>
                        <option value="Jhansi">Jhansi</option>
                        <option value="Ulhasnagar">Ulhasnagar</option>
                        <option value="Jammu">Jammu</option>
                        <option value="Sangli-Miraj & Kupwad">Sangli-Miraj & Kupwad</option>
                        <option value="Mangalore">Mangalore</option>
                        <option value="Erode">Erode</option>
                        <option value="Belgaum">Belgaum</option>
                        <option value="Ambattur">Ambattur</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Malegaon">Malegaon</option>
                        <option value="Gaya">Gaya</option>
                        <option value="Jalgaon">Jalgaon</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Maheshtala">Maheshtala</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Select a service</option>
                      <optgroup label="GRC Products">
                        <option value="GRC Jalis">GRC Jalis</option>
                        <option value="GRC Domes">GRC Domes</option>
                        <option value="GRC Columns">GRC Columns</option>
                        <option value="GRC Facades">GRC Facades</option>
                        <option value="GRC Panels">GRC Panels</option>
                        <option value="GRC Cladding">GRC Cladding</option>
                        <option value="GRC Architectural Elements">GRC Architectural Elements</option>
                        <option value="GRC Decorative Elements">GRC Decorative Elements</option>
                        <option value="GRC Planters">GRC Planters</option>
                        <option value="GRC Balustrades">GRC Balustrades</option>
                        <option value="GRC Cornices">GRC Cornices</option>
                        <option value="GRC Moldings">GRC Moldings</option>
                      </optgroup>
                      <optgroup label="FRP Products">
                        <option value="FRP Domes">FRP Domes</option>
                        <option value="FRP Tanks">FRP Tanks</option>
                        <option value="FRP Pipes">FRP Pipes</option>
                        <option value="FRP Gratings">FRP Gratings</option>
                        <option value="FRP Handrails">FRP Handrails</option>
                        <option value="FRP Structures">FRP Structures</option>
                        <option value="FRP Roofing">FRP Roofing</option>
                        <option value="FRP Cooling Towers">FRP Cooling Towers</option>
                        <option value="FRP Ducts">FRP Ducts</option>
                        <option value="FRP Vessels">FRP Vessels</option>
                        <option value="FRP Chimneys">FRP Chimneys</option>
                        <option value="FRP Scrubbers">FRP Scrubbers</option>
                      </optgroup>
                      <optgroup label="Services">
                        <option value="Custom Design">Custom Design</option>
                        <option value="Installation Services">Installation Services</option>
                        <option value="Maintenance & Repair">Maintenance & Repair</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Heritage Restoration">Heritage Restoration</option>
                        <option value="Project Management">Project Management</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Please describe your GRC/FRP project requirements, dimensions, timeline, and any specific design preferences..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-3">
                    Send Message & Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Service Areas
            </div>
            <h2 className="text-4xl font-bold mb-6">We Serve Across India</h2>
            <p className="text-gray-700 text-lg mb-8">
              RJ INTERIORS & CONSTRUCTIONS provides premium GRC & FRP solutions across all major cities and states in
              India. Our expert team delivers high-quality architectural elements and structural solutions nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-amber-600">South India</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Karnataka (Bangalore, Mysore, Hubli-Dharwad, Belgaum), Tamil Nadu (Chennai, Coimbatore, Madurai, Salem,
                Tiruchirappalli, Tiruppur, Erode, Tirunelveli), Andhra Pradesh (Visakhapatnam, Vijayawada, Guntur,
                Nellore), Telangana (Hyderabad, Warangal), Kerala (Kochi, Thiruvananthapuram, Kozhikode)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-amber-600">West India</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Maharashtra (Mumbai, Pune, Nagpur, Thane, Nashik, Aurangabad, Solapur, Bhiwandi, Amravati, Navi Mumbai,
                Kolhapur, Akola, Nanded, Sangli-Miraj & Kupwad, Malegaon, Jalgaon, Ulhasnagar), Gujarat (Ahmedabad,
                Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar), Goa (Panaji, Margao), Rajasthan (Jaipur, Jodhpur, Kota,
                Bikaner, Udaipur, Ajmer)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-amber-600">North India</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad), Uttar Pradesh (Lucknow, Kanpur, Agra, Varanasi,
                Meerut, Allahabad, Bareilly, Aligarh, Gorakhpur, Saharanpur, Firozabad, Jhansi, Loni), Punjab (Ludhiana,
                Amritsar, Jalandhar), Haryana (Faridabad, Gurgaon), Himachal Pradesh (Shimla, Dharamshala), Uttarakhand
                (Dehradun, Haridwar), Jammu & Kashmir (Srinagar, Jammu), Chandigarh
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-amber-600">East India</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                West Bengal (Kolkata, Howrah, Durgapur, Asansol, Siliguri, Maheshtala), Bihar (Patna, Gaya), Jharkhand
                (Ranchi, Jamshedpur, Dhanbad), Odisha (Bhubaneswar, Cuttack, Rourkela), Assam (Guwahati, Dibrugarh),
                Meghalaya (Shillong), Manipur (Imphal), Tripura (Agartala), Mizoram (Aizawl), Nagaland (Kohima),
                Arunachal Pradesh (Itanagar), Sikkim (Gangtok)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Central India</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Madhya Pradesh (Bhopal, Indore, Jabalpur, Gwalior, Ujjain), Chhattisgarh (Raipur, Bhilai), Telangana
                (Hyderabad, Warangal), Maharashtra Central (Nagpur, Amravati, Akola)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Our Specialization</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We specialize in manufacturing and installing premium GRC & FRP products including architectural
                elements, structural components, decorative features, and custom solutions for residential, commercial,
                industrial, and heritage projects across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700 text-lg">
              Find answers to common questions about our GRC & FRP services and process.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

// Sample data
const faqs = [
  {
    question: "What types of GRC & FRP projects do you handle?",
    answer:
      "We handle a comprehensive range of GRC & FRP construction projects including GRC Jalis, Domes, Columns, Facades, Panels, Cladding, Architectural Elements, FRP Tanks, Pipes, Gratings, Handrails, Structures, Roofing, and Cooling Towers for residential, commercial, industrial, and heritage applications across India.",
  },
  {
    question: "How do I get a quote for my GRC/FRP project?",
    answer:
      "You can request a quote by filling out our detailed contact form above, calling our office directly, or sending us an email with your project requirements. We'll schedule a consultation to discuss your project needs and provide a comprehensive estimate within 24-48 hours.",
  },
  {
    question: "What are the advantages of GRC & FRP over traditional materials?",
    answer:
      "GRC & FRP offer superior durability, corrosion resistance, lightweight properties (60-80% lighter than concrete), design flexibility, faster installation, lower maintenance costs, weather resistance, and excellent strength-to-weight ratio compared to traditional materials like concrete, steel, or natural stone.",
  },
  {
    question: "How long does a typical GRC/FRP project take?",
    answer:
      "Project timelines vary based on scope and complexity. Small decorative elements take 3-7 days, medium architectural features require 1-3 weeks, while large commercial installations may take 4-8 weeks. We provide detailed timelines during consultation and maintain strict project schedules.",
  },
  {
    question: "Do you provide installation services across India?",
    answer:
      "Yes, we provide end-to-end services including design, manufacturing, transportation, and professional installation across all major cities in India. Our certified installation teams ensure perfect fit, finish, and compliance with local building codes and safety standards.",
  },
  {
    question: "What is the warranty on your GRC & FRP products?",
    answer:
      "We provide comprehensive warranties: 10-15 years on GRC products and 15-20 years on FRP products against manufacturing defects, structural integrity, and weather resistance. Installation services come with a 2-year warranty covering workmanship and fitting.",
  },
  {
    question: "Can you create custom designs for unique architectural requirements?",
    answer:
      "We specialize in custom GRC & FRP solutions. Our design team works closely with architects, engineers, and clients to create unique architectural elements, decorative features, and structural components that meet specific aesthetic and functional requirements.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve diverse industries including residential construction, commercial buildings, industrial facilities, hospitality (hotels, resorts), healthcare, educational institutions, religious structures (temples, churches), heritage restoration, infrastructure projects, and architectural firms across India.",
  },
]
