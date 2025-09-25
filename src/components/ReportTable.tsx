import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Report } from "../data/mockData";
import { FileText, Image, Video, Volume2 } from "lucide-react";

interface ReportTableProps {
  reports: Report[];
  showSystemLocation?: boolean;
  allowStatusEdit?: boolean;
  onStatusChange?: (reportId: string, newStatus: Report['status']) => void;
}

export function ReportTable({ 
  reports, 
  showSystemLocation = false, 
  allowStatusEdit = false,
  onStatusChange 
}: ReportTableProps) {
  
  const getStatusBadgeVariant = (status: Report['status']) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'Pending': return 'secondary';
      case 'Fake': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusBadgeStyle = (status: Report['status']) => {
    switch (status) {
      case 'Completed': 
        return 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200';
      case 'Pending': 
        return 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200';
      case 'Fake': 
        return 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200';
      default: 
        return 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200';
    }
  };

  const getPriorityBadgeStyle = (priority: Report['priority']) => {
    switch (priority) {
      case 'High': 
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': 
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': 
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default: 
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Road Damage': 'text-orange-600',
      'Street Light': 'text-yellow-600',
      'Water Supply': 'text-blue-600',
      'Theft': 'text-red-600',
      'Noise Pollution': 'text-purple-600',
      'Garbage': 'text-green-600',
    };
    return colors[category as keyof typeof colors] || 'text-gray-600';
  };

  const getMediaIcon = (media: string) => {
    if (media.includes('photo') || media.includes('.jpg') || media.includes('.png')) {
      return <Image className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
    if (media.includes('video') || media.includes('.mp4')) {
      return <Video className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
    if (media.includes('audio') || media.includes('.mp3')) {
      return <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
    return <FileText className="w-3 h-3 sm:w-4 sm:h-4" />;
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 lg:px-4 py-2 sm:py-3">Date & Time</TableHead>
              <TableHead className="font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 lg:px-4 py-2 sm:py-3">User Location</TableHead>
              {showSystemLocation && <TableHead className="font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 lg:px-4 py-2 sm:py-3">System Location</TableHead>}
              <TableHead className="font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 lg:px-4 py-2 sm:py-3">Category</TableHead>
              <TableHead className="font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 lg:px-4 py-2 sm:py-3">Description</TableHead>
              <TableHead className="font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 lg:px-4 py-2 sm:py-3">Media</TableHead>
              <TableHead className="font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 lg:px-4 py-2 sm:py-3">Status</TableHead>
              <TableHead className="font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap px-1 sm:px-2 lg:px-4 py-2 sm:py-3">Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id} className="hover:bg-gray-50/50">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 text-xs sm:text-sm px-1 sm:px-2 lg:px-4 py-2 sm:py-3 leading-tight">{report.dateTime}</TableCell>
                <TableCell className="text-gray-700 text-xs sm:text-sm px-1 sm:px-2 lg:px-4 py-2 sm:py-3 max-w-24 sm:max-w-32 lg:max-w-40 truncate leading-tight">{report.userLocation}</TableCell>
                {showSystemLocation && <TableCell className="text-gray-600 text-xs px-1 sm:px-2 lg:px-4 py-2 sm:py-3 max-w-20 sm:max-w-24 lg:max-w-32 truncate leading-tight">{report.systemLocation}</TableCell>}
                <TableCell className="px-1 sm:px-2 lg:px-4 py-2 sm:py-3">
                  <span className={`font-medium text-xs sm:text-sm ${getCategoryColor(report.category)} leading-tight`}>
                    {report.category}
                  </span>
                </TableCell>
                <TableCell className="max-w-24 sm:max-w-32 lg:max-w-xs truncate text-gray-700 text-xs sm:text-sm px-1 sm:px-2 lg:px-4 py-2 sm:py-3 leading-tight">{report.description}</TableCell>
                <TableCell className="px-1 sm:px-2 lg:px-4 py-2 sm:py-3">
                  <Button variant="ghost" size="sm" className="p-1 sm:p-2 hover:bg-blue-50 h-6 w-6 sm:h-8 sm:w-8 touch-manipulation">
                    {getMediaIcon(report.media)}
                  </Button>
                </TableCell>
                <TableCell className="px-1 sm:px-2 lg:px-4 py-2 sm:py-3">
                  {allowStatusEdit ? (
                    <Select 
                      value={report.status} 
                      onValueChange={(value) => onStatusChange?.(report.id, value as Report['status'])}
                    >
                      <SelectTrigger className="w-16 sm:w-24 lg:w-32 h-6 sm:h-8 lg:h-9 text-xs sm:text-sm touch-manipulation">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Fake">Fake</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Badge className={`${getStatusBadgeStyle(report.status)} text-xs leading-tight`}>
                      {report.status}
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="px-1 sm:px-2 lg:px-4 py-2 sm:py-3">
                  <Badge className={`${getPriorityBadgeStyle(report.priority)} text-xs leading-tight`}>
                    {report.priority}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}