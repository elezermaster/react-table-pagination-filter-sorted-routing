import React,{useState,useRef} from 'react';
import {Button,OverlayTrigger,Overlay,Tooltip,Popover} from "react-bootstrap";
import {Link} from 'react-router-dom'

const ToolTipPopOver = ({
        placement,
        text,
        content,
        linkTo,
        contentStyle,
        tag: Tag,
      }) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleHover = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
    return (
    <div ref={ref}>
            <Link to={linkTo} style={{textDecoration: 'none'}}>
                <Tag
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className={contentStyle}>
                    {content}
                </Tag>
            </Link>
    <Overlay
      show={show}
      target={target}
      placement={placement}
      container={ref}
      containerPadding={20}
      >
      <Popover id="popover-contained">
        {/* <Popover.Header as="h3">Popover bottom</Popover.Header> */}
        <Popover.Body>
          <strong>{text}</strong>
        </Popover.Body>
      </Popover>
    </Overlay>
  </div>

    );
};

export default ToolTipPopOver;
