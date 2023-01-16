import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import qr from "../../assets/images/qr.jpg";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { accountActions } from "../../redux/account-actions";
import { addUser } from "../../service/api";
const Container = styled(Box)`
  padding: 56px;
`;

const LoginDialogue = () => {
  const dispatch = useDispatch();
  const onSuccessLogin = async (res) => {
    const decoded = jwtDecode(res.credential);
    console.log(decoded);
    await addUser(decoded);
    dispatch(accountActions.setAccount(decoded));
  };
  return (
    <Dialog
      open={true}
      hideBackdrop
      PaperProps={{
        sx: {
          height: "96%",
          width: "60%",
          marginTop: "12%",
          maxHeight: "100%",
          maxWidth: "100%",
          overflow: "none",
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Container sx={{ color: "#525252", fontWeight: "300" }}>
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            To use WhatsUpp on your computer:
          </Typography>
          <List sx={{ fontWeight: "400" }}>
            <ListItem>1. Open WhatsUpp on your phone</ListItem>
            <ListItem>2. Tap Menu or Settings</ListItem>
            <ListItem>3. Link a Device</ListItem>
            <ListItem>
              4. Point your phone to this screen to capture the code
            </ListItem>
          </List>
        </Container>
        <Container>
          <img src={qr} alt="/" className="h-[256px] w-[256px]" />
          <GoogleLogin
            onSuccess={onSuccessLogin}
            onError={(res) => {
              console.log("Login Failed", res);
            }}
          />
        </Container>
      </Box>
    </Dialog>
  );
};

export default LoginDialogue;
