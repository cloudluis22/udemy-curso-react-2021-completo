import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { activeNote, startDeleting } from '../../actions/notes'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: actNote } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm(actNote);

    const { body, title } = formValues;

    const activeId = useRef( actNote.id );

    useEffect( () => {

        if (actNote.id !== activeId.current) {
            reset(actNote);
            activeId.current = actNote.id;
        }

    }, [actNote, reset]);

    useEffect(() => {

        dispatch( activeNote( formValues.id, { ...formValues } ) ) ;

    }, [formValues, dispatch])

    const handleDelete = () => {

        dispatch( startDeleting( activeId.current ) );
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Put a title here"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />
                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={ handleInputChange }
                >
                    </textarea>

                {
                    (actNote.url) &&
                    <div className="notes__image">
                        <img
                            src={ actNote.url }
                            alt="imagen"
                        />
                    </div>
                }

            </div>

                <button className="btn btn-danger" onClick={ handleDelete } > Delete </button>

        </div>
    )
}