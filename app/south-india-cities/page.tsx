import { Metadata } from 'next'
import { SOUTH_INDIA_CITIES, PRIORITY_SOUTH_INDIA_CITIES } from '@/lib/india'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'South India Cities Directory | RJ Interiors - GRC & FRP Services',
  description: 'Comprehensive directory of South Indian cities where RJ Interiors provides GRC and FRP services. Covering Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana.',
  keywords: 'South India cities, GRC services, FRP solutions, Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana, construction materials',
  openGraph: {
    title: 'South India Cities Directory | RJ Interiors',
    description: 'Explore our services across major South Indian cities including Bangalore, Chennai, Hyderabad, Kochi, and more.',
    type: 'website',
  },
}

export default function SouthIndiaCitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            South India Cities Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RJ Interiors provides premium GRC and FRP services across major cities in South India. 
            Discover our presence in Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana.
          </p>
        </div>

        {/* Priority Cities Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Priority Cities
          </h2>
          <p className="text-gray-600 mb-4">
            Our key service areas across South India's major metropolitan and industrial centers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRIORITY_SOUTH_INDIA_CITIES.map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 hover:text-blue-800 transition-colors text-center font-medium"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* States and Cities */}
        <div className="space-y-8">
          {Object.entries(SOUTH_INDIA_CITIES).map(([state, cities]) => (
            <div key={state} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                {state}
              </h2>
              <p className="text-gray-600 mb-4">
                {getStateDescription(state)} - {cities.length} cities covered
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {cities.map((city) => (
                  <Link
                    key={city}
                    href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block p-2 bg-gray-50 hover:bg-gray-100 rounded text-gray-700 hover:text-gray-900 transition-colors text-sm text-center"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Services Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md p-8 mt-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">Our Services Across South India</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">GRC Services</h3>
              <ul className="space-y-1 text-blue-100">
                <li>• GRC Jali & Facades</li>
                <li>• Architectural Elements</li>
                <li>• Interior Decorative Items</li>
                <li>• Custom Design Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">FRP Services</h3>
              <ul className="space-y-1 text-blue-100">
                <li>• FRP Tanks & Storage</li>
                <li>• Industrial Applications</li>
                <li>• Construction Materials</li>
                <li>• Custom FRP Products</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us for professional GRC and FRP solutions in your city
          </p>
          <div className="space-x-4">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Quote
            </Link>
            <Link
              href="/services"
              className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function getStateDescription(state: string): string {
  const descriptions: Record<string, string> = {
    'Karnataka': 'The IT capital and industrial hub of South India',
    'Tamil Nadu': 'Leading manufacturing and automotive center',
    'Kerala': 'God\'s own country with growing infrastructure',
    'Andhra Pradesh': 'Emerging industrial and port development state',
    'Telangana': 'Technology and pharmaceutical innovation hub'
  }
  return descriptions[state] || 'A key state in South India'
}

// Helper function to get city coordinates for structured data
function getCityCoordinates(city: string): { lat: number; lng: number } {
  const coordinates: Record<string, { lat: number; lng: number }> = {
    'Bangalore': { lat: 12.9716, lng: 77.5946 },
    'Chennai': { lat: 13.0827, lng: 80.2707 },
    'Hyderabad': { lat: 17.3850, lng: 78.4867 },
    'Kochi': { lat: 9.9312, lng: 76.2673 },
    'Mysore': { lat: 12.2958, lng: 76.6394 },
    'Mangalore': { lat: 12.9141, lng: 74.8560 },
    'Hubli': { lat: 15.3647, lng: 75.1240 },
    'Belgaum': { lat: 15.8497, lng: 74.4977 },
    'Davanagere': { lat: 14.4644, lng: 75.9218 },
    'Shimoga': { lat: 13.9299, lng: 75.5681 },
    'Tumkur': { lat: 13.3409, lng: 77.1025 },
    'Udupi': { lat: 13.3409, lng: 74.7421 },
    'Hassan': { lat: 13.0049, lng: 76.1025 },
    'Coimbatore': { lat: 11.0168, lng: 76.9558 },
    'Madurai': { lat: 9.9252, lng: 78.1198 },
    'Trichy': { lat: 10.7905, lng: 78.7047 },
    'Tirunelveli': { lat: 8.7139, lng: 77.7567 },
    'Salem': { lat: 11.6643, lng: 78.1460 },
    'Vellore': { lat: 12.9165, lng: 79.1325 },
    'Erode': { lat: 11.3410, lng: 77.7172 },
    'Thanjavur': { lat: 10.7905, lng: 79.1374 },
    'Trivandrum': { lat: 8.5241, lng: 76.9366 },
    'Kozhikode': { lat: 11.2588, lng: 75.7804 },
    'Kollam': { lat: 8.8932, lng: 76.6141 },
    'Thrissur': { lat: 10.5276, lng: 76.2144 },
    'Palakkad': { lat: 10.7867, lng: 76.6548 },
    'Alappuzha': { lat: 9.4981, lng: 76.3388 },
    'Kannur': { lat: 11.8745, lng: 75.3704 },
    'Kottayam': { lat: 9.5916, lng: 76.5222 },
    'Vijayawada': { lat: 16.5062, lng: 80.6480 },
    'Visakhapatnam': { lat: 17.6868, lng: 83.2185 },
    'Guntur': { lat: 16.2991, lng: 80.4575 },
    'Nellore': { lat: 14.4426, lng: 79.9865 },
    'Tirupati': { lat: 13.6288, lng: 79.4192 },
    'Kakinada': { lat: 16.9891, lng: 82.2475 },
    'Anantapur': { lat: 14.6819, lng: 77.6006 },
    'Rajahmundry': { lat: 17.0005, lng: 81.8040 },
    'Warangal': { lat: 17.9689, lng: 79.5941 },
    'Karimnagar': { lat: 18.4386, lng: 79.1288 },
    'Nizamabad': { lat: 18.6725, lng: 78.0941 },
    'Khammam': { lat: 17.2473, lng: 80.1514 },
    'Mahbubnagar': { lat: 16.7324, lng: 77.9979 }
  }
  
  return coordinates[city] || { lat: 12.9716, lng: 77.5946 } // Default to Bangalore
}
