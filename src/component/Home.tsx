import React, { useEffect, useState } from 'react'
import { userCollection } from '../lib/Controller'
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore'
import { NewUserDetails } from '../types/User'


function Home() {
    const [user, setUser] = useState<NewUserDetails[]>([])
    useEffect(() =>
        onSnapshot(userCollection, (snapshot: QuerySnapshot<DocumentData>) => {
            setUser(
                snapshot.docs.map((doc: any) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
            )
        })
    )

    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}

export default Home

