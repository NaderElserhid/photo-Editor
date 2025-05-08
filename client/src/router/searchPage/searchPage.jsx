import Gallery from "../../components/gallery/gallery.jsx";
import { useSearchParams } from "react-router";

// Search component
// log
const SearchPage = () => {
  let [searchParam] = useSearchParams()
  const search = searchParam("search")
  return (<Gallery search={search} />);
};

export default SearchPage;
