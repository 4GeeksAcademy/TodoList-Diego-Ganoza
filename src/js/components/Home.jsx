import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Item } from "./ListContent";
//create your first component
const Home = () => {

	const [inputText, setInputText] = useState("")
	const [itemList, setItemList] = useState([])


	const addingItemToList = (event) => {
		setInputText(event.target.value)
	}

	const onKeyUp = (event) => {
		if (event.key === "Enter" && inputText != "") {
			setItemList(prev => [...prev, inputText])
			setInputText("");
		}
	}

	const DeleteItemFromList = (id) => {
		setItemList(prev => prev.filter((item, index) => index != id))
	}

	return (
		<div className="mx-auto " style={{ width: "50%" }}>
			<table className="my-4 border border-dark bg-secondary-subtle text-secondary-emphasis" style={{ width: "100%", border: "1px solid" }}>
				<thead>
					<tr className="border-bottom">
						<th style={{ textAlign: "center" }}>
							<input className="my-4" type="text" value={inputText} onChange={addingItemToList} onKeyUp={onKeyUp} style={{ width: "90%" }} />
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<table className="my-2 table" >
								<tbody>
									{itemList.map((item, index) => (<Item
										key={index}
										text={item}
										id={index}
										DeleteItemFromList={DeleteItemFromList}>
									</Item>))}
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</div >
	);
};

export default Home;