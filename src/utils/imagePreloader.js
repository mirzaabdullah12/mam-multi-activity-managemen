// Centralized image preloader for instant rendering
export const preloadAllImages = () => {
  const images = [
    // Home slider images - PRIORITY
    '/src/assets/household-repair-middle-aged-man-inspecting-pipe-touching-hand-sink-stylish-modern-kitchen.jpg',
    '/src/assets/male-electrician-working-electrical-panel-male-electrician-overalls.jpg',
    '/src/assets/man-builder-uniform-holding-older-looking-building-plan.jpg',
    
    // Service card images
    '/src/assets/working-with-blueprint.jpg',
    '/src/assets/builder-orange-work-clothes-using-hammer-with-stand-different-tools-near-workshop.jpg',
    '/src/assets/man-electrical-technician-working-switchboard-with-fuses.jpg',
    '/src/assets/worker-repairing-water-heater.jpg',
    '/src/assets/medium-shot-delivery-people-working.jpg',
    '/src/assets/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg'
  ];

  // Method 1: Preload using link tags (fastest - browser priority)
  images.forEach((src, index) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    // Priority for first 3 images (home slider)
    if (index < 3) {
      link.fetchPriority = 'high';
    }
    document.head.appendChild(link);
  });

  // Method 2: Aggressive Image object preloading for cache
  const imagePromises = images.map((src, index) => {
    return new Promise((resolve) => {
      const img = new Image();
      
      // Decode image immediately for instant rendering
      img.decode().then(() => {
        resolve(img);
      }).catch(() => {
        // Fallback if decode not supported
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
      });
      
      img.src = src;
      
      // Force immediate loading
      if (index < 3) {
        img.loading = 'eager';
      }
    });
  });

  return Promise.all(imagePromises);
};
