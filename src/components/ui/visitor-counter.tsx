import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VisitorCounterProps {
  className?: string;
}

export function VisitorCounter({ className }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to get the base URL based on environment
  const getBaseUrl = () => {
    return process.env.NODE_ENV === 'development' 
      ? 'http://localhost:8888' 
      : '';
  };

  useEffect(() => {
    const incrementCount = async () => {
      try {
        setLoading(true);
        
        // Send a POST request to increment the counter
        const response = await fetch(`${getBaseUrl()}/.netlify/functions/visitor-count`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to increment visitor count');
        }

        const data = await response.json();
        setCount(data.count);
        setError(null);
      } catch (err) {
        console.error('Error incrementing visitor count:', err);
        setError('Failed to load visitor count');
        // Try to get the count without incrementing
        getCountWithoutIncrementing();
      } finally {
        setLoading(false);
      }
    };

    const getCountWithoutIncrementing = async () => {
      try {
        const response = await fetch(`${getBaseUrl()}/.netlify/functions/visitor-count`, {
          method: 'GET',
        });
        
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
        }
      } catch (err) {
        console.error('Error fetching visitor count:', err);
      }
    };

    // Only increment once when the component mounts
    incrementCount();
  }, []);

  // Format number with commas (e.g., 1,234)
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={cn("flex items-center gap-2 text-sm", className)}>
      <Users className="h-4 w-4 text-primary" />
      {loading ? (
        <span className="text-gray-400">Counting visitors...</span>
      ) : error ? (
        <span className="text-gray-400">Many visitors</span>
      ) : (
        <span className="text-gray-300">
          <span className="font-medium text-primary">{formatNumber(count || 0)}</span> visitors
        </span>
      )}
    </div>
  );
}