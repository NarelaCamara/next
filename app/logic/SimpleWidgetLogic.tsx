import * as React from "react";
import { SimpleWidget } from "../components";

export interface ISimpleWidgetLogicProps {}

export const SimpleWidgetLogic = (props: ISimpleWidgetLogicProps) => {
	return (
		<div className="flex flex-wrap p-2">
			<SimpleWidget
				title={"Rtitiotrt"}
				subTitle={"qweqewq"}
				route={"counter"}
			/>
		</div>
	);
};
