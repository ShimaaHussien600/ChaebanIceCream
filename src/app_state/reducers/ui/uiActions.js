export const PAGE_LOADING_OFF = 'PAGE_LOADING_OFF';
export const PAGE_LOADING_ON = 'PAGE_LOADING_ON';

export const turnOffPageLoading = () => ({
    type: PAGE_LOADING_OFF,
  });
  
  export const turnOnPageLoading = () => ({
    type: PAGE_LOADING_ON,
  });