import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
  isLoading: false,
  error: false,
  myProfile: null,
  userList: [],
  invoices: [],
  cards: null,
  addressBook: [],
  orders: [],
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      (state.isLoading = false), (state.error = action.payload);
    },
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.myProfile = action.payload;
    },
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    getCardsSuccess(state, action) {
      state.isLoading = false;
      state.cards = action.payload;
    },

    // GET ADDRESS BOOK
    getAddressBookSuccess(state, action) {
      state.isLoading = false;
      state.addressBook = action.payload;
    },

    // ADD ADDRESS
    addAddressSuccess(state, action) {
      state.isLoading = false;
      state.addressBook = [...state.addressBook, action.payload];
    },
    // GET INVOICES
    getInvoicesSuccess(state, action) {
      state.isLoading = false;
      state.invoices = action.payload;
    },

    // GET ORDERS
    getOrdersSuccess(state, action) {
      state.isLoading = false;
      state.orders = action.payload;
    },
    createOrder(state, action) {
      state.isLoading = false;
      state.orders = [...state.orders, action.payload];
    },
  },
});
// Reducer
export default slice.reducer;

// Actions
export function getProfile() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/profile');
      dispatch(slice.actions.getProfileSuccess(response.data.profile));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getUserList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/manage-users');
      dispatch(slice.actions.getUserListSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getCards() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/account/cards');
      dispatch(slice.actions.getCardsSuccess(response.data.cards));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getAddressBook() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const { data } = await axios.get('/account/address/all');
      dispatch(slice.actions.getAddressBookSuccess(data.addresses));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function addNewAddressBook(payload, setLoading) {
  setLoading(true);
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/account/address/new', payload);
      dispatch(slice.actions.addAddressSuccess(data.address));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
}
export function getInvoices() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/account/invoices');
      dispatch(slice.actions.getInvoicesSuccess(response.data.invoices));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getUsers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/all');
      dispatch(slice.actions.getUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getOrders() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/orders');
      dispatch(slice.actions.getOrdersSuccess(response.data.orders));
    } catch (error) {
      console.log(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

export const createNewOrder = (payload) => {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = await axios.post('/orders/new', payload);
      dispatch(slice.actions.createOrder(data.order));
    } catch (error) {
      console.log(error);
    }
  };
};
