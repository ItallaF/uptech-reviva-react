import Total from '../src/components/bag/total/total';
import { MyBag2 } from '../src/components/bag/styledProductCart';
import ProductBag from '../src/components/bag/product_cart';
import { NextPageWithLayout } from './_app';
import Layout from '../src/components/layout';
import { ReactElement } from 'react';
import { MyBag } from '../src/components/bag/styledMyBag';


const PageCart: NextPageWithLayout = () => {
	return (
		<>
			<section>
				<ProductBag />
				<MyBag2>
					<Total />
				</MyBag2>
			</section>
		</>
	);
}

PageCart.getLayout = function getLayout(PageCart: ReactElement) {
	return (
		<Layout>
			{PageCart}
		</Layout>
	)
}

export default PageCart;
