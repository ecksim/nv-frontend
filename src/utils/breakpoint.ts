export default function breakpoint() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 576) return "isMobile";
  if (576 < windowWidth && windowWidth <= 768) return "isTablet";
  if (768 < windowWidth) return "isDesktop";
}
