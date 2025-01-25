import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
    return (
        <>
            <input
                type="text"
                placeholder="ابحث هنا"
                className="w-full h-12 px-2 bg-zinc-100 rounded-lg"
            />
            <button type="submit" className=" absolute top-2 left-1 text-2xl">
                <CiSearch className="" />
            </button>
        </>
    )
}

export default SearchBar;
