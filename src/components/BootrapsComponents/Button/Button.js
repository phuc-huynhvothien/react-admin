import React from "react";
import Icons from "../../service/icons"
function Button(props) {
    const { children, icon, loading, type, customClass } = props;

    let btnClass = `btn btn-${type ? type : "defaut"}`;
    let classes = btnClass + " " + customClass;
    // const btnOutlineColor = `btn${outline ? "-outline" : ""}-${color}`;
    return (
        <button className={classes} disabled={loading}>
            {loading ? (
                 <span
                 class="spinner-border spinner-border-sm mg-r-10"
                 role="status"
                 aria-hidden="true"
             ></span>
            ) : ( 
                icon !== "" && <span className={`${children ? `mg-r-5` : ``}`}>{Icons(icon)}</span>)}
            
            {children}</button>
    );
}
Button.defaultProps = {
    icon: "",
    loading: false,
    id: "",
    type: "defaut",
    children: "",
    active: true
}
export default Button;