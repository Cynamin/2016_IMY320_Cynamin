import React, { PropTypes } from 'react';
import styles from './link.css';

class link extends React.Component{
	constructor(props){
		super(props);
		this.click = this.click.bind(this);
	}
	click(evt){
		evt.preventDefault();
		const { name, options, params, navigateTo } = this.props;
		navigateTo(name, params, options);
	}
	render(){
		const { router, route, name, params, linkName, type } = this.props;
		const href = router.buildUrl(name, params);
		const className = route === name ? styles.navItemActive : styles.navItem;

		return(
			<li className={ className }>
				<a href={ href } onClick={ this.click }>{ linkName }</a>
			</li>
		)
	}
}

export default link;