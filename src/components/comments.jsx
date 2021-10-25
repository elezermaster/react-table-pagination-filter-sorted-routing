import React,{useState,useEffect} from 'react';
import api from '../API'
import {getTime} from '../utils/times'
import {TiDeleteOutline} from "react-icons/ti";
import ToolTipPopOver from '../components/toolTipPopOver'

const Comments = ({comments,onDeletePost}) => {
        const [allUsers, setAllUsers] = useState(null)
        useEffect(() => {
            api.users.fetchAll()
                .then(data => {
                    setAllUsers(data)
                  console.log("data all users",data)
                })
            },[])
        const findUserById = (id) => {
            const userById = allUsers?.find(user => user._id === id);
            return userById?.name
        }
        // const handleDeletePost = (id) => {
        //     console.log('id post to  delete',id)
        // }
        // const [userAuthor, setUserAuthor] = useState()
        // const getUserAuthorById = (id) => {
        //     //useEffect(() => {
        //     let userAuthor = ""
        //         api.users.getById(id)
        //             .then(data => {
        //                 //return data.name
        //                 userAuthor = data.name
        //                 //setUserAuthor(data)
        //               //console.log("author",data)
        //             })
        //         //},[])
        //     return userAuthor
        // }
    // let udaptedComments = []
    // useEffect(() => {
    //     udaptedComments = comments.map(c => {
    //     return ({
    //             _id: c._id,
    //             userName: getUserAuthorById(c.userId),
    //             userId: c.userId,//TODO: cannot get user by name
    //             created_at: c.created_at,
    //             content: c.content,
    //         })
    //    })
    //    setUserAuthor(udaptedComments)
    // },[setUserAuthor])
    return (
        <>
           {comments &&
                    comments.map(c => (
                            <div key={c._id} className="bg-light card-body mb-3">
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-start">
                                            <img
                                                src="https://avatars.dicebear.com/api/avataaars/qweqasdas.svg"
                                                className="
                                                    rounded-circle
                                                    shadow-1-strong
                                                    me-3
                                                "
                                                alt="avatar"
                                                width="65"
                                                height="65"
                                            />
                                            <div
                                                className="
                                                    flex-grow-1 flex-shrink-1
                                                "
                                            >
                                                <div className="mb-4">
                                                    <div
                                                        className="
                                                            d-flex
                                                            justify-content-between
                                                            align-items-center
                                                        "
                                                    >
                                                        <p className="mb-1">
                                                            { findUserById(c.userId) || `user name: (${c.userId})  `}
                                                            <span className="small">
                                                                {"  " + getTime(c.created_at)}
                                                            </span>
                                                        </p>
                                                        <button
                                                            onClick={() => onDeletePost(c?._id)}
                                                            //onClick={handleDeletePost}
                                                            className="
                                                                btn btn-sm
                                                                text-primary
                                                                d-flex
                                                                align-items-center
                                                            "
                                                        >
                                                            <ToolTipPopOver
                                                                placement="top"
                                                                text="delete post"
                                                                content={<TiDeleteOutline/>}
                                                                linkTo="#"
                                                                tag="button"
                                                                contentStyle="bi bi-x-lg top-0 end-0 btn btn-light btn-lg"
                                                                //contentStyle="position-absolute top-0 end-0 btn btn-light btn-md"
                                                            />
                                                        </button>
                                                    </div>
                                                    <p className="small mb-0">
                                                        {c.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                ))
                            }
        </>
    );
};

export default Comments;
