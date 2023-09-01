import "./navbar.scss";

const Navbar = () => {
  return <nav className="navbar">
    <div className="logo">
      <img src="logo.svg" alt="" />
      <span>Admin Dashboard</span>
    </div>
    <div className="icons">
      <img src="./search.svg" alt="" className="icon" />
      <img src="./app.svg" alt="" className="icon" />
      <img src="./expand.svg" alt="" className="icon" />
      <div className="notification">
        <img src="./notifications.svg" alt="" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="https://images.pexels.com/photos/17815428/pexels-photo-17815428/free-photo-of-portrait-of-a-brown-border-collie-standing-in-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        <span>User</span>
      </div>
      <img src="./setting.svg" alt="" className="icon" />
    </div>
  </nav>;
};

export default Navbar;
