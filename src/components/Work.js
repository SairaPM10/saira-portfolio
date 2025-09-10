function Work() {
  return (
    <section id="work" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>

      {/* DXC */}
      <div className="mt-8 bg-purple-100 shadow-md p-6 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-purple-800">DXC Technology</h3>
        <p className="text-gray-700 mt-2">Service Delivery Analyst</p>
        <ul className="list-disc list-inside text-left mt-4 text-gray-600">
          <li>Worked on service delivery for global clients</li>
          <li>Resolved issues and collaborated across teams</li>
        </ul>
      </div>

      {/* Amundi */}
      <div className="mt-8 bg-blue-100 shadow-md p-6 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-blue-800">
          Amundi Investment Solutions
        </h3>
        <p className="text-gray-700 mt-2">Business Analyst</p>
        <ul className="list-disc list-inside text-left mt-4 text-gray-600">
          <li>Tracked funds and resolved data discrepancies</li>
          <li>Worked with SQL and ALTO platform</li>
        </ul>
      </div>
    </section>
  );
}

export default Work;
