import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">Saira</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link
              to="intro"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-600"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-600"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-600"
            >
              Education
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
