import React from 'react';
import { registry } from './registry';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const Icon = ({ icon, size, ...props }) => {
  const IconComponent = registry[icon];
  return <IconComponent size={size} {...props} />;
};
