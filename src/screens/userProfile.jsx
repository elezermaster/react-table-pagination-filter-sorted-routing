import React,{useState,useEffect} from 'react';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import Qualitie from "../components/qualitie";
import api from '../API'

const UserProfile = ({id, users}) => {
    const [user, setUser] = useState()
    useEffect(() => {
      api.users.getById(id)
          .then(data => {
            setUser(data)
            console.log("dataUsrProfile",data)
          })
      },[])
    return (user
        ? <div className="d-flex flex-column flex-shrink-3 p-3">
                <h1>{user.name}</h1>
                <h2>{user.profession.name}</h2>
                <h3><Qualitie qualities={Object.assign({}, user.qualities)} /></h3>
                <h3>meetings: {user.completedMeetings}</h3>
                <h3>rate: {user.rate}</h3>
                <div className="flex-shrink-2">
                    <Link
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: 20,
                            borderRadius: 8,
                            fontStyle: 'bold',
                            alignItems: 'center',
                            }}
                        to="/users">
                        <div className="flex-shrink-2">
                        <Button
                            size="lg"
                            className="mt-2"
                            variant="secondary"
                        >all users</Button>
                        </div>
                    </Link>
                </div>
            </div>
        : <h2>loading...</h2>
    );
};

export default UserProfile;
