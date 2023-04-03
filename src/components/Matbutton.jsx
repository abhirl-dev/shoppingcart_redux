import React from "react";

function MatButton(props) {
    return (
        props.selected ?
            <button
                className="rounded-3xl bg-[#b84725] px-3 py-1 duration-300 text-sm text-white capitalize"
                onClick={props.onClick}
            >
                {props.name}
            </button>
            :
            <button
                className="rounded-3xl bg-[#f5a891] px-3 py-1 duration-300 hover:bg-[#E88D72] text-sm text-white capitalize"
                onClick={props.onClick}
            >
                {props.name}
            </button>
    );
}

export { MatButton };