import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Camera, MapPin, Mic, Upload, CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ReportIssue() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-md p-6 sm:p-8 text-center space-y-6 shadow-xl border-0">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Report Submitted Successfully!</h2>
            <p className="text-gray-600">
              Your report has been registered and will be reviewed by authorities.
            </p>
          </div>
          <div className="space-y-3">
            <Button onClick={() => navigate('/public')} className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl">
              Back to Public Panel
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ category: '', description: '', name: '', phone: '', email: '' });
              }}
              className="w-full h-12 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl"
            >
              Report Another Issue
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-3xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/public')} 
            className="hover:bg-blue-100 flex-shrink-0 h-10 w-10 p-0 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Report an Issue</h1>
              <p className="text-sm text-gray-600">Help improve your community by reporting issues</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo Upload */}
          <Card className="p-6 bg-white shadow-lg border-0">
            <Label className="block mb-4 font-semibold text-gray-900">Upload Photo/Video</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors bg-gray-50/50">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Take a photo or upload from gallery</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button type="button" variant="outline" className="rounded-lg border-blue-300 text-blue-600 hover:bg-blue-50">
                  <Camera className="w-4 h-4 mr-2" />
                  Camera
                </Button>
                <Button type="button" variant="outline" className="rounded-lg border-blue-300 text-blue-600 hover:bg-blue-50">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>
          </Card>

          {/* Category */}
          <Card className="p-6 bg-white shadow-lg border-0">
            <Label htmlFor="category" className="block mb-3 font-semibold text-gray-900">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
              <SelectTrigger className="h-12 rounded-lg border-gray-300">
                <SelectValue placeholder="Select issue category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="road-damage">Road Damage</SelectItem>
                <SelectItem value="street-light">Street Light</SelectItem>
                <SelectItem value="water-supply">Water Supply</SelectItem>
                <SelectItem value="theft">Theft</SelectItem>
                <SelectItem value="noise-pollution">Noise Pollution</SelectItem>
                <SelectItem value="garbage">Garbage Collection</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </Card>

          {/* Description */}
          <Card className="p-6 bg-white shadow-lg border-0">
            <Label htmlFor="description" className="block mb-3 font-semibold text-gray-900">Description</Label>
            <Textarea 
              id="description"
              placeholder="Describe the issue in detail..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="min-h-24 rounded-lg border-gray-300"
            />
            <Button type="button" variant="outline" className="mt-3 rounded-lg border-blue-300 text-blue-600 hover:bg-blue-50">
              <Mic className="w-4 h-4 mr-2" />
              Voice Note
            </Button>
          </Card>

          {/* Location */}
          <Card className="p-6 bg-white shadow-lg border-0">
            <Label className="block mb-3 font-semibold text-gray-900">Location</Label>
            <Button type="button" variant="outline" className="w-full h-12 rounded-lg border-green-300 text-green-600 hover:bg-green-50">
              <MapPin className="w-4 h-4 mr-2" />
              Get Current Location
            </Button>
          </Card>

          {/* User Details */}
          <Card className="p-6 bg-white shadow-lg border-0">
            <div className="flex items-center space-x-3 mb-4">
              <Checkbox 
                id="anonymous" 
                checked={isAnonymous}
                onCheckedChange={(checked) => setIsAnonymous(checked === true)}
              />
              <Label htmlFor="anonymous" className="font-medium text-gray-700">Submit anonymously</Label>
            </div>

            {!isAnonymous && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block mb-2 font-medium text-gray-700">Full Name</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className="h-12 rounded-lg border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                    className="h-12 rounded-lg border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email (Optional)</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email"
                    className="h-12 rounded-lg border-gray-300"
                  />
                </div>
              </div>
            )}
          </Card>

          <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-lg">
            Submit Report
          </Button>
        </form>
      </div>
    </div>
  );
}