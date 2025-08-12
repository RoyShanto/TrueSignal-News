import swimming from "../../assets/swimming.png"
import cls from "../../assets/class.png"
import playground from "../../assets/playground.png"
const QZone = () => {
    return (
        <div className="bg-base-300 p-5 rounded-sm">
            <h3 className='font-semibold text-2xl'>Q-Zone</h3>
            <div className="">
                <img className="mx-auto w-full py-3" src={swimming} alt="swimming" />
                <img className="mx-auto w-full py-3" src={cls} alt="class" />
                <img className="mx-auto w-full py-3" src={playground} alt="playground" />
            </div>
        </div>
    );
};

export default QZone;