import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Router, navigate } from "@reach/router"
import { ExportButton, Tabs, AddNew} from '../../components';
import ProductsServices from './ProductsServices';
import Sales from './Sales';
import Expenses from './Expenses';
import './styles.scss';

const Commerce: FC<RouteComponentProps> = ({ location, navigate = (nav: any) => {} }) => {

  useEffect(() => {
		navigate('products-services');
	}, []);

  const commerceTabs = {
    'Products/Services': { route: 'products-services' },
    Sales: { route: 'sales' },
    Expenses: { route: 'expenses' }
  };

  return (
    <div className='_commerceContainer'>
      <div className='_commerceLabel'> Commerce </div>
      <div className="_commerceAdd" > <AddNew /> </div>
      <div className='_commerceOptions'>
        <Tabs path={location?.pathname.split('/')[2]} tabs={ commerceTabs } />
        <div className="_exportOption"> 
          <ExportButton />
        </div>
      </div>

      <div className='_colorBar'></div>
      <Router>
        <ProductsServices path='products-services/' />
        <Sales path='sales/' />
        <Expenses path='expenses/' />
      </Router>

    </div>
  )
}

export default Commerce;