import React from "react";
import ReactPaginate from "react-paginate";
import './Pagination.css'

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
    let pageChange = (data) => {
        updatePageNumber(data.selected + 1);
    }

    return (
        <ReactPaginate
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            pageCount={info?.pages}
            onPageChange={pageChange}
            className="Pagination"
        //.... other props here
      />
    )
}
export default Pagination