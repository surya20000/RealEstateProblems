import { Link } from "react-router-dom";
import { MdOutlineOtherHouses } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <div className="flex items-center text-sm sm:text-xl flex-wrap">
            <MdOutlineOtherHouses size={25} />
          </div>
        </Link>
        <Link to="/addProblems">
          <div className="flex items-center text-sm sm:text-xl flex-wrap">
            {/* <FaHouseDamage size={25} /> */}
            <span>Add Problems</span>
          </div>
        </Link>
        <Link to="/aboutUs">
          <div className="flex items-center text-sm sm:text-xl flex-wrap">
            {/* <FaHouseDamage size={25} /> */}
            <span>About Us</span>
          </div>
        </Link>
        <Link to="/seeProblems">
          <div className="flex items-center text-sm sm:text-xl flex-wrap">
            {/* <FaHouseDamage size={25} /> */}
            <span>See Problems</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
