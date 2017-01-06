'use strict'

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import NewsList from './js/NewsList.js';
import NewsHeader from './js/NewsHeader.js';
import Loading from './js/loading.js';
import './css/app.css'

function getAjax(url) {
	return Promise.resolve($.ajax(url));
} 

render(<Loading />, $("#newsList")[0]);

getAjax('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories) {
  	return Promise.all(stories.slice(0, 15).map(itemId => getAjax('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function(items) {
  	render(<NewsList items={items} />, $('#newsList')[0]);
}).catch(function(err) {
 	 console.log('error occur', err);
});

render(<NewsHeader />, $("#nav")[0]);

$('[data-rel=popover]').popover({container:'body'});
<span class="help-button" data-html=true data-rel="popover" data-trigger="hover" data-placement="top" data-content="正数表示支出款项，负数表示退回款项。" >?</span>

