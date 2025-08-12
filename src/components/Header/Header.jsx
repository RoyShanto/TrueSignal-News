import logo from "../../assets/logo.png";

const Header = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",    // Sunday
        year: "numeric",    // 2025
        month: "long",      // November
        day: "numeric"      // 27
    });

    return (
        <div className="text-center">
            <img className="w-1/3 mx-auto" src={logo} alt="logo" />
            <p className="text-gray-500 text-2xl">Journalism Without Fear or Favour</p>
            <p className="text-2xl font-semibold">{formattedDate}</p>
        </div>
    );
};

export default Header;
