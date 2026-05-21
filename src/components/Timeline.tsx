import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="May 2024 - Sep 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Machine Learning Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              VIVIX-AI · Part-time · Remote
            </h4>
            <p>
              Worked on machine learning solutions involving data processing,
              model development, experimentation, and AI-driven applications.
              Focused on building practical ML workflows and improving
              intelligent decision-making systems.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Robotics Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SPACE · Scientific Platforms And Cosmic Explorations · Remote
            </h4>
            <p>
              Worked with microprocessors to develop analog and digital code
              for various sensors. Developed line-following and obstacle
              avoiding robot systems using motor driver circuits and embedded
              programming concepts.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2023 - Jul 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Community Volunteer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              CRY - Child Rights and You · On-site
            </h4>
            <p>
              Worked on climate change and sustainable development awareness
              activities related to child rights. Contributed to book design,
              games, leadership activities, and community engagement.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;