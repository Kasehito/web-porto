// Placeholder thumbnail component for portfolio items
// You can replace this with actual images by adding them to the /public folder

interface PlaceholderProps {
  number: number;
  category: string;
}

export default function PlaceholderThumbnail({ number, category }: PlaceholderProps) {
  const colors = {
    'Motion Graphics': 'from-purple-600 to-blue-600',
    'Videography': 'from-orange-600 to-red-600',
  };

  const gradient = colors[category as keyof typeof colors] || 'from-gray-600 to-gray-800';

  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id={`grad-${number}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4c1d95', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#grad-${number})`} />
      <text
        x="50%"
        y="45%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="48"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        🎬
      </text>
      <text
        x="50%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="rgba(255,255,255,0.8)"
        fontSize="20"
        fontFamily="sans-serif"
      >
        {category}
      </text>
      <text
        x="50%"
        y="75%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="rgba(255,255,255,0.6)"
        fontSize="16"
        fontFamily="sans-serif"
      >
        Project #{number}
      </text>
    </svg>
  );
}
