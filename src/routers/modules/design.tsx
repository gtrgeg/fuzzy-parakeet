import React from "react";
// import lazyLoad from "@/routers/util/lazyLoad";
import { RouteObject } from "@/routers/interface";
import { LayoutIndex } from "@/routers/constant";
import Design from "@/views/design/index";


// 设计器模块
const designRouter: Array<RouteObject> = [
	{
		// path: "/design/index",
		element: <LayoutIndex/>,
		children: [
			{
				path: "/design/index",
				element: <Design />,
				meta: {
					title: "表单设计器",
					key: "design"
				},
			}
		]
		}
];

export default designRouter;
