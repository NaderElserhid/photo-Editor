import Gallery from "../../components/gallery/gallery.jsx";
import { useSearchParams } from "react-router";


const SearchPage = () => {
  let [searchParam] = useSearchParams()
  const search = searchParam("search")
  return (<Gallery search={search} />);
};

export default SearchPage;
