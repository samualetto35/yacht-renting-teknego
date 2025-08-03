// Common component props interface
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Responsive breakpoints
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1200px',
} as const;

// Font families
export const fonts = {
  inter: "'Inter', sans-serif",
  gtWalsheim: "'GT Walsheim', 'Inter', sans-serif",
} as const; 