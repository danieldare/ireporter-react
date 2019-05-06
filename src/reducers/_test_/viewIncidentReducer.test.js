import {
    FETCH_RECORD_SUCCESS,
    FETCH_RECORD_REQUEST,
    FETCH_RECORD_FAILURE
} from '../../actions/actionTypes/types';
import viewIncidentReducer from '../viewIncidentReducer';

const viewIncidentState = {
    incidents: [],
    isFetching: false,
    errors: null
};

describe('Reset password reducer: ', () => {
    it('should have the correct default state', () => {
        expect(
            viewIncidentReducer(undefined, {
                type: 'non-existent type'
            })
        ).toEqual({
            incidents: [],
            isFetching: false,
            errors: null
        });
    });

    it('should update the reducer state when loading', () => {
        const action = {
            type: FETCH_RECORD_REQUEST
        };
        const result = viewIncidentReducer(viewIncidentState, action);
        const expected = {
            ...viewIncidentState,
            isFetching: true
        };
        expect(result).toEqual(expected);
    });

    it('should update the reducer state when successful', () => {
        const action = {
            type: FETCH_RECORD_SUCCESS,
            incident: []
        };
        const result = viewIncidentReducer(viewIncidentState, action);
        const expected = {
            ...viewIncidentState,
            incidents: action.payload,
            isFetching: false
        };
        expect(result).toEqual(expected);
    });

    it('should update the reducer state when unsuccessful', () => {
        const action = {
            type: FETCH_RECORD_FAILURE
        };
        const result = viewIncidentReducer(viewIncidentState, action);
        const expected = {
            ...viewIncidentState,
            isFetching: false,
            error: action.payload
        };
        expect(result).toEqual(expected);
    });
});
