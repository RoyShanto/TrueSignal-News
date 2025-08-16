// src/pages/Career/Career.jsx
import { Link } from "react-router";

const Career = () => {
    const jobs = [
        {
            id: 1,
            title: "Senior News Reporter",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            description:
                "We are seeking a passionate journalist with a strong track record in investigative reporting. You’ll cover politics, business, and culture with depth and accuracy.",
        },
        {
            id: 2,
            title: "Social Media Manager",
            location: "Remote",
            type: "Part-time",
            description:
                "Manage our brand presence across Facebook, Instagram, and X (Twitter). You should have creative content skills and a data-driven mindset.",
        },
        {
            id: 3,
            title: "Video Journalist",
            location: "Chittagong, Bangladesh",
            type: "Contract",
            description:
                "Create engaging video news packages and interviews. Experience with Adobe Premiere Pro and field reporting required.",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-6">Join Our Team</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                At <span className="font-semibold">The TrueSignal News</span>, we believe in honest journalism that makes an impact. 
                We’re looking for dedicated individuals who share our values of truth, transparency, and community service.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-xl transition"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                            <p className="text-sm text-gray-500 mb-4">
                                {job.location} • {job.type}
                            </p>
                            <p className="text-gray-700 mb-6">{job.description}</p>
                        </div>
                        <Link
                            to={`/careers/apply/${job.id}`}
                            className="btn bg-pink-600 hover:bg-pink-700 text-white w-fit"
                        >
                            Apply Now
                        </Link>
                    </div>
                ))}
            </div>

            {/* Extra Call-to-action */}
            <div className="mt-16 text-center bg-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Didn’t find a role that fits?</h3>
                <p className="text-gray-600 mb-6">
                    We’re always interested in meeting talented people. Send us your CV and tell us how you can make a difference.
                </p>
                <Link to="/careers/general-application" className="btn btn-outline btn-pink">
                    Send Resume
                </Link>
            </div>
        </div>
    );
};

export default Career;
