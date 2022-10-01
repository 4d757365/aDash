import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return (
            <div className="avatar">
                <span>{params.row.avatar}</span>
               {params.row.username}
            </div>
        )
    }},
    {field: "email", headerName:"Email", width: 230},
    {field: "age", headerName:"Age", width: 100},
    {field: "status", headerName:"Status", width: 160, renderCell: (params) =>{
        return (
            <div className={`status ${params.row.status}`}>{params.row.status}</div>
        )
    }},


]

export const rows = [
    {
        id: 1,
        username: "johnsmith",
        status: "pending",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "johnsmith@gmail.com",
        age: 31,
    },
    {
        id: 2,
        username: "alexedgar",
        status: "passive",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "alexedgar@aol.com",
        age: 27,
    },
    {
        id: 3,
        username: "janeernie",
        status: "active",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "janeerniee@gmail.com",
        age: 35,
    },
    {
        id: 4,
        username: "gregvick",
        status: "active",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "gregvick@hotmail.com",
        age: 42,
    },
    {
        id: 5,
        username: "karlparol",
        status: "pending",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "karlparol@gmail.com",
        age: 19,
    },
    {
        id: 6,
        username: "dakotasherill",
        status: "passive",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "dakotasherill@hotmail.com",
        age: 32,
    },
    {
        id: 7,
        username: "dorafulke",
        status: "active",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "dorafulke@gmail.com",
        age: 46,
    },
    {
        id: 8,
        username: "jackfletcher",
        status: "active",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "jackfletcher@aol.com",
        age: 20,
    },
    {
        id: 9,
        username: "yalebryn",
        status: "passive",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "yalebryn@gmail.com",
        age: 37,
    },
    {
        id: 10,
        username: "amymagdalene",
        status: "active",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "amymagdalene@gmail.com",
        age: 39,
    },
    {
        id: 11,
        username: "samuelcohen",
        status: "passive",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "samuelcohen@yahoo.com",
        age: 44,
    },
    {
        id: 12,
        username: "stoneali",
        status: "active",
        avatar: <AccountCircleOutlinedIcon/>,
        email: "stoneali@aol.com",
        age: 20,
    },

];