import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

const initialState = {
    comments: [],
    users: []
};

export const comments = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votesUp: 0,
                votesDown: 0
            }, ...state.comments];
            break;

        case EDIT_COMMENT:
            return state.comments.map(comment => {
            if (comment.id === action.id) {
                comment.text = action.text;
                return comment;
            }
            return comment;
        });

        case THUMB_UP_COMMENT:
            return state.map(comment => {
            if (comment.id === action.id) {
                return { comment,
                votes: comment.votes + 1
                }
            }
            return comment;
        });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
            if (comment.id === action.id) {
                return { comment,
                votes: comment.votes - 1
                }
            }
            return comment;
        });
        default:
        return state;
    }
};