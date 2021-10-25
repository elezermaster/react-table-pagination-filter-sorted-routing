import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const User = ({user, index, onDelete, onToggleBookmark}) => {
  //console.log("user.qualities",user.qualities)
  return (
    <tr key={user._id}>
      <td>{index}</td>
      <td>
        <Link to={`users/${user?._id}`}>
          {user?.name}
        </Link>
      </td>
      {/*<td>{listQualities(user.qualities)}</td> */}
      <td>
        <Qualitie qualities={Object.assign({}, user?.qualities)} />
      </td>
      <td>{user?.profession?.name}</td>
      <td>{user?.completedMeetings}</td>
      <td>{user?.rate}</td>
      <td>
        <Button variant="light" onClick={() => onToggleBookmark(user?._id)}>
          {/* {user.favorites?<FaBookmark/>:<FaRegBookmark/>} */}
          <Bookmark status={user?.bookmark} />
        </Button>
      </td>
      <td>
        {
          <Button variant="warning" onClick={() => onDelete(user?._id)}>
            Delete
          </Button>
        }
      </td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
}
export default User;
