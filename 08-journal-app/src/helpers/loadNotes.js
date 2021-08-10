import { db } from "../firebase/firebaseConfig"

export const loadNotes = async (uid) => {

    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = []

    notesSnap.forEach(snapNode => {
        notes.push({
            id: snapNode.id,
            ...snapNode.data()
        })
    })

    return notes;
}