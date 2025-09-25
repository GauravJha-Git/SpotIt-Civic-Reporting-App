import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Shield, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReportTable } from "./ReportTable";
import { mockReports, Report, jharkhandDistricts } from "../data/mockData";

export function AuthorityPanel() {
  const navigate = useNavigate();
  const [reports, setReports] = useState<Report[]>(mockReports);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const handleStatusChange = (reportId: string, newStatus: Report['status']) => {
    setReports(prev => 
      prev.map(report => 
        report.id === reportId 
          ? { ...report, status: newStatus }
          : report
      )
    );
  };

  const filterReports = (status?: Report['status']) => {
    let filtered = reports;
    
    if (status) {
      filtered = filtered.filter(report => report.status === status);
    }
    
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(report => report.status === selectedStatus);
    }
    
    return filtered;
  };

  const allReports = filterReports();
  const pendingReports = filterReports('Pending');
  const completedReports = filterReports('Completed');
  const fakeReports = filterReports('Fake');

  const getTabStyle = (status: string, count: number) => {
    const styles = {
      all: 'data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800',
      pending: 'data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800',
      completed: 'data-[state=active]:bg-green-100 data-[state=active]:text-green-800',
      fake: 'data-[state=active]:bg-red-100 data-[state=active]:text-red-800'
    };
    return styles[status as keyof typeof styles] || '';
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="h-[calc(100vh-3.5rem)] flex flex-col p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')} 
            className="hover:bg-purple-100 flex-shrink-0 h-10 w-10 p-0 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Authority Panel</h1>
              <p className="text-sm text-gray-600">Manage and review community reports</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="p-4 sm:p-6 mb-6 bg-white shadow-lg border-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <label className="font-medium text-gray-700 text-sm whitespace-nowrap">District:</label>
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger className="w-full sm:w-48 h-10 rounded-lg border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    {jharkhandDistricts.map(district => (
                      <SelectItem key={district} value={district.toLowerCase()}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <label className="font-medium text-gray-700 text-sm whitespace-nowrap">Status:</label>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full sm:w-32 h-10 rounded-lg border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Fake">Fake</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Report Tabs */}
        <div className="flex-1 flex flex-col min-h-0">
          <Tabs defaultValue="all" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 h-12 rounded-xl">
              <TabsTrigger 
                value="all" 
                className={`${getTabStyle('all', allReports.length)} rounded-lg font-medium text-sm px-4`}
              >
                <span className="hidden sm:inline">All Reports</span>
                <span className="sm:hidden">All</span>
                <span className="ml-1">({allReports.length})</span>
              </TabsTrigger>
              <TabsTrigger 
                value="pending"
                className={`${getTabStyle('pending', pendingReports.length)} rounded-lg font-medium text-sm px-4`}
              >
                <span className="hidden sm:inline">Pending</span>
                <span className="sm:hidden">Pend</span>
                <span className="ml-1">({pendingReports.length})</span>
              </TabsTrigger>
              <TabsTrigger 
                value="completed"
                className={`${getTabStyle('completed', completedReports.length)} rounded-lg font-medium text-sm px-4`}
              >
                <span className="hidden sm:inline">Completed</span>
                <span className="sm:hidden">Done</span>
                <span className="ml-1">({completedReports.length})</span>
              </TabsTrigger>
              <TabsTrigger 
                value="fake"
                className={`${getTabStyle('fake', fakeReports.length)} rounded-lg font-medium text-sm px-4`}
              >
                <span className="hidden sm:inline">Fake</span>
                <span className="sm:hidden">Fake</span>
                <span className="ml-1">({fakeReports.length})</span>
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 mt-6 overflow-hidden">
              <TabsContent value="all" className="h-full mt-0">
                <div className="h-full overflow-auto">
                  <ReportTable 
                    reports={allReports}
                    showSystemLocation={true}
                    allowStatusEdit={true}
                    onStatusChange={handleStatusChange}
                  />
                </div>
              </TabsContent>

              <TabsContent value="pending" className="h-full mt-0">
                <div className="h-full overflow-auto">
                  <ReportTable 
                    reports={pendingReports}
                    showSystemLocation={true}
                    allowStatusEdit={true}
                    onStatusChange={handleStatusChange}
                  />
                </div>
              </TabsContent>

              <TabsContent value="completed" className="h-full mt-0">
                <div className="h-full overflow-auto">
                  <ReportTable 
                    reports={completedReports}
                    showSystemLocation={true}
                    allowStatusEdit={true}
                    onStatusChange={handleStatusChange}
                  />
                </div>
              </TabsContent>

              <TabsContent value="fake" className="h-full mt-0">
                <div className="h-full overflow-auto">
                  <ReportTable 
                    reports={fakeReports}
                    showSystemLocation={true}
                    allowStatusEdit={true}
                    onStatusChange={handleStatusChange}
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}