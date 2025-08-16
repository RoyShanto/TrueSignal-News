import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    // console.log(news)
    const { _id, author, title, image_url, details, rating, total_view, } = news;


    const shortText = details?.length > 300
        ? news.details.slice(0, 300) + "..."
        : news?.details;


    return (
        <div className="card bg-base-100 shadow-md mb-7">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-base-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt="author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="px-4 pt-4 font-bold text-lg leading-snug"> {title} </h2>

            {/* Image */}
            <figure className="px-4 py-3"> <img src={image_url} alt="news" className="rounded-lg w-full" /> </figure>

            {/* Description */}
            <p className="px-4 text-sm text-gray-500">
                {shortText}
                <Link to={`news/${_id}`} className="text-orange-500 cursor-pointer"> Read More</Link>
            </p>
            <hr className="mx-4 mt-3 border-t-gray-200" />
            {/* Footer */}
            <div className="flex justify-between items-center px-4 py-4">
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-500 font-semibold ml-1">{rating.number}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
