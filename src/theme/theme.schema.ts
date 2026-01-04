export interface ThemeJSON {
  name: string;
  colors: {
    text: string;
    primary: string;
    background: string;
  };
  typography: {
    fontFamily: string;
    baseFontSize: string;
  };
}
