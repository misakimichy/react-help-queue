import rootReducer from './../../src/reducers/index'

describe('rootReducer', () => {
    test('Should return default state if no action type is recognized', () => {
        expect(rootReducer({}, { type: null })).toEqual({
            masterTicketList: {},
            selectedTicket: {}
        })
    })

    test('Should contain ticketListReducer logic', () => {
        expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
      });
    
      test('Should contain selectedTicketReducer logic', () => {
        expect(store.getState().selectedTicket).toEqual(selectedTicketReducer(undefined, { type: null }));
      });
})