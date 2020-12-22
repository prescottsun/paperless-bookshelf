import React, { createContext, useState } from "react";

import convert from "xml-js";

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
	const [searchResults, setSearchResults] = useState([]);
	const apiKey = process.env.REACT_APP_API_KEY;

	const xmlConversion = (data) => {
		return convert.xml2js(data, {
			compact: true,
			spaces: 4,
			// alwaysArray: true,
			ignoreDeclaration: true,
			ignoreInstruction: true,
			ignoreAttributes: true,
			ignoreComment: true,
			// ignoreCdata: true,
			ignoreDoctype: true,
			textKey: "data",
			cdataKey: "data",
		});
	};

	return (
		<ApiContext.Provider
			value={{
				apiKey,
				xmlConversion,
				searchResults,
				setSearchResults,
			}}
		>
			{props.children}
		</ApiContext.Provider>
	);
};

export default ApiContextProvider;
