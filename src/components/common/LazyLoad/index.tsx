import { memo, Suspense } from "react";
interface ILazyLoad {
	children: JSX.Element,
}


const LazyLoad = memo(({ children }: ILazyLoad) => <Suspense fallback={<h1>Loading ...</h1>}>{children}</Suspense>);

export default LazyLoad;