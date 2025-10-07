import axios from "axios";
import { useEffect } from "react";

function Profile() {
    const[principal, setPrincipal] = React.useState({});

    //passar para o localstorage
    useEffect(() => {
        axios({
            baseURL: 'http://localhost:8000',
        }).then(response => 
            setPrincipal(response.data))
    }, [])

    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                </link>
                <div className="container">
                    <br />
                    <h1>OAuth 2.0 Login with Spring Security</h1>
                    <div>
                        <div className="d-grid gap-2 d-mdflex justify-content-md-start">
                            <a className="btn btn-lg btn-primary" href="/resource" role="link" style={{marginTop: '10px'}}>
                                Recurso protegido, seja bem vindo {principal.name}
                            </a>
                        </div>
                    </div>
                    <br />
                    <div>
                        You`re successfully logged in <span style={{fontWeight: 'bold'}}>{principal.name}</span>
                        &nbsp;via the OAuth 2.0 Client <span style={{fontWeight: 'bold'}}>{principal.clintName}</span>
                        with id token <span 
                            style={{fontWeight: 'bold', overflow: 'auto'}}>{principal.tokenValue}
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span style={{fontWeight: 'bold'}}>User Attributes:</span>
                        <ul>
                            {principal && principal.attributes && Object.entries(principal.userAttributes).map(([key, value]) => (
                                <li key={key}>
                                    <span style={{fontWeight: 'bold'}}>{key}:</span> {value.toString()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </head>
        </>
    )

}

export default Profile;