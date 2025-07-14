export const Item = ({ text, id, DeleteItemFromList }) => {
    return (
        <tr>
            <th className=" bg-body-tertiary" style={{ textAlign: "center" }}> {text} </th>
            <th className=" bg-body-tertiary" style={{ display: "flex", justifyContent: "end" }}>
                <button className="rounded-circle" onClick={() => DeleteItemFromList(id)}>
                    <i className="fa-solid fa-circle-minus"> </i>
                </button></th>
        </tr>
    );
}