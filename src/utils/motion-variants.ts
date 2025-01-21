export const closeButtonVariants = {
  hover: {
    scale: 1.1, // Tugma kattalashadi
    rotate: 90, // Buraladi
    transition: { type: 'spring', stiffness: 300 },
  },
  tap: {
    scale: 0.9, // Tugma kichiklashadi
    rotate: -90, // Orqaga buraladi
    transition: { duration: 0.2 },
  },
};
