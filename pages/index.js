import { useState } from "react";
import Link from "next/link";
import { jobs } from "../data";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Search Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Listings */}
      <ul className="max-w-6xl mx-auto mt-8 space-y-6">
        {filteredJobs.map((job) => (
          <li key={job.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <Link href={`/jobs/${job.id}`}>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
                <p className="text-gray-600 mt-2">{job.company} - {job.location}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{job.type}</span>
                  <span className="mx-2">•</span>
                  <span>{job.salary}</span>
                  <span className="mx-2">•</span>
                  <span>{job.postedDate}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}