import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowLeft, Eye, FileText, AlertTriangle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PublicPanel() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-3.5rem)] bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="h-full flex flex-col p-4 sm:p-6">
        <div className="max-w-2xl mx-auto w-full h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 flex-shrink-0">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')} 
              className="hover:bg-blue-100 flex-shrink-0 h-10 w-10 p-0 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Public Panel</h1>
                <p className="text-sm text-gray-600">Report issues and track community safety</p>
              </div>
            </div>
          </div>

          {/* Action Cards - Scrollable content area */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4 sm:space-y-6 pb-6">
              {/* Check Reports Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-1">
                  <div className="bg-white rounded-lg p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                      </div>
                      <div className="flex-1 space-y-3 min-w-0">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Check Registered Reports</h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">View reports by district on interactive map and track their status</p>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700 text-white shadow-sm h-11 sm:h-12 rounded-xl font-medium"
                          onClick={() => navigate('/public/reports')}
                        >
                          View Reports
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Report Issue Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-1">
                  <div className="bg-white rounded-lg p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                      </div>
                      <div className="flex-1 space-y-3 min-w-0">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Report an Issue</h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Submit detailed reports with photos, location, and description</p>
                        </div>
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm h-11 sm:h-12 rounded-xl font-medium"
                          onClick={() => navigate('/public/report-issue')}
                        >
                          Create Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Rapid Alert Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-1">
                  <div className="bg-white rounded-lg p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
                      </div>
                      <div className="flex-1 space-y-3 min-w-0">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Rapid Alert</h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Emergency reporting for situations requiring immediate attention</p>
                        </div>
                        <Button 
                          className="w-full bg-red-600 hover:bg-red-700 text-white shadow-sm h-11 sm:h-12 rounded-xl font-medium"
                          onClick={() => navigate('/public/rapid-alert')}
                        >
                          Emergency Alert
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Info Footer */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-center space-y-1">
                  <p className="text-sm text-gray-600">🏘️ Your reports help build safer communities</p>
                  <p className="text-xs text-gray-500">All submissions are reviewed by local authorities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}