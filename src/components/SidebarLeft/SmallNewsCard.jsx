import { CiCalendar } from "react-icons/ci";
import demo from "../../assets/demo-card-thumbnail.png"

const SmallNewsCard = () => {
    return (
        <div>
<div className="mt-5">
            <img className="rounded-sm" src={demo} alt="" />
            <h2 className="font-bold text-xl my-4 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ratione!</h2>
            <div className="flex font-semibold text-lg pt-2">
                <p className="mr-16 text-gray-600">Sports</p>
                <p className="text-gray-400 flex items-center justify-between">
                    <CiCalendar className="text-2xl mr-2" />
                    <span>Jan, 4, 2022</span>
                </p>
            </div>
        </div>

        <div className="mt-5">
            <img className="rounded-sm" src={demo} alt="" />
            <h2 className="font-bold text-xl my-4 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ratione!</h2>
            <div className="flex font-semibold text-lg pt-2">
                <p className="mr-16 text-gray-600">Sports</p>
                <p className="text-gray-400 flex items-center justify-between">
                    <CiCalendar className="text-2xl mr-2" />
                    <span>Jan, 4, 2022</span>
                </p>
            </div>
        </div>


        <div className="mt-5">
            <img className="rounded-sm" src={demo} alt="" />
            <h2 className="font-bold text-xl my-4 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ratione!</h2>
            <div className="flex font-semibold text-lg pt-2">
                <p className="mr-16 text-gray-600">Sports</p>
                <p className="text-gray-400 flex items-center justify-between">
                    <CiCalendar className="text-2xl mr-2" />
                    <span>Jan, 4, 2022</span>
                </p>
            </div>
        </div>






        </div>
    );
};

export default SmallNewsCard;