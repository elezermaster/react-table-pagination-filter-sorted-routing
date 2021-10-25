import React,{useState,useEffect} from 'react';
import {Button,OverlayTrigger,Tooltip} from "react-bootstrap";
import {Link} from 'react-router-dom'
import Qualitie from "../components/qualitie";
import api from '../API'
import {FaUsers} from "react-icons/fa";
import {IoSettingsSharp} from "react-icons/io5";
import ToolTipPopOver from '../components/toolTipPopOver'
import Comments from '../components/comments';

const UserProfile = ({id, users}) => {
///// this part code handle user profile
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getById(id)
            .then(data => {
              setUser(data)
              console.log("dataUsrProfile",data)
            })
        },[users])
    const setRandomAvatar = () => {
            return `https://avatars.dicebear.com/api/avataaars/${(
                Math.random() + 1
            )
                .toString(36)
                .substring(7)}.svg`
        }
    const [avatar, setAvatar] = useState(user?.avatar || setRandomAvatar())
    const handleAvatar = () => {
        const ava = setRandomAvatar()
        user.avatar = ava
        setUser(user)
        //update local data
        api.users.update(id,user)
        .then(data => console.log('data updated on local',data),
            //console.log('data updated',JSON.parse(localStorage.getItem("users")).find((user) => user._id === id,))
        )
        setAvatar(user?.avatar)
    }
