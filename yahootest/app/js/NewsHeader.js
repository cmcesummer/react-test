import React from 'react';
import Logo from '../image/y18.gif';
import '../css/newsHeader.css'

export default class NewsHeader extends React.Component {
	getLogo() {
		return (
			<div className="newsHeader-logo">
				<img src={Logo} alt="logo"/>
			</div>
		)
	}
	getTitle() {
		return (
			<div className="newsHeader-title">
				<a className="newsHeader-textLink" href="https://www.baidu.com" target="blank">Logo News</a>
			</div>
		)
	}
	getNav() {
		var navLinks = [
						 {
						   name: 'new',
						   url: 'newest'
						 },
						 {
						   name: 'comments',
						   url: 'newcomments'
						 },
						 {
						   name: 'show',
						   url: 'show'
						 },
						 {
						   name: 'ask',
						   url: 'ask'
						 },
						 {
						   name: 'jobs',
						   url: 'jobs'
						 },
						 {
						   name: 'submit',
						   url: 'submit'
						 }
						];
		return (
			<div>
				{
					navLinks.map(function(item,index) {
						return ( // a标签为什么需要key、、 这里不只是a需要key 应该是所有map循环出来的都需要key 就跟angular的index一样
							<a key={item.url} className="newsHeader-navLink newsHeader-textLink" target="blank" href={"https://news.ycombinator.com/" + item.url}>
								{item.name}
							</a>
						)
					})
				}
			</div>
		)				
	}
	getLogin() {
		return (
			<div className="newsHeader-login" >
				<a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">Login</a>
			</div>
		)
	}
	render() {
		return (
			<div className="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
				{this.getLogin()}
			</div>
		)
	}
}


