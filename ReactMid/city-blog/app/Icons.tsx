interface DesktopIconProps {
  title: string;
  img_src: string;
};

function DesktopIcon({title, img_src}: DesktopIconProps) {
  return (
          <><div className="desktop-icon">
            <button >
              <img src={img_src} alt={title} /> 
              <span>{title}</span>
            </button>
          </div></>)
}

export default DesktopIcon