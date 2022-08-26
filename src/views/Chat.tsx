import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  return(
    <div>
      <TextField
          id="list-message"
          label=""
	  fullWidth
          multiline
          rows={19}
          defaultValue=""
        />
      <TextField
          id="post-message"
          label=""
          defaultValue=""
        />
      <SendIcon fontSize="large" color="primary" />
    </div>
  );
}

export default Chat;
