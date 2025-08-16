import demoUser from "../../assets/demo-user.png";

const About = () => {
    const team = [
        { name: "Shanto Roy", role: "Founder & Editor-in-Chief", img: demoUser },
        { name: "Bolod Mia", role: "Senior Journalist", img: demoUser },
        { name: "Abul Mia", role: "Political Analyst", img: demoUser },
    ];

    return (
        <div className="font-sans">
            {/* Hero Banner */}
            <div className="relative bg-gray-900 text-white">
                <div className="w-full h-32 object-cover opacity-60">
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">About TrueSignal News</h1>
                    <p className="mt-3 max-w-2xl text-lg">
                        Delivering truth, one headline at a time.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <section className="max-w-5xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                    At <span className="font-semibold">TrueSignal News</span>, we believe in transparent, accurate, and
                    unbiased reporting. In an age of rapid misinformation, our mission is to bring clarity,
                    credibility, and confidence to the news you consume.
                </p>

                <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="font-semibold text-xl mb-2">Accuracy</h3>
                        <p className="text-gray-600 text-sm">
                            Every story is fact-checked and verified before it reaches you.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="font-semibold text-xl mb-2">Independence</h3>
                        <p className="text-gray-600 text-sm">
                            Free from political or corporate influence in every report.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h3 className="font-semibold text-xl mb-2">Transparency</h3>
                        <p className="text-gray-600 text-sm">
                            Open about our sources, methods, and any potential conflicts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white p-6 shadow rounded-lg text-center hover:shadow-lg transition-shadow">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-4xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
                <p className="text-gray-700 text-center mb-8">
                    Got a story tip or feedback? We’d love to hear from you.
                </p>
                <div className="bg-white shadow rounded-lg p-6 text-center">
                    <p className="mb-2">📧 Email: contact@TrueSignalnews.com</p>
                    <p>📍 Address: 123 News Street, Dhaka, Bangladesh</p>
                </div>
            </section>
        </div>
    );
};

export default About;
