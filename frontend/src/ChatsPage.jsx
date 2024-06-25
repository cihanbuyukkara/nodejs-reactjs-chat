import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'a9417dfb-c73c-4af0-ba13-f97613c833e5', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style={{height: '100hv'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
    )
}

export default ChatsPage