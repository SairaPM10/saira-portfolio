import profilePic from '../assets/pro-pic.png';

function Intro() {
  return (
    <section
      id="intro"
      className="pt-24 flex flex-col items-center text-center px-6 min-h-screen"
    >
      <img
        src={profilePic}
        alt="Saira"
        className="rounded-full w-44 h-44 shadow-lg object-cover scale-110 border-4 border-white"
      />
      <h2 className="text-4xl font-bold text-gray-800 mt-6">
        Hi, I’m Saira 👋
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        A Business Analyst passionate about simplifying financial data, solving
        problems, and building user-friendly solutions.
      </p>
    </section>
  );
}

export default Intro;
