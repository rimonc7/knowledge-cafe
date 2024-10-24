
const Bookmark = ({ bookmarks }) => {
    return (
        <div className=" bg-gray-200 pb-4 rounded-xl ">
            <div className="mt-4">
                <h2 className="font-bold p-4 rounded-lg">Bookmarked Blog :</h2>
            </div>
            <div>
                {
                    bookmarks.map(bookmark => <h1 className="my-3 bg-white mx-3 p-3 mb-4 rounded-xl">{bookmark.title}</h1>)
                }
            </div>

        </div>
    );
};

export default Bookmark;