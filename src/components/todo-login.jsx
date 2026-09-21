import axios from "axios";
import {useFormik} from "formik";
import { useCookies } from "react-cookie";
import {Link,useNavigate} from "react-router-dom";
import '../App.css';

export function ToDoLogin(props){

    const [, setCookie]=useCookies(['userid','username']);
    let navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            user_id:'',
            password:''
        },
        onSubmit:(user)=>{
            axios.get(`https://todo-application-app.onrender.com/users`)
            .then(response=>{
                let loginUser=response.data.find(item=>item.user_id===user.user_id);
                if(loginUser)
                {
                 if(loginUser.password===user.password){
                   setCookie('userid',loginUser.user_id);
                   setCookie('username',loginUser.user_Name);
                   navigate('/dashboard');
                 } else {    
                        alert('Invalid Password');
                    } 

                }
                else{
                    alert('Invalid User Id');
                }
            })
        }
    })

    return(
        //${props.width} 
         <div className="d-flex justify-content-center align-items-center ">
        <div className=" userlogin d-flex justify-content-center align-items-center flex-column bg-info"  >
             <form onSubmit={formik.handleSubmit}  >
                {
                    (props.title==='')?<span></span>: <h3 className="text-center">{props.title}</h3>
                }
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="user_id" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="password" className="form-control" /></dd>
                </dl>
                <button type="submit" className="btn btn-warning w-100">Login</button>
            </form>
            <div className="mt-3 ">
                <Link to="/register" className="text-danger" >New User Register</Link>
            </div>
        </div>
        </div>
    )
}