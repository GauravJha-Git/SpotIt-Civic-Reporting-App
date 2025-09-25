import { Eye } from "lucide-react";

interface NavbarProps {
  variant?: 'default' | 'landing';
}

export function Navbar({ variant = 'default' }: NavbarProps) {
  if (variant === 'landing') {
    return null; // No navbar on landing page
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-center h-14 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-semibold text-gray-900">SpotIt</h1>
        </div>
      </div>
    </nav>
  );
}