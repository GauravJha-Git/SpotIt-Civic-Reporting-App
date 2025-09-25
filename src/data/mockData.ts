export interface Report {
  id: string;
  dateTime: string;
  userLocation: string;
  systemLocation?: string;
  category: string;
  description: string;
  media: string;
  status: 'Pending' | 'Completed' | 'Fake';
  priority: 'Low' | 'Medium' | 'High';
}

export const jharkhandDistricts = [
  'Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum',
  'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara',
  'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu',
  'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum'
];

export const mockReports: Report[] = [
  {
    id: '1',
    dateTime: '2024-01-15 14:30',
    userLocation: 'Main Road, Ranchi',
    systemLocation: '23.3441° N, 85.3096° E',
    category: 'Road Damage',
    description: 'Large pothole causing traffic issues',
    media: 'photo_001.jpg',
    status: 'Pending',
    priority: 'High'
  },
  {
    id: '2',
    dateTime: '2024-01-14 09:15',
    userLocation: 'Park Street, Dhanbad',
    systemLocation: '23.7957° N, 86.4304° E',
    category: 'Street Light',
    description: 'Street light not working for 3 days',
    media: 'photo_002.jpg',
    status: 'Completed',
    priority: 'Medium'
  },
  {
    id: '3',
    dateTime: '2024-01-13 18:45',
    userLocation: 'Market Area, Jamshedpur',
    systemLocation: '22.8046° N, 86.2029° E',
    category: 'Theft',
    description: 'Mobile phone stolen from shop',
    media: 'video_001.mp4',
    status: 'Pending',
    priority: 'High'
  },
  {
    id: '4',
    dateTime: '2024-01-12 11:20',
    userLocation: 'College Road, Bokaro',
    systemLocation: '23.6693° N, 86.1511° E',
    category: 'Noise Pollution',
    description: 'Loud music disturbing residents',
    media: 'audio_001.mp3',
    status: 'Fake',
    priority: 'Low'
  },
  {
    id: '5',
    dateTime: '2024-01-11 16:30',
    userLocation: 'Hospital Road, Deoghar',
    systemLocation: '24.4851° N, 86.6947° E',
    category: 'Water Supply',
    description: 'No water supply for 2 days',
    media: 'photo_003.jpg',
    status: 'Completed',
    priority: 'High'
  }
];

export const getReportsByDistrict = (district: string): Report[] => {
  // For demo purposes, return random subset of reports for each district
  const shuffled = [...mockReports].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 1);
};