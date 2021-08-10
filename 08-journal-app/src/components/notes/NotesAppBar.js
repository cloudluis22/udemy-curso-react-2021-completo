import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { activeNote, startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );
    const date = moment(active.date);

    const handleSave = () => {
        dispatch( startSaveNote(active) );
    }

    const handlePictureUpload = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (evt) => {

        const file = evt.target.files[0];

        if (file) {
            dispatch( startUploading(file) );
        }

    }

    return (
        <div className="notes__appbar">
            <span> { date.format('ll') } </span>

            <input id="fileSelector" type="file" style={ { display: 'none' } } onChange={ handleFileChange } />

            <div>
                <button className="btn" onClick={ handlePictureUpload } > Picture </button>
                <button className="btn" onClick={ handleSave }> Save </button>
            </div>
        </div>
    )
}
