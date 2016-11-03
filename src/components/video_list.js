import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map( (video, i) => {
		//add a key or else all children items will have to be re-rendered when one is changed
		return (
			<VideoListItem 
				video={video} 
				key={video.etag}
				onVideoSelect={props.onVideoSelect}/>
		)
	});

	return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		);
}; 

export default VideoList;