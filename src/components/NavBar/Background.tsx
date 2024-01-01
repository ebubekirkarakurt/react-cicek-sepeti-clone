import '../../styles/Navbar.style.css';

export default function Background() {
  return (
    <div className="bg">
      <p id="bg-title">Çiçek Bahçesi</p>
      <img id="bg-img" src={require('../../assets/blue-title-bg.png')} alt="" />
    </div>
  );
}
