import PropTypes from "prop-types";

import { Button } from "Hr/components/Bootstraps";

import Icons from "../service/icons";
import classNames from "classnames";

function ButtonExpand(props) {
    const { handleOnClickBtnExpand, isExpand, className, mode } = props;
    const classRight = mode == "right" ? "btn-half-right" : "";

    return (
        <Button
            className={classNames("btn-half-pill", classRight, className)}
            type="primary"
            onClick={handleOnClickBtnExpand}
            icon={isExpand ? "chevrons_left" : "chevrons_right"}
        ></Button>
    );
}

ButtonExpand.defaultProps = {
    mode: "left", // left or right
    handleOnClickBtnExpand: () => {},
    isExpand: true,
    className: ""
};

ButtonExpand.propTypes = {
    className: PropTypes.string,
    mode: PropTypes.string,
    isExpand: PropTypes.bool,
    handleOnClickBtnExpand: PropTypes.func
};

export default ButtonExpand;
