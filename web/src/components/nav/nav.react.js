import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux-router5'
import { toggleLogin, toggleSignin, toggleCreateEvent, toggleCreateNews } from '../../modules/ui'
import Login from './login/login.react'
import Signin from './signin/signin.react'
import CreateNews from './createNews/createNews.react'
import CreateEvent from './createEvent/createEvent.react'
import Event from './event/event.react'
import Link from './link/link.react'
import Button from '../shared/button/button.react'
import styles from './nav.css'

class nav extends React.Component{
	constructor(props, context){
		super(props)
		this.router = context.router
	}
	render(){
		const props = { route: this.props.route, navigateTo: this.props.navigateTo }
		const {
			loginOpen,
			signinOpen,
			createNewsOpen,
			createEventOpen,
			showCreateButtons,
			authenticationControls,
			toggleSignin,
			toggleLogin,
			toggleCreateNews,
			toggleCreateEvent,
			openEvent
		} = this.props
		return(
			<div className={ styles.navBar }>
				{ signinOpen ? <Signin/> : '' }
				{ loginOpen ? <Login/> : '' }
				{ createNewsOpen ?  <CreateNews/> : '' }
				{ createEventOpen ? <CreateEvent/> : '' }
				{ openEvent.open ? <Event/> : '' }
				<div className={ styles.logo }><a href='/home'>Threads</a></div>
				<ul className={ styles.nav }>
					<Link router={ this.router } { ...props } name='home' linkName='Home'/>
					<Link router={ this.router } { ...props } name='calendar' linkName='Calender'/>
					<Link router={ this.router }{ ...props } name='news' linkName='News'/>
					<Link router={ this.router  } { ...props } name='about' linkName='About Us'/>
					<Link router={ this.router } { ...props } name='contact' linkName='Contact Us'/>
				</ul>
				{
					authenticationControls ?
					<ul className={ styles.secondaryNav }>
						<a onClick={ toggleSignin }>Register</a>
						<a onClick={ toggleLogin }>Log in</a>
					</ul> : ''
				}
				{
					showCreateButtons ?
					<div className={ styles.tertiaryNav }>
						<Button type='addEvent' onClick={ toggleCreateEvent }/>
						<Button type='addNews' onClick={ toggleCreateNews }/>
					</div> : ''
				}
			</div>
		)
	}
}

nav.contextTypes = {
	router: PropTypes.object.isRequired
}

export default connect(
	state => ({
		route: state.router.route.name,
		loginOpen: state.ui.loginOpen,
		signinOpen: state.ui.signinOpen,
		showCreateButtons: state.ui.showCreateButtons,
		authenticationControls: state.ui.authenticationControls,
		createNewsOpen: state.ui.createNewsOpen,
		createEventOpen: state.ui.createEventOpen,
		openEvent: state.ui.openEvent
	}),
	{ navigateTo: actions.navigateTo, toggleLogin, toggleSignin,  toggleCreateNews, toggleCreateEvent }
)(nav)