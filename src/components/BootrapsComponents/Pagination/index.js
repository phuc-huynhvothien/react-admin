import React, { Component } from "react";
import classNames from "classnames";
import Icons from "../../service/icons";
import '../../BootrapsComponents/Pagination/styles.scss';
const defaultProps = {
    initialPage: 1,
    minimumPage: 1,
    numberOfItemDisplay: 3,
    // numberOfItemDisplayCenter: 2 // Number page display next to current page of array center
};
class Pagination extends Component {

    setPage = (page) => {
        console.log(page);
        this.props.onChangePage(page);
    }

    getArrayPageAll = () => {
        let arrayPage = [];
        for (let index = 1; index <= this.props.totalPage; index++) {
            //push to last index of array
            arrayPage.push(index);
        }
        return arrayPage;
    };
    getArrayPageFirst = () => {
        let arrayPage = [];
        arrayPage.push(1);
        arrayPage.push(2);
        return arrayPage;
    };

    getArrayPageLast = () => {
        let arrayPage = [];
        arrayPage.push(this.props.totalPage - 1);
        arrayPage.push(this.props.totalPage);
        return arrayPage;
    };

    getArrayPageBetween = currentPage => {
        let arrayPage = [];

        const leftLimit = 2;
        const rightLimit = this.props.totalPage - 2;

        if (currentPage > leftLimit && currentPage <= rightLimit) {
            arrayPage.push(currentPage);
        }
        if (currentPage == 1 || currentPage == this.props.totalPage) {
            return arrayPage;
        }

        for (
            let index = 1;
            index < this.props.numberOfItemDisplayCenter;
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

    renderPage = arrayPage => {
        return arrayPage.map((page, index) => (
            <li
                key={index}
                className={classNames("page-item page-number", {
                    "current-page": this.props.currentPage === page
                })}
            >
                <a
                    className="pagi-link a-item-number"
                    onClick={() => this.setPage(page)}
                >
                    {page}
                </a>
            </li>
        ));
    };

    checkRenderEllipse = () => {
        const { numberOfItemDisplay, totalPage, currentPage } = this.props;
        if (totalPage > numberOfItemDisplay * 2) {
            return (
                <>
                    {this.renderPage(this.getArrayPageFirst())}
                    {currentPage - (this.props.numberOfItemDisplayCenter + 2) >
                        0
                        ? "..."
                        : ""}

                    {this.renderPage(this.getArrayPageBetween(currentPage))}

                    {currentPage <=
                        totalPage - (this.props.numberOfItemDisplayCenter + 2)
                        ? "..."
                        : ""}
                    {this.renderPage(this.getArrayPageLast())}
                </>
            );
        } else {
            return (
                <>
                    {this.getArrayPageAll().map((page, index) => (
                        <li
                            key={index}
                            className={classNames("page-item page-number", {
                                "current-page": currentPage === page
                            })}
                        >
                            <a
                                className="pagi-link a-item-number"
                                onClick={() => this.setPage(page)}
                            >
                                {page}
                            </a>
                        </li>
                    ))}
                </>
            );
        }
    };

    render() {
        const {
            totalPage,
            currentPage,
            minimumPage,
            onChangePage
        } = this.props;
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
                    {this.checkRenderEllipse()}
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
}
export default Pagination;
