import React from 'react'

import PhotoStory from './PhotoStory';
import VideoStory from './VideoStory';

const components: any = {
  photo: PhotoStory,
  video: VideoStory
};

export default function Story(props: any) {
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
