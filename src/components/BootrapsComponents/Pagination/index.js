import React ,{useHi} from "react";
import classNames from "classnames";
import Icons from "../../service/icons";
import '../../BootrapsComponents/Pagination/styles.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useHistory,
    useParams, NavLink
} from "react-router-dom";
const defaultProps = {
    initialPage: 1,
    minimumPage: 1,
    numberOfItemDisplay: 3,
};
function Pagination(props) {
    const {
        totalPage,
        currentPage,
        minimumPage,
        onChangePage,
        numberOfItemDisplay,
        numberOfItemDisplayCenter
    } = props;

    let history = useHistory();
    let location = useLocation();
    const pathname = location.pathname;
    function setPage(page){
        props.onChangePage(page);
        history.push(`/about?page=${page}`);
    }

    function getArrayPageAll(){
        let arrayPage = [];
        for (let index = 1; index <= totalPage; index++) {
            arrayPage.push(index);
        }
        return arrayPage;
    };
    function getArrayPageFirst(){
        let arrayPage = [];
        arrayPage.push(1);
        arrayPage.push(2);
        return arrayPage;
    };

    function getArrayPageLast(){
        let arrayPage = [];
        arrayPage.push(totalPage - 1);
        arrayPage.push(totalPage);
        return arrayPage;
    };

    function getArrayPageBetween(currentPage){
        let arrayPage = [];

        const leftLimit = 2;
        const rightLimit = totalPage - 2;

        if (currentPage > leftLimit && currentPage <= rightLimit) {
            arrayPage.push(currentPage);
        }
        if (currentPage === 1 || currentPage === totalPage) {
            return arrayPage;
        }

        for (
            let index = 1;
            index < numberOfItemDisplayCenter;
            index++
        ) {
            let leftPage = currentPage - index;
            if (leftPage <= rightLimit && leftPage > leftLimit) {
                arrayPage.push(leftPage);
            }
            let rightPage = currentPage + index;
            if (rightPage <= rightLimit && rightPage > leftLimit) {
                arrayPage.push(rightPage);
            }
        }
        return arrayPage.sort(function (a, b) {
            return a - b;
        });
    };

    function renderPage(arrayPage){
        return arrayPage.map((page, index) => (
            <li
                key={index}
                className={classNames("page-item page-number", {
                    "current-page": currentPage === page
                })}
            >
                <a
                    className="pagi-link a-item-number"
                    onClick={()=>setPage(page)}
                >
                    {page}
                </a>
            </li>
        ));
    };

    function checkRenderEllipse(){
        // const { numberOfItemDisplay, totalPage, currentPage } = this.props;
        if (totalPage > numberOfItemDisplay * 2) {
            return (
                <>
                    {renderPage(getArrayPageFirst())}
                    {currentPage - (numberOfItemDisplayCenter + 2) >
                        0
                        ? "..."
                        : ""}

                    {renderPage(getArrayPageBetween(currentPage))}

                    {currentPage <=
                        totalPage - (numberOfItemDisplayCenter + 2)
                        ? "..."
                        : ""}
                    {renderPage(getArrayPageLast())}
                </>
            );
        } else {
            return (
                <>
                    {getArrayPageAll().map((page, index) => (
                        <li
                            key={index}
                            className={classNames("page-item page-number", {
                                "current-page": currentPage === page
                            })}
                        >
                            <a
                                className="pagi-link a-item-number"
                                onClick={setPage(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                </>
            );
        }
    };
    return (

        <div className="pagination-wrap">
            <ul className="crm-pagination crm-pagination-table">
                <li
                    className={classNames(
                        "page-item first page-item-icon",
                        {
                            disabled: currentPage === minimumPage
                        }
                    )}
                >
                    <a
                        onClick={() => {
                            if (currentPage !== minimumPage) {
                                this.setPage(minimumPage);
                            }
                        }}
                        className="pagi-link"
                    >
                        {/* {Icons("chevrons_right")} */} {'<<'}
                    </a>
                </li>
                <li
                    className={classNames(
                        "page-item prev page-item-icon",
                        {
                            disabled: currentPage === minimumPage
                        }
                    )}
                >
                    <a
                        onClick={() => {
                            if (currentPage !== minimumPage) {
                                this.setPage(currentPage - 1);
                            }
                        }}
                        // onClick={() => this.setPage(pager.currentPage - 1)}
                        className="pagi-link"
                    >
                        {/* {Icons("chevrons_right")} */} {'<'}
                    </a>
                </li>
                {checkRenderEllipse()}
                <li
                    className={classNames(
                        "page-item next page-item-icon",
                        {
                            disabled: currentPage === totalPage
                        }
                    )}
                >
                    <a
                        onClick={() => {
                            if (currentPage < totalPage) {
                                onChangePage(
                                    currentPage < totalPage
                                        ? currentPage + 1
                                        : currentPage
                                );
                            }
                        }}
                    // className="pagi-link"
                    >
                        {/* {Icons("chevrons_right")} */} {'>'}
                    </a>
                </li>
                <li
                    className={classNames(
                        "page-item last page-item-icon",
                        {
                            disabled: currentPage === totalPage
                        }
                    )}
                >
                    <a
                        onClick={() => {
                            if (currentPage !== totalPage) {
                                onChangePage(totalPage);
                            }
                        }}
                        className="pagi-link"
                    >
                        {/* {Icons("chevrons_right")} */} {'>>'}
                    </a>
                </li>
            </ul>
        </div>
    );

}
export default Pagination;
