const optimizedImageMap = {
  "/assets/about_banner.jpg": "/assets/optimized/about_banner-1024.webp",
  "/assets/about_handshake.png": "/assets/optimized/about_handshake-1024.webp",
  "/assets/backgound.jpg": "/assets/optimized/backgound-300.webp",
  "/assets/choose-us.jpg": "/assets/optimized/choose-us-564.webp",
  "/assets/contact-banner.jpg": "/assets/optimized/contact-banner-1536.webp",
  "/assets/home-banner.png": "/assets/optimized/home-banner-1911.webp",
  "/assets/service-background.png": "/assets/optimized/service-background-998.webp",
  "/assets/services-banner.jpg": "/assets/optimized/services-banner-1536.webp",
  "/assets/services/AI/AI.jpg": "/assets/optimized/services/AI/AI-1536.webp",
  "/assets/services/cloud-storage/cloud-storage.png":
    "/assets/optimized/services/cloud-storage/cloud-storage-1600.webp",
  "/assets/services/cloud-storage/devops.jpg":
    "/assets/optimized/services/cloud-storage/devops-1536.webp",
  "/assets/services/cloud-storage/digital-marketing.jpg":
    "/assets/optimized/services/cloud-storage/digital-marketing-1536.webp",
  "/assets/services/cloud-storage/mobile-application.jpg":
    "/assets/optimized/services/cloud-storage/mobile-application-1536.webp",
  "/assets/services/cloud-storage/staffing.jpg":
    "/assets/optimized/services/cloud-storage/staffing-1536.webp",
  "/assets/services/service-title-hero-bg.png":
    "/assets/optimized/services/service-title-hero-bg-1024.webp",
};

export function getOptimizedImageSrc(src) {
  return optimizedImageMap[src] || src;
}
