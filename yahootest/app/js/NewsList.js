import React from 'react';
import NewsItem from './NewsItem.js';

export default class NewsList extends React.Component {
	render() {
		return (
			<div className="newsList">
				<div className="newsList-newsItem">
					{
						(this.props.items).map((item, index) => (<NewsItem key={item.id} item={item} rank={index + 1}/>))
					}
				</div>
			</div>
		)
	}
}


