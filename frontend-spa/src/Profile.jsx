import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
    const[principal, setPrincipal] = useState({});

            debugger

    //passar para o localstorage
    useEffect(() => {
        axios({
            baseURL: 'http://localhost:3000/userinfo',
            withCredentials: true
        }).then(response => 
        {
            setPrincipal(response.data)
        })
    }, [])

    return (
        <div className="container">
            <br />
            <h1>OAuth 2.0 Login with Spring Security</h1>
            <div>
                <div className="d-grid gap-2 d-mdflex justify-content-md-start">
                    <a className="btn btn-lg btn-primary" href="/resource" role="link" style={{marginTop: '10px'}}>
                        Recurso protegido, seja bem vindo {principal.clientName}
                    </a>
                </div>
            </div>
            <br />
            <div>
                You`re successfully logged in <span style={{fontWeight: 'bold'}}>{principal.name}</span>
                &nbsp;via the OAuth 2.0 Client <span style={{fontWeight: 'bold'}}>{principal.clientName}</span>
                &nbsp;with id token <span 
                    style={{fontWeight: 'bold', overflow: 'auto'}}>{principal.token}
                </span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span style={{fontWeight: 'bold'}}>User Attributes:</span>
                <ul>
                    {principal?.userAttributes && Object.entries(principal?.userAttributes).map(([key, value]) => (
                        <li key={key}>
                            <span style={{fontWeight: 'bold'}}>{key}:</span> {value.toString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default Profile;