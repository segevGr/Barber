import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type HaircutPriceProps = {
  type: string;
  price: number;
};
type ReservationDetailsProps = {
  barberName: string;
  barberAddress: string;
  barberPhoneNumber: string;
  haircutDate: string;
  haircutHours: string;
  haircutPrice: HaircutPriceProps;
};

type ReservationsStateProps = {
  isHasReservation: boolean;
  reservationDetails: ReservationDetailsProps;
};

const clearReservationDetails: ReservationDetailsProps = {
  barberName: "",
  barberAddress: "",
  barberPhoneNumber: "",
  haircutDate: "",
  haircutHours: "",
  haircutPrice: {
    type: "",
    price: 0,
  },
};

const initialState: ReservationsStateProps = {
  isHasReservation: true,
  reservationDetails: {
    barberName: "שלומי הרוש",
    barberAddress: "ראובן 7, קרית ביאליק",
    barberPhoneNumber: "0547471733",
    haircutDate: "יום שני, 24 לנובמבר 2025",
    haircutHours: "18:00-18:40",
    haircutPrice: { type: "תספורת מלאה", price: 50 },
  },
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    setIsHasReservationRedux: (state, action: PayloadAction<boolean>) => {
      state.isHasReservation = action.payload;
    },
    setReservationDetailsRedux: (
      state,
      action: PayloadAction<ReservationDetailsProps>
    ) => {
      state.reservationDetails = action.payload;
    },
    deleteReservationRedux: (state) => {
      state.reservationDetails = clearReservationDetails;
      state.isHasReservation = false;
    },
  },
});

export const getReservationsDetails = (state: RootState) =>
  state.reservations?.reservationDetails;
export const {
  setIsHasReservationRedux,
  setReservationDetailsRedux,
  deleteReservationRedux,
} = reservationsSlice.actions;
export default reservationsSlice.reducer;
