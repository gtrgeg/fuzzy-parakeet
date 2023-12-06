import welcome from "@/assets/images/welcome01.png";
import "./index.less";
// import { a } from "@designable/a.js";
// import App from "@/formily/design/playground/main";
// console.log(a);
import App from "@/components/designable/src/design/playground/main";


const Design = () => {
	return (
		<div className="home card">
			<App/>
		</div>
	);
};

export default Design;
