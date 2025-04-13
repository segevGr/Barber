import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type haircutPriceProps = {
  type: string;
  price: number;
};
type reservationDetailsProps = {
  barberName: string;
  barberAddress: string;
  barberPhoneNumber: string;
  haircutDate: string;
  haircutHours: string;
  haircutPrice: haircutPriceProps;
};

type ReservationsStateProps = {
  isHasReservation: boolean;
  reservationDetails: reservationDetailsProps;
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
      action: PayloadAction<reservationDetailsProps>
    ) => {
      state.reservationDetails = action.payload;
    },
    // setHaircutHoursRedux: (state, action) => {
    //   state.reservationDetails.haircutHours = action.payload;
    // },
  },
});

export const getReservationsDetails = (state: RootState) =>
  state.reservations?.reservationDetails;
export const { setIsHasReservationRedux, setReservationDetailsRedux } =
  reservationsSlice.actions;
export default reservationsSlice.reducer;
