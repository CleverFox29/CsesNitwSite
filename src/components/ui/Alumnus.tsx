interface AlumnusProps {
    alumnus: Alumnus
}
export default function Alumnus({ alumnus }: AlumnusProps) {
    return (
        <div
            className="border-2 border-green-500 bg-green-500/10 rounded-bl-xl rounded-tr-xl  "
        >

            <div className="flex h-12 w-72 items-center justify-center  border-green-500 bg-green-500/10 px-5 rounded-br-lg">
                <h1 className=" text-center text-2xl font-bold text-white flex items-center justify-center">
                    {alumnus.name}
                </h1>
            </div>

            <div className="p-10">

                <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="mx-auto h-32 w-32 rounded-full object-cover"
                />

                

                <div className="mt-6 space-y-5">

                    {/* Education */}
                    <div>
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
                            Education
                        </h2>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                                <p className="text-xs text-gray-500">Graduation Year</p>
                                <p className="mt-1 font-semibold text-gray-300">
                                    {alumnus.graduationYear}
                                </p>
                            </div>

                            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                                <p className="text-xs text-gray-500">Degree</p>
                                <p className="mt-1 font-semibold text-gray-300">
                                    {alumnus.degree}
                                </p>
                            </div>

                            <div className="col-span-2 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                                <p className="text-xs text-gray-500">Branch</p>
                                <p className="mt-1 font-semibold text-gray-300">
                                    {alumnus.branch}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Career */}
                    <div>
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
                            Career
                        </h2>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                                <p className="text-xs text-gray-500">Current Role</p>
                                <p className="mt-1 font-semibold text-gray-300">
                                    {alumnus.currentRole}
                                </p>
                            </div>

                            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                                <p className="text-xs text-gray-500">Company</p>
                                <p className="mt-1 font-semibold text-gray-300">
                                    {alumnus.company}
                                </p>
                            </div>

                            <div className="col-span-2 rounded-lg border border-green-500/20 bg-green-500/5 p-3">
                                <p className="text-xs text-gray-500">Location</p>
                                <p className="mt-1 font-semibold text-gray-300">
                                    {alumnus.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
                            About
                        </h2>

                        <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                            <p className="leading-relaxed text-gray-300">
                                {alumnus.bio}
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
                            Connect
                        </h2>

                        <div className="flex gap-3">
                            <a
                                href={alumnus.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-green-500/30 bg-green-500/5 px-4 py-2 font-medium text-green-700 transition hover:bg-green-500/15"
                            >
                                LinkedIn
                            </a>

                            <a
                                href={alumnus.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-green-500/30 bg-green-500/5 px-4 py-2 font-medium text-green-700 transition hover:bg-green-500/15"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}