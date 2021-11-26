import React from "react";
import Select from "react-select";

const options = [
    {value: "created_at", label: "When Created"},
    {value: "comment_count", label: "Number of Comments"},
    {value: "votes", label: "By Community Votes"},
    {value: "author", label: "By User"},
    {value: "title", label: "Name of Article"}
]

const SelectSortBy = ({sortBy, setSortBy}) => {
    const handleChange = (e) => {
        setSortBy(e.value);
    }

    return (
        <>
        <Select onChange={(handleChange)} options={options}></Select>
        </>
    )
}

export default SelectSortBy;