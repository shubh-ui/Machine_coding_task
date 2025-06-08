import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const BookMarkList = ({ bookmarkList, page , setPage, handleSaveBookMark}) => {
  const firstItemIndex = (page - 1) * 4;
  const lastItemIndex = firstItemIndex + 4;
  const pageCountArr = new Array(Math.floor(bookmarkList.length / 4)).fill(0);
  console.log({ bookmarkList });

  return (
    <>
      <div>
        {bookmarkList?.length > 0 ? (
          <>
            {bookmarkList
              .slice(firstItemIndex, lastItemIndex)
              .map((bookmark,index) => (
                <div
                  style={{
                    border: "1px solid #000",
                    padding: "20px 40px",
                    marginBottom: "14px",
                    position: "relative",
                  }}
                  key={index}
                >
                  <div
                    style={{ position: "absolute", top: "10px", right: "20px" }}
                  >
                    {bookmark?.saved ? (
                      <span style={{cursor:'pointer'}} onClick={() => handleSaveBookMark(bookmark)}>
                        <FaBookmark />
                      </span>
                    ) : (
                      <span style={{cursor:'pointer'}} onClick={() => handleSaveBookMark(bookmark)}>
                        <FaRegBookmark />
                      </span>
                    )}
                  </div>

                  <div>
                    <h3>{bookmark.name}</h3>
                    <h5>{bookmark.desc}</h5>
                  </div>
                </div>
              ))}
          </>
        ) : (
          <>We dont have items inside bookmark.</>
        )}
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
        {pageCountArr.map((_, i) => (
          <div key={i}>
            <span
              className={page == i + 1 ? "activePage" : ""}
              style={{
                border: "1px solidrgb(225, 225, 230)",
                padding: "4px 8px",
                margin: "0 4px",
                cursor: "pointer",
              }}
              onClick={() => setPage(i+1)}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookMarkList;
