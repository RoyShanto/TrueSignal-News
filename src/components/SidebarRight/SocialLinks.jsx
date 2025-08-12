import facebook from "../../assets/fb.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
const SocialLinks = () => {
    return (
        <div>
            <h3 className='font-semibold text-2xl py-5'>Find Us On</h3>
            <div className="flex flex-col">
                <button className="btn bg-white flex justify-start py-7"> <img className="px-3 py-2 bg-base-300 rounded-full" src={facebook} alt="facebook icon" /> <span className="text-gray-500">Facebook</span> </button>
                <button className="btn bg-white flex justify-start py-7"> <img className="p-2 bg-base-300 rounded-full" src={twitter} alt="facebook icon" /> <span className="text-gray-500">Facebook</span> </button>
                <button className="btn bg-white flex justify-start py-7"> <img className="p-2 bg-base-300 rounded-full" src={instagram} alt="facebook icon" /> <span className="text-gray-500">Facebook</span> </button>
            </div>
        </div>
    );
};

export default SocialLinks;