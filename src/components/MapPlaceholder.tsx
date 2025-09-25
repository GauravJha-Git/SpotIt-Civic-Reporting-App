import { Card } from "./ui/card";
import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <Card className="h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 shadow-sm">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <MapPin className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Interactive Map</h3>
          <p className="text-gray-600">Jharkhand State</p>
          <p className="text-sm text-gray-500">Click districts to view reports</p>
        </div>
      </div>
    </Card>
  );
}