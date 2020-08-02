import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Router, navigate } from "@reach/router"
import { ExportButton, Tabs, AddNew} from '../../components';
import ProductsServices from './ProductsServices';
import { Pixel, Arrow } from '../../assets/img';
import Sales from './Sales';
import Expenses from './Expenses';
import './styles.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchActivities } from '../../store/actions';

const Commerce: FC<RouteComponentProps | any> = ({ location, navigate = (nav: any) => {}, product }) => {
  const { products } = product;

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
      <div className='_commerceLabel'> 
        <p>Commerce</p>
        <span> <Pixel width={'30'} height={'17'} color={'white'} /> </span> 
      </div>
      <div className="_commerceAdd" ><AddNew /></div>
      <div className='_commerceOptions'>
        <Tabs path={location?.pathname.split('/')[2]} tabs={ commerceTabs } />
        <div className="_exportOption"> 
          <button className="_filterButton">
            <div>This month</div>
            <Arrow />
          </button>
          <ExportButton data={product.products} name='products' flag='csv' />
        </div>
      </div>
      
      <Router>
        <ProductsServices products={products} path='products-services/' />
        <Sales path='sales/' />
        <Expenses path='expenses/' />
      </Router>

    </div>
  )
}

const mapStateToProps = ({ product }: any) => ({ product });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    searchActivities
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Commerce);