///// this part code handle comments part
    const [comments,setComments] = useState(null)
    useEffect(() => {
        api.comments.fetchCommentsForUser(id)
            .then(data => {
                setComments(data)
                console.log("comments for user",id)
                console.log("comments data",data)
            })
        },[])
        //its about users and not professions just name mistake
    const [professions, setProfessions] = useState(null)//users
    useEffect(() => {
        api.users.fetchAll()
            .then(data => {
                setProfessions(data)
                console.log("users data",data)
            })
        },[setProfessions])
    const [selectedProfession, setSelectedProfession] = useState(null)
    const handleSelectProfession = (e) => {
        console.log('selected prof value', e.target.value)
        console.log('selected prof id', e.target)
        const select = e.target;
        const selectedProfessionName = select.options[select.selectedIndex].text;
        const selectedId = select.options[select.selectedIndex].id;
        setSelectedProfession({_id: selectedId,name: selectedProfessionName})
        console.log("prof", selectedProfession)
    }
    const [textComment, setTextComment] = useState(null)
    // const updateForm = () => {
    //     useEffect(() => {
    //         },[comments,setComments])
    // }
    useEffect(() => {
        },[comments])
    const getCommentsForUser = (id) => {
        api.comments.fetchCommentsForUser(id)
        .then(data => {
            setComments(data)
        })
    }
    const handleSubmitComment = (e) => {
        e.preventDefault()
        if (textComment.length > 5 && selectedProfession) {
            const data = {
                content: textComment,
                pageId: id,
                userId: selectedProfession._id,
            }
            api.comments.add(data)
        }
        document.querySelector('.form-select').value = ''
        setSelectedProfession("")
        setTextComment("")
        getCommentsForUser(id)
    }
    const handleInputComment = (e) => {
        setTextComment(e.target.value)
    }
    const handleDeletePost = (idPostToDelete) => {
        console.log('id post to  delete',idPostToDelete)
        api.comments.remove(idPostToDelete)
        .then(data => {
            api.comments.fetchCommentsForUser(id)
            .then(data => {
                setComments(data)
            })
        })
    }
    return (user
        ? <div className="container">
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                {/* User Card */}
                <div className="card mb-3 p-3 mt-3">{/* mt-3 margin-top-3 */}
                    <div className="card-body">
                    <ToolTipPopOver
                        placement="top"
                        text="settings"
                        content={<IoSettingsSharp/>}
                        linkTo={{
                            pathname: `/sign-in/edit/${id}`,
                            state: {
                                name: user.name,
                                professionId: user.profession?._id,
                                professionName: user.profession?.name,
                                qualities: user.qualities,
                                email: user.email,
                                sex: user.sex,
                            },
                        }}
                        tag="button"
                        contentStyle="position-absolute top-0 end-0 btn btn-light btn-md"
                    />
                    <ToolTipPopOver
                        placement="top"
                        text="all users"
                        content={<FaUsers/>}
                        linkTo={{
                            pathname: `/users`,
                        }}
                        tag="button"
                        contentStyle="position-absolute top-0 start-0 btn btn-light btn-md"
                    />
                        <div className="d-flex flex-column align-items-center text-center position-relative">
                            <img
                                onClick={handleAvatar}
                                src={avatar}
                                className="rounded-circle shadow-1-strong me-3"
                                alt="avatar"
                                width="120"//65
                                height="120"
                            />
                            <div className="mt-3">
                            <ToolTipPopOver
                                linkTo="#"
                                placement="left"
                                text="name"
                                contentStyle="h4."
                                tag="h4"
                                content={user?.name}
                            />
                            <ToolTipPopOver
                                linkTo="#"
                                placement="left"
                                text="sex"
                                contentStyle="text-secondary mb-1"
                                tag="p"
                                content={user.sex ? user.sex : "---"}
                            />
                            <ToolTipPopOver
                                linkTo="#"
                                placement="left"
                                text="profession"
                                contentStyle="text-secondary mb-1"
                                tag="p"
                                content={user?.profession?.name}
                            />
                                <div className="text-muted">
                                    <i className="bi bi-caret-down-fill text-primary" role="button"></i>
                                    <i className="bi bi-caret-up text-secondary" role="button"></i>
                                    <ToolTipPopOver
                                        linkTo="#"
                                        placement="left"
                                        text="rate"
                                        contentStyle="ms-2"
                                        tag="span"
                                        content={user.rate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Qualities Card */}
                <div className="card mb-3">
                    <div className="card-body d-flex flex-column justify-content-center text-center">
                        <h5 className="card-title">
                            <span>Qualities</span>
                        </h5>
                        <p className="card-text">
                        <Qualitie qualities={Object.assign({}, user?.qualities)} />
                        </p>
                    </div>
                </div>
                {/* MeetingsCard */}
                <div className="card mb-3">
                    <div className="card-body d-flex flex-column justify-content-center text-center">
                        <h5 className="card-title">
                            <span>Completed meetings</span>
                        </h5>

                        <h1 className="display-1  mb-1">{user.completedMeetings}</h1>
                        <p className="text-secondary mb-1">{user.email ? user.email : "---"}</p>
                    </div>
                </div>
                {/* Comments Column */}
                </div>
                <div className="col-md-8">
                    {/* Comments List Component */}
                    <div className="card mb-2 mt-3">
                        <div className="card-body">
                            <div>
                                <h2>New comment</h2>
                                <div className="mb-4">
                                    <select
                                        onChange={handleSelectProfession}
                                        className="form-select"
                                        name="userId"
                                        value={selectedProfession?.name}
                                    >
                                        <option disabled value="" selected>
                                            Выберите пользователя
                                        </option>
                                        {professions &&
                                            professions.map(p => {
                                                return <option
                                                    id={p._id}
                                                    defaultValue={p}
                                                    key={p._id}
                                                    selected={selectedProfession?.name && (p.name === selectedProfession.name)}
                                                    >{p.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-4">
                                <form onSubmit={handleSubmitComment}>
                                    <label
                                        forHTML="exampleFormControlTextarea1"
                                        className="form-label"
                                        >Сообщение</label
                                    >
                                    <textarea
                                        onChange={handleInputComment}
                                        defaultValue={textComment}
                                        value={textComment}
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block login-btn"
                                        disabled={!textComment || (textComment?.length < 7)}
                                        >post
                                    </button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Comment Components */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <h2>Comments</h2>
                            <hr />
                            <Comments
                                comments={comments}
                                onDeletePost={handleDeletePost}
                            />
                        </div>
                    </div>
                    {/* old stuff */}
                        {/* <div className="d-flex flex-column flex-shrink-3 p-3">
                        <h1>{user?.name}</h1>
                        <h2>{user?.profession?.name}</h2>
                        <h3><Qualitie qualities={Object.assign({}, user?.qualities)} /></h3>
                        <h3>profession: {user.profession?.name ? user?.profession?.name : "---"}</h3>
                        <h3>gender: {user.sex ? user.sex : "---"}</h3>
                        <h3>email: {user.email ? user.email : "---"}</h3>
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
                                >back to all users</Button>
                                </div>
                            </Link>
                            <Link
                                to={{
                                    pathname: `/sign-in/edit/${id}`,
                                    state: {
                                        name: user.name,
                                        professionId: user.profession?._id,
                                        professionName: user.profession?.name,
                                        qualities: user.qualities,
                                        email: user.email,
                                        sex: user.sex,
                                    },
                                    //query:{thing: 'asdf', another1: 'stuff'}
                                }}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: 20,
                                    borderRadius: 8,
                                    fontStyle: 'bold',
                                    alignItems: 'center',
                                    }}
                                >
                                <div className="flex-shrink-2">
                                <Button
                                    size="lg"
                                    className="mt-2"
                                    variant="secondary"
                                >edit user</Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    ...end comments */}
                </div>
            </div>
        </div>

        : <h2>loading...</h2>
    );
};

export default UserProfile;
