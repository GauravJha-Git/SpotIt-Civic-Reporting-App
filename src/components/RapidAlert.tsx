import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { ArrowLeft, Camera, Mic, MapPin, Upload, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type AlertStep = 'details' | 'location' | 'submitted';

export function RapidAlert() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<AlertStep>('details');
  const [countdown, setCountdown] = useState(15);
  const [locationGranted, setLocationGranted] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<'photo' | 'voice' | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentStep === 'location' && !locationGranted && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown, locationGranted, currentStep]);

  const handleLocationAccess = () => {
    setLocationGranted(true);
    setCountdown(0);
  };

  const handleNextStep = () => {
    if (currentStep === 'details') {
      setCurrentStep('location');
    }
  };

  const handleSubmit = () => {
    setCurrentStep('submitted');
  };

  const canProceedFromDetails = description.trim() || selectedMedia;
  const canSubmit = locationGranted;

  if (currentStep === 'submitted') {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-md p-6 sm:p-8 text-center space-y-6 shadow-xl border-0">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Rapid Alert Sent!</h2>
            <p className="text-gray-600">
              Your emergency alert has been immediately dispatched to nearby authorities.
            </p>
          </div>
          <Button onClick={() => navigate('/public')} className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl">
            Back to Public Panel
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-2xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/public')} 
            className="hover:bg-red-100 flex-shrink-0 h-10 w-10 p-0 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl text-red-600 font-semibold">Rapid Alert</h1>
              <p className="text-sm text-red-700">Emergency reporting system</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <Card className="p-4 sm:p-6 mb-6 border-red-200 shadow-lg border-0">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-gray-700">
              Step {currentStep === 'details' ? '1' : '2'} of 2
            </span>
            <span className="text-sm text-gray-500">
              {currentStep === 'details' ? 'Emergency Details' : 'Location Access'}
            </span>
          </div>
          <Progress value={currentStep === 'details' ? 50 : 100} className="h-3 rounded-full" />
        </Card>

        {/* Emergency Notice */}
        <Card className="p-4 sm:p-6 mb-6 bg-red-50 border-red-200 shadow-lg border-0">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-800 font-semibold mb-1">Emergency Reporting</h3>
              <p className="text-red-700 text-sm">
                Use this for immediate emergencies that require urgent attention from authorities.
              </p>
            </div>
          </div>
        </Card>

        {/* Step 1: Details */}
        {currentStep === 'details' && (
          <div className="space-y-6">
            {/* Quick Media Upload */}
            <Card className="p-6 bg-white shadow-lg border-0">
              <h3 className="mb-4 font-semibold text-gray-900">Quick Evidence (Optional)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div 
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                    selectedMedia === 'photo' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-300 hover:border-blue-400 bg-gray-50/50'
                  }`}
                  onClick={() => setSelectedMedia(selectedMedia === 'photo' ? null : 'photo')}
                >
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Photo/Video</p>
                  <div className="text-xs text-blue-600 font-medium">
                    {selectedMedia === 'photo' ? '✓ Selected' : 'Tap to select'}
                  </div>
                </div>
                
                <div 
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                    selectedMedia === 'voice' 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-300 hover:border-blue-400 bg-gray-50/50'
                  }`}
                  onClick={() => setSelectedMedia(selectedMedia === 'voice' ? null : 'voice')}
                >
                  <Mic className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Voice Note</p>
                  <div className="text-xs text-blue-600 font-medium">
                    {selectedMedia === 'voice' ? '✓ Selected' : 'Tap to select'}
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Description */}
            <Card className="p-6 bg-white shadow-lg border-0">
              <h3 className="mb-3 font-semibold text-gray-900">Brief Description</h3>
              <Textarea 
                placeholder="Quickly describe the emergency..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-20 rounded-lg border-gray-300"
              />
              <p className="text-xs text-gray-500 mt-2">
                {description.length}/500 characters
              </p>
            </Card>

            <Button 
              onClick={handleNextStep}
              disabled={!canProceedFromDetails}
              className="w-full h-12 bg-red-600 hover:bg-red-700 rounded-xl font-semibold shadow-lg"
            >
              Continue to Location Access
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2: Location */}
        {currentStep === 'location' && (
          <div className="space-y-6">
            <Card className="p-6 bg-white shadow-lg border-0">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-10 h-10 text-red-600" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">Location Access Required</h3>
                  <p className="text-gray-600">
                    We need your location to dispatch the nearest authorities to your emergency.
                  </p>
                </div>

                {!locationGranted && countdown > 0 && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">{countdown}s</div>
                      <p className="text-sm text-red-600">Time remaining to grant access</p>
                    </div>
                    <Progress value={((15 - countdown) / 15) * 100} className="h-3 bg-red-100 rounded-full" />
                  </div>
                )}

                {locationGranted ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Location accessed successfully</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Emergency services will be notified of your exact location.
                    </p>
                  </div>
                ) : (
                  <Button 
                    onClick={handleLocationAccess}
                    className="w-full h-12 bg-red-600 hover:bg-red-700 rounded-xl font-semibold"
                    disabled={countdown === 0}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Grant Location Access
                  </Button>
                )}

                {countdown === 0 && !locationGranted && (
                  <div className="text-center space-y-3">
                    <p className="text-red-600 font-semibold">Time expired!</p>
                    <Button 
                      variant="outline"
                      onClick={() => setCountdown(15)}
                      className="rounded-lg border-red-300 text-red-600 hover:bg-red-50"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            <div className="flex gap-3">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep('details')}
                className="flex-1 h-12 rounded-xl border-gray-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="flex-1 h-12 bg-red-600 hover:bg-red-700 rounded-xl font-semibold"
              >
                Send Emergency Alert
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}