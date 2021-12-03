import React, { useState } from "react";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineCheck } from 'react-icons/ai';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chats from "./Chats";
import makeStyles from '@mui/styles/makeStyles';
import './chat.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(theme => ({
  pillOne: {
    margin: 0,
    cursor: 'pointer',
    backgroundColor: "#F3F5F9",
    padding: '1%',
    '&:hover': {
      backgroundColor: "#DCECEE",
    },
  },
  pillTwo: {
    margin: 0,
    cursor: 'pointer',
    padding: '1%',
    '&:hover': {
      backgroundColor: "#DCECEE",
    },
  },
  pillEmpty: {
    margin: 0,
    // cursor: 'pointer',
    padding: '1%',
    height: '5px',
    backgroundColor: "#F3F5F9",
    borderRadius: "0px 0px 10px 10px"
    // '&:hover': {
    //   backgroundColor: "#DCECEE",
    // },
  },
  message: {
    width: '45%',
    backgroundColor: '#F3F5F9',
    color: '#DEE3ED',
  },
  messageCounter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noBorder: {
    border: "none",
  },
}));

const Main = () => {
  const classes = useStyles();

  const [selectAll, setSelectAll] = useState(false)

  const selectAllContacts = () => {
    setSelectAll(!selectAll)
  }

  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3} style={{ position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: "84%", marginLeft: "7%"
                }}>
                  <span style={{ fontSize: '30px', height: '30px', cursor: 'pointer', margin: "auto 0" }}><CgMenuRight style={{ transform: "rotateX(180deg)" }} /></span>
                  <h2 style={{ marginLeft: '-20%' }}>Audience</h2>
                  <h3 style={{ margin: "auto 0", color: "#F3F5F9" }}>100 Contacts</h3>
                </div>
                <div style={{ width: "90%", margin: 'auto' }}>
                  <div style={{ padding: '0 2%' }}>
                    <h3>Include Tags:</h3>
                    <div style={{ borderRadius: '15px' }}>
                      <p className={classes.pillOne} style={{ borderRadius: "10px 10px 0px 0px" }}>Greetings</p>
                      <p className={classes.pillTwo}>Greetings</p>
                      <p className={classes.pillOne}>Greetings</p>
                      <p className={classes.pillTwo}>Greetings</p>
                      <p className={classes.pillEmpty}></p>
                    </div>
                  </div>
                  <div style={{ padding: '0 2%' }}>
                    <h3>Exclude Tags:</h3>
                    <div style={{ borderRadius: '15px' }}>
                      <p className={classes.pillOne} style={{ borderRadius: "10px 10px 0px 0px" }}>Greetings</p>
                      <p className={classes.pillTwo}>Greetings</p>
                      <p className={classes.pillOne}>Greetings</p>
                      <p className={classes.pillTwo}>Greetings</p>
                      <p className={classes.pillEmpty}></p>
                    </div>
                  </div>
                  <div style={{ padding: '0 2%' }}>
                    <h3>Message Sent:</h3>
                    <div className={classes.messageCounter}>
                      <TextField
                        placeholder="min"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.message}
                        InputProps={{
                          classes: { notchedOutline: classes.noBorder }
                        }}
                      />
                      <TextField
                        placeholder="max"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.message}
                        InputProps={{
                          classes: { notchedOutline: classes.noBorder }
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ padding: '0 2%' }}>
                    <h3>Message Received:</h3>
                    <div className={classes.messageCounter}>
                      <TextField
                        placeholder="min"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.message}
                        InputProps={{
                          classes: { notchedOutline: classes.noBorder }
                        }}
                      />
                      <TextField
                        placeholder="max"
                        id="outlined-basic"
                        variant="outlined"
                        className={classes.message}
                        InputProps={{
                          classes: { notchedOutline: classes.noBorder }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "absolute",
                bottom: "0",
                width: "90%",
              }}>
                <Button style={{
                  backgroundColor: "#09A391", borderRadius: '10px', height: "40px",
                  width: "90%", textTransform: 'capitalize', marginLeft: '6%'
                }} variant="contained">Save Filters</Button>
              </div>
            </div>


          </Grid>
          <Grid item xs={9}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
              <h1>All Contacts (100)</h1>
              <Button style={{
                backgroundColor: "#09A391", borderRadius: '35px', height: "40px",
                minWidth: "10px", margin: 'auto 0 auto auto'
              }} variant="contained">+</Button>
            </div>
            <TextField placeholder="Search Contacts" id="outlined-basic" variant="outlined" style={{ width: '95%', backgroundColor: '#F3F5F9', color: '#DEE3ED' }} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
              <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '2%' }}>
                <Button
                  onClick={selectAllContacts}
                  style={{
                    backgroundColor: "#B3BFD2", borderRadius: '35px', height: "40px",
                    minWidth: "10px", margin: 'auto'
                  }} variant="contained"><AiOutlineCheck style={{ backgroundColor: "color" }} /></Button>
                <h4 style={{ paddingLeft: "24%", margin: "0", whiteSpace: 'nowrap' }}>Select All</h4>
              </div>
              <div style={{ margin: "auto 0" }}>
                <Button style={{
                  backgroundColor: "#09A391", borderRadius: '5px', height: "40px",
                  minWidth: "10px", textTransform: 'capitalize', width: "87px",
                }} variant="contained">Export All</Button>
              </div>
            </div>
            <div style={{ overflow: 'auto', height: '680px' }}>
              <h3>A</h3>
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <h3>B</h3>
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <h3>C</h3>
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
              <Chats selectAll={selectAll} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div >
  );
};

export default Main;
