export const userColumns = [{field: 'id', headerName: 'ID', width: 70},
{field: "user", headerName: "User", width:230, renderCell: (params) => {
    return (
        <div className="cellWithImg">
            <img className="cellImg" src={params.row.image} alt="Avatar"/>
            {params.row.username}
        </div>
    )
}},
{
    field:"email",
    headerName: "Email",
    width: 230,
},
{
    field:"age",
    headerName: "Age",
    width: 100,
},
{
    field:"status",
    headerName: "Status",
    width: 160,
    renderCell:(params) => {
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
},

]
export const userRows = [
    {
        id:1,
        username:'Snow',
        image: 'https://html.com/wp-content/uploads/flamingo.jpg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id:2,
        username:'Anna',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        status: 'passive',
        email: '2anna@gmail.com',
        age: 25,
    },
    {
        id:3,
        username:'Boris',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM',
        status: 'pending',
        email: 'borya@gmail.com',
        age: 55,
    },
    {
        id:4,
        username:'Vitaliy',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id:5,
        username:'Snow',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id:6,
        username:'Snow',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },

    {
        id:7,
        username:'Snow',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id:8,
        username:'Snow',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id:9,
        username:'Snow',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id:10,
        username:'Snow',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },

]