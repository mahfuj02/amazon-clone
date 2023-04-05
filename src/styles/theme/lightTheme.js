import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
   primary:{
    bgColor:'#131921',
    main:"#F3A847",
    secondColor:'#fff',
    iconColor:'#393734'
    // bgColor:'#131921'
   },
   secondary:{
    main: '#F3A847',
    bgColor:'#131921',
    secondColor:'#fff',
   }
  },
});

export default lightTheme;