'use client';
import dynamic from 'next/dynamic';

const CustomBarChart = dynamic(() => import('./CustomBarChart'), {
  ssr: false, // ✅ disables server-side rendering
});
export default  CustomBarChart;