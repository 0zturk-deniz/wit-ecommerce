import { useLocation, Link } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-xs text-[#737373] py-4">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="hover:text-blue-500 font-medium">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center space-x-2">
              <span className="mx-1">{">"}</span>
              {isLast ? (
                <span className="font-semibold capitalize text-black">
                  {name}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-blue-500 capitalize">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
