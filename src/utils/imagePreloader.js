// Centralized image preloader for instant rendering
// Cache to prevent duplicate loading
const imageCache = new Set();

export const preloadAllImages = () => {
  // list of filenames relative to assets directory
  const assetNames = [
    // Home slider images - PRIORITY
    'household-repair-middle-aged-man-inspecting-pipe-touching-hand-sink-stylish-modern-kitchen.jpg',
    'male-electrician-working-electrical-panel-male-electrician-overalls.jpg',
    'man-builder-uniform-holding-older-looking-building-plan.jpg',

    // Service card images - ALL 9 CARDS
    'photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg',
    'working-with-blueprint.jpg',
    'builder-orange-work-clothes-using-hammer-with-stand-different-tools-near-workshop.jpg',
    'man-electrical-technician-working-switchboard-with-fuses.jpg',
    'worker-repairing-water-heater.jpg',
    'medium-shot-delivery-people-working.jpg',
    'beautiful-wedding-altar-made-white-pink-curtains.jpg',
    'technician-checking-heating-system-boiler-room.jpg',
    'caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg',

    // Electrical service detail images
    'elec 1.jpg',
    'elec 2.jpg',

    // Gardening service detail images
    'garden 1.jpg',
    'garden 2.jpg',
    'garden 3.jpg',

    // House moving service detail images
    'house 1.jpg',
    'house 2.jpg',

    // Plumbing service detail images
    'plumber 1.jpg',
    'plumber 2.jpg',

    // Wedding light service detail images
    'weeding 2.jpg',
    'wedding 1.jpg',

    // House & marquee decorating service detail images
    'maurqi1.jpg',
    'marqi2.jpg',

    // Services page image
    'portrait-smiling-construction-worker (1).jpg',

    // About page image
    'multi.jpg',

    // Cleaning service images
    'medium-shot-people-cleaning-building (1).jpg',

    // About page image
    'pexels-tima-miroshnichenko-6196677.jpg'
  ];

  const images = assetNames.map(name => new URL(`../assets/${name}`, import.meta.url).href);

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

