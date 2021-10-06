import React, {useEffect, useRef, useState} from 'react';
import useInterval from '@use-it/interval';
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import './pageNotFound.scss'
import {Link, NavLink} from 'react-router-dom'

// Constants
//const VALID_CHARS =`абвгдеёжзийклмнопрстуфхцчшщъыьэюя`
const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~קראטוןםפ][שדגכעיחלךףזסבהנמצתץ./]абвгдеёжзийклмнопрстуфхцчшщъыьэюя`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 8000;

const getRandInRange = (min, max) =>
	Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () =>
	VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () =>
	new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
		.fill()
		.map(_ => getRandChar());

const getMutatedStream = stream => {
	const newStream = [];
	for (let i = 1; i < stream.length; i++) {
		if (Math.random() < STREAM_MUTATION_ODDS) {
			newStream.push(getRandChar());
		} else {
			newStream.push(stream[i]);
		}
	}
	newStream.push(getRandChar());
	return newStream;
};

const RainStream = props => {
	const [stream, setStream] = useState(getRandStream());
	const [topPadding, setTopPadding] = useState(stream.length * -50);
	const [intervalDelay, setIntervalDelay] = useState(null);

	// Initialize intervalDelay
	useEffect(() => {
		setTimeout(() => {
			setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
		}, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
	}, []);

	useInterval(() => {
		if (!props.height) return;

		if (!intervalDelay) return;

		// If stream is off the screen, reset it after timeout
		if (topPadding > props.height) {
			setStream([]);
			const newStream = getRandStream();
			setStream(newStream);
			setTopPadding(newStream.length * -44);
			setIntervalDelay(null);
			setTimeout(
				() =>
					setIntervalDelay(
						getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY),
					),
				getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS),
			);
		} else {
			setTopPadding(topPadding + 44);
		}
		// setStream(stream => [...stream.slice(1, stream.length), getRandChar()]);
		setStream(getMutatedStream);
	}, intervalDelay);

	return (
		<div
			style={{
				zIndex: -1,
				fontFamily: 'matrixFont',
				color: '#20c20e',
				writingMode: 'vertical-rl',
				textOrientation: 'upright',
				userSelect: 'none',
				whiteSpace: 'nowrap',
				marginTop: topPadding,
				marginLeft: -15,
				marginRight: -15,
				textShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)',
				fontSize: 50,
			}}>
			{stream.map((char, index) => (
				<a
                    key={index}
					style={{
						marginTop: -12,
						// Reduce opacity for last chars
						opacity: index < 6 ? 0.1 + index * 0.15 : 1,
						color: index === stream.length - 1 ? '#fff' : undefined,
						textShadow:
							index === stream.length - 1
								? '0px 0px 20px rgba(255, 255, 255, 1)'
								: undefined,
					}}>
					{char}
				</a>
			))}
		</div>
	);
};

const MatrixRain = props => {
	const containerRef = useRef(null);
	const [containerSize, setContainerSize] = useState(null); // ?{width, height}

	useEffect(() => {
		const boundingClientRect = containerRef.current.getBoundingClientRect();
		setContainerSize({
			width: boundingClientRect.width,
			height: boundingClientRect.height,
		});
	}, []);

	const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

	const StyledNavLink = styled(NavLink)`
	&:hover {
		//box-shadow: 0px 10px 10px -10px rgba(54, 24, 79, 0.5);
		//transform: translateY(5px);
		background-color: '#20c20e';
		color: white;
	}
	`;
	const StyledButtonHome = styled(Button)`
	height: 70px;
	padding: 0 30px;
	border-radius: 50px;
	cursor: pointer;
	box-shadow: 0px 15px 20px rgba(54, 24, 79, 0.5);
	z-index: 100;
	color: #20c20e;
	background-color: white;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 22px;
	transition: all 0.3s ease;

	&:hover .my__unique__button {
		box-shadow: 0px 10px 10px -10px rgba(54, 24, 79, 0.5);
		transform: translateY(5px);
		background: #20c20e;
		color: white;
	  }
	:hover {
		box-shadow: 0px 10px 10px -10px rgba(54, 24, 79, 0.5);
		transform: translateY(5px);
		background: '#20c20e';
		color: white;
	}
	&:focus {
	  color: palevioletred;
	}
	&:active {
	  color: red;
	}
  `;

	return (
		<>
		<div
			style={{
				background: 'black',
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				overflow: 'ignore',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
			}}
			ref={containerRef}>
			{new Array(streamCount).fill().map((_,index) => (
				<RainStream key={index} height={containerSize?.height} />
			))}

		</div>
		<div className="not-found">
			{/* <form>
				<input type="text" name="search" placeholder="Search..."/><button type="submit" className="submit-btn">Search</button>
			</form> */}
			<StyledButtonHome className="my__unique__button" variant="primary">
			<StyledNavLink exact to="/" style={{color: '#20c20e', textDecoration: 'none'}}>go to home</StyledNavLink>
			</StyledButtonHome>
			<form className="four-oh-four-form">
				<input type="text" className="404-input"/>
			</form>

			<div className="terminal">
				<p className="prompt">The page you requested cannot be found. Try click GO HOME: </p>
				<p className="prompt output new-output"></p>
			</div>
		</div>
		</>
	);
};

export default MatrixRain;
