import React from "react";
import ReactPaginate from "react-paginate";
import { useCharacterContext } from "../../context/character";
import './styles.css'

const Pagination = ({ info }) => {

  const { pageNumber, setPageNumber } = useCharacterContext()
    let pageChange = (data) => {
        setPageNumber(data.selected + 1);
    }

    return (
        <ReactPaginate
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            pageCount={info?.pages}
            onPageChange={pageChange}
            className="pagination-content"
            marginPagesDisplayed="1"
        //.... other props here
        />
    )
}
export default Pagination