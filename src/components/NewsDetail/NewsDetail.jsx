import { Link, useLoaderData } from 'react-router';

const NewsDetail = () => {
    const news = useLoaderData();
    const newsDetails = news.data[0]
    console.log('newsDetails', newsDetails)
    const { image_url, title, author, details, category_id } = newsDetails;
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-lg font-semibold mb-4">TrueSignal News</h2>

            <div className="bg-white rounded-lg shadow-md p-4">
                {/* News Image */}
                <img
                    src={image_url}
                    alt={news.title}
                    className="rounded-lg w-full mb-4"
                />

                {/* Title */}
                <h1 className="text-2xl font-bold mb-2">{title}</h1>

                {/* Meta Info */}
                <p className="text-gray-500 text-sm mb-4 inline">
                    {author.published_date} | Tag Cloud: {news.tags?.join(", ")}
                </p>

                {/* Content */}
                <p className="text-gray-500 leading-relaxed mb-6 inline">
                    {details}
                </p>

                <br /><br />

                {/* Back Button */}
                <Link
                    to={`/category/${category_id}`}
                    className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded"
                >
                    ← All news in this category
                </Link>
            </div>
        </div>
    );
};

export default NewsDetail;