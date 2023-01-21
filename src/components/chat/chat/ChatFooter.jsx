import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { textActions } from "../../../redux/text-actions";
import { uploadFile } from "../../../service/api";

const ChatFooter = ({ sendText, file, setFile }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.textState);
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    dispatch(textActions.setText(e.target.files[0].name));
  };
  useEffect(() => {
    const getImage = async (file) => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        await uploadFile(data);
      }
    };
    getImage(file);
  }, [file]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#ededed",
        height: "50px",
        paddingLeft: "20px",
        paddingRight: "20px",
        "& > *": {
          marginX: "5px",
          color: "#919191",
        },
      }}
    >
      <EmojiEmotionsOutlined />
      <label htmlFor="fileinput">
        <AttachFile sx={{ transform: "rotate(40deg)", cursor: "pointer" }} />
      </label>
      <input
        type="file"
        style={{ display: "none" }}
        id="fileinput"
        onChange={(e) => onFileChange(e)}
      />
      <Box
        sx={{
          background: "#fff",
          marginY: "10px",
          alignItems: "center",
          borderRadius: "18px",
          width: "60rem",
        }}
      >
        <InputBase
          placeholder=" Type a message"
          sx={{ marginLeft: "10px", width: "100%", fontSize: "14px" }}
          onChange={(e) => dispatch(textActions.setText(e.target.value))}
          onKeyPress={sendText}
          value={text}
        />
      </Box>
      <Mic sx={{ marginLeft: "auto" }} />
    </Box>
  );
};

export default ChatFooter;
