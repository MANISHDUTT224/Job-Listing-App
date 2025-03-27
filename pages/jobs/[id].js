import { useRouter } from "next/router";
import { jobs } from "../../data";

export default function JobDetail({ job }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
          {/* Title and Basic Info */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
          <p className="text-gray-600 mb-4">{job.company} - {job.location}</p>
          <div className="mb-4 flex items-center text-sm text-gray-500">
            <span>{job.type}</span>
            <span className="mx-2">•</span>
            <span>{job.salary}</span>
            <span className="mx-2">•</span>
            <span>{job.postedDate}</span>
          </div>

          {/* Description */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
          <p className="text-gray-700 mb-6">{job.description}</p>

          {/* Responsibilities */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>

          {/* Requirements */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>

          {/* Benefits */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Benefits</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          {/* How to Apply */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">How to Apply</h3>
          <a href="#" className="text-gray-700">{job.howToApply}</a>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = jobs.map((job) => ({
    params: { id: job.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const job = jobs.find((j) => j.id === parseInt(params.id));
  return { props: { job } };
}