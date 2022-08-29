import { useEffect, useState } from "react";

function Users(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
        getUsers();
      }, []);

    const getUsers = () => {
        fetch('http://localhost:8080',{
            headers: {"Access-Control-Allow-Origin": "*"}
        })
            .then(res=>res.json())
            .then(json=>setUsers(json))
    }
    console.log("users",users);

    return (        
        <div>
            <h2 className="text-center my-3">Users</h2>
            <div className="container">
            <div className="row">
                {users.map((user)=>{
                    return(
                        <div key={user.id} className="col-lg-3 col-md-4 col-6 my-2">
                            <div className="card text-center px-3 py-2">
                                <section>user id: {user.id}</section>
                                <section className="fw-semibold">{user.name.firstname} {user.name.lastname}</section>
                                <section>username: {user.username}</section>
                                <section>email: {user.email}</section>
                                <section>📞 {user.phone}</section>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className="fw-semibold text-danger">start <a href="https://github.com/omarbalbaa/my-back-end" target="_blank">my node server</a> on port 8080 to show users data</div>
            </div>
        </div>
    );
}

export default Users;