import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";
import { Users, Shield, MapPin, Eye } from "lucide-react";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-3 py-4 sm:p-6 lg:p-8 overflow-auto">
      <div className="w-full max-w-6xl h-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-full mb-3 sm:mb-6">
            <Eye className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">SpotIt</h1>
          <p className="text-base sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-1 sm:mb-2 px-2">Civic Issue & Crime Reporting Platform</p>
          <p className="text-xs sm:text-base lg:text-lg text-gray-500 px-4">Building safer communities through citizen engagement</p>
        </div>

        

        {/* Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-6 sm:mb-10 lg:mb-16 px-2">
          {/* Public Card */}
          <Card className="p-4 sm:p-6 lg:p-8 text-center space-y-3 sm:space-y-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 bg-gradient-to-b from-white to-blue-50/30">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full">
              <Users className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600" />
            </div>
            <div className="space-y-1 sm:space-y-3">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-900">Public</h2>
              <p className="text-xs sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">Report issues, check status, and send rapid alerts to authorities</p>
            </div>
            <Button 
              className="w-full h-10 sm:h-14 lg:h-16 text-sm sm:text-lg lg:text-xl bg-blue-600 hover:bg-blue-700 shadow-md touch-manipulation"
              onClick={() => navigate('/public')}
            >
              Enter as Public
            </Button>
          </Card>

          {/* Authority Card */}
          <Card className="p-4 sm:p-6 lg:p-8 text-center space-y-3 sm:space-y-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 bg-gradient-to-b from-white to-purple-50/30">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-100 rounded-full">
              <Shield className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-600" />
            </div>
            <div className="space-y-1 sm:space-y-3">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-900">Authority</h2>
              <p className="text-xs sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">Manage reports, update status, and coordinate responses</p>
            </div>
            <Button 
              className="w-full h-10 sm:h-14 lg:h-16 text-sm sm:text-lg lg:text-xl bg-purple-600 hover:bg-purple-700 shadow-md touch-manipulation"
              onClick={() => navigate('/authority')}
            >
              Enter as Authority
            </Button>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto px-2">
          <div className="text-center p-3 sm:p-6">
            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-green-100 rounded-full mb-2 sm:mb-4">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base lg:text-lg">Location Tracking</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">Precise location data for accurate reporting and response</p>
          </div>
          
          <div className="text-center p-3 sm:p-6">
            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-orange-100 rounded-full mb-2 sm:mb-4">
              <Eye className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base lg:text-lg">Real-time Updates</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">Track report status and receive instant notifications</p>
          </div>
          
          <div className="text-center p-3 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-red-100 rounded-full mb-2 sm:mb-4">
              <Shield className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base lg:text-lg">Emergency Alerts</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">Rapid response system for urgent situations</p>
          </div>
        </div>
      </div>
    </div>
  );
}