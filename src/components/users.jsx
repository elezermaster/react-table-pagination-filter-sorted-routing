import React,{useState,useEffect} from 'react';
import UsersTable from './usersTable.jsx'
import Pagination from '../components/pagination'
import {paginate} from '../utils/paginate'
import PropTypes from 'prop-types'; // ES6
import GroupList from '../components/groupList'
import Button from 'react-bootstrap/Button'
import api from '../API'
import SearchStatus from './searchStatus'
import lodash from 'lodash'
import {useParams} from 'react-router-dom'
import UserProfile from '../screens/userProfile';

const Users = ({searchStatus, handleSelectedProf}) => {
    console.log('searchStatus.length',searchStatus.length)
  const params = useParams()
  const {userId} = params//the same as: userId = match.params.userId
  const pageSize = 4
  const [activePage, setActivePage] = useState(1)
  const [professions, setProfession] = useState()
  const [selectedProfession, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({iterator: "name", order: "asc"})
  const [users, setUsers] = useState()
  useEffect(() => {
    api.users.fetchAll()
        .then(data => {
          setUsers(data)
          console.log("data",data)
        })
    },[])
  const handleDelete = (userId) => {
      const newUsers = users.filter(user => user._id !== userId)
      setUsers(newUsers)
  }
  const handleToggleBookMark = (userId) => {
      const newStateUsers = [...users]
      const index = newStateUsers.findIndex(user => user._id === userId)
      newStateUsers[index].bookmark = !newStateUsers[index].bookmark
      setUsers(newStateUsers)
  }
    const handlePageChange = (pageIndex) => {
        console.log('pageIndx', pageIndex)
        setActivePage(pageIndex)
    }
    // const handleProfessionSelect = (item) => {
    //     setSelectedProf(item)
    //     console.log('params',item)
    // }
    const clearFilter = () => {
        setSelectedProf()
    }
    useEffect(() => {
    //вызывается в случаях когда:
    //1.монтируется
    api.professions.fetchAllProfessions()
        .then(data => setProfession(Object.assign(data,{allPofession: {name: "all professions"} })))
    //2.изменяется
    console.log('change')
    //3.удаляется
    return () => { //вызывается при удалении компонента
        console.log('unmount')
    }
    },[])//параметер за которым необходимо наблюдать
    useEffect(() => {
        console.log('selectedProfession',selectedProfession)
        setActivePage(1)
    },[selectedProfession])
    useEffect(() => {
        if (searchStatus.length > 0) {
            setSelectedProf(null)
        }//clear group professions selected
        },[searchStatus])
    const filteredUsersByProf = selectedProfession && selectedProfession._id
        ? users.filter((user) => user.profession.name === selectedProfession.name)
        : users
    const filteredUsersBySearch = searchStatus && searchStatus.length
        ? users.filter((user) => user.name.toLowerCase().includes(searchStatus.toLowerCase()))
        : users
    const usersFiltered = (selectedProfession) ? filteredUsersByProf : filteredUsersBySearch
    console.log('usersFiltered',usersFiltered)
    const count = (selectedProfession && selectedProfession._id) ? filteredUsersByProf?.length : filteredUsersBySearch?.length
    //const usersSorted = lodash.orderBy(filteredUsersByProf, [sortBy.iterator], [sortBy.order])
    const usersSorted = lodash.orderBy(usersFiltered, [sortBy.iterator], [sortBy.order])
    const userCrop = paginate(usersSorted, activePage, pageSize)
    const startIndex = (activePage - 1) * pageSize

    return (
        <React.Fragment>
            { userId
            ? <UserProfile users={users} id={userId} />
            : count &&
            (<div className="d-flex flex-column p-3">
            <div className="d-flex flex-direction-row flex-wrap-wrap w-100">
                <SearchStatus length={count}/>
                </div>
                <div className="d-flex flex-direction-row flex-wrap-wrap w-100">
                <div className="d-flex flex-column flex-shrink-3 p-3">
                {professions && // if professions exists:
                <GroupList
                    items={professions}
                    onItemSelect={(i) => {
                            console.log('i',i)
                            setSelectedProf(i)
                            handleSelectedProf(i)//pop to global ctx
                        }
                    }
                    selected={selectedProfession}
                    valueProperty="_id"
                    activeProperty="name"
                    />
                }
                <div className="flex-shrink-2">
                <Button
                    size="lg"
                    className="mt-2"
                    variant="secondary"
                    value="clear"
                    type="reset"
                    onClick={clearFilter}
                >Clear</Button>
                </div>
                </div>
                <div className="d-flex flex-column p-3">
                <UsersTable
                    userCrop={userCrop}
                    startIndex={startIndex}
                    onDelete={handleDelete}
                    onToggleBookmark={handleToggleBookMark}
                    onSort={setSortBy}
                    currentSort={sortBy}
                />
                <div className="d-flex flex-direction-row justify-content-center">
                    <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} activePage={activePage}/>
                </div>
            </div>
            </div>
            </div>)
            }
        </React.Fragment>
    );
};
Users.propTypes = {
    users: PropTypes.array,
    onDelete: PropTypes.func,
    onToggleBookmark: PropTypes.func,
}

export default Users
