import React from 'react';
import Url from 'url';
import '../css/newsItem.css'


export default class NewsItem extends React.Component {

	getDomain() {
		let url = this.props.item.url || 'https://news.ycombinator.com/item?id=' + this.props.item.id ;
		return (
				Url.parse(url).hostname
		)
	}
	getTitle() {
		let item = this.props.item;
		return (
			<div className="newsItem-title">
				<a className="newsItem-titleLink" href={item.url ? item.url : 'https://news.ycombinator.com/item?id=' + this.props.item.id }>{item.title}</a>
				{
					item.url && (
							<span className="newsItem-domain">
								<a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>{this.getDomain()}</a>
							</span>
						)
				}
			</div>
		)
	}
	getCommentLink() { //评论数
		let comment = "none comment";
		if(this.props.item.kids && this.props.item.kids.length) {
			comment = this.props.item.kids.length + (this.props.item.kids.length == 1 ? "comment" : "comments");
		}
		return (
			<a href={'https://news.ycombinator.com/item?id=' + this.props.item.id}>{comment}</a>
		)
	}
	getSubText() { // 分数, 作者, 时间, 评论数
		let time = new Date(this.props.item.time * 1000);
		let moment = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
		return (
			<div className="newsItem-subtext">
				{this.props.item.score} points by <a href={'https://news.ycombinator.com/user?id' + this.props.item.by}>{this.props.item.by} </a>   
				 time : {moment} | {this.getCommentLink()}
			</div>
		)
	}
	getIndex() { //序号
		return(
			<div className="newsItem-rank">
				{this.props.rank} 
			</div>
		)
	}
	render() {
		return (
			<div className="newsItem">
				{this.getIndex()}
				<div className="newsItem-itemText">
					{this.getTitle()}
					{this.getSubText()}
				</div>
			</div>
		)
	}
}


