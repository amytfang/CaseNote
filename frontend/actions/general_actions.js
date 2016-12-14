export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const REQUEST_TO_SERVER = "REQUEST_TO_SERVER";

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestToServer = () => ({
  type: REQUEST_TO_SERVER
});
