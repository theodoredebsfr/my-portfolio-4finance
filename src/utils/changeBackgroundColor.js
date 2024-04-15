export default function setBodyColor({ color = "#ffffff" }) {
  return <style>{`body{background-color: ${color};}`}</style>;
}
