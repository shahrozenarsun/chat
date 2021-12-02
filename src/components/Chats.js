import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { AiOutlineCheck } from 'react-icons/ai';

const Chats = (props) => {

    console.log(props)

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(props.selectAll)
    }, [props])

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '95%', position: 'relative', margin: '1% 0%' }}>
                <Button
                    onClick={() => setSelected(!selected)}
                    style={{
                        backgroundColor: selected ? "#09A391" : "#B3BFD2",
                        borderRadius: '35px', height: "40px",
                        minWidth: "10px", margin: 'auto'
                    }} variant="contained"><AiOutlineCheck style={{ backgroundColor: "color" }}
                    /></Button>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', lineHeight: '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '2%' }}>
                        <img src="https://dummyimage.com/600x400/000/fff"
                            style={{
                                height: "55px",
                                borderRadius: "30px",
                                width: "55px",
                                margin: 'auto'
                            }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "5%" }}>
                            <p style={{ fontWeight: 'bold' }}>Hamza</p>
                            <p style={{ color: "#B6C1D4" }}>033000005522</p>
                        </div>
                    </div>
                    <div style={{
                        position: "absolute",
                        right: "0",
                        // bottom: "0",
                        margin: 'auto'
                    }}>
                        <Button style={{
                            backgroundColor: "#09A391", borderRadius: '35px', height: "40px",
                            minWidth: "10px",
                        }} variant="contained">+</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chats
