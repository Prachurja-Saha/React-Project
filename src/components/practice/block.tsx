
interface User {
    id: number
    name: string
    jobTitle: string
    profilePicture : string
}

// Here we have to write below code, we can't directly pass using -> userList : User[]
interface BlockTestProps {
    userList: User[];
}

const BlockTest = ({ userList }: BlockTestProps) => {
    
    // defining the type of typescript(b/c typescript is not allowing some properties)
    // here React.CSSProperties is the type
    const cssBody : React.CSSProperties = {
        width: '200px',
        height: '200px',
        border: '1px solid black',
        backgroundColor : 'grey',
        color: 'white',
        textAlign : 'center'
        // textAlig: 'center'
    };

    return <>
        <div style={{display: "flex", gap: "20px"}}>
            {userList.map((e) =>
                <div style={cssBody}>
                    <div style={{paddingBottom: '10px'}}>{e.id}</div>
                    <div> <img src={e.profilePicture} alt="Profile" style={{borderRadius:'50%', height:'100px'}}/></div>
                    <div style={{alignContent:"down", paddingTop: '15px'}}>{e.name}</div>
                    <div style={{alignContent:"down"}}>{e.jobTitle}</div>
                </div>
            )}
        </div>
    </>
}

export default BlockTest;