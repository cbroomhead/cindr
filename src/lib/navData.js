import HomeIcon from '@mui/icons-material/Home';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import SettingsIcon from '@mui/icons-material/Settings';
 
export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <HistoryEduIcon/>,
        text: "My Letters",
        link: "letters"
    },
    {
        id: 2,
        icon: <MarkChatReadIcon/>,
        text: "Saved Chats",
        link: "savedchats"
    },
    {
        id: 3,
        icon: <SettingsIcon/>,
        text: "Settings",
        link: "settings"
    },
]