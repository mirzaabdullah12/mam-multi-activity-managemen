// Centralized image preloader for instant rendering
// Cache to prevent duplicate loading
const imageCache = new Set();

export const preloadAllImages = () => {
  const images = [
    // Home slider images - PRIORITY
    '/src/assets/household-repair-middle-aged-man-inspecting-pipe-touching-hand-sink-stylish-modern-kitchen.jpg',
    '/src/assets/male-electrician-working-electrical-panel-male-electrician-overalls.jpg',
    '/src/assets/man-builder-uniform-holding-older-looking-building-plan.jpg',
    
    // Service card images - ALL 9 CARDS
    '/src/assets/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg',
    '/src/assets/working-with-blueprint.jpg',
    '/src/assets/builder-orange-work-clothes-using-hammer-with-stand-different-tools-near-workshop.jpg',
    '/src/assets/man-electrical-technician-working-switchboard-with-fuses.jpg',
    '/src/assets/worker-repairing-water-heater.jpg',
    '/src/assets/medium-shot-delivery-people-working.jpg',
    '/src/assets/beautiful-wedding-altar-made-white-pink-curtains.jpg',
    '/src/assets/technician-checking-heating-system-boiler-room.jpg',
    '/src/assets/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg',
    
    // Electrical service detail images
    '/src/assets/elec 1.jpg',
    '/src/assets/elec 2.jpg'
  ];

  // Filter out already cached images
  const imagesToLoad = images.filter(src => !imageCache.has(src));
  
  if (imagesToLoad.length === 0) {
    return Promise.resolve([]);
  }

  // Method 1: Preload using link tags (fastest - browser priority)
  imagesToLoad.forEach((src, index) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    // Priority for first 3 images (home slider)
    if (index < 3) {
      link.fetchPriority = 'high';
    }
    document.head.appendChild(link);
    imageCache.add(src);
  });

  // Method 2: Aggressive Image object preloading for cache
  const imagePromises = imagesToLoad.map((src, index) => {
    return new Promise((resolve) => {
      const img = new Image();
      
      // Set loading priority
      if (index < 3) {
        img.loading = 'eager';
      }
      
      // Decode image immediately for instant rendering
      img.onload = () => {
        if (img.decode) {
          img.decode()
            .then(() => resolve(img))
            .catch(() => resolve(img));
        } else {
          resolve(img);
        }
      };
      
      img.onerror = () => resolve(null);
      img.src = src;
    });
  });

  return Promise.all(imagePromises);
};

