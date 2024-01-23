type ResponsiveImageprops = {
  desktopUrl: string
  mobileUrl: string
  alt: string
  title?: string
  className?: string
  mobileWidth: number
  mobileHeight: number 
  desktopWidth: number
  desktopHeight: number
}

const ResponsiveImage = ({ desktopUrl, mobileUrl, alt, title, className, desktopHeight, desktopWidth, mobileHeight, mobileWidth }: ResponsiveImageprops) => {
  return (
    <picture>
      <source media="(min-width: 640px)" srcSet={desktopUrl} title={title} width={desktopWidth} height={desktopHeight} />
      
      <source media="(max-width: 639px)" srcSet={mobileUrl} title={title} width={mobileWidth} height={mobileHeight} />
      
      <img className={className} src={desktopUrl} alt={alt} title={title} width={desktopWidth} height={desktopHeight} />
    </picture>
  );
};

export default ResponsiveImage;



