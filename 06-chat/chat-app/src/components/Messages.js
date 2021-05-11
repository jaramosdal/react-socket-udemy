import React from 'react'
import IncomingMessage from './IncomingMessage'
import OutgoingMessage from './OutgoingMessage'
import SendMessage from './SendMessage'

const Messages = () => {

    const msgs = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div className="msg_history">

                {
                    msgs.map((msg) => (
                        (msg % 2)
                            ? <IncomingMessage key={ msg } />
                            : <OutgoingMessage key={ msg } />
                    ))
                }
                <IncomingMessage />

                <OutgoingMessage />               

            </div>
            {/* <!-- Historia Fin --> */}

            <SendMessage />
        </div>
    )
}

export default Messages
