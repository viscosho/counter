import React from 'react';
import useDeviceDetect from '../utils/useDeviceDetect';
import { OverlayTrigger, Popover, Row, Col, Button, Image } from 'react-bootstrap';
import { BoxArrowInUp } from 'react-bootstrap-icons';
import paper from '../assets/img/paper_note.svg';

export const CopyPopover = (props) => {
	//console.log(props);
	const { isMobile } = useDeviceDetect();

	return (
		<OverlayTrigger
			rootClose
			trigger="click"
			key="top"
			placement="top"
			transition={false}
			overlay={
				<Popover id={`popover-positioned-top`} className="share-popover">
					<Popover.Content>
						{!isMobile && (
							<Row>
								<Col>
									<p>
										<strong>Share 1 counter</strong>
									</p>
									<Button aria-label="Share Counter" variant="light" onClick={() => props.handleSelected()}>
										{props.text}
									</Button>
								</Col>
								<Col>
									<Image src={paper} alt="Share" />
								</Col>
							</Row>
						)}
						{isMobile && <p>Can't share this on a phone</p>}
					</Popover.Content>
				</Popover>
			}
		>
			{({ ...triggerHandler }) => (
				<Button aria-label="Copy Counter to clipboard" className="icon-btn share-btn d-flex pl-3 pr-3" variant="light" {...triggerHandler}>
					<BoxArrowInUp />
				</Button>
			)}
		</OverlayTrigger>
	);
};
