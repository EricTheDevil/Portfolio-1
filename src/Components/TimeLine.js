import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

export default function TimeLine() {
	return (
		<div className="TimeLine">
			<br></br>
			<br></br>
			<center>
				<h1>Education</h1>
			</center>
			<hr></hr>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="June 2016"
					contentStyle={{ background: '#111f28', color: 'aliceblue' }}>
					<h3 className="vertical-timeline-element-title">
						Highschool diploma in Computer Science
					</h3>
					<br></br>
					<h2 className="vertical-timeline-element-subtitle">
						KTA Dendermonde Dendermonde, Belgium
					</h2>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="June 2017 - present"
					contentStyle={{ background: '#111f28', color: '#3858cc' }}>
					<h3 className="vertical-timeline-element-title">
						Bachelor of Information Technology and Communication
					</h3>
					<br></br>
					<h2 className="vertical-timeline-element-subtitle">
						Turku University of Applied Sciences
					</h2>
					<h2 className="vertical-timeline-element-subtitle">Turku, Finland</h2>
				</VerticalTimelineElement>
			</VerticalTimeline>
			<br></br>
			<br></br>
			<center>
				<h1>Experience</h1>
			</center>
			<hr></hr>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Jan 2014 - Jun 2017"
					contentStyle={{ background: '#111f28' }}>
					<h3 className="vertical-timeline-element-title">Part-time Waiter</h3>
					<br></br>
					<h2 className="vertical-timeline-element-subtitle">
						Restaurant Hoi Sing
					</h2>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="January 2019 - April 2019"
					contentStyle={{ background: '#111f28' }}>
					<h3 className="vertical-timeline-element-title">
						DevOps, Front-end intern
					</h3>
					<br></br>
					<h4 className="vertical-timeline-element-subtitle">Pilvia oy</h4>
					<h2 className="timeline-tech">
						Tech: Angular, Kubernetes, Firebase, Npm, GitHub
					</h2>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="January 2020 - April 2020"
					contentStyle={{ background: '#111f28' }}>
					<h3 className="vertical-timeline-element-title bounce-in">
						Junior Full-stack
					</h3>

					<br></br>
					<h4 className="vertical-timeline-element-subtitle">
						Turku University of Applied Sciences
					</h4>
					<h2 className="timeline-tech">
						Tech: MongoDB, full CLI ubuntu, drupal
					</h2>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="June 2020 - August 2020"
					contentStyle={{ background: '#111f28' }}>
					<h3 className="vertical-timeline-element-title">Game dev intern</h3>
					<br></br>
					<h4 className="vertical-timeline-element-subtitle">
						Turku University of Applied Sciences(Game Lab)
					</h4>
					<h2 className="timeline-tech">Tech: Unity, AR/XR, Bitbucket </h2>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="September 2020 - December 2020"
					contentStyle={{ background: '#111f28' }}>
					<h3 className="vertical-timeline-element-title">
						Hand tracking researcher intern
					</h3>
					<br></br>
					<h4 className="vertical-timeline-element-subtitle">
						Turku University of Applied Sciences
					</h4>
					<h2 className="timeline-tech">
						Tech: Unity, AR/VR, Hand tracking, Photon Bolt, Bitbucket
					</h2>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="August 2021 - September 2021"
					contentStyle={{ background: '#111f28' }}>
					<h3 className="vertical-timeline-element-title">
						Game Jam Participant
					</h3>
					<br></br>
					<h4 className="vertical-timeline-element-subtitle">
						Paper Board Studio
					</h4>
					<h2 className="timeline-tech">
						Tech: Unreal, AWS, Perforce, Actor Core.
					</h2>
				</VerticalTimelineElement>
			</VerticalTimeline>
			<br></br>
		</div>
	);
}
/*
 {events.map(event => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={event.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.event }}
            />
          </VerticalTimelineElement>
        ))}*/
