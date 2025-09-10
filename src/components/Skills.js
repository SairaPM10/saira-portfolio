function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {['SQL', 'Excel', 'PowerPoint', 'Python', 'ALTO', 'Communication'].map(
          (skill) => (
            <span
              key={skill}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </section>
  );
}

export default Skills;
