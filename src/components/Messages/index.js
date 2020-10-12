import React from 'react'
import { useDocument } from 'react-firebase-hooks/firestore';
import { withFirebase } from "../../firebase";

function MessagesContainer({firebase}) {
    const uid = '7ghkuJPNoOg7xp0V08ag';
    const [value, loading, error] = useDocument(
        firebase.getDoc('hooks/'+uid),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
    return (
        <div>
            <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && <span>Document: {JSON.stringify(value.data())}</span>}
      </p>
        </div>
    )
}

export default withFirebase(MessagesContainer)

