import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { ArrowLeft, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MapPlaceholder } from "./MapPlaceholder";
import { ReportTable } from "./ReportTable";
import { jharkhandDistricts, getReportsByDistrict, Report } from "../data/mockData";

export function CheckReports() {
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [districtReports, setDistrictReports] = useState<Report[]>([]);

  const handleDistrictClick = (district: string) => {
    const reports = getReportsByDistrict(district);
    setDistrictReports(reports);
    setSelectedDistrict(district);
  };

  const closeModal = () => {
    setSelectedDistrict(null);
    setDistrictReports([]);
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Map Section */}
        <div className="flex-1 p-4 lg:p-6 order-2 lg:order-1">
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 lg:mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/public')} 
                className="hover:bg-green-100 flex-shrink-0 h-10 w-10 p-0 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Map className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">Registered Reports</h1>
                  <p className="text-sm text-gray-600">View reports by district</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <MapPlaceholder />
            </div>
          </div>
        </div>

        {/* Districts List */}
        <div className="w-full lg:w-80 xl:w-96 bg-white border-b lg:border-b-0 lg:border-l border-gray-200 shadow-lg order-1 lg:order-2">
          <div className="h-full flex flex-col p-4 lg:p-6">
            <div className="mb-4 lg:mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Jharkhand Districts</h2>
              <p className="text-sm text-gray-600">Select a district to view reports</p>
            </div>
            <ScrollArea className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {jharkhandDistricts.map((district) => (
                  <Card 
                    key={district}
                    className="p-3 sm:p-4 cursor-pointer hover:bg-blue-50 transition-all duration-200 border hover:border-blue-300 hover:shadow-md group"
                    onClick={() => handleDistrictClick(district)}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-800 text-sm lg:text-base truncate group-hover:text-blue-700">
                        {district}
                      </p>
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 group-hover:bg-blue-600"></div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Report Modal */}
      <Dialog open={!!selectedDistrict} onOpenChange={closeModal}>
        <DialogContent className="w-[95vw] max-w-6xl max-h-[85vh] bg-white rounded-xl">
          <DialogHeader className="border-b border-gray-200 pb-4">
            <DialogTitle className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <Map className="w-3 h-3 text-white" />
              </div>
              <span>Reports for {selectedDistrict}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-auto mt-4">
            {districtReports.length > 0 ? (
              <ReportTable reports={districtReports} />
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600 font-medium">No reports found for this district.</p>
                <p className="text-sm text-gray-500 mt-1">Reports will appear here when submitted by citizens.</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}