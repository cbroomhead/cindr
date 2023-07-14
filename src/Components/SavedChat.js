import Paper from '@mui/material/Paper';

export default function SavedChat({chat}) {

    return (
        <div>
            <Paper>
                <div> Message: {chat}</div>
            </Paper>
        </div>

    )
  }