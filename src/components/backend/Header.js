import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    localStorage.removeItem('AUTH_TOKEN');
    navigate('/admin/login');
  }

  return (
    <div class="row">
      <div class="header">
        <h2>Header</h2>
        <div><button onClick={() => handleBtnClick()}>Logout</button></div>
      </div>
    </div>
  );
}

export default Header;